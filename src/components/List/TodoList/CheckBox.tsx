"use client";

import Image from "next/image";
import checkbox_done from "../../../../public/image/checkbox_done.svg";
import checkbox_todo from "../../../../public/image/checkbox_todo.svg";
import toggleComplete from "@/api/toggleComplete";

export default function CheckBox({
	isDone,
	id,
	refetchTodos,
}: {
	isDone: boolean;
	id: number;
	refetchTodos: () => void;
}) {
	return (
		<button
			onClick={async () => {
				await toggleComplete(isDone, id);
				refetchTodos();
			}}
		>
			<Image src={isDone ? checkbox_done : checkbox_todo} alt="checkbox_done" />
		</button>
	);
}
