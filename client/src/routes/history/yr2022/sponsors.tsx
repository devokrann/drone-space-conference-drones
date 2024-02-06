import React from "react";

import { Grid, Stack, Text } from "@mantine/core";

import { IconHeartHandshake } from "@tabler/icons-react";

import Component from "../../../components";
import Layout from "../../../layouts";
import Partial from "../../../partials";

import data from "../../../data";
import image from "../../../assets/images";

export default function Sponsors2022() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image1} />}>
				<Layout.Section containerized padded bg={"gray.1"}>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{ plain: "2022", highlight: "Sponsors & Partners" }}
							icon={{ icon: IconHeartHandshake }}
						/>
						<Text ta={"center"}>
							We extend our heartfelt gratitude to the sponsors who supported the 2022 expo, enabling us
							to deliver an unparalleled experience to our attendees. Collaboration is the cornerstone of
							progress, and our partners for the 2022 Kenya Drone Expo exemplified this principle.
						</Text>
						<Grid justify="center">
							{data.sponsors.yr2022
								.filter(item => item.type === "platinum")
								.map(sponsor => (
									<Grid.Col span={{ base: 12, xs: 6, sm: 4 }} key={sponsor.name}>
										<Component.Card.Sponsor data={sponsor} />
									</Grid.Col>
								))}
						</Grid>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
