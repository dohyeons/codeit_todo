"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/image/logo.svg";
import logo_doit from "../../public/image/logo_doit.svg";
export default function Header() {
	const router = useRouter();

	const handleLogoClick = () => {
		router.push("/");
		router.refresh();
	};
	return (
		<header className="border border-b-primary-200 bg-white">
			<div className="max-w-content container h-[60px] flex items-center">
				<button className="flex items-center" onClick={handleLogoClick}>
					<Image alt="logo" src={logo} />
					<Image className="hidden tablet:block" alt="logo" src={logo_doit} />
				</button>
			</div>
		</header>
	);
}
