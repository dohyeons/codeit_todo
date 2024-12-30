"use client";

import { TodoListDetailType } from "@/types";
import { useEffect, useState } from "react";
import DetailHeader from "@/components/TodoDetail/DetailHeader";
import deleteTodo from "@/api/deleteTodo";
import { useRouter } from "next/navigation";
import updateDetail from "@/api/updateDetail";
import DetailContent from "@/components/TodoDetail/DetailContent";
import ActionButtons from "@/components/TodoDetail/ActionButtons";

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
			<ActionButtons
				onComplete={onClickCompleteButton}
				onDelete={onClickDeleteButton}
				isCompleteDisabled={!isTodoDetailChanging}
			/>
		</>
	);
}
