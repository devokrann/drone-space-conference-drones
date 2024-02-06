import React from "react";

import { Container, Grid, Tabs, Text } from "@mantine/core";

import data from "@src/data";

import classes from "./Schedule.module.scss";

import tables from "../tables";

export default function Schedule() {
	return (
		<Tabs
			defaultValue="day1"
			classNames={{
				list: classes.list,
				tab: classes.tab,
				panel: classes.panel,
			}}
			className={classes.tabs}
		>
			<Tabs.List>
				<Grid w={"100%"}>
					<Grid.Col span={6}>
						<Tabs.Tab value="day1" fw={500} tt={"uppercase"} p={"lg"} className={classes.tab} w={"100%"}>
							Day 1 -{" "}
							<Text component="span" fz={"inherit"} tt={"capitalize"}>
								Tuesday 26<sup>th</sup> March, 2024
							</Text>
						</Tabs.Tab>
					</Grid.Col>
					<Grid.Col span={6}>
						<Tabs.Tab value="day2" fw={500} tt={"uppercase"} p={"lg"} className={classes.tab} w={"100%"}>
							Day 2 -{" "}
							<Text component="span" fz={"inherit"} tt={"capitalize"}>
								Wednesday 27<sup>th</sup> March, 2024
							</Text>
						</Tabs.Tab>
					</Grid.Col>
				</Grid>
			</Tabs.List>

			<Tabs.Panel value="day1">
				<Container size={"xl"}>
					<tables.Schedule data={data.schedule.day1} />
				</Container>
			</Tabs.Panel>

			<Tabs.Panel value="day2">
				<Container size={"xl"}>
					<tables.Schedule data={data.schedule.day2} />
				</Container>
			</Tabs.Panel>
		</Tabs>
	);
}
