import React from "react";
import { Link } from "react-router-dom";

import { Button, ButtonGroup, Center, Container, Flex, Grid, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function WhyExhibit() {
	const mobile = useMediaQuery("(max-width: 48em)");

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image6} />}>
				<Layout.Section containerized padded bg={"gray.1"}>
					<Stack gap={48}>
						<Text ta={"center"}>
							Unlock unparalleled opportunities for exposure, collaboration, and growth by becoming an
							exhibitor at the Kenya Drone Expo. Our event serves as a dynamic platform for you to
							showcase your products, services, and innovations to a diverse audience of industry
							professionals, enthusiasts, potential partners, and customers. As an exhibitor, you'll gain
							access to a unique ecosystem that fosters connections, drives business growth, and positions
							you as a leader in the drone industry.
						</Text>

						<Grid gutter={"xl"} align="center">
							<Grid.Col span={{ base: 12, xs: 6 }}>
								<Center
									style={{
										borderRadius: 999,
										overflow: "hidden",
									}}
									p={64}
									bg={"white"}
								>
									<Image src={image.logo.brand.portrait} alt={"kenya drone tech and data expo"} />
								</Center>
							</Grid.Col>
							<Grid.Col span={{ base: 12, xs: 6 }}>
								<Flex
									justify={"space-between"}
									h={"100%"}
									direction={"column"}
									align={{ base: "center", xs: "start" }}
									gap={"xl"}
								>
									<Text component="p" ta={{ base: "center", xs: "start" }}>
										The two-day event is an ideal platform to penetrate the market of Unmanned
										Aircraft Systems (UAS) or Drones, Big Data and AI that will put products and
										Services in front of an audience of decision-makers, investors and organizations
										looking for solutions that will increase efficiency, mitigate risk and improve
										safety. As an exhibitor you will gain unprecedented exposure to each and every
										one of our pre-qualified visitors, all of whom are looking to find the latest
										products and solutions that are revolutionizing Drones, data and AI sectors. By
										placing yourself in front of these potential clients, you have the chance to
										pitch to them first hand with the ability to achieve a direct line to market all
										in one place.
									</Text>
									<Stack gap={"xs"} w={"100%"}>
										<Button
											fullWidth
											component={Link}
											radius={mobile ? "sm" : "xl"}
											to={"/exhibition/booths/local-booths"}
											tt={"uppercase"}
										>
											Book Kenyan Company Booth
										</Button>
										<Button
											fullWidth
											color="sec"
											component={Link}
											radius={mobile ? "sm" : "xl"}
											to={"/exhibition/booths/international-booths"}
											tt={"uppercase"}
										>
											Book Non-Kenyan Company Booth
										</Button>
									</Stack>
								</Flex>
							</Grid.Col>
						</Grid>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Expect
					image={image.gallery.expo.yr2022.image2}
					title={{
						plain: "What to",
						highlight: "Expect",
					}}
					desc={
						"Anticipate a seamless and enriching experience tailored to your needs. Discover the full scope of services and facilities that the event organizers have meticulously designed for exhibitors. From setup assistance and booth amenities to technical support and networking opportunities, our goal is to provide you with an environment that empowers you to thrive."
					}
				/>
			</Layout.Page>
		</Layout.Body>
	);
}
