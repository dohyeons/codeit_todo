// todo를 추가하는 함수
export default async function addTodo(name: string) {
	try {
		const response = await fetch(
			"https://assignment-todolist-api.vercel.app/api/ddhhss0603/items",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name }),
			}
		);
		// 요청의 상태가 ok가 아닌 경우 에러를 던짐
		if (!response.ok) {
			throw new Error(`${response.status}`);
		}
	} catch (error) {
		throw error;
	}
}
