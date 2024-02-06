import React from "react";

import { Button, List, Stack, Text } from "@mantine/core";

import { IconChevronRight } from "@tabler/icons-react";

import modal from "../../modals";

import classes from "./Sponsor.module.scss";

import { typeSponsor } from "@src/types/ticket";

export default function Sponsor({ data }: typeSponsor) {
	return (
		<Stack align="center" justify="space-between" pos={"relative"} className={classes.card} gap={"xl"}>
			<Stack gap={"md"} w={"100%"}>
				<Stack gap={0} align="center">
					<Text component="h3" ta={"center"} tt={"uppercase"} fw={500}>
						{data.title}
					</Text>
					<Text component="p" ta={"center"} fz={36} fw={700} className={classes.price}>
						<Text component="span" fw={500}>
							Kes.
						</Text>{" "}
						{data.price}
					</Text>
				</Stack>
				<List
					spacing={"xs"}
					size="xs"
					icon={<IconChevronRight size={16} stroke={2} color="var(--mantine-color-pri-6)" />}
				>
					{data.desc.map(item => (
						<List.Item key={item.item}>{item.desc}</List.Item>
					))}
				</List>
			</Stack>
			<modal.Application title={data.title}>Register</modal.Application>
		</Stack>
	);
}
