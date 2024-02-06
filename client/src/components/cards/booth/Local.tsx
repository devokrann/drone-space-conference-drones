import React from "react";

import { Button, List, Stack, Text } from "@mantine/core";

import modal from "../../modals";

import classes from "./Local.module.scss";

import { typeLocal } from "@src/types/card/both/local";

export default function Local({ data }: typeLocal) {
	return (
		<Stack align="center" justify="space-between" pos={"relative"} className={classes.card}>
			<Stack gap={"md"}>
				<Stack gap={0} align="center">
					<Text component="h3" ta={"center"} tt={"uppercase"} fw={500}>
						{data.title}
					</Text>
					{data.price && (
						<Text component="p" ta={"center"} fz={36} fw={700} className={classes.price}>
							<Text component="span" fw={500}>
								{/* <IconCurrencyDollar stroke={2} /> */}
								Ksh.{" "}
							</Text>
							{data.price}
						</Text>
					)}
				</Stack>
				{typeof data.desc == "string" ? (
					<Text component="p" ta={"center"} fz={"sm"}>
						{data.desc}
					</Text>
				) : (
					<List size="sm" spacing={"xs"}>
						{data.desc.map(item => (
							<List.Item key={item}>{item}</List.Item>
						))}
					</List>
				)}
				<Text component="p" ta={"center"} fz={"sm"} c={"pri"} fw={"500"}>
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
				top={20}
				right={-28}
			>
				{data.type}
			</Text>
		</Stack>
	);
}
