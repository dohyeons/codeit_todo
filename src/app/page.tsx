import Image from "next/image";
import plus from "../../public/image/plus.svg";
export default function Home() {
	return (
		<div className="container-main">
			<div className="flex gap-[8px] tablet:gap-[16px] h-input-btn">
				<input
					className="w-full max-w-[1016px] rounded bg-primary-100 placeholder:text-primary-500 "
					placeholder="할 일을 입력해주세요"
				/>
				<button className="min-w-[56px] flex items-center justify-center tablet:min-w-[168px] gap-[4px] rounded bg-primary-200">
					<Image alt="plus" src={plus} />
					<span className="hidden tablet:block">추가하기</span>
				</button>
			</div>
			<div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px]">
				<section>첫번째 콘텐츠</section>
				<section>두번째 콘텐츠</section>
			</div>
		</div>
	);
}
