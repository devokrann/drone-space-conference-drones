import React from "react";

import { Stack, Text, Title } from "@mantine/core";

import Component from "@src/components";

import data from "@src/data";

export default function Industries() {
	return (
		<Stack gap={0} visibleFrom="md">
			<Stack gap={0} pt={"xl"}>
				<Title order={2} ta={"center"} fz={"sm"} fw={500} tt={"uppercase"} lts={1} c={"sec"}>
					The{" "}
					<Text component="span" c={"pri"} fw={"inherit"} lts={"inherit"} fz={"inherit"}>
						Drone & Data Expo
					</Text>{" "}
					Event For
				</Title>
			</Stack>
			<Component.Carousel.Industries data={data.industries} />
		</Stack>
	);
}
