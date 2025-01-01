"use client";

import { TodoListDetailType } from "@/types";
import DetailHeader from "@/components/TodoDetail/DetailHeader";
import deleteTodo from "@/api/deleteTodo";
import { useRouter } from "next/navigation";
import updateDetail from "@/api/updateDetail";
import DetailContent from "@/components/TodoDetail/DetailContent";
import ActionButtons from "@/components/TodoDetail/ActionButtons";
import useTodoDetail from "@/hooks/useTodoDetail";

export default function TodoDetail({
	initialTodoDetail: { tenantId, ...res },
}: {
	initialTodoDetail: TodoListDetailType;
}) {
	const {
		todoDetail,
		isTodoDetailChanging,
		handleImageChange,
		handleMemoChange,
		handleMemoNameChange,
		changeCompleteStatus,
	} = useTodoDetail(res);
	const router = useRouter();

	async function onClickDeleteButton() {
		try {
			await deleteTodo(todoDetail.id);
			router.push("/");
		} catch {
			window.alert("삭제 요청이 실패했습니다.");
		}
	}
	async function onClickCompleteButton() {
		await updateDetail(todoDetail.id, todoDetail);
		router.push("/");
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
