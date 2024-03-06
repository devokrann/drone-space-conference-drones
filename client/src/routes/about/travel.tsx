import React from "react";

import { Center, Divider, Grid, Image, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { IconDirections } from "@tabler/icons-react";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";
import video from "../../assets/videos";
import { useMediaQuery } from "@mantine/hooks";

export default function Travel() {
	const matches = useMediaQuery("(min-width: 36em)");
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route video={video.montage} />}>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{ plain: "Travel", highlight: "Information" }}
							icon={{ icon: IconDirections }}
						/>
						<Text ta={"center"}>
							Kenya is located in East Africa and is a leading travel destination in the world, due to its
							scenery, magnificent wildlife and pleasant year-round climate. Safaris actually first
							started off in Kenya.
						</Text>
					</Stack>
				</Layout.Section>

				{data.structure.travel.map(item => (
					<Layout.Section
						key={item.title.plain}
						containerized
						padded
						// bg={data.structure.travel.indexOf(item) % 2 == 1 ? "sec.0" : "pri.0"}
					>
						<Grid align="center" gutter={{ base: "xl" }}>
							<Grid.Col
								span={{ base: 12, xs: 6 }}
								order={matches && data.structure.travel.indexOf(item) % 2 == 1 ? 2 : 1}
							>
								<Stack
									align={
										matches
											? data.structure.travel.indexOf(item) % 2 == 1
												? "start"
												: "end"
											: "center"
									}
									ta={
										matches
											? data.structure.travel.indexOf(item) % 2 == 1
												? "start"
												: "end"
											: "center"
									}
									gap={"xs"}
									w={"100%"}
								>
									<Stack align="center" gap={"xs"}>
										{item.title && (
											<Title order={3} fw={500} fz={"xl"} lts={1} c={"sec"}>
												{item.title.plain}{" "}
												{item.title.highlight && (
													<Text component="span" fz={"inherit"} fw={"bold"} c={"pri"}>
														{item.title.highlight}
													</Text>
												)}
											</Title>
										)}
									</Stack>
									<Stack gap={"xl"}>
										<Text
											component="p"
											// ta={data.structure.travel.indexOf(item) % 1 == 2 ? "start" : "end"}
										>
											{item.desc}
										</Text>
										{item.list && (
											<Grid gutter={0}>
												{item.list.map(detail => (
													<Grid.Col key={detail.desc} span={{ base: 6 }}>
														<Stack align="center" gap={"xs"}>
															<Image src={detail.image} w={"80%"} alt={detail.desc} />
															<Text
																component="p"
																ta={"center"}
																fz={"xs"}
																c={"sec"}
																fw={500}
																mih={56}
															>
																{detail.desc}
															</Text>
														</Stack>
													</Grid.Col>
												))}
											</Grid>
										)}
									</Stack>
								</Stack>
							</Grid.Col>
							<Grid.Col
								span={{ base: 12, xs: 6 }}
								order={matches && data.structure.travel.indexOf(item) % 2 == 1 ? 1 : 2}
							>
								<Center>
									<Image src={item.image} h={matches && 240} alt={`section image`} />
								</Center>
							</Grid.Col>
						</Grid>
					</Layout.Section>
				))}

				<Partial.Cta.Expected
					image={image.gallery.expo.yr2022.image9}
					title={{ plain: "What's Expected for", highlight: "2024" }}
				/>
			</Layout.Page>
		</Layout.Body>
	);
}
