import React from "react";

import { Anchor, Divider, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Contact.module.scss";

import { typeContact } from "@src/types/card";

export default function Contact({ data }: typeContact) {
	return (
		<Stack align="center" gap={"lg"} className={classes.card}>
			<ThemeIcon size={96} color="sec" className={classes.icon}>
				<data.icon size={40} stroke={1} />
			</ThemeIcon>
			<Title order={3} className={classes.title}>
				{data.title}
			</Title>
			<Divider w={"50%"} color="pri.6" />
			{data.desc && (
				<Stack gap={"xs"} align="center" ta={"center"}>
					{data.desc.map(item => (
						<Anchor key={item.link} className={classes.link} href={item.link} title={item.label}>
							{item.label}
						</Anchor>
					))}
				</Stack>
			)}
		</Stack>
	);
}
