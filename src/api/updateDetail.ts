import { TodoDetailType } from "@/types";

// 상세정보를 업데이트하는 함수. 항목 id와 바뀐 정보를 인자로 받음. 이때 정보에는 tenantId가 제외됨.
export default async function updateDetail(
	todoId: number,
	todoDetail: TodoDetailType
) {
	try {
		const { id, ...res } = todoDetail;
		// 받아온 정보 중 id는 분리해서 사용함.
		const response = await fetch(
			`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${todoId}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				// id가 분리된 정보들을 body에 넣어서 요청을 보냄.
				body: JSON.stringify(res),
			}
		);
		// 결과 상태가 ok가 아닌 경우 에러 던짐ㄴ
		if (!response.ok) {
			throw new Error(`${response.status}`);
		}
	} catch (error) {
		throw error;
	}
}
