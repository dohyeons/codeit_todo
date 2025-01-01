import { useEffect, useState } from "react";

//상세 정보의 name을 렌더링하고 변경하는 컴포넌트
export default function DetailInput({
	name,
	handleMemoNameChange,
}: {
	name: string; // 상세 정보의 제목
	handleMemoNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 상세 정보의 제목을 변경하는 함수
}) {
	// input의 길이를 넣기 위한 상태
	const [inputWidth, setInputWidth] = useState(0);
	// 한 글자의 길이설정
	const unit = 18;

	// input의 길이를 바꾸는 함수
	function resize() {
		// 글자 길이에 맞춰 필요한 input길이를 계산해 설정
		const newWidth = (name?.length + 1) * unit;
		setInputWidth(newWidth);
	}

	useEffect(() => {
		// 이름을 변경할 때마다 해당 함수를 실행
		resize();
	}, [name]);

	return (
		<input
			// 인풋 길이를 name길이에 맞춰 바꿔줌.
			style={{ width: `${inputWidth}px` }}
			className={`text-large bg-transparent underline decoration-1 underline-offset-2`}
			type="text"
			value={name}
			onChange={handleMemoNameChange}
		/>
	);
}
