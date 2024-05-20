import React from "react";

import { Button, Stack, Text } from "@mantine/core";

import classes from "./Local.module.scss";

const link = "https://www.ticketsasa.com/events/eventdetail/view/3962/drone_tech_and_data_expo_2024";

import { typeLocal } from "@src/types/ticket";

export default function Local({ data }: typeLocal) {
	return (
		<Stack align="center" justify="space-between" pos={"relative"} className={classes.card}>
			<Stack gap={"md"}>
				<Stack gap={0} align="center">
					<Text component="h3" ta={"center"} tt={"uppercase"} fw={500} c={"pri.6"}>
						{data.title}
					</Text>
					<Text component="p" ta={"center"} fz={36} fw={700} className={classes.price}>
						<Text component="span" fw={500}>
							Kes.
						</Text>{" "}
						{data.price}
					</Text>
				</Stack>
				<Text component="p" ta={"center"} fz={"sm"}>
					{data.desc}
				</Text>
			</Stack>
			{/* <Button fullWidth component="a" href={link} target="_blank" color={"sec"}>
				Purchase {data.title} Ticket
			</Button> */}
		</Stack>
	);
}
