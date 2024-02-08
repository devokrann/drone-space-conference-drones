import React from "react";

import { Container, Grid, Stack, Text } from "@mantine/core";

import { IconListCheck, IconTargetArrow } from "@tabler/icons-react";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function Overview() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.conference.yr2022.image4} />}>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Text ta={"center"}>
							Welcome to the Drone Tech & Data Expo 2024, an immersive and enlightening experience that
							brings the intersection of Drones, Data, and Artificial Intelligence (AI) ushering in a new
							era of technological advancements, transforming industries and shaping the way we perceive
							and interact with the world. The Expo and Conference serves as a dynamic platform for
							professionals, enthusiasts, and thought leaders to engage, and excel in the ever-evolving
							landscape that explores the synergies between these three pillars of innovation and their
							collective impact on various sectors.
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
					</Stack>
				</Layout.Section>

				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main title={{ plain: "Event", highlight: "Significance" }} />
						<Text ta={"center"}>
							Drones, data and artificial intelligence (AI) collectively play a significant role in
							various fields, contributing to advancements and innovations in technology, business and
							society.
						</Text>
						<Grid align="stretch" justify="center" grow>
							{data.structure.significance.map(point => (
								<Grid.Col span={{ base: 12, xs: 6 }} key={point.title}>
									<Component.Card.Feature.Significance data={point} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>

				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{ plain: "Event", highlight: "Objectives" }}
							icon={{ icon: IconListCheck }}
						/>
						<Text ta={"center"}>
							The Drone Tech and Data Expo 2024 is an ideal platform that will bring together key
							stakeholders from the drone industry, Big Data, innovators, regulator, academia, government
							and international organizations in the unmanned aviation sector, AI Technology and
							Innovation to exchange research, latest ideas, use cases, best practices, Drone tech, Data
							and trends from a wide variety of artificial intelligence & drone industry experts:
							innovators, regulator, the most drone asset owners & service firms and more.
						</Text>
						<Grid align="stretch" justify="center" grow>
							{data.structure.objectives.map(point => (
								<Grid.Col span={{ base: 12, xs: 6, md: 6 }} key={point.title}>
									<Component.Card.Feature.Objective data={point} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Expect
					title={{ plain: "What to", highlight: "Expect" }}
					image={image.gallery.expo.yr2022.image5}
					desc="At the Drone Tech & Data Expo 2024, expect to be part of a vibrant community that shares a passion for exploration, innovation, and progress. Engage in enriching discussions, discover groundbreaking technologies, and be inspired by the ways in which drones, data and AI are transforming industries and shaping a better future. The expo promises an experience that is both enlightening and exhilarating."
				/>

				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main title={{ plain: "Why", highlight: "Attend?" }} />
						<Text ta={"center"}>
							The Drone Tech & Data Expo will be an opportunity for networking, collaboration and
							coordination between Civil Aviation Authority (CAA), industry and both new and existing
							stakeholders as we move forward in this dynamic fields. It will also provide a unique
							opportunity to progress a comprehensive and harmonized regulatory framework to support Drone
							Technology, Data and Artificial Intelligence activities.
						</Text>
						<Grid align="stretch" justify="center" grow>
							{data.structure.whyAttend.map(point => (
								<Grid.Col span={{ base: 12, xs: 6 }} key={point.title}>
									<Component.Card.Feature.Attend data={point} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>

				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{ plain: "Who", highlight: "Attends?" }}
							icon={{ icon: IconTargetArrow }}
						/>
						<Text ta={"center"}>
							The Drone expo and conference will be an ideal place for the visitors to get the latest
							trends and information on Big data, Artificial Intelligence and Unmanned Aerial Systems by
							interacting with the exhibitors. The exhibitors will get a chance to appeal their products
							and services to different industries and wide array of customers. The expo will serve as a
							networking point for all the stakeholders of the market in the region. The conference will
							present the audience and stakeholders of the industry with undated news and insights of the
							region’s market.
						</Text>
						<Grid>
							{data.structure.audience.map(point => (
								<Grid.Col span={{ base: 12, xs: 6, md: 3 }} key={point.title}>
									<Component.Card.Feature.Audience data={point} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Expect
					image={image.gallery.conference.yr2022.image3}
					title={{ plain: "Join", highlight: "Us" }}
					desc={
						"Be a part of the Drone Tech & Data Expo 2024 and embrace the limitless possibilities that drones, data and AI have to offer. Whether you're an industry professional, a technology enthusiast, or a curious explorer, this event is designed to ignite your imagination and equip you with the insights needed to navigate the ever-changing landscape of unmanned aerial systems, Big Data and Artificial Intelligence innovations. Navigate through our navigation menu to learn more about the expo, past editions, exhibitors, conference sessions, ticket options, and more. We look forward to welcoming you to an event that celebrates innovation, connection, and a sustainable future powered by drones, data and AI."
					}
				/>
			</Layout.Page>
		</Layout.Body>
	);
}
