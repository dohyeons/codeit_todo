import Image from "next/image";
import plus from "../../../public/image/plus.svg";
import plus_black from "../../../public/image/plus_black.svg";

export default function AddButton({
	onClick,
	value,
}: {
	onClick: () => void;
	value: string;
}) {
	return (
		<button
			onClick={onClick}
			className={`min-w-[56px] flex items-center justify-center shadow-inside  tablet:min-w-[168px] gap-[4px] rounded ${
				value ? "bg-completed text-white" : "bg-primary-200"
			}`}
		>
			<Image alt="plus" src={value ? plus : plus_black} />
			<span className="hidden tablet:block">추가하기</span>
		</button>
	);
}
