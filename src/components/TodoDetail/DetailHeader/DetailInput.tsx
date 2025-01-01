import { useEffect, useState } from "react";

export default function DetailInput({
	name,
	handleMemoNameChange,
}: {
	name: string;
	handleMemoNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	const [inputWidth, setInputWidth] = useState(0);
	const unit = 18;

	function resize() {
		const newWidth = (name?.length + 1) * unit;
		setInputWidth(newWidth);
	}

	useEffect(() => {
		resize();
	}, [name]);

	return (
		<input
			style={{ width: `${inputWidth}px` }}
			className={`text-large bg-transparent underline decoration-1 underline-offset-2`}
			type="text"
			value={name}
			onChange={handleMemoNameChange}
		/>
	);
}
