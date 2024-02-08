import React from "react";

import { Box, Container, Divider, Grid, Stack, Text } from "@mantine/core";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function Exhibition() {
	return (
		<Layout.Body
			header={<Partial.Header.Main />}
			nav={<Partial.Navbar.Main />}
			aside={{
				element: (
					<Component.Card.Detail.Aside title="Exhibitor Information">
						{data.exhibition.info.map(detail => (
							<Component.Card.Detail.Item key={detail.label} data={detail} />
						))}
					</Component.Card.Detail.Aside>
				),
				position: "right",
				hero: <Partial.Hero.Route image={image.gallery.expo.yr2022.image4} />,
			}}
			footer={<Partial.Footer.Main />}
		>
			<Layout.Page>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Grid align="stretch" gutter={"xl"}>
							<Grid.Col span={12}>
								<Grid align="center">
									<Grid.Col span={{ base: 12, sm: 6 }} visibleFrom="xs">
										<Component.Overlay.Image
											image1={image.gallery.expo.yr2022.image11}
											image2={image.gallery.expo.yr2022.image12}
											// orientation={"left"}
											height={300}
										/>
									</Grid.Col>
									<Grid.Col span={{ base: 12, sm: 6 }}>
										<Component.Card.Booth.Info data={data.booths.info.sqm9} orientation="start" />
									</Grid.Col>
								</Grid>
							</Grid.Col>
							<Grid.Col span={12}>
								<Divider size={"sm"} color="pri" />
							</Grid.Col>
							<Grid.Col span={12}>
								<Grid align="center">
									<Grid.Col span={{ base: 12, sm: 6 }}>
										<Component.Card.Booth.Info data={data.booths.info.sqm18} orientation="end" />
									</Grid.Col>
									<Grid.Col span={{ base: 12, sm: 6 }} visibleFrom="xs">
										<Component.Overlay.Image
											image1={image.gallery.expo.yr2022.image15}
											image2={image.gallery.expo.yr2022.image14}
											// orientation={"right"}
											height={300}
										/>
									</Grid.Col>
								</Grid>
							</Grid.Col>
						</Grid>
						<Text ta={"center"}>
							<Text component="span" inherit c={"pri.6"} fw={500}>
								Note
							</Text>
							: The Exhibition Hall and Conference Room will be locked everyday after the event and no
							items will be removed without authorization from the exhibitor concerned, organizers or the
							management of Sarit Expo Centre.
						</Text>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
