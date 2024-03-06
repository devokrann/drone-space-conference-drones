import React from "react";

import { List, Stack, Text, Title } from "@mantine/core";

import classes from "./Pavilion.module.scss";

import { typePavilion } from "@src/types/card/both/pavilion";

export default function Pavilion({ data }: typePavilion) {
	return (
		<Stack justify="space-between" pos={"relative"} className={classes.card}>
			<Stack gap={"md"}>
				<Stack gap={0}>
					<Title order={3} className={classes.title}>
						{data.title}
					</Title>
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
					<Text component="p" fz={"sm"}>
						{data.desc}
					</Text>
				) : (
					<List size="sm" spacing={"xs"} listStyleType="none">
						{data.desc.map(item => (
							<List.Item key={item}>
								<Text fz={"inherit"} w={"fit-content"} className={classes.item}>
									{item}
								</Text>
							</List.Item>
						))}
					</List>
				)}
				<Text component="p" fz={"sm"} c={"sec"} fw={"500"}>
					Dimentions:{" "}
					<Text component="span" c={"pri.6"} fz={"sm"} fw={"inherit"}>
						{data.dimentions}
					</Text>
				</Text>
			</Stack>
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
