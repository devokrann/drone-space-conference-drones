import React from "react";

import { Container, Grid, List, Stack, Text, Title } from "@mantine/core";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

const opportunities = [
	{
		icon: "",
		title: "Showcase Latest Research",
	},
	{
		icon: "",
		title: "Exhibit Student and Departmental Innovations",
	},
	{
		icon: "",
		title: "Promote STEM Programs",
	},
	{
		icon: "",
		title: "Meet Industry Professionals",
	},
];

const pavilionBooth = {
	price: null,
	title: "University Pavilion Booth Package",
	desc: [
		"0.24m fascia with exhibitor company and stand number in black/blue or white lettering",
		"2 x Spotlight per 9sqm",
		"1 x Round/Rectangular Table per 9sqm",
		"1 x Dust-bin per 18sqm",
		"1 x 13amp power point per 18sqm",
		"2 x Venue Chairs",
	],
	type: null,
	dimentions: "3M by 3M (9 sqm)",
};

export default function Pavilion() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image9} />}>
				<Layout.Section containerized padded>
					<Grid gutter={"xl"}>
						<Grid.Col span={{ base: 12, md: 6 }}>
							<Stack gap={"xl"}>
								<Stack gap={"md"}>
									<Stack gap={"xs"}>
										<Title order={2} c={"pri"}>
											University{" "}
											<Text component="span" inherit c={"sec"}>
												Pavilion
											</Text>
										</Title>
										<Text>
											The University Pavilion is a dedicated platform for participating
											universities to present their latest research, student innovations, and
											departmental breakthroughs aligned with the event's overarching theme:{" "}
											<Text component="span" inherit c={"pri"} fw={500}>
												Unlocking Opportunities of Drones, Data, and Artificial Intelligence
											</Text>
											.
										</Text>
									</Stack>
									<Stack gap={"xs"}>
										<Text>Opportunities for Participating Universities:</Text>
										<List size="sm" withPadding>
											{opportunities.map(item => (
												<List.Item key={item.title}>{item.title}</List.Item>
											))}
										</List>
									</Stack>
								</Stack>
								<Component.Card.Booth.Pavilion data={pavilionBooth} />
							</Stack>
						</Grid.Col>
						<Grid.Col span={{ base: 12, md: 6 }}>
							<Stack gap={48}>
								<Stack gap={"xs"}>
									<Stack gap={"xs"}>
										<Title order={2} c={"pri"}>
											Booth{" "}
											<Text component="span" inherit c={"sec"}>
												Allocation
											</Text>
										</Title>
										<Text>
											Each participating university will be allocated a dedicated booth (3m by 3m)
											at the expo at KES. 55,000 - providing a physical space to display research
											posters, prototypes, and engage with event attendees. To secure a booth for
											your university, please fill in the form below with the necessary details:
										</Text>
									</Stack>
								</Stack>

								<Partial.Form.Pavilion />
							</Stack>
						</Grid.Col>
					</Grid>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
