import EmptyList from "@/components/List/TodoList/EmptyList";
import TodoItem from "@/components/List/TodoList/TodoItem";
import { TodoListType } from "@/types";

export default function TodoList({
	todos,
	refetchTodos,
	isCompleted,
}: {
	todos: TodoListType[] | undefined; // todo 목록
	refetchTodos: () => void; // todo를 다시 fetch하는 함수
	isCompleted: boolean; // 완료 목록인지
}) {
	return (
		<>
			{/* todo가 있는 경우 TodoItem을 렌더링*/}
			{todos?.length ? (
				<ul className="flex flex-col gap-[16px] mt-[16px]">
					{todos.map(({ isCompleted, name, id }) => (
						// 각 todo를 TodoItem로 렌더링
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
				// todo가 없을경우 EmptyList로 렌더링
				<EmptyList isCompleted={!!isCompleted} />
			)}
		</>
	);
}
