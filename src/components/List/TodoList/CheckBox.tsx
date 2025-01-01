"use client";

import Image from "next/image";
import checkbox_done from "../../../../public/image/checkbox_done.svg";
import checkbox_todo from "../../../../public/image/checkbox_todo.svg";
import toggleComplete from "@/api/toggleComplete";

export default function CheckBox({
	isDone,
	id,
	activeToggle = true,
	customFunction,
}: {
	isDone: boolean;
	id: number;
	activeToggle?: boolean;
	customFunction: () => void;
}) {
	async function handleCheckBoxClick() {
		if (activeToggle) {
			await toggleComplete(isDone, id);
		}
		customFunction();
	}

	return (
		<button onClick={handleCheckBoxClick}>
			<Image src={isDone ? checkbox_done : checkbox_todo} alt="checkbox_done" />
		</button>
	);
}
