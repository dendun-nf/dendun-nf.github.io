import { faHome, faSection } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headroom from "react-headroom";
import { IoMdPerson } from "react-icons/io";

const Header = () => {
	return (
		<Headroom>
			<header
				id="main-header"
				className="flex flex-col w-full justify-between items-center p-4 max-h-fit bg-slate-200 shadow-lg lg:flex-row"
			>
				<IoMdPerson size={32} className="text-gray-700 hover:text-orange-600" />
				<Navigation />
			</header>
		</Headroom>
	);
};

const Navigation = () => {
	return (
		<nav className="p-4">
			<ul className="flex flex-col gap-2 lg:flex-row">
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
