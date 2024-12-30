import DetailMemo from "@/components/TodoDetail/DetailContent/DetailMemo";
import DetailImage from "@/components/TodoDetail/DetailContent/DetailImage";

export default function DetailContent({
	imageUrl,
	memo,
	onImageChange,
	onMemoChange,
}: {
	imageUrl: string;
	memo: string;
	onImageChange: (uri: string) => void;
	onMemoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
	return (
		<div className="flex flex-col desktop:flex-row gap-[15px] tablet:gap-[24px]">
			<DetailImage imageUrl={imageUrl} onImageChange={onImageChange} />
			<DetailMemo memo={memo} onMemoChange={onMemoChange} />
		</div>
	);
}
