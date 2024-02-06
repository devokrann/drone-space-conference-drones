import React from "react";

import { Grid } from "@mantine/core";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";
import { IconTicket } from "@tabler/icons-react";

export default function Conference() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.conference.yr2022.image4} />}>
				<Layout.Section containerized padded>
					<Grid>
						{data.conference.info.map(item => (
							<Grid.Col span={{ base: 12, xs: 6, sm: 4, md: 3 }} key={item.title}>
								<Component.Card.Feature.Conference key={item.title} data={item} />
							</Grid.Col>
						))}
					</Grid>
				</Layout.Section>

				<Partial.Cta.Expect
					image={image.gallery.expo.yr2022.image4}
					title={{ plain: "Get Your", highlight: "Tickets" }}
					icon={IconTicket}
					desc="Anticipate a seamless and enriching experience tailored to your needs. Discover the full scope of services and facilities that the event organizers have meticulously designed for exhibitors. From setup assistance and booth amenities to technical support and networking opportunities, our goal is to provide you with an environment that empowers you to thrive."
				/>
			</Layout.Page>
		</Layout.Body>
	);
}
