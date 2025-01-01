import { TodoListDetailType } from "@/types";

export default async function getTodoDetail(
	id: number
): Promise<TodoListDetailType> {
	try {
		const res = await fetch(
			`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${id}`
		);
		if (!res.ok) {
			throw new Error(`${res.status}`);
		}

		return res.json();
	} catch (error) {
		throw error;
	}
}
