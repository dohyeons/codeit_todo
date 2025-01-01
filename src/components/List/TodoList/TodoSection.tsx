import TodoList from "@/components/List/TodoList";
import Loading from "@/components/List/TodoList/Loading";
import Image from "next/image";
import todo from "../../../../public/image/todo.svg";
import done from "../../../../public/image/done.svg";
import Error from "@/components/Error";
import { TodoListType } from "@/types";

// 할 일 목록을 렌더링하는 컴포넌트
export default function TodoSection({
	status,
	todos,
	isError,
	isLoading,
	fetchTodos,
	ref,
}: {
	status: "todo" | "done"; // todo 목록인지 done 목록인지
	todos: TodoListType[]; // 렌더링할 todo목록
	isError: boolean; // 에러가 발생했는지
	isLoading: boolean; // 로딩중인지
	fetchTodos: () => void; // todo를 다시 fetch하는 함수
	ref: (node?: Element | null) => void; // 무한스크롤을 감지하기 위한 ref
}) {
	// 현재 상태가 todo인지 done인지를 확인하고 true/false로 저장
	const isCompleted = status === "todo" ? false : true;
	// 위 isCompleted 상태에 맞는 이미지를 설정
	const imgSrc = isCompleted ? done : todo;
	return (
		<section>
			{/* todo 목록인지 done 목록인지에 맞는 해당이미지 */}
			<Image src={imgSrc} alt={status} />
			{isError ? (
				// 에러가 발생했을 경우 Error 컴포넌트 렌더링
				<Error />
			) : isLoading ? (
				// 로딩중인 경우 로딩 렌더링
				<Loading />
			) : (
				// 목록을 렌더링하는 컴포넌트
				<TodoList
					todos={todos}
					refetchTodos={fetchTodos}
					isCompleted={isCompleted}
				/>
			)}
			{/* 스크롤이 바닥에 도달했는지를 감지하는 div */}
			<div ref={ref} className="w-full h-[60px]"></div>
		</section>
	);
}
