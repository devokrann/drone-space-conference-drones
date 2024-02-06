import React from "react";

import { Button, List, Stack, Text } from "@mantine/core";

import modal from "../../modals";

import classes from "./Info.module.scss";

interface typeInfo {
	data: {
		price: string | null;
		title: string;
		desc: string | string[];
		type: string | null;
		dimentions: string;
	};
	orientation: string;
}

export default function Info({ data, orientation }: typeInfo) {
	return (
		<Stack align={orientation} justify="space-between" pos={"relative"} className={classes.card}>
			<Stack gap={"md"}>
				<Stack gap={0} align={orientation}>
					<Text
						component="h3"
						c={"sec"}
						ta={orientation == "start" ? "start" : "end"}
						tt={"uppercase"}
						fz={"xl"}
						fw={700}
					>
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
					<Text component="p" ta={orientation == "start" ? "start" : "end"} fz={"sm"}>
						{data.desc}
					</Text>
				) : (
					<List size="sm" spacing={"xs"} ta={orientation == "start" ? "start" : "end"} listStyleType="none">
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
				<Text component="p" ta={orientation == "start" ? "start" : "end"} fz={"sm"} c={"sec"} fw={"500"}>
					Dimentions:{" "}
					<Text component="span" c={"pri"} fz={"sm"} fw={"inherit"}>
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
