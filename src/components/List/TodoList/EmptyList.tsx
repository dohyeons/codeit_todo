import Image from "next/image";
import todo_large from "../../../../public/image/todo_large.svg";
import done_large from "../../../../public/image/done_large.svg";

// 등록된 할 일이 없는 경우 렌더링되는 컴포넌트
export default function EmptyList({
	isCompleted,
}: {
	isCompleted: boolean; // 완료 목록인지
}) {
	return (
		<div className="flex flex-col justify-center items-center tablet:mt-[24px] desktop:mt-[64px]">
			<Image
				src={isCompleted ? done_large : todo_large}
				alt={isCompleted ? "done_large" : "todo_large"}
				className="size-[120px] tablet:size-[240px]"
			/>
			<span className="whitespace-pre-line text-center text-primary-400 text-small-semi">
				{isCompleted // 완료상태와 미완료 상태일 때 다른 메시지를 렌더링
					? `아직 다 한 일이 없어요.${"\n"}해야 할 일을 체크해보세요!`
					: `할 일이 없어요.${"\n"}TODO를 새롭게 추가해주세요!`}
			</span>
		</div>
	);
}
