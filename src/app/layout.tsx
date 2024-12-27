import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={myFont.className}>{children}</body>
		</html>
	);
}
