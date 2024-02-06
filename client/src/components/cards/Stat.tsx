import React from "react";

import { AspectRatio, Center, Stack, Text } from "@mantine/core";

import classes from "./Stat.module.scss";

import { typeStat } from "@src/types/card";

export default function Stat({ data }: typeStat) {
	return (
		<Stack align="center" className={classes.card}>
			<Center className={classes.stat} p={40}>
				<AspectRatio ratio={1 / 1}>
					<Text fz={"xl"} fw={700} className={classes.value}>
						{data.value + "+"}
					</Text>
				</AspectRatio>
			</Center>
			<Text fw={500} fz={"sm"}>
				{data.stat}
			</Text>
		</Stack>
	);
}
