// todo항목을 삭제하는 함수
export default async function deleteTodo(id: number) {
	try {
		const res = await fetch(
			`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${id}`,
			{
				method: "DELETE",
			}
		);
		// 요청의 상태가 ok가 아닌 경우 에러를 던짐.
		if (!res.ok) {
			throw new Error(`${res.status}`);
		}
	} catch (error) {
		throw error;
	}
}
