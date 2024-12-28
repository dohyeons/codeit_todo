"use client";

import Image from "next/image";
import todo from "../../../public/image/todo.svg";
import done from "../../../public/image/done.svg";
import getItems from "@/api/getItems";
import { useState, useEffect } from "react";
import TodoList from "@/components/List/TodoList";

export default function List() {
	const [todos, setTodos] = useState<
		{ isCompleted: boolean; name: string; id: number }[]
	>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchTodos = async () => {
		setIsLoading(true);
		const res = await getItems();
		setTodos(res);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchTodos();
	}, []);
	function refetchTodos() {
		fetchTodos();
	}
	const incompleteTodos = todos.filter(todo => !todo.isCompleted);
	const completedTodos = todos.filter(todo => todo.isCompleted);

	return (
		<div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px]">
			<section>
				<Image src={todo} alt={"todo"} />
				{isLoading ? (
					<div className="w-full mt-[16px]">
						<span>데이터를 불러오고 있습니다...!</span>
					</div>
				) : (
					<TodoList todos={incompleteTodos} refetchTodos={refetchTodos} />
				)}
			</section>
			<section>
				<Image src={done} alt={"done"} />
				{isLoading ? (
					<div className="w-full mt-[16px]">
						<span>데이터를 불러오고 있습니다...!</span>
					</div>
				) : (
					<TodoList todos={completedTodos} refetchTodos={refetchTodos} />
				)}
			</section>
		</div>
	);
}
