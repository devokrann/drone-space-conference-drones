import React from "react";

import { Container, Grid, Stack, Text } from "@mantine/core";

import { IconBrandAirtable } from "@tabler/icons-react";

import Component from "../../../components";
import Layout from "../../../layouts";
import Partial from "../../../partials";

import data from "../../../data";
import image from "../../../assets/images";

export default function Exhibitors2022() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image9} />}>
				<Layout.Section containerized padded bg={"gray.1"}>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{ plain: "2022", highlight: "Exhibitors" }}
							icon={{ icon: IconBrandAirtable }}
						/>
						<Text ta={"center"}>
							The 2022 Kenya Drone Expo saw an impressive array of companies and organizations that
							showcased their cutting-edge products and services. Explore the profiles of these
							exhibitors, each one a pioneer in their field, and discover how their contributions are
							driving forward the frontiers of drone technology
						</Text>
						<Grid align="stretch">
							{data.exhibition.exhibitors.yr2022.map(exhibitor => (
								<Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={exhibitor.name}>
									<Component.Card.Exhibitor data={exhibitor} w={exhibitor.width} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
