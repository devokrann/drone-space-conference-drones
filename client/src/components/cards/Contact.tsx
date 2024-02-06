import React from "react";

import { Anchor, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Contact.module.scss";

import { typeContact } from "@src/types/card";

export default function Contact({ data }: typeContact) {
	return (
		<Stack align="center" gap={"md"} className={classes.card} bg={"sec"} p={"xl"} h={"100%"} c={"white"}>
			<ThemeIcon size={96} radius={99} variant="outline" className={classes.icon}>
				<data.icon size={40} stroke={1} />
			</ThemeIcon>
			<Title order={3} className={classes.title} fz={"sm"} tt={"uppercase"} ta={"center"}>
				{data.title}
			</Title>
			{data.desc && (
				<Stack gap={0} align="center">
					{data.desc.map(item =>
						item.title ? (
							<Text component="p" fz={"xs"}>
								{item.title}:{" "}
								<Anchor className={classes.link} href={item.link} fz={"inherit"} fw={500}>
									{item.label}
								</Anchor>
							</Text>
						) : (
							<Anchor className={classes.link} href={item.link} fz={"xs"} fw={500}>
								{item.label}
							</Anchor>
						)
					)}
				</Stack>
			)}
		</Stack>
	);
}
