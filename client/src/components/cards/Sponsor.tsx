import React from "react";

import { Box, Center, Image, Text } from "@mantine/core";

import classes from "./Sponsor.module.scss";

import { typeSponsor } from "@src/types/card";

export default function Sponsor({ data }: typeSponsor) {
	return (
		<Center className={classes.card}>
			<Image src={data.img} alt={data.name} w={data.width ? data.width : "40%"} py={"xl"} />
			<Box className={classes.name}>
				<Text className={classes.name}>{data.name}</Text>
			</Box>
		</Center>
	);
}
