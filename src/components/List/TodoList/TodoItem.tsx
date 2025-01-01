import CheckBox from "@/components/List/TodoList/CheckBox";
import { useRouter } from "next/navigation";

export default function TodoItem({
	isCompleted,
	name,
	id,
	refetchTodos,
}: {
	isCompleted: boolean; // todo 목록인지 done 목록인지
	name: string; // todo의 제목
	id: number; // todo id
	refetchTodos: () => void; // todo를 다시 fetch하는 함수
}) {
	// todo 항목을 클릭했을 경우 detail 페이지로 이동
	const router = useRouter();
	function handleTodoClick(e: React.MouseEvent<HTMLLIElement>, id: number) {
		router.push(`/items/${id}`);
	}
	return (
		<li
			key={id}
			onClick={e => handleTodoClick(e, id)}
			className={`w-full h-[50px] rounded ${
				// 완료된 항목일 경우 연보라색 배경, 아닐 경우 하얀 배경
				isCompleted ? "bg-completed-light" : "bg-white"
			}  flex items-center pl-[12px] gap-[16px] border-2 border-primary-900 cursor-pointer`}
		>
			{/* 항목의 완료상태를 바꾸기 위한 컴포넌트 */}
			<CheckBox
				isDone={isCompleted ? true : false}
				id={id}
				customFunction={refetchTodos}
			/>
			{/* 항목의 제목 */}
			<span
				className={`truncate ${
					isCompleted && "line-through text-primary-800"
				} `}
			>
				{name}
			</span>
		</li>
	);
}
