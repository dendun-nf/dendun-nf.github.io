/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ imgUrl, title, description }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{
					height: 140,
					bgcolor: "grey",
					":hover": {
						cursor: "pointer",
					},
				}}
				image={imgUrl}
				title={title}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
}
