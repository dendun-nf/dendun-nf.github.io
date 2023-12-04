import AboutSection from "./Contents/AboutSection";
import HeroSection from "./Contents/HeroSection";
import TechStackSection from "./Contents/TechStackSection";

const Content = () => {
	return (
		<main className="grid grid-cols-1 gap-0">
			<HeroSection />
			<AboutSection />
			<TechStackSection />
		</main>
	);
};

export default Content;
