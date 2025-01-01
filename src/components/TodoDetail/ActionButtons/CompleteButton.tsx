import Image from "next/image";
import check from "../../../../public/image/check.svg";

// 수정 완료 버튼
export default function CompleteButton({
	onComplete,
	isCompleteDisabled,
}: {
	onComplete: () => void; // 수정 완료 버튼 클릭시 실행되는 함수
	isCompleteDisabled: boolean; // 수정 완료 버튼을 활성화시킬지
}) {
	return (
		<button
			onClick={onComplete}
			// isCompleteDisabled이 true인 경우 버튼을 비활성화
			disabled={isCompleteDisabled}
			className={`w-[168px] h-[56px] flex items-center ${
				// isCompleteDisabled에 따른 버튼 색 변경
				isCompleteDisabled ? "bg-primary-200" : "bg-btn-complete"
			} justify-center gap-[4px] rounded shadow-inside`}
		>
			<Image alt="plus" src={check} />
			<span>수정 완료</span>
		</button>
	);
}
