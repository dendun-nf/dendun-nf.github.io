import MediaCard from "./Card";

export default function TechStackSection() {
	return (
		<section className="flex flex-wrap max-w-fit w-full justify-center gap-2 p-4 overflow-hidden bg-slate-100">
			{/* // <section className="flex justify-items-center place-items-center bg-slate-100">
		// 	<div className="container flex gap-2 w-full"> */}
			<MediaCard
				key={"dotnet"}
				imgUrl={"dotnet.svg"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
			<MediaCard
				key={"dotnet"}
				imgUrl={"dotnet.svg"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
			<MediaCard
				key={"dotnet"}
				imgUrl={"dotnet.svg"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
			<MediaCard
				key={"dotnet"}
				imgUrl={"dotnet.svg"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
			<MediaCard
				key={"dotnet"}
				imgUrl={"dotnet.svg"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
			{/* </div> */}
		</section>
	);
}
