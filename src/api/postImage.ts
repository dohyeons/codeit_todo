// 이미지를 받아와 url을 받기 위한 요청을 보내는 함수
export default async function postImage(file: File) {
	try {
		const formData = new FormData();
		// formData 객체에 이미지 파일을 추가하고 요청의 body에 보냄.
		formData.append("image", file);
		const res = await fetch(
			"https://assignment-todolist-api.vercel.app/api/ddhhss0603/images/upload",
			{
				method: "POST",
				body: formData,
			}
		);
		// 요청의 상태가 ok가 아닌 경우 에러를 던짐
		if (!res.ok) {
			throw new Error(`${res.status}`);
		}
		// 받은 url을 반환.
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
}
