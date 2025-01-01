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
	isDone: boolean; // todo 목록인지 done 목록인지
	id: number; // todo id
	activeToggle?: boolean; // 토글로 요청을 보낼 것인지
	customFunction: () => void; // 토글을 눌렀을 때 반드시 실행될 함수
}) {
	// 버튼 클릭 시 작동하는 함수. 항목의 완료 상태를 바꿈.
	async function handleCheckBoxClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.stopPropagation();
		try {
			// 만약 activeToggle이 true인 경우 완료 상태를 바꿈
			if (activeToggle) {
				await toggleComplete(isDone, id);
			}
			// 전달받은 함수를 실행
			customFunction();
		} catch {
			// 에러 발생 시 alert 띄우기
			window.alert("상태 변경 요청이 실패했습니다.");
		}
	}

	return (
		<button onClick={handleCheckBoxClick}>
			{/* 버튼 이미지 렌더링 */}
			<Image src={isDone ? checkbox_done : checkbox_todo} alt="checkbox_done" />
		</button>
	);
}
