import { TodoDetailType } from "@/types";
import { useState, useEffect } from "react";

export default function useTodoDetail(initialDetail: TodoDetailType) {
	// 상세 정보 중 memo와 imageUrl이 null 값인 경우 ''로 바꿔서 저장
	const [todoDetail, setTodoDetail] = useState({
		...initialDetail,
		memo: initialDetail.memo || "",
		imageUrl: initialDetail.imageUrl || "",
	});
	// 상세 정보를 수정중인지를 나타내는 상태
	const [isTodoDetailChanging, setIsTodoDetailChanging] = useState(false);

	// 상세 정보를 수정했을 경우 기존 상세 정보와 차이가 있는지 확인
	function isChanged<T extends object>(obj1: T, obj2: T): boolean {
		return (Object.keys(obj1) as (keyof T)[]).some(key => {
			if (obj1[key] === null) {
				return obj2[key] !== "";
			}
			return obj1[key] !== obj2[key];
		});
	}

	// 상태중 memo를 바꾸는 함수
	function handleMemoChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setTodoDetail({ ...todoDetail, memo: e.target.value });
	}

	// 상태 중 name을 바꾸는 함수
	function handleMemoNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setTodoDetail({ ...todoDetail, name: e.target.value });
	}
	// 상태 중 isCompleted를 바꾸는 함수
	function changeCompleteStatus() {
		setTodoDetail({ ...todoDetail, isCompleted: !todoDetail.isCompleted });
	}
	// 상태 중 imageUrl를 바꾸는 함수
	function handleImageChange(uri: string) {
		setTodoDetail({ ...todoDetail, imageUrl: uri });
	}

	// todoDetail이 바뀌었을 경우 바뀐 부분을 확인해 현재 상세정보를 변경 상태를 바꿈.
	useEffect(() => {
		setIsTodoDetailChanging(isChanged(initialDetail, todoDetail));
		if (todoDetail.name === "") {
			setIsTodoDetailChanging(false);
		}
	}, [initialDetail, todoDetail]);

	return {
		todoDetail,
		isTodoDetailChanging,
		handleMemoChange,
		handleMemoNameChange,
		changeCompleteStatus,
		handleImageChange,
	};
}
