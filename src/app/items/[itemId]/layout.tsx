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
