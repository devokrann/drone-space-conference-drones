import React from "react";

import { Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Objective.module.scss";

import { typeObjective } from "@src/types/card/feature/objective";

export default function Objective({ data }: typeObjective) {
	return (
		<Stack gap={"md"} h={"100%"} className={classes.card}>
			{data.icon && (
				<ThemeIcon size={64} radius={"xl"} variant="transparent" className={classes.icon}>
					<data.icon size={40} stroke={1} />
				</ThemeIcon>
			)}
			<Title order={3} className={classes.title} fz={"md"} tt={"uppercase"}>
				{data.title}
			</Title>
			<Text component="p" fz={{ md: "xs", lg: "sm" }}>
				{data.desc}
			</Text>
			<div className={classes.overlay}></div>
		</Stack>
	);
}
