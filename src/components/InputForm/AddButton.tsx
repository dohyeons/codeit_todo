import Image from "next/image";
import plus from "../../../public/image/plus.svg";

export default function AddButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			onClick={onClick}
			className="min-w-[56px] flex items-center justify-center tablet:min-w-[168px] gap-[4px] rounded bg-primary-200"
		>
			<Image alt="plus" src={plus} />
			<span className="hidden tablet:block">추가하기</span>
		</button>
	);
}
