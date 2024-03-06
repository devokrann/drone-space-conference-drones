import React from "react";
import { Link } from "react-router-dom";

import { Anchor, Container, Grid, Stack, Text } from "@mantine/core";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function BoothsInternational() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image10} />}>
				<Layout.Section containerized padded>
					<Stack gap={"xl"}>
						<Grid align="stretch" grow>
							{data.booths.packages
								.filter(item => item.type === "international")
								.map(item => (
									<Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={item.price}>
										<Component.Card.Booth.International data={item} />
									</Grid.Col>
								))}
						</Grid>
						<Text component="p" ta={"center"}>
							Want to book <strong>Kenyan Company</strong> booths instead? You can find them{" "}
							<Anchor component={Link} to={"/exhibition/booths/local-booths"} fw={500} c={"pri.6"}>
								here
							</Anchor>
							.
						</Text>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Social image={image.gallery.expo.yr2022.image11} />

				<Partial.Cta.Industries />
			</Layout.Page>
		</Layout.Body>
	);
}
