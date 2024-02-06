import React from "react";

import { Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Attend.module.scss";

import { typeAttend } from "@src/types/card/feature/attend";

export default function Attend({ data }: typeAttend) {
	return (
		<Stack gap={"md"} className={classes.card} h={"100%"}>
			<ThemeIcon size={64} radius={99} className={classes.icon}>
				<data.icon size={40} stroke={1} />
			</ThemeIcon>
			<Title order={3} className={classes.title} fz={"sm"} tt={"uppercase"}>
				{data.title}
			</Title>
			<Text component="p" fz={{ md: "xs", lg: "sm" }} style={{ zIndex: 1 }} w={{ md: "80%" }}>
				{data.desc}
			</Text>
		</Stack>
	);
}
