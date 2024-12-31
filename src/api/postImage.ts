export default async function postImage(file: File) {
	const formData = new FormData();
	formData.append("image", file);
	const res = await fetch(
		"https://assignment-todolist-api.vercel.app/api/ddhhss0603/images/upload",
		{
			method: "POST",
			body: formData,
		}
	).then(res => res.json());
	return res;
}
