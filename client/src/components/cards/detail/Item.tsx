import React from "react";

import { Icon } from "@tabler/icons-react";

import { Grid, Stack, Text, ThemeIcon } from "@mantine/core";

import { typeItem } from "@src/types/card/detail/item";

export default function Item({ data }: typeItem) {
	return (
		<Grid gutter={"xl"}>
			{data.icon && (
				<Grid.Col span={2}>
					<ThemeIcon color="sec" c={"white"} size={32}>
						<data.icon size={16} stroke={1.5} />
					</ThemeIcon>
				</Grid.Col>
			)}
			<Grid.Col span={data.icon == undefined ? 12 : 11}>
				<Stack gap={4}>
					<Text component="p" fz={10} lts={1} fw={700} tt={"uppercase"} c={"sec"}>
						{data.label}
					</Text>
					<Text component="p" fz={"xs"}>
						{data.desc}
					</Text>
				</Stack>
			</Grid.Col>
		</Grid>
	);
}
