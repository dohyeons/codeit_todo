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

	useEffect(() => {
		if (page === 1) {
			async function fetchInitialTodos() {
				const initialTodos = await getItems(1);
				setTodos(initialTodos);
				setHasMore(initialTodos.length === 10);
				setPage(page + 1);
				setIsLoading(false);
			}
			fetchInitialTodos();
		} else if ((inView && hasMore) || (inView2 && hasMore)) {
			async function fetchInitialTodos() {
				const additionalTodos = await getItems(page);
				setTodos([...todos, ...additionalTodos]);
				setHasMore(additionalTodos.length === 10);
				setPage(page + 1);
			}
			fetchInitialTodos();
		}
	}, [hasMore, inView, page, todos, inView2]);

	const fetchTodos = async () => {
		const data = await getItems(1);
		setHasMore(true);
		setPage(1);
		setTodos(data);
		setIsLoading(false);
	};

	return { todos, isLoading, fetchTodos };
}
