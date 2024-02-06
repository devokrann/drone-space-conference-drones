import React from "react";

import { Box, Center, Container, Stack, Text, rgba } from "@mantine/core";

import counter from "../../components/counters";

import image from "@src/assets/images";

export default function Home() {
	return (
		<Box
			style={theme => ({
				backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)), url("${image.gallery.expo.yr2022.image6}")`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
				color: theme.white,
				position: "relative",
			})}
		>
			<Container>
				<Center mih={480}>
					<Stack align="center" gap={"xl"}>
						<Text
							component="p"
							fw={500}
							fz={{ base: "sm", xs: "md", sm: "lg", md: "xl" }}
							tt={"uppercase"}
							ta={"center"}
						>
							Tuesday 26<sup>th</sup> & Wednesday 27<sup>th</sup>
							March, 2024
						</Text>
						<Stack align="center" pos={"relative"}>
							<Text
								component="p"
								tt={"uppercase"}
								fz={{ base: 48, md: 96 }}
								lh={1}
								fw={"bold"}
								opacity={0.2}
								pos={"absolute"}
								ta={"center"}
								top={{ base: 0, md: -68 }}
							>
								conference
							</Text>
							<Text
								component="h1"
								fw={"bold"}
								tt={"uppercase"}
								fz={{ base: 28, xs: 32, md: 56 }}
								style={{ zIndex: 0 }}
								ta={"center"}
							>
								<Text component="span" c={"pri"} fw={"inherit"} tt={"inherit"} fz={"inherit"}>
									Drone Tech & Data Expo
								</Text>{" "}
								2024
							</Text>
						</Stack>
						<Stack gap={"xs"} align="center">
							<Text
								component="p"
								fw={500}
								w={{ base: "100%", xs: "80%" }}
								ta={"center"}
								fz={{
									base: "sm",
								}}
							>
								Welcome to Kenya’s Premier Drone Innovation Showcase!
							</Text>
							<Text
								component="p"
								ta={"center"}
								fz={{
									base: "sm",
								}}
								fw={500}
							>
								Discover the Future of Drone Technology at the Drone Tech & Data Expo 2024.
							</Text>
							<Text
								component="p"
								fw={500}
								ta={"center"}
								fz={{
									base: "sm",
								}}
							>
								Where Drone Tech, Innovation & Trends Converge
							</Text>
						</Stack>
						<Text component="p" fw={700} ta={"center"} fz={"xl"} w={{ base: "100%" }}>
							<Text component="span" c={"pri"} fz={"inherit"} fw={"inherit"}>
								Theme
							</Text>
							: Unlocking Opportunities of{" "}
							<Text component="span" c={"pri"} fz={"inherit"} fw={"inherit"}>
								Drones
							</Text>
							,{" "}
							<Text component="span" c={"pri"} fz={"inherit"} fw={"inherit"}>
								Data
							</Text>{" "}
							&{" "}
							<Text component="span" c={"pri"} fz={"inherit"} fw={"inherit"}>
								Artificial Intelligence
							</Text>
						</Text>
					</Stack>
				</Center>
			</Container>
			<Box
				py={"lg"}
				style={theme => ({
					backgroundColor: rgba(theme.colors.sec[6], 0.9),
				})}
			>
				<Container size={"sm"}>
					<counter.Countdown />
				</Container>
			</Box>
		</Box>
	);
}
