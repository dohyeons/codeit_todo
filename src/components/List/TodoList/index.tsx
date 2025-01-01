import EmptyList from "@/components/List/TodoList/EmptyList";
import TodoItem from "@/components/List/TodoList/TodoItem";
import { TodoListType } from "@/types";

export default function TodoList({
	todos,
	refetchTodos,
	isCompleted,
}: {
	todos: TodoListType[] | undefined;
	refetchTodos: () => void;
	isCompleted?: true;
}) {
	return (
		<>
			{todos?.length ? (
				<ul className="flex flex-col gap-[16px] mt-[16px]">
					{todos.map(({ isCompleted, name, id }) => (
						<TodoItem
							key={id}
							isCompleted={isCompleted}
							name={name}
							id={id}
							refetchTodos={refetchTodos}
						/>
					))}
				</ul>
			) : (
				<EmptyList isCompleted={!!isCompleted} />
			)}
		</>
	);
}
