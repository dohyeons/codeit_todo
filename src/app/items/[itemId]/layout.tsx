// 상세사항 페이지에 적용될 공통 레이아웃 컴포넌트
export default function ItemsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="max-w-content mx-auto w-full min-h-screen pt-[76px] tablet:pt-[84px] px-[16px] desktop:px-[102px] tablet:px-[24px] bg-white">
			{children}
		</main>
	);
}
