import React from "react";

import { Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Audience.module.scss";

import { typeAudience } from "@src/types/card/feature/audience";

export default function Audience({ data }: typeAudience) {
	return (
		<Stack gap={"md"} h={"100%"} className={classes.card}>
			<ThemeIcon size={48} radius={"xl"} className={classes.icon}>
				<data.icon size={24} stroke={2} />
			</ThemeIcon>
			<Title order={3} fz={"md"} className={classes.title}>
				{data.title}
			</Title>
			<Text component="p" fz={{ md: "xs", lg: "sm" }} className={classes.desc}>
				{data.desc}
			</Text>
		</Stack>
	);
}
