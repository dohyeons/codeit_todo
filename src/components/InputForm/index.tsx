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

		await addTodo(inputValue);
		setInputValue("");
		onAdd();
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
			<AddButton onClick={handleSubmit} />
		</div>
	);
}
