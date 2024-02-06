import React from "react";
import { useLoaderData } from "react-router-dom";

// import list from "@src/data/list";

import Layout from "@src/layouts";

import typeList from "@src/types/list";
import Provider from "@src/providers";
import getSample from "@src/apis/getSample";

import { Box, Container, Grid, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import Partial from "@src/partials";
import Component from "@src/components";
import data from "@src/data";
import { IconChevronRight, IconHeartHandshake } from "@tabler/icons-react";
import image from "@src/assets/images";

export async function loader() {
	return getSample();
}

export default function Home() {
	// const data: typeList[] = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Home />}>
				<Partial.Cta.Industries />

				<Layout.Section containerized padded bg={"gray.1"}>
					<Stack gap={48}>
						<Component.Heading.Main title={{ plain: "Event", highlight: "Overview" }} />
						<Text ta={"center"}>
							The Drone Tech & Data Expo 2024 is your gateway to the forefront of drone technology and
							innovation. Join us for an immersive experience where industry leaders, experts, and
							enthusiasts come together to explore the boundless potential of drones across diverse
							sectors.
						</Text>
						<Stack gap={"md"}>
							<Title order={3} ta={"center"} fz={"xl"} c={"sec"}>
								Explore Our{" "}
								<Text component="span" c={"pri"} fz={"inherit"} fw={"inherit"}>
									Main Sections
								</Text>
							</Title>
							<Grid>
								{data.structure.sections.map(section => (
									<Grid.Col span={{ base: 12, xs: 6 }} key={section.title}>
										<Component.Card.Feature.Section data={section} />
									</Grid.Col>
								))}
							</Grid>
						</Stack>
					</Stack>
				</Layout.Section>

				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main title={{ plain: "Join The", highlight: "Drone Revolution" }} />
						<Text ta={"center"}>
							Are you ready to witness the cutting-edge advancements in drone technology? The Drone Tech &
							Data Expo 2024 offers a platform to engage with industry pioneers, explore groundbreaking
							solutions, and shape the future of drones in Kenya.
						</Text>
						<Grid>
							<Grid.Col span={{ base: 12, sm: 8 }}>
								<Stack gap={"xl"}>
									<Title order={3} fz={"xl"} c={"sec"}>
										Who Should{" "}
										<Text component="span" c={"pri"} fz={"inherit"} fw={"inherit"}>
											Attend?
										</Text>
									</Title>
									<Grid>
										{data.structure.target[1].desc.map(target => (
											<Grid.Col span={{ base: 6, xs: 6, md: 4 }} key={target}>
												<Group align="center" gap={"xs"}>
													<IconChevronRight
														size={16}
														stroke={4}
														color={
															data.structure.target[1].desc.indexOf(target) % 2 === 0
																? "var(--mantine-color-pri-6)"
																: "var(--mantine-color-sec-6)"
														}
													/>
													<Text
														component="span"
														fz={{
															base: "sm",
															xs: "md",
														}}
													>
														{target}
													</Text>
												</Group>
											</Grid.Col>
										))}
									</Grid>
								</Stack>
							</Grid.Col>
							<Grid.Col span={{ base: 12, sm: 4 }}>
								<Stack gap={"xl"}>
									<Title order={3} fz={"xl"} c={"sec"}>
										Event{" "}
										<Text component="span" c={"pri"} fz={"inherit"} fw={"inherit"}>
											Highlights
										</Text>
									</Title>
									<Stack gap={"xs"}>
										{data.structure.highlights.map(feature => (
											<Group align="center" gap={"xs"} key={feature.title}>
												<ThemeIcon
													size={32}
													color={
														data.structure.highlights.indexOf(feature) % 2 === 0
															? "var(--mantine-color-pri-6)"
															: "var(--mantine-color-sec-6)"
													}
												>
													<feature.icon size={16} stroke={2} />
												</ThemeIcon>
												<Text
													component="span"
													fz={{
														sm: "sm",
														md: "md",
													}}
												>
													{feature.title}
												</Text>
											</Group>
										))}
									</Stack>
								</Stack>
							</Grid.Col>
						</Grid>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Social image={image.gallery.expo.yr2022.image2} />

				<Layout.Section containerized padded bg={"gray.1"}>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{ plain: "Our Proud", highlight: "Partners & Sponsors" }}
							icon={{ icon: IconHeartHandshake }}
						/>
						<Grid justify="center">
							{data.sponsors.yr2024
								.filter(item => item.type === "platinum")
								.map(sponsor => (
									<Grid.Col span={{ base: 12, xs: 6, sm: 4, md: 3 }} key={sponsor.name}>
										<Component.Card.Sponsor data={sponsor} />
									</Grid.Col>
								))}
						</Grid>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Expect
					image={image.gallery.conference.yr2022.image1}
					title={{ plain: "Join", highlight: "Us" }}
					desc="Be a part of the Drone Tech & Data Expo 2024 and embrace the limitless possibilities that drone technology offers. Whether you're an industry professional, a technology enthusiast, or a curious explorer, this event is designed to ignite your imagination and equip you with the insights needed to navigate the ever-changing landscape of unmanned aerial systems."
				/>
			</Layout.Page>
		</Layout.Body>
	);
}
