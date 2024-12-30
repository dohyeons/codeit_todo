import Image from "next/image";
import memo_heading from "../../../../public/image/memo_heading.svg";

export default function DetailMemo({
	memo,
	onMemoChange,
}: {
	memo: string;
	onMemoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
	return (
		<article
			className={`desktop:max-x-[588px] w-full h-[311px] rounded  bg-[url('/image/memo.svg')] flex flex-col py-[24px] px-[16px] items-center gap-[16px]`}
		>
			<Image src={memo_heading} alt="memo_heading" className="mb-[16px]" />
			<textarea
				value={memo}
				onChange={onMemoChange}
				className="w-full h-[311px] outline-none bg-transparent overflow-y:auto scrollbar-thin resize-none scrollbar-thin scrollbar-thumb-amber-200"
			/>
		</article>
	);
}
