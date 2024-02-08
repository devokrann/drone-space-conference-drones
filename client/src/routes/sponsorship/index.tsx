import React from "react";

import { Anchor, Box, Button, Center, Container, Grid, Image, Stack, Text } from "@mantine/core";

import { IconArrowDown, IconGift, IconHeartHandshake, IconListDetails } from "@tabler/icons-react";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function Sponsorship() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image11} />}>
				<Layout.Section containerized padded>
					<Text ta={"center"}>
						Following the high public and corporate interest in the first ‘Drone Tech and Data
						Expo/Conference held on Tuesday 4th and Wednesday 5th July 2022 at the Sarit Centre, Nairobi, we
						are offering a range of sponsorship opportunities to maximize your exposure to decision makers
						and innovation-focused participants from Big Data, Artificial Intelligence, Drone Inspection,
						Emergency services, Agriculture, Energy & Utilities, Construction, Filming and Photography,
						Security, Surveying & Mapping, Transportation as well as UTM Systems, trade agencies and people
						who love Tech.
					</Text>
				</Layout.Section>

				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{
								plain: "Why",
								highlight: "Sponsor?",
							}}
							icon={{ icon: IconGift }}
						/>
						<Text ta={"center"}>
							Sponsorship validates the leadership profile of your organization in this industry and
							positions your company to gain maximum access to businesses looking for drone solutions.
							Sponsors gain access to heads of department and directors of leading organizations and
							representatives within this community. It is an opportunity to showcase your brand to the
							most influential audiences. Should you have any queries or would like to discuss further
							about the proposed sponsorship packages, kindly contact Conference Secretariat at{" "}
							<Anchor href="mailto:info@drone-expo.co.ke" fw={500} c={"pri.6"}>
								info@drone-expo.co.ke
							</Anchor>
							.
						</Text>
						<Grid align="center">
							<Grid.Col span={{ base: 12, xs: 5 }}>
								<Center
									w={"70%"}
									mx={"auto"}
									p={"xl"}
									bg={"white"}
									style={{
										borderRadius: "var(--mantine-radius-md)",
										overflow: "hidden",
									}}
								>
									<Image src={image.logo.brand.portrait} alt={"kenya drone tech and data expo"} />
								</Center>
							</Grid.Col>
							<Grid.Col span={{ base: 12, xs: 7 }}>
								<Stack
									gap={"xl"}
									align={{ base: "center", xs: "start" }}
									ta={{ base: "center", xs: "start" }}
								>
									<Text component="p">
										Let your innovative solutions shine alongside those from the world’s leading
										corporations. Obtain the chance to set the tone, when it comes to the future
										development of the global commercial and UAS drone industry.
									</Text>
									<Text component="p">
										Stay up-to-date and learn the latest technical developments and see what other
										equally inventive businesses are doing. Scout and identify the best talent in
										the industry, as they put their skills to the test in our Drones, Big Data and
										AI contest.
									</Text>
									<Button
										w={"fit-content"}
										color="sec"
										rightSection={<IconArrowDown size={16} />}
										component={"a"}
										href={"#opportunities"}
									>
										Sponsorship Packages
									</Button>
								</Stack>
							</Grid.Col>
						</Grid>
					</Stack>
				</Layout.Section>

				<Layout.Section containerized padded id="opportunities">
					<Stack gap={48}>
						<Component.Heading.Main
							title={{
								plain: "Sponsorship",
								highlight: "Opportunities",
							}}
							icon={{ icon: IconHeartHandshake }}
						/>
						<Text ta={"center"}>
							For companies and organizations looking to amplify their brand and support the expo, we
							offer a range of comprehensive sponsorship packages. Seize this chance to showcase your best
							Drone innovations, Big Data and Artificial Intelligence solutions to over hundreds of
							enthusiastic attendees, professionals and investors across two full days of the Drone Tech &
							Data Expo/ Conference 2024 to be held in Sarit Centre, Nairobi on 26th -27th March 2024.
						</Text>
						<Stack gap={"xl"}>
							<Grid align="stretch" justify="center">
								{data.packages.sponsorship.map(item => (
									<Grid.Col span={{ base: 12, xs: 6 }} key={item.price}>
										<Component.Card.Ticket.Sponsor data={item} />
									</Grid.Col>
								))}
							</Grid>
						</Stack>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Expect
					image={image.gallery.conference.yr2022.image4}
					title={{
						plain: "Staying Connected With Exclusive WIFI -",
						highlight: "KES. 200,000",
					}}
					desc="Branded WIFI login for all attendees | Logo featured in printed show program, onsite signage, and recognition during opening keynote | A custom content article on Drone Tech & Data Expo Website | Inclusion in post-event dedicated email to all attendees featuring your company, link to featured product, and contact details for prospective customers to follow up with."
				/>

				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Component.Heading.Main
							title={{
								plain: "Sponsorship",
								highlight: "Commitment Form",
							}}
							icon={{ icon: IconListDetails }}
						/>
						<Text ta={"center"}>
							We extend our heartfelt gratitude to the sponsors who supported the 2022 expo, enabling us
							to deliver an unparalleled experience to our attendees. Collaboration is the cornerstone of
							progress, and our partners for the 2022 Kenya Drone Expo exemplified this principle.
						</Text>
						<Container size={"sm"}>
							<Partial.Form.Contact defaultInquiry="Sponsorship Application" />
						</Container>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Social image={image.gallery.expo.yr2022.image3} />
			</Layout.Page>
		</Layout.Body>
	);
}
