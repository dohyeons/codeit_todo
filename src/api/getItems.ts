import { TodoListType } from "@/types";

export default async function getItems(page: number): Promise<TodoListType[]> {
	try {
		const response = await fetch(
			`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items?page=${page}`
		);

		if (!response.ok) {
			throw new Error(`${response.status}`);
		}

		const data: TodoListType[] = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
