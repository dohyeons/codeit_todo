export default async function toggleComplete(isCompleted: boolean, id: number) {
	try {
		const res = await fetch(
			`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					isCompleted: !isCompleted,
				}),
			}
		);
		if (!res.ok) {
			throw new Error(`${res.status}`);
		}
	} catch (error) {
		throw error;
	}
}
