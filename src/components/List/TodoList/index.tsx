import CheckBox from "@/components/List/TodoList/CheckBox";
import EmptyList from "@/components/List/TodoList/EmptyList";

export default function TodoList({
	todos,
	refetchTodos,
}: {
	todos: { isCompleted: boolean; name: string; id: number }[];
	refetchTodos: () => void;
}) {
	return (
		<>
			{todos.length ? (
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
								refetchTodos={refetchTodos}
							/>
							<span className="truncate">{name}</span>
						</li>
					))}
				</ul>
			) : (
				<EmptyList />
			)}
		</>
	);
}
