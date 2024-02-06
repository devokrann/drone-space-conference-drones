import React from "react";

import { Box, Container, Grid, Stack } from "@mantine/core";

import Component from "@src/components";
import Layout from "@src/layouts";

import data from "@src/data";

import classes from "./Social.module.scss";

export default function Social({ image }: { image: string }) {
	return (
		<Box
			className={classes.cta}
			style={{
				backgroundImage:
					image && `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}"`,
			}}
		>
			<Layout.Section containerized padded id="social">
				<Stack gap={48}>
					<Component.Heading.Main
						title={{
							plain: "Connect With Us On",
							highlight: "Social Media",
						}}
						c={"white"}
					/>
					<Container size={"xs"} w={"100%"}>
						<Grid align="center" justify="center">
							{data.links.social.map(icon => (
								<Grid.Col span={{ base: 6, xs: 4 }} key={icon.link}>
									<Component.Card.Social data={icon} />
								</Grid.Col>
							))}
						</Grid>
					</Container>
				</Stack>
			</Layout.Section>
		</Box>
	);
}
