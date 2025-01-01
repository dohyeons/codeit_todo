import { TodoListType } from "@/types";

// todo 목록을 가져오는 함수
export default async function getItems(page: number): Promise<TodoListType[]> {
	try {
		const response = await fetch(
			`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items?page=${page}`
		);
		// 요청의 상태가 ok가 아닌 경우 에러를 던짐
		if (!response.ok) {
			throw new Error(`${response.status}`);
		}

		const data: TodoListType[] = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
