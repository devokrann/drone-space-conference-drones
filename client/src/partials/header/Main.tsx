import React from "react";
import { Link } from "react-router-dom";

import { Box, Container, Flex, Group, Text } from "@mantine/core";

import { IconPointFilled } from "@tabler/icons-react";

import Component from "../../components";

import data from "../../data";

import classes from "./Main.module.scss";
import Switch from "@src/components/switches";

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
		<Box component="header" className={classes.header}>
			<Container size={"lg"} py={8}>
				<Flex
					align="center"
					direction={{ base: "column", xs: "row" }}
					gap={"xs"}
					justify={{ base: "center", xs: "space-between" }}
					fz={"xs"}
					fw={500}
					ta={{ base: "center" }}
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
					<Group gap={"md"}>
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
						<Switch.Theme />
					</Group>
				</Flex>
			</Container>
		</Box>
	);
}
