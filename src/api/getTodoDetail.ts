import { TodoListDetailType } from "@/types";

export default async function getTodoDetail(
	id: number
): Promise<TodoListDetailType> {
	const response = await fetch(
		`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${id}`
	).then(res => res.json());
	return response;
}
