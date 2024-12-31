export default function AddInput({
	value,
	onChange,
	onKeyDown,
}: {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
	return (
		<input
			className="w-full max-w-[1016px] pl-[24px] rounded bg-primary-100 placeholder:text-primary-500 shadow-inside "
			placeholder="할 일을 입력해주세요"
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
}
