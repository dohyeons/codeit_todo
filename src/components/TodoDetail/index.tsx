"use client";

import getTodoDetail from "@/api/getTodoDetail";
import { TodoListDetailType } from "@/types";
import Image from "next/image";
import { useState } from "react";
import img from "../../../public/image/img.svg";
import plus_large from "../../../public/image/plus_large.svg";
import check from "../../../public/image/check.svg";
import x from "../../../public/image/x.svg";
import memo_heading from "../../../public/image/memo_heading.svg";
import DetailHeader from "@/components/TodoDetail/DetailHeader";

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
			<DetailHeader
				todoDetail={todoDetail}
				refetchTodoDetail={refetchTodoDetail}
			/>
			<div className="flex flex-col desktop:flex-row gap-[15px] tablet:gap-[24px] ">
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
					className={`desktop:max-x-[588px] w-full h-[311px] rounded  bg-[url('/image/memo.svg')] flex flex-col py-[24px] px-[16px] items-center gap-[16px]`}
				>
					<Image src={memo_heading} alt="memo_heading" className="mb-[16px]" />
					<textarea className="w-full h-[311px] outline-none bg-transparent overflow-y:auto scrollbar-thin resize-none scrollbar-thin scrollbar-thumb-amber-200" />
				</article>
			</div>
			<div className="flex gap-[7px] tablet:gap-[16px] desktop:justify-end justify-center mt-[24px]">
				<button className="w-[168px] h-[56px] flex items-center justify-center  gap-[4px] rounded bg-primary-200">
					<Image alt="plus" src={check} />
					<span>수정 완료</span>
				</button>
				<button className="w-[168px] text-small-semi text-white h-[56px] flex items-center justify-center  gap-[4px] rounded bg-btn-delete">
					<Image alt="plus" src={x} />
					<span>삭제하기</span>
				</button>
			</div>
		</>
	);
}
