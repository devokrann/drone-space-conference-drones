import React from "react";

import { Center, Image, Stack, Text, ThemeIcon } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Social.module.scss";

import { typeSocial } from "@src/types/card";

export default function Social({ data }: typeSocial) {
	return (
		<Stack align="center" className={classes.card}>
			<Center className={classes.stat} p={16} component="a" href={data.link} target="_blank">
				<Image src={data.icon} w={40} h={40} />
			</Center>
			<Stack gap={0}>
				<Text fw={500} fz={"sm"}>
					{data.label}
				</Text>
				{data.tag && (
					<Text fw={500} fz={"sm"}>
						#{data.tag}
					</Text>
				)}
			</Stack>
		</Stack>
	);
}
