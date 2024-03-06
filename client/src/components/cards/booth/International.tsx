import React from "react";

import { Button, Stack, Text } from "@mantine/core";

import { IconCurrencyDollar } from "@tabler/icons-react";

import modal from "../../modals";

import classes from "./International.module.scss";

interface typeInternational {
	data: {
		title: string;
		desc: string;
		price: string;
		type: string;
		dimentions: string;
	};
}

export default function International({ data }: typeInternational) {
	return (
		<Stack align="center" justify="space-between" pos={"relative"} className={classes.card}>
			<Stack gap={"md"}>
				<Stack gap={0} align="center">
					<Text component="h3" ta={"center"} tt={"uppercase"} fw={500}>
						{data.title}
					</Text>
				</Stack>
				<Text component="p" ta={"center"} fz={36} fw={700} className={classes.price}>
					<Text component="span" fw={500}>
						<IconCurrencyDollar stroke={2} />
					</Text>
					{data.price}
				</Text>
				<Text component="p" ta={"center"} fz={"sm"}>
					{data.desc}
				</Text>
				<Text component="p" ta={"center"} fz={"sm"} fw={"500"}>
					Dimentions:{" "}
					<Text component="span" c={"pri.6"} fz={"sm"} fw={"inherit"}>
						{data.dimentions}
					</Text>
				</Text>
			</Stack>
			<modal.Contact
				title={data.title}
				inquiry="Booth Registration"
				booth={"International"}
				boothSize={data.dimentions}
			>
				Book Now
			</modal.Contact>
		</Stack>
	);
}
