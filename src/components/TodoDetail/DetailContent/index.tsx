import DetailMemo from "@/components/TodoDetail/DetailContent/DetailMemo";
import DetailImage from "@/components/TodoDetail/DetailContent/DetailImage";

// 상세 정보 중 memo와 imageUrl에 따른 image를 렌더링하는 컴포넌트
export default function DetailContent({
	imageUrl,
	memo,
	onImageChange,
	onMemoChange,
}: {
	imageUrl: string; // 이미지 url
	memo: string; // memo 내용
	onImageChange: (uri: string) => void; // imageUrl이 변경될 때 실행되는 함수
	onMemoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // memo가 변경될 때 실행되는 함수
}) {
	return (
		<div className="flex flex-col desktop:flex-row gap-[15px] tablet:gap-[24px]">
			{/* 사용자가 저장한 이미지를 보여주는 컴포넌트 */}
			<DetailImage imageUrl={imageUrl} onImageChange={onImageChange} />
			{/* 사용자가 저장한 memo내용을 보여주는 컴포넌트 */}
			<DetailMemo memo={memo} onMemoChange={onMemoChange} />
		</div>
	);
}
