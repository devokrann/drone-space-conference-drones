import React from "react";

import { Box, Container, Divider, Stack, Title } from "@mantine/core";

import classes from "./Aside.module.scss";

export default function Aside({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<Box className={classes.card}>
			<Stack gap={"lg"}>
				<Container w={"100%"} px={"xl"} size={"xl"}>
					<Title order={2} fz={"lg"} fw={500}>
						{title}
					</Title>
				</Container>
				<Divider size={"sm"} color="sec" />
				<Container w={"100%"} px={"xl"} size={"xl"}>
					{children}
				</Container>
			</Stack>
		</Box>
	);
}
