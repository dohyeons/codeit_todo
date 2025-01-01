"use client";

import addTodo from "@/api/addTodo";
import AddButton from "@/components/InputForm/AddButton";
import AddInput from "@/components/InputForm/AddInput";
import { useState } from "react";

export default function InputForm({ onAdd }: { onAdd: () => void }) {
	// 인풋 값을 관리하는 상태
	const [inputValue, setInputValue] = useState("");
	// 인풋 값을 변경하는 함수
	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
	}
	// 새로운 todo를 만들기 위해 버튼을 클릭하는 함수
	async function handleSubmit() {
		// 인풋이 비었을 경우 작동하지 않음.
		if (!inputValue.trim()) return;

		try {
			// 새로운 todo를 만들기 위한 api 요청
			await addTodo(inputValue);
			// 인풋을 정리
			setInputValue("");
			// todo를 새로 생성했을 경우 todo를 다시 가져오는 함수를 실행
			onAdd();
		} catch {
			// 위 과정에서 에러가 발생하면 alert 띄우기
			window.alert("요청에 실패했습니다.");
		}
	}

	// 엔터를 눌렀을 때도 같은 작동
	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			handleSubmit();
		}
	}
	return (
		<div className="flex gap-[8px] tablet:gap-[16px] h-input-btn mb-[24px] tablet:mb-[40px]">
			{/* 새로운 todo의 제목을 입력하는 인풋 */}
			<AddInput
				value={inputValue}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
			/>
			{/* 새로운 todo를 만들기 위한 버튼 */}
			<AddButton onClick={handleSubmit} value={inputValue} />
		</div>
	);
}
