import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
	return (
		<section className="bg-slate-500 text-orange-500 h-screen">
			<div className="flex flex-col justify-center items-center w-full h-full ">
				<div className="flex flex-col flex-wrap justify-center items-center">
					<div className="container p-1 text-center md:text-left">
						<h1 className="text-4xl uppercase font-extrabold">
							Hello&nbsp;
							<span className="text-orange-200">I am a Software Developer</span>
						</h1>
						<p className="text-xl text-orange-200">
							Based in Indonesia, Jakarta
						</p>
					</div>
					<div className="container flex justify-center gap-2 p-4 text-teal-100 md:justify-start">
						<a href="https://github.com" target="_blank" rel="noreferrer">
							<FontAwesomeIcon
								icon={faGithub}
								size="3x"
								className="hover:text-orange-200"
							/>
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faInstagram}
								size="3x"
								className="hover:text-orange-200"
							/>
						</a>
						<a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
							<FontAwesomeIcon
								icon={faLinkedin}
								size="3x"
								className="hover:text-orange-200"
							/>
						</a>
						<a href="https://www.facebook.com" target="_blank" rel="noreferrer">
							<FontAwesomeIcon
								icon={faFacebook}
								size="3x"
								className="hover:text-orange-200"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
