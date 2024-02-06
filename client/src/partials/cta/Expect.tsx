import React from "react";

import { Box, Container, Stack, Text } from "@mantine/core";

import Component from "@src/components";
import Layout from "@src/layouts";

import classes from "./Expect.module.scss";
import { Icon } from "@tabler/icons-react";

export default function Expect({
	image,
	title,
	icon,
	desc,
}: {
	image?: string;
	title?: { plain: string; highlight: string };
	icon?: Icon;
	desc?: string;
}) {
	return (
		<Box
			className={classes.cta}
			style={{
				backgroundImage:
					image && `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}"`,
			}}
		>
			<Layout.Section containerized padded id="cta">
				<Stack gap={48}>
					<Stack align="center" ta={"center"} gap={"xl"}>
						{title && <Component.Heading.Main title={title} icon={icon && { icon: icon }} c={"white"} />}
						<Text>
							{desc
								? desc
								: "At the Drone Tech & Data Expo 2024, expect to be part of a vibrant community that shares a passion for exploration, innovation, and progress. Engage in enriching discussions, discover groundbreaking technologies, and be inspired by the ways in which drones, data and AI are transforming industries and shaping a better future. The expo promises an experience that is both enlightening and exhilarating."}
						</Text>
						<Component.Button.Group.Purchase />
					</Stack>
					<Container size={"sm"} w={"100%"}>
						<Component.Counter.Countdown />
					</Container>
				</Stack>
			</Layout.Section>
		</Box>
	);
}
