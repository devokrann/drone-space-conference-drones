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
		<Stack
			align="center"
			justify="space-between"
			pos={"relative"}
			className={classes.card}
		>
			<Stack gap={"md"}>
				<Stack gap={0} align="center">
					<Text
						component="h3"
						ta={"center"}
						tt={"uppercase"}
						fw={500}
					>
						{data.title}
					</Text>
				</Stack>
				<Text
					component="p"
					ta={"center"}
					fz={36}
					fw={700}
					className={classes.price}
				>
					<Text component="span" fw={500}>
						<IconCurrencyDollar stroke={2} />
					</Text>
					{data.price}
				</Text>
				<Text component="p" ta={"center"} fz={"sm"}>
					{data.desc}
				</Text>
				<Text
					component="p"
					ta={"center"}
					fz={"sm"}
					c={"pri"}
					fw={"500"}
				>
					Dimentions:{" "}
					<Text component="span" c={"white"} fz={"sm"} fw={"inherit"}>
						{data.dimentions}
					</Text>
				</Text>
			</Stack>
			<modal.Application title={data.title}>Book Now</modal.Application>
			<Text
				className={classes.tag}
				fw={500}
				tt={"uppercase"}
				fz={"sm"}
				px={40}
				pos={"absolute"}
				top={46}
				right={-36}
			>
				{data.type}
			</Text>
		</Stack>
	);
}
