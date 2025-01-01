import getItems from "@/api/getItems";
import { TodoListType } from "@/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function useTodos() {
	// todolist를 저장하는 상태
	const [todos, setTodos] = useState<TodoListType[]>([]);
	// 첫 렌더링 데이터 로딩 상태
	const [isLoading, setIsLoading] = useState(true);
	// todo 데이터 페이지 상태
	const [page, setPage] = useState(1);
	// 가져올 데이터가 더 남았는지를 나타내는 상태
	const [hasMore, setHasMore] = useState(true);
	// 할 일 목록의 끝에 도달했는지를 확인하는 hook(무한스크롤 구현). ref가 있는 요소에 도달해서 threshold로 전달하는 비율이 시야에 들어왔는지를 InView로 알려줌
	const { ref, inView } = useInView({ threshold: 0.5 });
	// 완료 목록의 끝에 도달했는지를 확인하는 hook(무한스크롤 구현). ref2가 있는 요소에 도달해서 threshold로 전달하는 비율이 시야에 들어왔는지를 InView2로 알려줌
	const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
	// 무한스크롤로 인한 fetch가 진행중인지를 나타내는 상태
	const [isLoading2, setIsLoading2] = useState(false);
	// 요청 중 에러가 발생했는지
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		// 현재 첫 페이지일 경우
		if (page === 1) {
			async function fetchInitialTodos() {
				try {
					// 첫 렌더링 시 todolist를 fetch해서 todos에 저장.
					const initialTodos = await getItems(1);
					setTodos(initialTodos);
					// 데이터의 길이가 10이 아닐 경우 hasMore를 false로 설정.
					setHasMore(initialTodos.length === 10);
					// 다음 페이지를 2로 설정
					setPage(page + 1);
					// 로딩 상태 끝내기.
					setIsLoading(false);
				} catch {
					// 작업 중 에러가 발생했을 경우 isError를 true로 설정
					setIsError(true);
				}
			}
			fetchInitialTodos();
		}
	}, []);
	useEffect(() => {
		if (
			// 페이지가 1이 아니고, 끝에 도달했으며, 가져올 데이터가 더 있고, 현재 무한스크롤로 인한 fetch가 진행중이지 않을 경우
			(page !== 1 && inView && hasMore && !isLoading2) ||
			(page !== 1 && inView2 && hasMore && !isLoading2)
		) {
			async function fetchInitialTodos() {
				try {
					// 무한스크롤이 진행중임을 true 로 변경
					setIsLoading2(() => true);
					// 다음 todo 데이터 fetch
					const additionalTodos = await getItems(page);
					// 가져온 todo데이터를 기존 todos에 추가
					setTodos([...todos, ...additionalTodos]);
					// 가져온 데이터가 10개가 아닌경우 hasMore를 true로 변경
					setHasMore(additionalTodos.length === 10);
					// 페이지를 다음 페이지로 넘기기
					setPage(page + 1);
					// 무한스크롤이 진행중임을 false로 변경
					setIsLoading2(() => false);
				} catch {
					setIsError(true);
				}
			}
			fetchInitialTodos();
		}
	}, [hasMore, inView, page, todos, inView2, isLoading2]);

	// 다시 한 번 todo데이터를 가져오는 함수. 상태 아이콘을 클릭했을 때 실행됨.
	const fetchTodos = async () => {
		try {
			// todolist를 다시 처음부터 fetch
			const data = await getItems(1);
			// 가져온 데이터가 10개가 아니면 hasMore를 false로 변경
			setHasMore(data.length === 10);
			// 다음 페이지로 설정
			setPage(2);
			// todos에 저장
			setTodos(data);
		} catch {
			setIsError(true);
		}
	};

	return { todos, isLoading, fetchTodos, ref, ref2, isError };
}
