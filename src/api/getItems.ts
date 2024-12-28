export default async function getItems(): Promise<
	{ isCompleted: boolean; name: string; id: number }[]
> {
	const response = await fetch(
		"https://assignment-todolist-api.vercel.app/api/ddhhss0603/items"
	).then(res => res.json());
	return response;
}
