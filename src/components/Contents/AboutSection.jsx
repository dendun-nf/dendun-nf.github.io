import { Typography } from "@mui/material";

export default function AboutSection() {
	return (
		<section
			id="about"
			className="grid grid-cols-1 p-4 gap-4 items-center md:grid-cols-2 bg-slate-200"
		>
			<div className="container flex flex-wrap flex-col">
				<Typography variant="h3" color="text.primary" fontWeight={"bold"}>
					About me
				</Typography>
				<Typography paragraph variant="p" color="text.secondary">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
					rerum dolorem quisquam maxime, quos laborum consectetur voluptas
					accusantium. Minus, deleniti praesentium cumque et quod suscipit
					perferendis quisquam. Et, numquam temporibus!
				</Typography>
			</div>
			<img
				className="rounded-xl"
				src="https://placehold.co/600x400/"
				alt="image"
			/>
		</section>
	);
}
