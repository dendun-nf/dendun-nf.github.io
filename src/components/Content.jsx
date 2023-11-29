const Content = () => {
	return (
		<main className="grid grid-cols-1">
			<section className="bg-slate-500 text-orange-500 h-screen">
				<div className="flex flex-col justify-center items-center w-full h-full ">
					<div className="flex flex-col">
						<h1 className="text-4xl uppercase font-extrabold">
							Hello&nbsp;
							<span className="text-orange-200">I am a Software Developer</span>
						</h1>
						<p className="text-xl text-orange-200">
							Based in Indonesia, Jakarta
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Content;
