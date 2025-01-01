import getItems from "@/api/getItems";
import { TodoListType } from "@/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function useTodos() {
	const [todos, setTodos] = useState<TodoListType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const { ref, inView } = useInView({ threshold: 0.5 });
	const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
	const [isLoading2, setIsLoading2] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (page === 1) {
			async function fetchInitialTodos() {
				try {
					const initialTodos = await getItems(1);
					setTodos(initialTodos);
					setHasMore(initialTodos.length === 10);
					setPage(page + 1);
					setIsLoading(false);
				} catch {
					setIsError(true);
				}
			}
			fetchInitialTodos();
		}
	}, []);
	useEffect(() => {
		if (
			(page !== 1 && inView && hasMore && !isLoading2) ||
			(page !== 1 && inView2 && hasMore && !isLoading2)
		) {
			async function fetchInitialTodos() {
				setIsLoading2(() => true);
				const additionalTodos = await getItems(page);
				setTodos([...todos, ...additionalTodos]);
				setHasMore(additionalTodos.length === 10);
				setPage(page + 1);
				setIsLoading2(() => false);
			}
			fetchInitialTodos();
		}
	}, [hasMore, inView, page, todos, inView2, isLoading2]);

	const fetchTodos = async () => {
		const data = await getItems(1);
		setHasMore(data.length === 10);
		setPage(2);
		setTodos(data);
	};

	return { todos, isLoading, fetchTodos, ref, ref2, isError };
}
