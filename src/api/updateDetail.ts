import { TodoListDetailType } from "@/types";

export default async function updateDetail(
	todoId: number,
	todoDetail: Omit<TodoListDetailType, "tenantId">
) {
	try {
		const { id, ...res } = todoDetail;
		const response = await fetch(
			`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${todoId}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(res),
			}
		);
		if (!response.ok) {
			throw new Error(`${response.status}`);
		}
	} catch (error) {
		throw error;
	}
}
