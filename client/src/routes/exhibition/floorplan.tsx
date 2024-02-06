import React from "react";

import { Center, Container, Grid, Image } from "@mantine/core";

import { IconPhotoCircle } from "@tabler/icons-react";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function Floorplan() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image4} />}>
				<Layout.Section containerized padded>
					<Center>
						<Image src={image.plan} w={"100%"} alt="floor plan" />
					</Center>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
