import React from "react";
import { Link } from "react-router-dom";

import {
	ActionIcon,
	Anchor,
	Box,
	Container,
	Divider,
	Flex,
	Grid,
	Group,
	Image,
	List,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import { IconMail, IconPhone } from "@tabler/icons-react";

import classes from "./Main.module.scss";
import data from "../../data";

const details = {
	expo: [
		{
			link: "/exhibition/why-exhibit",
			label: "Why Exhibit?",
			type: "link",
		},
		{
			link: "/exhibition/booths/local-booths",
			label: "Exhibitor Booth Pricing",
			type: "link",
		},
		{
			link: "/exhibition",
			label: "Exhibitor Information",
			type: "link",
		},
		{
			link: "/exhibition/exhibition-flooplan",
			label: "Floor Plan",
			type: "link",
		},
	],

	conference: [
		{
			link: "/conference",
			label: "Conference Information",
			type: "link",
		},
		{
			link: "/conference/schedule",
			label: "Conference Schedule",
			type: "link",
		},
		{
			link: "/conference/tickets",
			label: "Conference Tickets",
			type: "link",
		},
		{
			link: "/conference/speakers",
			label: "Speakers",
			type: "link",
		},
	],

	contact: [
		{
			link: "https://www.google.com/maps/place/Prosperity+House,+Nairobi/@-1.2723743,36.8091986,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17307ceb423b:0x2b6f26cf176c4f6f!8m2!3d-1.2723743!4d36.8117789!16s%2Fg%2F12hlt4d1k?entry=ttu",
			label: "Prosperity House, Westlands",
		},
		{
			link: "mailto:info@drone-expo.co.ke",
			label: "info@drone-expo.co.ke",
		},
		{
			link: "tel:+254712656565",
			label: "+254-712-656565",
		},
	],
};

export default function Main() {
	return (
		<Box className={classes.footer}>
			<Container size={"lg"} py={36}>
				<Grid>
					<Grid.Col span={{ base: 12, md: 5 }}>
						<Flex direction="column" align={{ base: "center", md: "start" }} gap={"md"}>
							<Stack gap={"md"}>
								<Title order={2} fz={"lg"} fw={700} ta={{ base: "center", md: "start" }}>
									Drone Tech & Data Expo 2024
								</Title>
								<Text component="p" maw={{ md: "80%" }} ta={{ base: "center", md: "start" }}>
									The Kenya Drone Tech and Data Expo and Conference is your gateway to the forefront
									of Drone technology, Big Data and AI. Join us for an immersive experience where
									industry leaders, experts, and enthusiasts come together to explore the boundless
									potential of Drones, Data and AI across diverse sectors.
								</Text>
							</Stack>
							<Group align="center" justify="end" gap={8}>
								{data.links.social.map(link => (
									<a key={link.link} href={link.link}>
										<Image src={link.icon} w={28} h={28} />
									</a>
								))}
							</Group>
						</Flex>
					</Grid.Col>
					<Grid.Col span={7} visibleFrom="md">
						<Grid>
							<Grid.Col span={4}>
								<Stack gap={"md"} ta={"end"}>
									<Title order={2} fz={"lg"} fw={700}>
										Contact
									</Title>
									<List size="xs" listStyleType="none" spacing={"xs"}>
										{details.contact.map(item => (
											<List.Item key={item.link} fw={500}>
												<Link to={item.link} className={classes.link}>
													{item.label}
												</Link>
											</List.Item>
										))}
									</List>
								</Stack>
							</Grid.Col>
							<Grid.Col span={4}>
								<Stack gap={"md"} ta={"end"}>
									<Title order={2} fz={"lg"} fw={700}>
										The Expo
									</Title>
									<List size="xs" listStyleType="none" spacing={"xs"}>
										{details.expo.map(item => (
											<List.Item key={item.link} fw={500}>
												{item.type == "downloadable" ? (
													<a
														href={item.link}
														download={"sarit-expo-centre-loita-hall.png"}
														className={classes.link}
													>
														{item.label}
													</a>
												) : (
													<Link to={item.link} className={classes.link}>
														{item.label}
													</Link>
												)}
											</List.Item>
										))}
									</List>
								</Stack>
							</Grid.Col>
							<Grid.Col span={4}>
								<Stack gap={"md"} ta={"end"}>
									<Title order={2} fz={"lg"} fw={700}>
										Conference
									</Title>
									<List size="xs" listStyleType="none" spacing={"xs"}>
										{details.conference.map(item => (
											<List.Item key={item.link} fw={500}>
												{item.type == "downloadable" ? (
													<a
														href={item.link}
														download={"sarit-expo-centre-loita-hall.png"}
														className={classes.link}
													>
														{item.label}
													</a>
												) : (
													<Link to={item.link} className={classes.link}>
														{item.label}
													</Link>
												)}
											</List.Item>
										))}
									</List>
								</Stack>
							</Grid.Col>
						</Grid>
					</Grid.Col>
				</Grid>
			</Container>

			<Divider opacity={0.2} color="white" />

			<Container size={"lg"} py={"sm"}>
				<Grid align="center" fz={"xs"}>
					<Grid.Col span={{ base: 12, md: 12 }}>
						<Text ta={{ base: "center", md: "center" }} fz={"inherit"}>
							Copyright &copy; 2024{" "}
							<Anchor component="span" fw={500} fz={"inherit"} c={"pri.6"}>
								Drone & Data Expo
							</Anchor>
							. All rights reserved.
						</Text>
					</Grid.Col>
					{/* <Grid.Col span={{ base: 12, md: 6 }}>
						<Text fz={"inherit"} ta={{ base: "center", md: "end" }}>
							Designed by{" "}
							<Anchor
								href="https://devokrann.github.io"
								target="_blank"
								fw={500}
								fz={"inherit"}
							>
								Kevon
							</Anchor>
						</Text>
					</Grid.Col> */}
				</Grid>
			</Container>
		</Box>
	);
}
