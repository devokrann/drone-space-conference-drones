import React from "react";

import { Container, Grid, Image, List, Stack, Text, Title } from "@mantine/core";

import { IconChevronRight } from "@tabler/icons-react";

import Layout from "../../layouts";
import Partial from "../../partials";
import Component from "../../components";

import data from "../../data";
import image from "../../assets/images";

export default function About() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image12} />}>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main title={{ plain: "About The", highlight: "Expo & Conference" }} />
						<Text ta={"center"}>
							The Kenya Drone Tech and Data Expo and Conference 2024, presented by is a two-day event
							which will be the 2ND event of its kind to be held in Nairobi, Kenya. The Expo & Conference
							will promote development of Unmanned Aircraft Systems (UAS), Artificial Intelligence (AI)
							and also share knowledge, guide and advise on Unlocking opportunities of Drones, Data and
							Artificial Intelligence.
						</Text>
						<Text component="p" fw={700} ta={"center"} fz={"xl"} c={"sec"} w={{ base: "100%" }}>
							<Text component="span" c={"pri.6"} fz={"inherit"} fw={"inherit"}>
								Theme
							</Text>
							: Unlocking Opportunities of{" "}
							<Text component="span" c={"pri.6"} fz={"inherit"} fw={"inherit"}>
								Drones
							</Text>
							,{" "}
							<Text component="span" c={"pri.6"} fz={"inherit"} fw={"inherit"}>
								Data
							</Text>{" "}
							&{" "}
							<Text component="span" c={"pri.6"} fz={"inherit"} fw={"inherit"}>
								Artificial Intelligence
							</Text>
						</Text>
						<Grid gutter={48}>
							<Grid.Col span={{ base: 12 }}>
								<Grid gutter={48}>
									<Grid.Col span={{ base: 12, xs: 6 }}>
										<Text component="p" ta={{ base: "center", xs: "end" }}>
											The Expo and conference will provide the exhibitors, investors, Venture
											Capitalists, Government, Trade agencies, Tech Startups and visitors with a
											platform to penetrate the region’s market for UAS. This will be Kenya’s and
											East Africa’s leading Drone Expo show and conference focused on commercial
											drone technology and data integration in these industries and fields:
										</Text>
									</Grid.Col>
									<Grid.Col span={{ base: 12, xs: 6 }}>
										<Image src={image.gallery.conference.yr2022.image2} />
									</Grid.Col>
								</Grid>
							</Grid.Col>
							<Grid.Col span={{ base: 12 }}>
								<Grid gutter={48}>
									<Grid.Col span={{ base: 12, xs: 6 }} order={{ base: 2, xs: 1 }}>
										<Image src={image.gallery.conference.yr2022.image3} />
									</Grid.Col>
									<Grid.Col span={{ base: 12, xs: 6 }} order={{ base: 1, xs: 2 }}>
										<List
											size="xs"
											center
											icon={
												<IconChevronRight
													size={16}
													stroke={2}
													color="var(--mantine-color-pri-6)"
												/>
											}
										>
											<Grid gutter={{ base: 4, md: "xs" }}>
												{data.structure.industries.map(item => (
													<Grid.Col
														key={item}
														span={{
															base: 12,
															md: 6,
														}}
													>
														<List.Item fw={500}>{item}</List.Item>
													</Grid.Col>
												))}
											</Grid>
										</List>
									</Grid.Col>
								</Grid>
							</Grid.Col>
						</Grid>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Expect
					image={image.gallery.expo.yr2022.image6}
					title={{ plain: "What To", highlight: "Expect" }}
					desc="Anticipate a seamless and enriching experience tailored to your needs. Discover the full scope of services and facilities that the event organizers have meticulously designed for exhibitors. From setup assistance and booth amenities to technical support and networking opportunities."
				/>

				<Partial.Cta.Industries />
			</Layout.Page>
		</Layout.Body>
	);
}
