import React from "react";

import { Box, Center, Image, Spoiler, Text } from "@mantine/core";

import classes from "./Exhibitor.module.scss";

import { typeExhibitor } from "@src/types/card";

export default function Exhibitor({ data, w }: typeExhibitor) {
	return (
		<Box pos={"relative"} className={classes.card}>
			<Center className={classes.content}>
				<Spoiler maxHeight={92} showLabel={"show"} hideLabel={"hide"}>
					{data.desc}
				</Spoiler>
			</Center>
			<Center className={classes.image}>
				<Image src={data.img} alt={data.name} w={w} />
			</Center>
		</Box>
	);
}
