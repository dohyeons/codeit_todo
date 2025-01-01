"use client";

import addTodo from "@/api/addTodo";
import AddButton from "@/components/InputForm/AddButton";
import AddInput from "@/components/InputForm/AddInput";
import { useState } from "react";

export default function InputForm({ onAdd }: { onAdd: () => void }) {
	const [inputValue, setInputValue] = useState("");

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
	}

	async function handleSubmit() {
		if (!inputValue.trim()) return;

		try {
			await addTodo(inputValue);
			setInputValue("");
			onAdd();
		} catch {
			window.alert("요청에 실패했습니다.");
		}
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			handleSubmit();
		}
	}
	return (
		<div className="flex gap-[8px] tablet:gap-[16px] h-input-btn mb-[24px] tablet:mb-[40px]">
			<AddInput
				value={inputValue}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
			/>
			<AddButton onClick={handleSubmit} value={inputValue} />
		</div>
	);
}
