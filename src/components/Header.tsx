"use client";

import Image from "next/image";
import logo from "../../public/image/logo.svg";
import logo_doit from "../../public/image/logo_doit.svg";
export default function Header() {
	const handleLogoClick = () => {
		window.location.href = "/";
	};
	return (
		<header className="border absolute top-0 w-full border-b-primary-200 bg-white">
			<div className="container-main h-[60px] flex items-center">
				<button className="flex items-center" onClick={handleLogoClick}>
					<Image alt="logo" src={logo} />
					<Image className="hidden tablet:block" alt="logo" src={logo_doit} />
				</button>
			</div>
		</header>
	);
}
