import React from "react";

import { Container, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { IconAlertTriangleOff } from "@tabler/icons-react";

import Component from "../components";
import Layout from "../layouts";
import Partial from "../partials";

import data from "../data";
import image from "../assets/images";

export default function Soon({ info }: { info: string }) {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.conference.yr2022.image5} />}>
				<Layout.Section containerized padded>
					<Stack gap={"xl"} align="center">
						<ThemeIcon size={160} color={"sec"} c={"pri.6"} radius={99}>
							<IconAlertTriangleOff size={80} stroke={1} />
						</ThemeIcon>
						<Title order={2} c={"sec"} ta={"center"}>
							Information on the{" "}
							<Text component="span" c={"pri.6"} fz={"inherit"} fw={"inherit"}>
								{info}
							</Text>{" "}
							is currently unavailable but will be added soon.
						</Title>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
