// todo 항목의 완료 상태를 바꾸는 함수. 현재 항목의 완료상태와 id를 인자로 받음.
export default async function toggleComplete(isCompleted: boolean, id: number) {
	try {
		const res = await fetch(
			`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				// body로 현 상태의 반대 상태를 보냄.
				body: JSON.stringify({
					isCompleted: !isCompleted,
				}),
			}
		);
		// 결과가 ok가 아니면 에러 던짐.
		if (!res.ok) {
			throw new Error(`${res.status}`);
		}
	} catch (error) {
		throw error;
	}
}
