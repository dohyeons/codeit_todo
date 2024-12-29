export default async function addTodo(name: string) {
	await fetch(
		"https://assignment-todolist-api.vercel.app/api/ddhhss0603/items",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name }),
		}
	);
}
