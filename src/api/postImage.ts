export default async function postImage(file: File) {
	try {
		const formData = new FormData();
		formData.append("image", file);
		const res = await fetch(
			"https://assignment-todolist-api.vercel.app/api/ddhhss0603/images/upload",
			{
				method: "POST",
				body: formData,
			}
		);

		if (!res.ok) {
			throw new Error(`${res.status}`);
		}
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
}
