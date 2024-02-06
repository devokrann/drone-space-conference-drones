import React from "react";

import { Box, Container, Flex } from "@mantine/core";

import Provider from "@src/providers";

import typeBody from "@src/types/body";

import Page from "./Page";

export default function Body({ header, nav, children, aside, footer }: typeBody) {
	const asideElement = (
		<Box
			visibleFrom="md"
			style={{
				width: "33%",
				position: "sticky",
				top: 48,
				height: "100%",
			}}
		>
			{aside && aside.element}
		</Box>
	);

	return (
		<Provider.Transition.Page>
			{header && header}
			{nav && nav}
			{aside ? (
				<Page padded hero={aside.hero}>
					<Flex gap={"xl"} component={Container}>
						{aside.position == "left" && asideElement}
						<Box w={{ md: "66%" }}>{children && children}</Box>
						{aside.position == "right" && asideElement}
					</Flex>
				</Page>
			) : (
				children
			)}
			{footer && footer}
		</Provider.Transition.Page>
	);
}
