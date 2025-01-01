import Image from "next/image";
import plus from "../../../public/image/plus.svg";
import plus_black from "../../../public/image/plus_black.svg";

// 새로운 todo를 만들기 위한 버튼
export default function AddButton({
	onClick,
	value,
}: {
	onClick: () => void;
	value: string;
}) {
	console.log(value.trim());
	return (
		<button
			onClick={onClick}
			disabled={value.trim() ? false : true}
			className={`min-w-[56px] flex items-center justify-center shadow-inside  tablet:min-w-[168px] gap-[4px] rounded ${
				value.trim() ? "bg-completed text-white" : "bg-primary-200"
				// 값이 입력된 경우 버튼의 배경색이 흰색에서 보라색으로 변경
			}`}
		>
			{/* 값이 입력된 경우 색이 다른 plus가 렌더링 */}
			<Image alt="plus" src={value.trim() ? plus : plus_black} />
			<span className="hidden tablet:block">추가하기</span>
		</button>
	);
}
