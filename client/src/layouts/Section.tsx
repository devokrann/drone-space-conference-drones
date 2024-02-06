import React from "react";

import { Box, Container } from "@mantine/core";

import typeSection from "@src/types/section";

import classes from "./Section.module.scss";

export default function Section({
	containerized,
	containerSize,
	padded,
	margined,
	bordered,
	shadowed,
	children,
	...restProps
}: typeSection) {
	return containerized ? (
		<Box
			py={padded ? (typeof padded == "boolean" ? (padded ? 96 : 0) : padded) : undefined}
			{...restProps}
			my={margined ? (typeof margined == "boolean" ? (margined ? 96 : 0) : margined) : undefined}
			{...restProps}
			className={`${bordered && classes.border} ${shadowed && classes.shadow}`}
		>
			<Container size={containerSize ? containerSize : undefined} component={"section"}>
				{children}
			</Container>
		</Box>
	) : (
		<Box
			component="section"
			py={padded ? (typeof padded == "boolean" ? (padded ? 96 : 0) : padded) : undefined}
			{...restProps}
			my={margined ? (typeof margined == "boolean" ? (margined ? 96 : 0) : margined) : undefined}
			{...restProps}
			className={`${bordered && classes.border} ${shadowed && classes.shadow}`}
		>
			{children}
		</Box>
	);
}
