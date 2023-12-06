import MediaCard from "./Card";

export default function TechStackSection() {
	return (
		<section
			className="grid grid-cols-auto gap-4 p-4 overflow-auto place-items-center bg-slate-100"
			id="section"
		>
			<MediaCard
				key={"card-1"}
				imgUrl={"https://placehold.co/600x400/#64748B/FFF"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
			<MediaCard
				key={"card-2"}
				imgUrl={"https://placehold.co/600x400/#64748B/FFF"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
			<MediaCard
				key={"card-3"}
				imgUrl={"https://placehold.co/600x400/#64748B/FFF"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
			<MediaCard
				key={"card-4"}
				imgUrl={"https://placehold.co/600x400/#64748B/FFF"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
			<MediaCard
				key={"card-5"}
				imgUrl={"https://placehold.co/600x400/#64748B/FFF"}
				title={"Lorem"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum dolorem quisquam maxime, quos laborum consectetur voluptas accusantium. Minus, deleniti praesentium cumque et quod suscipit perferendis quisquam. Et, numquam temporibus!"
				}
			/>
		</section>
	);
}
