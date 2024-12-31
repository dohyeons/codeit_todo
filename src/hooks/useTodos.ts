import getItems from "@/api/getItems";
import { TodoListType } from "@/types";
import { useEffect, useState } from "react";

export default function useTodos() {
	const [todos, setTodos] = useState<TodoListType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchInitialTodos() {
			const initialTodos = await getItems();
			setTodos(initialTodos);
			setIsLoading(false);
		}
		fetchInitialTodos();
	}, []);

	const fetchTodos = async () => {
		const data = await getItems();
		setTodos(data);
		setIsLoading(false);
	};

	return { todos, isLoading, fetchTodos };
}
