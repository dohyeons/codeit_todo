import Image from "next/image";
import todo_large from "../../../../public/image/todo_large.svg";

export default function EmptyList() {
	return (
		<div className="flex flex-col justify-center items-center tablet:mt-[24px] desktop:mt-[64px]">
			<Image
				src={todo_large}
				alt="todo_large"
				className="size-[120px] tablet:size-[240px]"
			/>
			<span className="whitespace-pre-line text-center text-primary-400 text-small-semi">
				할 일이 없어요.{"\n"}TODO를 새롭게 추가해주세요!
			</span>
		</div>
	);
}
