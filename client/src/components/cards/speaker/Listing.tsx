import React from "react";

import { Box, Center, Image, Spoiler, Stack, Text, Title } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import classes from "./Listing.module.scss";

import { typeListing } from "@src/types/speaker";

export default function Listing({ data }: typeListing) {
	return (
		<Box className={classes.card}>
			<Center className={classes.head}>
				<Stack align="center" gap={"lg"}>
					<Image src={data.img} alt={data.name} maw={200} radius={99} />
					<Stack gap={8} ta={"center"}>
						<Title order={3} fz={"xl"} className={classes.title}>
							{data.name}
						</Title>
						<Title order={4} fz={"sm"}>
							{data.position && data.position}
							{data.pow && (
								<>
									{data.position && `, `}
									<Text component="span" inherit fz={"md"} c={"pri.6"}>
										{data.pow}
									</Text>
								</>
							)}
						</Title>
					</Stack>
				</Stack>
			</Center>
			<Center className={classes.content}>
				<Spoiler maxHeight={240} showLabel="more" hideLabel="less">
					{data.bio}
				</Spoiler>
			</Center>
		</Box>
	);
}
