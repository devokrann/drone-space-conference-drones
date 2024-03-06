import React from "react";

import { Anchor, Box, Container, Divider, Grid, Group, Image, List, Stack, Text, Title } from "@mantine/core";

import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

import Component from "@src/components";
import Layout from "@src/layouts";
import Partial from "@src/partials";

import data from "@src/data";
import image from "@src/assets/images";
import { Link } from "react-router-dom";

const links = [
	{
		icon: IconMail,
		title: "Email",
		order: { xs: 1, sm: 1 },
		desc: [
			{
				link: "mailto:info@drone-expo.co.ke",
				label: "info@drone-expo.co.ke",
			},
		],
	},
	{
		icon: IconMapPin,
		title: "Address",
		order: { xs: 3, sm: 2 },
		desc: [
			{
				link: "https://www.google.com/maps/place/Prosperity+House,+Nairobi/@-1.2723743,36.8091986,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17307ceb423b:0x2b6f26cf176c4f6f!8m2!3d-1.2723743!4d36.8117789!16s%2Fg%2F12hlt4d1k?entry=ttu",
				label: "Prosperity House, Westlands, Nairobi",
			},
			{
				link: "#",
				label: "PO. Box. 66297-00800",
			},
		],
	},
	{
		icon: IconPhone,
		title: "Phone",
		order: { xs: 2, sm: 3 },
		desc: [
			{
				link: "tel:+254712656565",
				label: "+254 712 656-565",
			},
		],
	},
];

export default function Contact() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image8} />} padded stacked>
				<Layout.Section containerized>
					<Grid grow>
						{links.map(link => (
							<Grid.Col
								key={link.title}
								span={{ base: 12, xs: 6, sm: 4 }}
								order={{ xs: link.order.xs, sm: link.order.sm }}
							>
								<Component.Card.Contact data={link} />
							</Grid.Col>
						))}
					</Grid>
				</Layout.Section>
				<Layout.Section containerized>
					<Stack ta={"center"}>
						<Text>
							For questions about the Expo, please contact Drone Tech & Data Expo team via{" "}
							<Anchor href="mailto:info@drone-expo.co.ke" fz={"inherit"} fw={500} c={"pri.6"}>
								info@drone-expo.co.ke
							</Anchor>
							.
						</Text>
						<Text>
							For questions about tickets, registration etc. or media representatives seeking information,
							press passes, or interview opportunities, please contact our call center via{" "}
							<Anchor href="tel:+254712656565" fz={"inherit"} fw={500} c={"pri.6"}>
								+254-712-656565
							</Anchor>
							.
						</Text>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized containerSize="sm">
					<Stack gap={"xl"}>
						<Stack gap={"xs"} align="center" ta={"center"}>
							<Title order={2} c={"sec"}>
								Drop Us a Line
							</Title>
							<Divider size={"sm"} color="pri.6" w={"20%"} />
						</Stack>
						<Partial.Form.Contact />
						{/* <Text ta={"center"} fz={"sm"}>
							Kindly consult the{" "}
							<Anchor component={Link} to={"#"} inherit>
								FAQ's
							</Anchor>{" "}
							first.
						</Text> */}
					</Stack>
				</Layout.Section>
			</Layout.Page>

			<Partial.Cta.Expect
				image={image.gallery.conference.yr2022.image1}
				title={{ plain: "What To", highlight: "Expect" }}
			/>
		</Layout.Body>
	);
}
