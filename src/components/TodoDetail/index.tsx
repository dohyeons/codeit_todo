"use client";

import { TodoListDetailType } from "@/types";
import DetailHeader from "@/components/TodoDetail/DetailHeader";
import deleteTodo from "@/api/deleteTodo";
import { useRouter } from "next/navigation";
import updateDetail from "@/api/updateDetail";
import DetailContent from "@/components/TodoDetail/DetailContent";
import ActionButtons from "@/components/TodoDetail/ActionButtons";
import useTodoDetail from "@/hooks/useTodoDetail";

// 상세 목록을 렌더링하는 컴포넌트
export default function TodoDetail({
	initialTodoDetail: { tenantId, ...res }, // 상세정보 중 tenantId를 제외한 나머지를 res에 저장
}: {
	initialTodoDetail: TodoListDetailType;
}) {
	// 상세정보를 관리하는 hook
	const {
		todoDetail,
		isTodoDetailChanging,
		handleImageChange,
		handleMemoChange,
		handleMemoNameChange,
		changeCompleteStatus,
	} = useTodoDetail(res);

	// 라우팅을 위한 hook
	const router = useRouter();

	// 삭제 버튼을 눌렀을 때 삭제 요청을 보내는 함수
	async function onClickDeleteButton() {
		try {
			// 삭제 요청을 성공적으로 보내면 '/' 로 이동
			await deleteTodo(todoDetail.id);
			router.push("/");
		} catch {
			// 실패했을 경우 alert띄우기
			window.alert("삭제 요청이 실패했습니다.");
		}
	}

	// 수정완료 버튼을 눌렀을 때 수정 요청을 보내는 함수
	async function onClickCompleteButton() {
		try {
			// 성공적으로 수정 요청을 완료하면 '/;로 이동
			await updateDetail(todoDetail.id, todoDetail);
			router.push("/");
		} catch {
			// 실패했을 때 alert 띄우기
			window.alert("수정 요청이 실패했습니다.");
		}
	}

	return (
		<>
			{/* 상세 정보 중 name및 완료 상태인지를 렌더링하는 컴포넌트 */}
			<DetailHeader
				todoDetail={todoDetail}
				changeCompleteStatus={changeCompleteStatus}
				handleMemoNameChange={handleMemoNameChange}
			/>
			{/* 상세 정보 중 memo와 imageUrl에 따른 image를 렌더링하는 컴포넌트 */}
			<DetailContent
				imageUrl={todoDetail.imageUrl}
				memo={todoDetail.memo}
				onMemoChange={handleMemoChange}
				onImageChange={handleImageChange}
			/>
			{/* 상세 정보 수정버튼과 삭제 버튼을 렌더링하는 컴포넌트 */}
			<ActionButtons
				onComplete={onClickCompleteButton}
				onDelete={onClickDeleteButton}
				isCompleteDisabled={!isTodoDetailChanging}
			/>
		</>
	);
}
