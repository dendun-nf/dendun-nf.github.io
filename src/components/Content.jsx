/* eslint-disable react/prop-types */
const Content = ({ className }) => {
	return (
		<main className={className}>
			<div>
				{/* hero section */}
				<section id="hero" className="container flex-wrapper header">
					<h1 className="center">
						Hello <span className="highlight">I am a Software Developer</span>
					</h1>
					<p>Based in Indonesia, Jakarta</p>
					<p className="notice">Not Support Mobile View</p>
				</section>
				{/* about section */}
				<section id="about" className="container flex-row">
					<div className="container">
						<h2>About Me</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
							impedit velit dolorem magnam deleniti assumenda a quod sapiente
							officia quisquam!
						</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
					</div>
					<img
						src="https://i.ibb.co/NWmhN9w/vecteezy-software-engineer-png-graphic-clipart-design-20962986-172.png"
						alt="vecteezy-software-engineer-png-graphic-clipart-design-20962986-172"
					/>
				</section>
				{/* Technologies Stacks */}
				<section id="tech-stacks" className="container">
					<h2>Tech Stacks</h2>
					<div className="container flex-row flex-wrapper">
						<div className="card">
							<h3>Js &amp; Reactjs</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className="card">
							<h3>C# &amp; .Net</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className="card">
							<h3>Java &amp; Spring</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className="card">
							<h3>Git &amp; Github/Gitlab</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className="card">
							<h3>SQL &amp; Postresql</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className="card">
							<h3>Docker</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className="card">
							<h3>Kubernetes</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className="card">
							<h3>Redis</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
					</div>
				</section>
				{/* contact section */}
				<section id="contact" className="container">
					<h2>Contact Me</h2>
					<ul>
						<li>
							<a href="https://github.com" target="_blank" rel="noreferrer">
								Github
							</a>
						</li>
						<li>
							<a href="https://linkedin.com" target="_blank" rel="noreferrer">
								Linkedin
							</a>
						</li>
						<li>
							<a href="https://twitter.com" target="_blank" rel="noreferrer">
								Twitter
							</a>
						</li>
						<li>
							<a href="https://instagram.com" target="_blank" rel="noreferrer">
								Instagram
							</a>
						</li>
					</ul>
				</section>
			</div>
		</main>
	);
};

export default Content;
