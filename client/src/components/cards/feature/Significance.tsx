import React from "react";

import { Divider, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Significance.module.scss";

import { typeSignificance } from "@src/types/card/feature/significance";

export default function Significance({ data }: typeSignificance) {
	return (
		<Stack gap={"md"} h={"100%"} className={classes.card}>
			<ThemeIcon size={64} radius={"xl"} variant="light" className={classes.icon}>
				<data.icon size={32} stroke={1} />
			</ThemeIcon>
			<Title order={3} className={classes.title} fz={"md"} tt={"uppercase"}>
				{data.title}
			</Title>
			<Divider color="pri.6" size={"sm"} className={classes.divider} />
			<Text component="p" fz={{ md: "xs", lg: "sm" }}>
				{data.desc}
			</Text>
		</Stack>
	);
}
