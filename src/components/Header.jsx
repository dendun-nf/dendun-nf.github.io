import { faHome, faSection } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Headroom from "react-headroom";
import { IoMdPerson, IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);

	const handleClick = () => {
		setIsMenuToggled(!isMenuToggled);
	};

	// bug: on mobile, when toggle menu to expand the navigation bar, it's always unpinned
	return (
		// have bug, when on mobile it's toggled, and then proceed back to the deskop mode, it's never be unpinned
		<Headroom pin={isMenuToggled}>
			<header
				id="main-header"
				className="flex flex-col max-h-fit bg-slate-200 shadow-lg"
			>
				<div
					id="header-container"
					className="flex flex-row w-full justify-between items-center p-4 "
				>
					<IoMdPerson
						size={32}
						className="text-gray-700 hover:text-orange-600"
					/>
					<div id="desktop-nav" className="hidden lg:flex">
						<Navigation />
					</div>

					<button className="lg:hidden" onClick={handleClick}>
						{isMenuToggled ? <IoMdClose /> : <IoMenuSharp />}
					</button>
				</div>

				<div id="mobile-nav" className="lg:hidden">
					{isMenuToggled && <Navigation />}
				</div>
			</header>
		</Headroom>
	);
};

const Navigation = () => {
	return (
		<nav className="p-4">
			<ul className="flex flex-col items-center gap-4 lg:flex-row lg:justify-start">
				<li>
					<a href="#" className="font-bold hover:text-orange-500">
						<FontAwesomeIcon icon={faHome} /> Home
					</a>
				</li>
				<li>
					<a href="#" className="font-bold hover:text-orange-500">
						<FontAwesomeIcon icon={faSection} /> Placeholder
					</a>
				</li>
				<li>
					<a href="#" className="font-bold hover:text-orange-500">
						<FontAwesomeIcon icon={faSection} /> Placeholder
					</a>
				</li>
				<li>
					<a href="#" className="font-bold hover:text-orange-500">
						<FontAwesomeIcon icon={faSection} /> Placeholder
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
