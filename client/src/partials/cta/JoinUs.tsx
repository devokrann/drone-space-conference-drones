import React from "react";

import { Container } from "@mantine/core";

import Layout from "@src/layouts";

import Component from "@src/components";

export default function JoinUs({
	image,
	desc,
}: {
	image: string;
	desc: string;
}) {
	return (
		<Layout.Section.Cta
			id="cta"
			title={{ plain: "Join", highlight: "Us" }}
			desc={
				desc
					? desc
					: "Be a part of the Drone Tech & Data Expo 2024 and embrace the limitless possibilities that drones, data and AI have to offer. Whether you're an industry professional, a technology enthusiast, or a curious explorer, this event is designed to ignite your imagination and equip you with the insights needed to navigate the ever-changing landscape of unmanned aerial systems, Big Data and Artificial Intelligence innovations. Navigate through our navigation menu to learn more about the expo, past editions, exhibitors, conference sessions, ticket options, and more. We look forward to welcoming you to an event that celebrates innovation, connection, and a sustainable future powered by drones, data and AI."
			}
			bgImg={image ? image : "pri"}
			withCountdown={true}
		>
			<Container size={"lg"}>
				<Component.Button.Group.Purchase />
			</Container>
		</Layout.Section.Cta>
	);
}
