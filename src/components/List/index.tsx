"use client";

import Image from "next/image";
import todo from "../../../public/image/todo.svg";
import done from "../../../public/image/done.svg";
import TodoList from "@/components/List/TodoList";
import InputForm from "@/components/InputForm";
import useTodos from "@/hooks/useTodos";

export default function List() {
	const { todos, isLoading, fetchTodos, ref, ref2 } = useTodos();

	const incompleteTodos = todos?.filter(todo => !todo.isCompleted);
	const completedTodos = todos?.filter(todo => todo.isCompleted);

	return (
		<>
			<InputForm onAdd={fetchTodos} />
			<div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px]">
				<section>
					<Image src={todo} alt={"todo"} />
					{isLoading ? (
						<div className="w-full mt-[16px]">
							<span>데이터를 불러오고 있습니다.</span>
						</div>
					) : (
						<TodoList todos={incompleteTodos} refetchTodos={fetchTodos} />
					)}
					<div ref={ref} className="w-full h-[60px]"></div>
				</section>
				<section>
					<Image src={done} alt={"done"} />
					{isLoading ? (
						<div className="w-full mt-[16px]">
							<span>데이터를 불러오고 있습니다.</span>
						</div>
					) : (
						<TodoList
							todos={completedTodos}
							refetchTodos={fetchTodos}
							isCompleted
						/>
					)}
					<div ref={ref2} className="w-full h-[60px]"></div>
				</section>
			</div>
		</>
	);
}
