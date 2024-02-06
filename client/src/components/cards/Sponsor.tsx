import React from "react";

import { Box, Center, Image, Text } from "@mantine/core";

import classes from "./Sponsor.module.scss";

import { typeSponsor } from "@src/types/card";

export default function Sponsor({ data }: typeSponsor) {
	return (
		<Center bg={"white"} h={"100%"} pos={"relative"} className={classes.card}>
			<Image src={data.img} alt={data.name} w={data.width ? data.width : "40%"} py={"xl"} />
			<Box className={classes.name} pos={"absolute"} left={0} bottom={10} right={0}>
				<Text
					component="p"
					tt={"uppercase"}
					ta={"center"}
					fz={"xs"}
					fw={500}
					c={"gray.6"}
					lts={2}
					className={classes.name}
				>
					{data.name}
				</Text>
			</Box>
		</Center>
	);
}
