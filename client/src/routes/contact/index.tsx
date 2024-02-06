import React from "react";

import { Anchor, Box, Container, Divider, Grid, Group, Image, List, Stack, Text, Title } from "@mantine/core";

import { IconMail } from "@tabler/icons-react";

import Component from "@src/components";
import Layout from "@src/layouts";
import Partial from "@src/partials";

import data from "@src/data";
import image from "@src/assets/images";

const details = {
	contact: [
		{
			icon: IconMail,
			title: "Email",
			desc: [
				{
					link: "mailto:info@drone-expo.co.ke",
					label: "info@drone-expo.co.ke",
				},
			],
		},
	],
};

export default function Contact() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image8} />}>
				<Layout.Section containerized padded>
					<Grid>
						<Grid.Col span={{ base: 12, md: 6 }}>
							<Container size={"lg"}>
								<Stack gap={"xl"}>
									<Stack gap={"md"}>
										<Title order={2} c={"sec"}>
											Address
										</Title>
										<List listStyleType="none" size="sm" spacing={"xs"}>
											<List.Item>
												{" "}
												<Text component="span" c={"pri"} fw={500}>
													Location
												</Text>
												: Prosperity House, Westlands, Nairobi
											</List.Item>
											<List.Item>
												{" "}
												<Text component="span" c={"pri"} fw={500}>
													PO. Box
												</Text>
												: 66297-00800
											</List.Item>
										</List>
									</Stack>
									<Stack gap={"md"}>
										<Title order={2} c={"sec"}>
											Questions
										</Title>
										<List listStyleType="none" size="sm" spacing={"md"} w={{ md: "80%" }}>
											{/* <List.Item>
												Kindly consult the FAQ first.
											</List.Item> */}
											<List.Item>
												For questions about the Expo, please contact Drone Tech & Data Expo team
												via{" "}
												<Anchor href="mailto:info@drone-expo.co.ke" fz={"inherit"} fw={500}>
													info@drone-expo.co.ke
												</Anchor>
												.
											</List.Item>
											<List.Item>
												For questions about tickets, registration etc. or media representatives
												seeking information, press passes, or interview opportunities, please
												contact our call center via{" "}
												<Anchor href="tel:+254712656565" fz={"inherit"} fw={500}>
													+254-712-656565
												</Anchor>
												.
											</List.Item>
										</List>
									</Stack>
									<Stack gap={"md"}>
										<Title order={2} c={"sec"}>
											Social Media
										</Title>
										<Group align="center" gap={8}>
											{data.links.social.map(link => (
												<a key={link.link} href={link.link}>
													<Image src={link.icon} w={28} h={28} />
												</a>
											))}
										</Group>
									</Stack>
								</Stack>
							</Container>
						</Grid.Col>
						<Grid.Col span={{ base: 12, md: 6 }}>
							<Box
								style={theme => ({
									backgroundColor: "var(--mantine-color-sec-light)",
									borderRadius: theme.radius.sm,
									padding: `${theme.spacing.md}`,
								})}
							>
								<Stack gap={"xl"}>
									<Stack gap={"xs"}>
										<Title order={2} c={"sec"}>
											Drop Us a Line
										</Title>
										<Divider size={"sm"} color="pri" w={"20%"} />
									</Stack>
									<Partial.Form.Contact />
								</Stack>
							</Box>
						</Grid.Col>
					</Grid>
				</Layout.Section>
			</Layout.Page>

			<Partial.Cta.Expect
				image={image.gallery.conference.yr2022.image1}
				title={{ plain: "What To", highlight: "Expect" }}
			/>
		</Layout.Body>
	);
}
