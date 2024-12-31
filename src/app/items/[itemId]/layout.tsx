export default function ItemsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="container-main w-full min-h-screen pt-[76px] tablet:pt-[84px] px-[102px] bg-white">
			{children}
		</main>
	);
}
