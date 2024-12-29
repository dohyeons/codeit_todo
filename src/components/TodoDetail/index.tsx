"use client";

import getTodoDetail from "@/api/getTodoDetail";
import CheckBox from "@/components/List/TodoList/CheckBox";
import { TodoListDetailType } from "@/types";
import Image from "next/image";
import { useState } from "react";
import img from "../../../public/image/img.svg";
import plus_large from "../../../public/image/plus_large.svg";

export default function TodoDetail({
	initialTodoDetail,
}: {
	initialTodoDetail: TodoListDetailType;
}) {
	const [todoDetail, setTodoDetail] = useState(initialTodoDetail);

	async function refetchTodoDetail() {
		const res = await getTodoDetail(todoDetail.id);
		setTodoDetail(res);
	}
	return (
		<>
			<div
				className={`w-full h-[50px] rounded ${
					todoDetail.isCompleted ? "bg-completed-light" : "bg-white"
				}  flex items-center justify-center pl-[12px] gap-[16px] border-2 border-primary-900`}
			>
				<CheckBox
					isDone={todoDetail.isCompleted ? true : false}
					id={todoDetail.id}
					refetchTodos={refetchTodoDetail}
				/>
				<h1 className="truncate underline decoration-1 underline-offset-2 text-large">
					{todoDetail.name}
				</h1>
			</div>
			<div className="flex flex-col desktop:flex-row gap-[15px] tablet:gap-[24px] border border-black ">
				<article className="flex  items-center justify-center relative border-2 border-dashed border-primary-300 w-full desktop:max-w-[384px] h-[311px] bg-slate-50 rounded">
					<Image src={img} alt="img" />
					<div className="rounded-full cursor-pointer bottom-[16px] right-[16px] bg-primary-200 absolute size-[64px] flex justify-center items-center">
						<label htmlFor="file-input">
							<Image src={plus_large} alt="plus" className="cursor-pointer" />
						</label>
						<input
							type="file"
							accept="image/*"
							className="hidden"
							id="file-input"
						/>
					</div>
				</article>
				<article
					className={`border border-red-300 desktop:max-x-[588px] w-full h-[311px] rounded  bg-[url('/image/memo.svg')]`}
				>
					메모
				</article>
			</div>
		</>
	);
}
