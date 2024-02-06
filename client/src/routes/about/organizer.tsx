import React from "react";

import { Container, Stack, Text } from "@mantine/core";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function Organizer() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image12} />}>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main title={{ plain: "About The", highlight: "Organizer" }} />
						<Text ta={"center"}>
							Drone Space Kenya has been at the forefront in advancing Kenya's drone industry. As the
							organizer behind the Kenya Drone Tech and Data Expo, Drone Space has played a key role in
							shaping the drone narrative, working closely with industry partners to foster innovation and
							explore the endless possibilities of unmanned aerial systems (UAS). Following the success of
							the inaugural event in 2022, Drone Space is gearing up for another exciting event that
							promises to ignite conversations around the integration of drones, data, and artificial
							intelligence. Since its inception in November 2020, Drone Space has been more than an
							organization; it has been a community hub, training over 200 drone pilots and earning its
							place as the go-to drone training destination in East and Central Africa. Drone Space, in
							collaboration with key stakeholders, continues to foster meaningful partnerships within the
							industry, ensuring the sustained advancement and success of the drone industry in the
							region.
						</Text>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
