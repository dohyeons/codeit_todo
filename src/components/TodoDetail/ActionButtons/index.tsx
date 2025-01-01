import CompleteButton from "@/components/TodoDetail/ActionButtons/CompleteButton";
import DeleteButton from "@/components/TodoDetail/ActionButtons/DeleteButton";

// 상세 정보 수정버튼과 삭제 버튼을 렌더링하는 컴포넌트
export default function ActionButtons({
	onComplete,
	onDelete,
	isCompleteDisabled,
}: {
	onComplete: () => void; // 수정 완료 버튼 클릭시 실행되는 함수
	onDelete: () => void; // 삭제 버튼 클릭 시 실행되는 함수
	isCompleteDisabled: boolean; // 수정 완료 버튼을 활성화시킬지
}) {
	return (
		<div className="flex gap-[7px] tablet:gap-[16px] desktop:justify-end justify-center mt-[24px] mb-[139px]">
			{/* 수정 완료 버튼 */}
			<CompleteButton
				onComplete={onComplete}
				isCompleteDisabled={isCompleteDisabled}
			/>
			{/* 삭제 버튼 */}
			<DeleteButton onDelete={onDelete} />
		</div>
	);
}
