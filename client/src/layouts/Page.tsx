import React from "react";

import { Box, Stack } from "@mantine/core";

import Section from "./Section";

import typePage from "@src/types/page";
import Component from "@src/components";

export default function Page({ padded, stacked, hero, children, ...restProps }: typePage) {
	return (
		<Section>
			{stacked ? (
				<>
					{hero && hero}
					<Stack
						gap={stacked ? (typeof stacked == "boolean" ? (stacked ? 96 : 0) : stacked) : undefined}
						component="article"
						py={padded ? (typeof padded == "boolean" ? (padded ? 96 : 0) : padded) : undefined}
						{...restProps}
					>
						{children}
					</Stack>
					<Component.Affix.Nav />
				</>
			) : (
				<>
					{hero && hero}
					<Box
						component="article"
						py={padded ? (typeof padded == "boolean" ? (padded ? 96 : 0) : padded) : undefined}
						{...restProps}
					>
						{children}
					</Box>
					<Component.Affix.Nav />
				</>
			)}
		</Section>
	);
}
