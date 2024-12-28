import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

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
				<div className="min-h-screen flex flex-col bg-gray-50">
					<Header />
					<main className="container max-w-content">{children}</main>
				</div>
			</body>
		</html>
	);
}
