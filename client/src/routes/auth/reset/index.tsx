import React from "react";

import { Center, Container, Image, Stack } from "@mantine/core";

import Layout from "@src/layouts";
import Partial from "@src/partials";

export default function Reset() {
	return (
		<Layout.Body>
			<Container size={"xs"}>
				<Center mih={"100vh"}>
					<Stack gap={"xl"} align="center" w={"100%"}>
						{/* <Image src={image.brand.full} w={160} /> */}
						<Partial.Form.Reset />
					</Stack>
				</Center>
			</Container>
		</Layout.Body>
	);
}
