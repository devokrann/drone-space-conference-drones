import React from "react";

import { List, Stack, Text } from "@mantine/core";

import classes from "./Pavilion.module.scss";

import { typePavilion } from "@src/types/card/both/pavilion";

export default function Pavilion({ data }: typePavilion) {
	return (
		<Stack justify="space-between" pos={"relative"} className={classes.card}>
			<Stack gap={"md"}>
				<Stack gap={0}>
					<Text component="h3" c={"sec"} tt={"uppercase"} fz={"xl"} fw={700}>
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
					<Text component="p" fz={"sm"}>
						{data.desc}
					</Text>
				) : (
					<List size="sm" spacing={"xs"} listStyleType="none">
						{data.desc.map(item => (
							<List.Item key={item}>
								<Text
									fz={"inherit"}
									w={"fit-content"}
									style={theme => ({
										borderBottom: `2px dashed ${theme.colors.sec[6]}`,
									})}
								>
									{item}
								</Text>
							</List.Item>
						))}
					</List>
				)}
				<Text component="p" fz={"sm"} c={"sec"} fw={"500"}>
					Dimentions:{" "}
					<Text component="span" c={"pri"} fz={"sm"} fw={"inherit"}>
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
