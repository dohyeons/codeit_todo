import Image from "next/image";
import img from "../../../../public/image/img.svg";
import edit from "../../../../public/image/edit.svg";
import plus_large from "../../../../public/image/plus_large.svg";
import postImage from "@/api/postImage";

// 사용자가 저장한 이미지를 보여주는 컴포넌트
export default function DetailImage({
	imageUrl,
	onImageChange,
}: {
	imageUrl: string | null; // 이미지 url
	onImageChange: (uri: string) => void; // imageUrl이 변경될 때 실행되는 함수
}) {
	// 이미지 파일을 입력했을 때 실행되는 함수
	async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		// 이미지 파일을 가져옴.
		const file = e.target.files?.[0];
		if (!file) return;
		if (file.size > 5 * 1024 * 1024) {
			window.alert("5MB 이하의 파일만 업로드 가능합니다.");
			return;
		}
		if (!/^[a-zA-Z_.\-\s]+$/.test(file.name)) {
			window.alert("파일명은 영어만 사용 가능합니다.");
			return;
		}
		if (
			file.type.split("/")[0] !== "image" ||
			file.name.split(".").pop() === "svg"
		) {
			window.alert("이미지 파일만 업로드 가능합니다.");
			return;
		}
		// 위의 조건을 통과했을 경우
		try {
			// 이미지를 업로드 해 url을 받아옴
			const res = await postImage(file);
			// url을 imageUrl을 바꾸는 함수에 전달함.
			onImageChange(res.url);
		} catch {
			// 실패 시 alert 띄움.
			window.alert("이미지 업로드에 실패했습니다.");
		}
	}
	return (
		<article
			style={{
				// imageUrl이 있을 경우 배경이미지로 띄움.
				backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
			}}
			className={`flex bg-center bg-cover ${
				// imageUrl이 있을 때 테두리 생김
				!imageUrl && "border-2 border-dashed border-primary-300"
			}  items-center justify-center relative  w-full desktop:max-w-[384px] h-[311px] bg-slate-50 rounded`}
		>
			{/* imageUrl이 없을 때 렌더링할 이미지 */}
			{!imageUrl && <Image src={img} alt="img" />}
			{/* 실질적으로 보이는 동그란 버튼 모양. file input의 모습을 숨기고 동그란 버튼을 렌더링 하기 위한 label */}
			<label htmlFor="file-input">
				<div
					className={`rounded-full cursor-pointer bottom-[16px] right-[16px] ${
						imageUrl
							? // imageUrl 여부에 따른 배경 및 테두리 색 변경
							  "bg-btn-edit border-2 border-primary-900"
							: "bg-primary-200"
					} absolute size-[64px] flex justify-center items-center`}
				>
					<Image src={imageUrl ? edit : plus_large} alt="edit" />
				</div>
			</label>
			{/* 파일을 입력받는 input */}
			<input
				type="file"
				accept="image/*" // 이미지 파일만 입력가능
				className="hidden" // input 자체는 숨기고
				id="file-input" // label과 연결하기 위한 id
				onChange={handleFileChange}
				formEncType="multipart/form-data"
			/>
		</article>
	);
}
