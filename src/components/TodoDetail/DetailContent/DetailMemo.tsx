import Image from "next/image";
import memo_heading from "../../../../public/image/memo_heading.svg";
import { useEffect, useRef } from "react";

// 사용자가 저장한 memo내용을 보여주는 컴포넌트
export default function DetailMemo({
	memo,
	onMemoChange,
}: {
	memo: string; // memo 내용
	onMemoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // memo가 변경될 때 실행되는 함수
}) {
	// textarea의 주소를 가져오기 위한 ref hook
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		// memo가 변경되었을 때 현재 textarea를 가져와
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = "auto"; // 기존 높이 초기화
			textarea.style.height = `${textarea.scrollHeight}px`; // 콘텐츠에 맞춰 높이 설정
		}
	}, [memo]);

	return (
		<article
			className={`desktop:max-x-[588px] w-full h-[311px] rounded  bg-[url('/image/memo.svg')] flex flex-col py-[24px] px-[16px] items-center gap-[16px]`}
		>
			<Image src={memo_heading} alt="memo_heading" className="mb-[16px]" />
			<div className="flex items-center justify-center w-full h-full">
				<textarea
					ref={textareaRef}
					value={memo}
					onChange={onMemoChange}
					className="text-center w-full max-h-[229px] h-auto outline-none bg-transparent overflow-y:auto scrollbar-thin resize-none scrollbar-thin scrollbar-thumb-amber-200"
				/>
			</div>
		</article>
	);
}
