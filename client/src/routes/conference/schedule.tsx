import React from "react";

import { Container } from "@mantine/core";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function Schedule() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image11} />}>
				<Layout.Section containerized padded id="schedule" bg="gray.1">
					<Component.Tab.Schedule />
				</Layout.Section>

				<Partial.Cta.Expect
					image={image.gallery.conference.yr2022.image4}
					title={{ plain: "What to", highlight: "Expect" }}
				/>

				<Partial.Cta.Industries />
			</Layout.Page>
		</Layout.Body>
	);
}
