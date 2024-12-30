import { TodoListDetailType } from "@/types";

export default async function updateDetail(
	todoId: number,
	todoDetail: Omit<TodoListDetailType, "tenantId">
) {
	const { id, ...res } = todoDetail;
	await fetch(
		`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${todoId}`,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(res),
		}
	);
}
