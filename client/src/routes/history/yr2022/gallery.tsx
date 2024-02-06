import React from "react";

import { Grid, Stack, Text } from "@mantine/core";

import { IconPhotoCircle } from "@tabler/icons-react";

import Component from "../../../components";
import Layout from "../../../layouts";
import Partial from "../../../partials";

import data from "../../../data";
import image from "../../../assets/images";

export default function Gallery2022() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image13} />}>
				<Layout.Section>
					<Stack gap={48} pt={96}>
						<Component.Heading.Main
							title={{ plain: "2022", highlight: "Moments" }}
							icon={{ icon: IconPhotoCircle }}
						/>
						<Text ta={"center"}>
							A picture is worth a thousand words, and our gallery captures the essence of the 2022 Kenya
							Drone Expo in vivid detail.
						</Text>
						<Grid w={"100%"} gutter={{ base: "xs", xs: 0 }}>
							{data.gallery.yr2022.reverse().map(image => (
								<Grid.Col span={{ base: 12, xs: 6, sm: 4, md: 3 }} key={image.title}>
									<Component.Modal.Gallery data={image} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
