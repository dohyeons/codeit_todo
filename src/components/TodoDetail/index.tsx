"use client";

import { TodoListDetailType } from "@/types";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import img from "../../../public/image/img.svg";
import plus_large from "../../../public/image/plus_large.svg";
import check from "../../../public/image/check.svg";
import x from "../../../public/image/x.svg";
import memo_heading from "../../../public/image/memo_heading.svg";
import DetailHeader from "@/components/TodoDetail/DetailHeader";
import edit from "../../../public/image/edit.svg";
import deleteTodo from "@/api/deleteTodo";
import { useRouter } from "next/navigation";
import updateDetail from "@/api/updateDetail";
import FileResizer from "react-image-file-resizer";

export default function TodoDetail({
	initialTodoDetail: { tenantId, ...res },
}: {
	initialTodoDetail: TodoListDetailType;
}) {
	const [todoDetail, setTodoDetail] = useState({
		...res,
		memo: res.memo || "",
		imageUrl: res.imageUrl || "",
	});
	const [isTodoDetailChanging, setIsTodoDetailChanging] = useState(false);
	const router = useRouter();

	useEffect(() => {
		function isChanged<T extends object>(obj1: T, obj2: T): boolean {
			return (Object.keys(obj1) as (keyof T)[]).some(key => {
				if (obj1[key] === null) {
					return obj2[key] !== "";
				}
				return obj1[key] !== obj2[key];
			});
		}
		setIsTodoDetailChanging(isChanged(res, todoDetail));
	}, [res, todoDetail]);

	function fileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		// 파일 검증
		if (e.target.files && e.target.files.length > 1) {
			return;
		}
		if (file.type.split("/")[0] !== "image") {
			return;
		}
		if (file.size > 5 * 1024 * 1024) {
			return;
		}
		if (!/^[a-zA-Z0-9_.-]+$/.test(file.name)) {
			return;
		}

		FileResizer.imageFileResizer(
			file,
			800,
			800,
			"JPEG",
			60,
			0,
			uri => {
				setTodoDetail({ ...todoDetail, imageUrl: uri as string });
			},
			"base64"
		);
	}

	function handleMemoChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setTodoDetail({ ...todoDetail, memo: e.target.value });
	}

	function handleMemoNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setTodoDetail({ ...todoDetail, name: e.target.value });
	}
	async function onClickDeleteButton() {
		await deleteTodo(todoDetail.id);
		router.push("/");
	}
	async function onClickCompleteButton() {
		await updateDetail(todoDetail.id, todoDetail);
		router.push("/");
	}
	function changeCompleteStatus() {
		setTodoDetail({ ...todoDetail, isCompleted: !todoDetail.isCompleted });
	}
	console.log(todoDetail);
	return (
		<>
			<DetailHeader
				todoDetail={todoDetail}
				changeCompleteStatus={changeCompleteStatus}
				handleMemoNameChange={handleMemoNameChange}
			/>
			<div className="flex flex-col desktop:flex-row gap-[15px] tablet:gap-[24px] ">
				<article
					style={{
						backgroundImage: todoDetail.imageUrl
							? `url(${todoDetail.imageUrl})`
							: "none",
					}}
					className={`flex bg-center bg-cover ${
						!todoDetail.imageUrl && "border-2 border-dashed border-primary-300"
					}  items-center justify-center relative  w-full desktop:max-w-[384px] h-[311px] bg-slate-50 rounded`}
				>
					{!todoDetail.imageUrl && <NextImage src={img} alt="img" />}
					<label htmlFor="file-input">
						<div
							className={`rounded-full cursor-pointer bottom-[16px] right-[16px] ${
								todoDetail.imageUrl
									? "bg-btn-edit border-2 border-primary-900"
									: "bg-primary-200"
							} absolute size-[64px] flex justify-center items-center`}
						>
							<NextImage
								src={todoDetail.imageUrl ? edit : plus_large}
								alt="edit"
							/>
						</div>
					</label>
					<input
						type="file"
						accept="image/*"
						className="hidden"
						id="file-input"
						onChange={fileInputChange}
					/>
				</article>
				<article
					className={`desktop:max-x-[588px] w-full h-[311px] rounded  bg-[url('/image/memo.svg')] flex flex-col py-[24px] px-[16px] items-center gap-[16px]`}
				>
					<NextImage
						src={memo_heading}
						alt="memo_heading"
						className="mb-[16px]"
					/>
					<textarea
						value={todoDetail.memo || ""}
						onChange={handleMemoChange}
						className="w-full h-[311px] outline-none bg-transparent overflow-y:auto scrollbar-thin resize-none scrollbar-thin scrollbar-thumb-amber-200"
					/>
				</article>
			</div>
			<div className="flex gap-[7px] tablet:gap-[16px] desktop:justify-end justify-center mt-[24px]">
				<button
					onClick={onClickCompleteButton}
					disabled={!isTodoDetailChanging}
					className={`w-[168px] h-[56px] flex items-center ${
						isTodoDetailChanging ? "bg-btn-complete" : "bg-primary-200"
					} justify-center  gap-[4px] rounded `}
				>
					<NextImage alt="plus" src={check} />
					<span>수정 완료</span>
				</button>
				<button
					onClick={onClickDeleteButton}
					className="w-[168px] text-small-semi text-white h-[56px] flex items-center justify-center  gap-[4px] rounded bg-btn-delete"
				>
					<NextImage alt="plus" src={x} />
					<span>삭제하기</span>
				</button>
			</div>
		</>
	);
}
