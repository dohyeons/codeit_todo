import CheckBox from "@/components/List/TodoList/CheckBox";
import { useRouter } from "next/navigation";

export default function TodoItem({
	isCompleted,
	name,
	id,
	refetchTodos,
}: {
	isCompleted: boolean;
	name: string;
	id: number;
	refetchTodos: () => void;
}) {
	const router = useRouter();
	function handleTodoClick(e: React.MouseEvent<HTMLLIElement>, id: number) {
		router.push(`/items/${id}`);
	}
	return (
		<li
			key={id}
			onClick={e => handleTodoClick(e, id)}
			className={`w-full h-[50px] rounded ${
				isCompleted ? "bg-completed-light" : "bg-white"
			}  flex items-center pl-[12px] gap-[16px] border-2 border-primary-900 cursor-pointer`}
		>
			<CheckBox
				isDone={isCompleted ? true : false}
				id={id}
				customFunction={refetchTodos}
			/>
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