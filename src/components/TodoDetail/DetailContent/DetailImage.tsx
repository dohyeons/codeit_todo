import FileResizer from "react-image-file-resizer";
import Image from "next/image";
import img from "../../../../public/image/img.svg";
import edit from "../../../../public/image/edit.svg";
import plus_large from "../../../../public/image/plus_large.svg";

export default function DetailImage({
	imageUrl,
	onImageChange,
}: {
	imageUrl: string | null;
	onImageChange: (uri: string) => void;
}) {
	function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (
			!file ||
			file.type.split("/")[0] !== "image" ||
			file.size > 5 * 1024 * 1024 ||
			!/^[a-zA-Z_.\-\s]+$/.test(file.name)
		) {
			return;
		}

		FileResizer.imageFileResizer(
			file,
			800,
			800,
			"JPEG",
			60,
			0,
			uri => {
				onImageChange(uri as string);
			},
			"base64"
		);
	}

	return (
		<article
			style={{
				backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
			}}
			className={`flex bg-center bg-cover ${
				!imageUrl && "border-2 border-dashed border-primary-300"
			}  items-center justify-center relative  w-full desktop:max-w-[384px] h-[311px] bg-slate-50 rounded`}
		>
			{!imageUrl && <Image src={img} alt="img" />}
			<label htmlFor="file-input">
				<div
					className={`rounded-full cursor-pointer bottom-[16px] right-[16px] ${
						imageUrl
							? "bg-btn-edit border-2 border-primary-900"
							: "bg-primary-200"
					} absolute size-[64px] flex justify-center items-center`}
				>
					<Image src={imageUrl ? edit : plus_large} alt="edit" />
				</div>
			</label>
			<input
				type="file"
				accept="image/*"
				className="hidden"
				id="file-input"
				onChange={handleFileChange}
			/>
		</article>
	);
}
