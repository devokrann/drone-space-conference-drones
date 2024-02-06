import React from "react";

import { Box, Center, Stack, Title } from "@mantine/core";

import breadcrumb from "../../components/breadcrumbs";

import { typeRoute } from "@src/types/hero";
import { useLocation } from "react-router-dom";
import useCrumbs from "@src/hooks/crumbs";

import poster from "@src/assets/images/posters/poster-1.png";

import Layout from "@src/layouts";

import classes from "./Route.module.scss";

export default function Route({ image, video }: typeRoute) {
	const location = useLocation();
	const crumbs = useCrumbs(location.pathname);

	return (
		<Box
			// className={classes.hero}
			style={{
				backgroundImage:
					image && `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}"`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
				color: "white",
				position: "relative",
			}}
		>
			<Layout.Section containerized padded id="hero">
				<Stack gap={"xs"} align="center" ta={"center"}>
					<Title order={1} fz={40}>
						{crumbs[crumbs.length - 1].label}
					</Title>
					<Box visibleFrom="xs">
						<breadcrumb.Hero data={crumbs} />
					</Box>
				</Stack>
				{video && (
					<>
						<Center
							style={{
								position: "absolute",
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								overflow: "hidden",
								zIndex: -2,
							}}
						>
							<video
								src={video}
								autoPlay
								// preload="auto"
								muted
								loop
								width={"100%"}
								poster={poster}
							></video>
						</Center>
						<Box
							style={{
								position: "absolute",
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								backgroundColor: "rgba(0, 0, 0, 0.33)",
								zIndex: -1,
							}}
						></Box>
					</>
				)}
			</Layout.Section>
		</Box>
	);
}
