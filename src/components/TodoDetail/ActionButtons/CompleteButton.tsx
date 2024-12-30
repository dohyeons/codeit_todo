import Image from "next/image";
import check from "../../../../public/image/check.svg";

export default function CompleteButton({
	onComplete,
	isCompleteDisabled,
}: {
	onComplete: () => void;
	isCompleteDisabled: boolean;
}) {
	return (
		<button
			onClick={onComplete}
			disabled={isCompleteDisabled}
			className={`w-[168px] h-[56px] flex items-center ${
				isCompleteDisabled ? "bg-primary-200" : "bg-btn-complete"
			} justify-center gap-[4px] rounded`}
		>
			<Image alt="plus" src={check} />
			<span>수정 완료</span>
		</button>
	);
}
