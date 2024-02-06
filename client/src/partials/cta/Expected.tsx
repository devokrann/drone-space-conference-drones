import React from "react";

import { Box, Grid, Stack } from "@mantine/core";

import Component from "@src/components";
import Layout from "@src/layouts";

import classes from "./Expected.module.scss";

import data from "@src/data";

export default function Expected({ image, title }: { image?: string; title?: { plain: string; highlight: string } }) {
	return (
		<Box
			className={classes.cta}
			style={{
				backgroundImage:
					image && `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}"`,
			}}
		>
			<Layout.Section id="cta" containerized padded>
				<Stack gap={48}>
					{title && <Component.Heading.Main title={title} c={"white"} />}
					<Grid align="center" justify="center" gutter={"xl"}>
						{data.stats.map(stat => (
							<Grid.Col span={{ base: 6, xs: 4, md: 2 }} key={stat.stat}>
								<Component.Card.Stat data={stat} />
							</Grid.Col>
						))}
					</Grid>
				</Stack>
			</Layout.Section>
		</Box>
	);
}
