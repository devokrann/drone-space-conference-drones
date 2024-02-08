import React from "react";
import { Link } from "react-router-dom";

import { Anchor, Grid, Stack, Text } from "@mantine/core";

import { IconHeartHandshake, IconMicrophone2, IconPhotoCircle } from "@tabler/icons-react";

import Component from "../../../components";
import Layout from "../../../layouts";
import Partial from "../../../partials";

import data from "../../../data";
import image from "../../../assets/images";

export default function Yr2022() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.conference.yr2022.image2} />}>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{
								plain: "Drone Tech & Data Expo",
								highlight: "2022 Post-show Report",
							}}
						/>
						<Text ta={"center"}>
							Welcome to the retrospective of the 2022 Kenya Drone Expo, where we revisit the remarkable
							moments, influential speakers, groundbreaking technologies, and collaborative partnerships
							that defined a year of drone innovation and industry evolution. In this section, we offer
							you an immersive journey into the heart of the past expo, celebrating the achievements that
							have paved the way for an even more exceptional experience in 2024
						</Text>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main title={{ plain: "2022", highlight: "Exhibitors" }} />
						<Text ta={"center"}>
							The 2022 Kenya Drone Expo saw an impressive array of companies and organizations that
							showcased their cutting-edge products and services. Explore the profiles of these
							exhibitors, each one a pioneer in their field, and discover how their contributions are
							driving forward the frontiers of drone technology
						</Text>
						<Stack gap={"xl"}>
							<Grid align="stretch">
								{data.exhibition.exhibitors.yr2022.map(
									exhibitor =>
										data.exhibition.exhibitors.yr2022.indexOf(exhibitor) < 3 && (
											<Grid.Col span={{ base: 12, xs: 4 }} key={exhibitor.name}>
												<Component.Card.Exhibitor data={exhibitor} w={exhibitor.width} />
											</Grid.Col>
										)
								)}
							</Grid>
							<Text component="p" ta={"center"}>
								See the full{" "}
								<Anchor component={Link} to="exhibitors" fw={500} c={"pri.6"}>
									exhibitors list
								</Anchor>
								.
							</Text>
						</Stack>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized padded>
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
									<Grid.Col span={{ base: 12, xs: 4 }} key={sponsor.name}>
										<Component.Card.Sponsor data={sponsor} />
									</Grid.Col>
								))}
						</Grid>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{ plain: "2022", highlight: "Speakers" }}
							icon={{ icon: IconMicrophone2 }}
						/>
						<Text ta={"center"}>
							One of the highlights of the 2022 expo was the presence of distinguished speakers and
							experts who graced our stages.
						</Text>
						<Stack gap={"xl"}>
							<Grid gutter={"xl"}>
								{data.speakers.map(
									speaker =>
										speaker.bio &&
										data.speakers.indexOf(speaker) < 3 && (
											<Grid.Col span={{ base: 12, xs: 4 }} key={speaker.name}>
												<Component.Card.Speaker.Listing data={speaker} />
											</Grid.Col>
										)
								)}
							</Grid>
							<Text component="p" ta={"center"}>
								See the full{" "}
								<Anchor component={Link} to="speakers" fw={500} c={"pri.6"}>
									speakers list
								</Anchor>
								.
							</Text>
						</Stack>
					</Stack>
				</Layout.Section>
				<Layout.Section padded>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{ plain: "2022", highlight: "Moments" }}
							icon={{ icon: IconPhotoCircle }}
						/>
						<Text ta={"center"}>
							A picture is worth a thousand words, and our gallery captures the essence of the 2022 Kenya
							Drone Expo in vivid detail.
						</Text>
						<Stack gap={"xl"} w={"100%"}>
							<Grid gutter={{ base: "xs", xs: 0 }}>
								{data.gallery.yr2022.reverse().map(
									image =>
										data.gallery.yr2022.indexOf(image) < 12 && (
											<Grid.Col span={{ base: 6, xs: 4, md: 3 }} key={image.title}>
												<Component.Modal.Gallery data={image} />
											</Grid.Col>
										)
								)}
							</Grid>
							<Text component="p" ta={"center"}>
								See the full{" "}
								<Anchor component={Link} to="gallery" fw={500} c={"pri.6"}>
									photo catalogue
								</Anchor>
								.
							</Text>
						</Stack>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
