import React from "react";

import { Box, Center, Image, Text } from "@mantine/core";

import classes from "./Exhibitor.module.scss";

import { typeExhibitor } from "@src/types/card";

export default function Exhibitor({ data, w }: typeExhibitor) {
	return (
		<Box pos={"relative"} h={"100%"} className={classes.card}>
			<Center mih={240}>
				<Image src={data.img} alt={data.name} w={w} />
			</Center>
			<Center>
				<Text component="p" tt={"uppercase"} ta={"center"} fz={"xs"} fw={500} c={"gray.6"} lts={2}>
					{data.desc}
				</Text>
			</Center>
		</Box>
	);
}
