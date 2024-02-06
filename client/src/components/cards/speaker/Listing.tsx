import React from "react";

import { Image, Stack, Text, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Listing.module.scss";

import { typeListing } from "@src/types/speaker";

export default function Listing({ data }: typeListing) {
	return (
		<Stack align="center" justify="space-between" h={"100%"} p={"xl"} className={classes.card}>
			<Stack align="center" gap={"lg"}>
				<Image src={data.img} alt={data.name} maw={200} radius={99} />
				<Stack gap={8}>
					<Title order={3} ta={"center"} fz={"xl"} className={classes.title}>
						{data.name}
					</Title>
					<Title order={4} fz={11} ta={"center"} c={"pri"}>
						{data.position}
						{data.pow && (
							<Text component="span" fw={700} tt={"uppercase"} fz={"inherit"} c={"white"}>
								, {data.pow}
							</Text>
						)}
					</Title>
				</Stack>
				<Text component={"p"} fz={"sm"} ta={"center"}>
					{data.bio}
				</Text>
			</Stack>
		</Stack>
	);
}
