"use client";

import { TodoListDetailType } from "@/types";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import check from "../../../public/image/check.svg";
import x from "../../../public/image/x.svg";
import DetailHeader from "@/components/TodoDetail/DetailHeader";
import deleteTodo from "@/api/deleteTodo";
import { useRouter } from "next/navigation";
import updateDetail from "@/api/updateDetail";
import FileResizer from "react-image-file-resizer";
import DetailContent from "@/components/TodoDetail/DetailContent";

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
	function handleImageChange(uri: string) {
		setTodoDetail({ ...todoDetail, imageUrl: uri });
	}

	return (
		<>
			<DetailHeader
				todoDetail={todoDetail}
				changeCompleteStatus={changeCompleteStatus}
				handleMemoNameChange={handleMemoNameChange}
			/>
			<DetailContent
				imageUrl={todoDetail.imageUrl}
				memo={todoDetail.memo}
				onMemoChange={handleMemoChange}
				onImageChange={handleImageChange}
			/>
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
