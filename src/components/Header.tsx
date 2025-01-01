"use client";

import Image from "next/image";
import logo from "../../public/image/logo.svg";
import logo_doit from "../../public/image/logo_doit.svg";

// 페이지 전체에 적용되는 헤더 컴포넌트
export default function Header() {
	// 로고 클릭 시 '/'로 이동하는 함수
	const handleLogoClick = () => {
		window.location.href = "/";
	};
	return (
		<header className="border absolute top-0 w-full border-b-primary-200 bg-white">
			<div className="container-main h-[60px] flex items-center">
				{/* 로고 클릭시 '/'로 이동 */}
				<button className="flex items-center" onClick={handleLogoClick}>
					<Image alt="logo" src={logo} />
					<Image className="hidden tablet:block" alt="logo" src={logo_doit} />
				</button>
			</div>
		</header>
	);
}
