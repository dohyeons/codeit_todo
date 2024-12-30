import Image from "next/image";
import x from "../../../../public/image/x.svg";

export default function DeleteButton({ onDelete }: { onDelete: () => void }) {
	return (
		<button
			onClick={onDelete}
			className="w-[168px] text-small-semi text-white h-[56px] flex items-center justify-center gap-[4px] rounded bg-btn-delete"
		>
			<Image alt="plus" src={x} />
			<span>삭제하기</span>
		</button>
	);
}
