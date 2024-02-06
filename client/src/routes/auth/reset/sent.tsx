import React from "react";

import { Center, Container, Image, Stack, Text, Title } from "@mantine/core";

import Layout from "@src/layouts";
import Partial from "@src/partials";

export default function Sent() {
	return (
		<Layout.Body>
			<Container size={"xs"}>
				<Center mih={"100vh"}>
					<Stack gap={"xl"} w={"100%"}>
						{/* <Image src={image.brand.full} w={160} /> */}
						<Title order={1} ta={"center"}>
							Email Sent
						</Title>
						<Text ta={"center"} c={"dimmed"}>
							An email containing the link to reset your password
							has been sent to the provided email. Remember to
							check the spam/junk folder(s).
						</Text>
					</Stack>
				</Center>
			</Container>
		</Layout.Body>
	);
}
