import CheckBox from "@/components/List/TodoList/CheckBox";
import EmptyList from "@/components/List/TodoList/EmptyList";
import { TodoListType } from "@/types";
import Link from "next/link";

export default function TodoList({
	todos,
	refetchTodos,
}: {
	todos: TodoListType[] | undefined;
	refetchTodos: () => void;
}) {
	return (
		<>
			{todos?.length ? (
				<ul className="flex flex-col gap-[16px] mt-[16px]">
					{todos.map(({ isCompleted, name, id }) => (
						<li
							key={id}
							className={`w-full h-[50px] rounded ${
								isCompleted ? "bg-completed-light" : "bg-white"
							}  flex items-center pl-[12px] gap-[16px] border-2 border-primary-900`}
						>
							<CheckBox
								isDone={isCompleted ? true : false}
								id={id}
								customFunction={refetchTodos}
							/>
							<Link href={`/items/${id}`} className="truncate">
								{name}
							</Link>
						</li>
					))}
				</ul>
			) : (
				<EmptyList />
			)}
		</>
	);
}
