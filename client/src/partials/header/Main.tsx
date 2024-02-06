import React from "react";
import { Link } from "react-router-dom";

import { Box, Container, Flex, Group, Text } from "@mantine/core";

import { IconPointFilled } from "@tabler/icons-react";

import Component from "../../components";

import data from "../../data";

import classes from "./Main.module.scss";

const details = {
	left: [
		{
			link: null,
			label: "26 - 27 March, 2024",
		},
		{
			link: null,
			label: "Sarit Expo Centre, Westlands",
		},
	],

	right: [
		{
			link: "/about/contact",
			label: "Contact Us",
			type: "link",
		},
		{
			link: "/conference/tickets",
			label: "Tickets",
			type: "flash",
		},
		{
			link: "/exhibition/booths/local-booths",
			label: "Booths",
			type: "flash",
		},
	],
};

export default function Main() {
	return (
		<Box component="header" bg={"sec.6"} c={"white"}>
			<Box
				style={theme => ({
					borderBottom: `2px solid ${theme.colors.pri[6]}`,
				})}
			>
				<Container size={"lg"} py={8}>
					<Flex
						align="center"
						direction={{ base: "column", xs: "row" }}
						gap={"xs"}
						justify={{ base: "center", xs: "space-between" }}
						fz={"xs"}
						fw={500}
					>
						<Group align="center" gap={8}>
							{details.left.map(detail => (
								<Group align="center" gap={8} key={detail.label}>
									<Text key={detail.label} component="p" fz={"inherit"} fw={"inherit"}>
										{detail.label}
									</Text>

									{details.left.indexOf(detail) != details.left.length - 1 && (
										<IconPointFilled size={8} />
									)}
								</Group>
							))}
						</Group>
						<Group align="center" gap={8}>
							{details.right.map(detail => (
								<Group align="center" gap={8} key={detail.link}>
									<Text
										key={detail.link}
										component={Link}
										to={detail.link}
										className={`${detail.type == "flash" ? classes.animate : classes.link}`}
										fz={"inherit"}
										fw={"inherit"}
									>
										{detail.label}
									</Text>

									{details.right.indexOf(detail) != details.right.length - 1 && (
										<IconPointFilled size={8} />
									)}
								</Group>
							))}
						</Group>
					</Flex>
				</Container>
			</Box>
		</Box>
	);
}
