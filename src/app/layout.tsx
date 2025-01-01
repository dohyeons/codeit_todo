import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

// 폰트 적용
const myFont = localFont({
	src: [
		{
			path: "../../public/font/nanum-square/NanumSquareR.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/font/nanum-square/NanumSquareB.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/font/nanum-square/NanumSquareB.ttf",
			weight: "800",
			style: "normal",
		},
	],
});
// 페이지 제목 및 설명 설정
export const metadata: Metadata = {
	title: "codeit_todo",
	description: "코드잇 투두리스트",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<body className={myFont.className}>
				<div className="flex relative flex-col bg-gray-50">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
