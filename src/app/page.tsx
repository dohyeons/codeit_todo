import Image from "next/image";
import plus from "../../public/image/plus.svg";
import List from "@/components/List";

export default function Home() {
	return (
		<div className="container-main">
			<div className="flex gap-[8px] tablet:gap-[16px] h-input-btn mb-[24px] tablet:mb-[40px]">
				<input
					className="w-full max-w-[1016px] rounded bg-primary-100 placeholder:text-primary-500 "
					placeholder="할 일을 입력해주세요"
				/>
				<button className="min-w-[56px] flex items-center justify-center tablet:min-w-[168px] gap-[4px] rounded bg-primary-200">
					<Image alt="plus" src={plus} />
					<span className="hidden tablet:block">추가하기</span>
				</button>
			</div>
			<List />
		</div>
	);
}
