import { TodoListDetailType } from "@/types";
import { useState, useEffect } from "react";

export default function useTodoDetail(
	initialDetail: Omit<TodoListDetailType, "tenantId">
) {
	const [todoDetail, setTodoDetail] = useState({
		...initialDetail,
		memo: initialDetail.memo || "",
		imageUrl: initialDetail.imageUrl || "",
	});
	const [isTodoDetailChanging, setIsTodoDetailChanging] = useState(false);

	useEffect(() => {
		function isChanged<T extends object>(obj1: T, obj2: T): boolean {
			return (Object.keys(obj1) as (keyof T)[]).some(key => {
				if (obj1[key] === null) {
					return obj2[key] !== "";
				}
				return obj1[key] !== obj2[key];
			});
		}
		setIsTodoDetailChanging(isChanged(initialDetail, todoDetail));
	}, [initialDetail, todoDetail]);

	function handleMemoChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setTodoDetail({ ...todoDetail, memo: e.target.value });
	}

	function handleMemoNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setTodoDetail({ ...todoDetail, name: e.target.value });
	}
	function changeCompleteStatus() {
		setTodoDetail({ ...todoDetail, isCompleted: !todoDetail.isCompleted });
	}
	function handleImageChange(uri: string) {
		setTodoDetail({ ...todoDetail, imageUrl: uri });
	}

	return {
		todoDetail,
		isTodoDetailChanging,
		handleMemoChange,
		handleMemoNameChange,
		changeCompleteStatus,
		handleImageChange,
	};
}
