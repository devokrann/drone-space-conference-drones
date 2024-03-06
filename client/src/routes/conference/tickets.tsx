import React from "react";

import { Container, Grid } from "@mantine/core";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function Tickets() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image10} />}>
				<Layout.Section containerized padded>
					<Grid justify="center">
						{data.packages.tickets
							.filter(item => item.type === "local")
							.map(item => (
								<Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={item.price}>
									<Component.Card.Ticket.Local data={item} />
								</Grid.Col>
							))}
					</Grid>
				</Layout.Section>

				<Partial.Cta.Social image={image.gallery.conference.yr2022.image5} />

				<Partial.Cta.Industries />
			</Layout.Page>
		</Layout.Body>
	);
}
