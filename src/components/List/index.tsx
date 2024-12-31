"use client";

import Image from "next/image";
import todo from "../../../public/image/todo.svg";
import done from "../../../public/image/done.svg";
import TodoList from "@/components/List/TodoList";
import InputForm from "@/components/InputForm";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { TodoListType } from "@/types";
import getItems from "@/api/getItems";

export default function List() {
	const [todos, setTodos] = useState<TodoListType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const { ref, inView } = useInView({ threshold: 0.5 });
	const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (page === 1) {
			async function fetchInitialTodos() {
				const initialTodos = await getItems(1);
				setTodos(initialTodos);
				setHasMore(initialTodos.length === 10);
				setPage(page + 1);
				setIsLoading(false);
			}
			fetchInitialTodos();
		} else if ((inView && hasMore) || (inView2 && hasMore)) {
			async function fetchInitialTodos() {
				const additionalTodos = await getItems(page);
				setTodos([...todos, ...additionalTodos]);
				setHasMore(additionalTodos.length === 10);
				setPage(page + 1);
			}
			fetchInitialTodos();
		}
	}, [hasMore, inView, page, todos, inView2]);

	const fetchTodos = async () => {
		const data = await getItems(1);
		setHasMore(true);
		setPage(1);
		setTodos(data);
		setIsLoading(false);
	};

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
							<span>데이터를 불러오고 있습니다...!</span>
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
							<span>데이터를 불러오고 있습니다...!</span>
						</div>
					) : (
						<TodoList todos={completedTodos} refetchTodos={fetchTodos} />
					)}
					<div ref={ref2} className="w-full h-[60px]"></div>
				</section>
			</div>
		</>
	);
}
