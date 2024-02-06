import React from "react";

import { Box, Image } from "@mantine/core";

interface typeOverlay {
	image1: string;
	image2: string;
	height?: number | undefined;
}

export default function ImageOverlay({ image1, image2, height }: typeOverlay) {
	return (
		<Box style={{ position: "relative" }} w={"100%"} h={height}>
			<Image
				src={image1}
				w={"80%"}
				style={(theme) => ({
					boxShadow: theme.shadows.xl,
					position: "absolute",
					top: 0,
					left: 0,
				})}
				alt={`${image1} overlay`}
			/>
			<Image
				src={image2}
				w={"80%"}
				style={(theme) => ({
					boxShadow: theme.shadows.xl,
					position: "absolute",
					bottom: 0,
					right: 0,
				})}
				alt={`${image1} 2 overlay`}
			/>
		</Box>
	);
}
