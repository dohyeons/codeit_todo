"use client";

import Image from "next/image";
import todo from "../../../public/image/todo.svg";
import done from "../../../public/image/done.svg";
import TodoList from "@/components/List/TodoList";
import useTodos from "@/hooks/useTodos";
import InputForm from "@/components/InputForm";
import { TodoListType } from "@/types";

export default function List({
	initialTodos,
}: {
	initialTodos: TodoListType[];
}) {
	const { todos, isLoading, fetchTodos } = useTodos(initialTodos);

	const incompleteTodos = todos.filter(todo => !todo.isCompleted);
	const completedTodos = todos.filter(todo => todo.isCompleted);

	return (
		<>
			<InputForm onAdd={fetchTodos} />
			<div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px]">
				<section>
					<Image src={todo} alt={"todo"} />
					{isLoading ? (
						<div className="w-full mt-[16px]">
							<span>데이터를 불러오고 있습니다...!</span>
						</div>
					) : (
						<TodoList todos={incompleteTodos} refetchTodos={fetchTodos} />
					)}
				</section>
				<section>
					<Image src={done} alt={"done"} />
					{isLoading ? (
						<div className="w-full mt-[16px]">
							<span>데이터를 불러오고 있습니다...!</span>
						</div>
					) : (
						<TodoList todos={completedTodos} refetchTodos={fetchTodos} />
					)}
				</section>
			</div>
		</>
	);
}
