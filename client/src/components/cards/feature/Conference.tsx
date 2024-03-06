import React from "react";

import { Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Conference.module.scss";

import { typeConference } from "@src/types/card/feature/conference";

export default function Conference({ data }: typeConference) {
	return (
		<Stack gap={"md"} className={classes.card}>
			<ThemeIcon size={48} className={classes.icon}>
				<data.icon size={24} stroke={2} />
			</ThemeIcon>
			<Title order={3} fz={"md"} className={classes.title}>
				{data.title}
			</Title>
			<Text fz={{ md: "xs", lg: "sm" }} w={{ md: "80%" }} className={classes.desc}>
				{data.desc}
			</Text>
		</Stack>
	);
}
