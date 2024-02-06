import React from "react";
import { Link } from "react-router-dom";

import { Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon, IconArrowRight } from "@tabler/icons-react";

import classes from "./Section.module.scss";

import { typeSection } from "@src/types/card/feature/section";

export default function Section({ data }: typeSection) {
	return (
		<Stack align="end" gap={"xs"} justify="space-between" className={classes.card} h={"100%"}>
			<Stack gap={"md"}>
				<ThemeIcon size={64} radius={99} className={classes.icon}>
					<data.icon size={32} stroke={1} />
				</ThemeIcon>
				<Title order={3} className={classes.title} fz={"sm"} tt={"uppercase"}>
					{data.title}
				</Title>
				<Text component="p" fz={{ md: "xs", lg: "sm" }} style={{ zIndex: 1 }} w={{ md: "80%" }}>
					{data.desc}
				</Text>
			</Stack>
			<Link to={data.links.link} className={classes.link}>
				<Group align="center" gap={0}>
					<Text component="span" className={classes.span}>
						Go to {data.title}
					</Text>
					<IconArrowRight size={16} stroke={2} className={classes.arrow} />
				</Group>
			</Link>
		</Stack>
	);
}
