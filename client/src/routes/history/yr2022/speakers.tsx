import React from "react";

import { Container, Grid, Stack, Text } from "@mantine/core";

import { IconMicrophone2 } from "@tabler/icons-react";

import Component from "../../../components";
import Layout from "../../../layouts";
import Partial from "../../../partials";

import data from "../../../data";
import image from "../../../assets/images";

export default function Speakers2022() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.conference.yr2022.image4} />}>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{ plain: "2022", highlight: "Speakers" }}
							icon={{ icon: IconMicrophone2 }}
						/>
						<Text ta={"center"}>
							One of the highlights of the 2022 expo was the presence of distinguished speakers and
							experts who graced our stages
						</Text>
						<Grid gutter={"xl"}>
							{data.speakers.map(
								speaker =>
									speaker.bio && (
										<Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={speaker.name}>
											<Component.Card.Speaker.Listing data={speaker} />
										</Grid.Col>
									)
							)}
						</Grid>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
