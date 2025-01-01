import { TodoListDetailType } from "@/types";

// todo 상세데이터를 가져오는 함수
export default async function getTodoDetail(
	id: number // 항목 id
): Promise<TodoListDetailType> {
	try {
		const res = await fetch(
			`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${id}`
		);
		// 요청의 상태가 ok가 아니면 에러를 던짐
		if (!res.ok) {
			throw new Error(`${res.status}`);
		}

		return res.json();
	} catch (error) {
		throw error;
	}
}
