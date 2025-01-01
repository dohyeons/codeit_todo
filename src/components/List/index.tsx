"use client";

import Image from "next/image";
import todo from "../../../public/image/todo.svg";
import done from "../../../public/image/done.svg";
import TodoList from "@/components/List/TodoList";
import InputForm from "@/components/InputForm";
import useTodos from "@/hooks/useTodos";
import Loading from "@/components/List/TodoList/Loading";

export default function List() {
	const { todos, isLoading, fetchTodos, ref, ref2, isError } = useTodos();

	const incompleteTodos = todos?.filter(todo => !todo.isCompleted);
	const completedTodos = todos?.filter(todo => todo.isCompleted);

	return (
		<>
			<InputForm onAdd={fetchTodos} />
			<div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px]">
				<section>
					<Image src={todo} alt={"todo"} />
					{isError ? (
						<span>데이터를 불러오는 중 문제가 발생했습니다.</span>
					) : isLoading ? (
						<Loading />
					) : (
						<TodoList todos={incompleteTodos} refetchTodos={fetchTodos} />
					)}
					<div ref={ref} className="w-full h-[60px]"></div>
				</section>
				<section>
					<Image src={done} alt={"done"} />
					{isError ? (
						<span>데이터를 불러오는 중 문제가 발생했습니다.</span>
					) : isLoading ? (
						<Loading />
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
