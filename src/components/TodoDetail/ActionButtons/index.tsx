import CompleteButton from "@/components/TodoDetail/ActionButtons/CompleteButton";
import DeleteButton from "@/components/TodoDetail/ActionButtons/DeleteButton";

export default function ActionButtons({
	onComplete,
	onDelete,
	isCompleteDisabled,
}: {
	onComplete: () => void;
	onDelete: () => void;
	isCompleteDisabled: boolean;
}) {
	return (
		<div className="flex gap-[7px] tablet:gap-[16px] desktop:justify-end justify-center mt-[24px]">
			<CompleteButton
				onComplete={onComplete}
				isCompleteDisabled={isCompleteDisabled}
			/>
			<DeleteButton onDelete={onDelete} />
		</div>
	);
}
