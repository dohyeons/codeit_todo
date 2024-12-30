export default async function deleteTodo(id: number) {
	await fetch(
		`https://assignment-todolist-api.vercel.app/api/ddhhss0603/items/${id}`,
		{
			method: "DELETE",
		}
	);
}
