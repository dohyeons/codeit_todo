import getItems from "@/api/getItems";
import { useState } from "react";

export default function useTodos(
	initialTodos: { id: number; isCompleted: boolean; name: string }[]
) {
	const [todos, setTodos] = useState(initialTodos);
	const [isLoading, setIsLoading] = useState(false);

	const fetchTodos = async () => {
		setIsLoading(true);
		const data = await getItems();
		setTodos(data);
		setIsLoading(false);
	};

	return { todos, isLoading, fetchTodos };
}
