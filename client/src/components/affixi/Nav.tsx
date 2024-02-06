import React from "react";

import { Affix, Box, Transition } from "@mantine/core";

import { useWindowScroll } from "@mantine/hooks";

import navbar from "../../partials/nav";

import data from "@src/data";

export default function Nav() {
	const [scroll] = useWindowScroll();

	return (
		<Affix position={{ left: 0, top: 0, right: 0 }}>
			<Transition transition="slide-down" mounted={scroll.y > 120}>
				{transitionStyles => (
					<Box style={transitionStyles} visibleFrom="xs">
						<navbar.Scroll data={data.links.navbar} />
					</Box>
				)}
			</Transition>
		</Affix>
	);
}
