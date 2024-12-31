import { TodoListType } from "@/types";

export default async function getItems(page: number): Promise<TodoListType[]> {
	const response = await fetch(
		`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items?page=${page}`
	).then(res => res.json());
	return response;
}
