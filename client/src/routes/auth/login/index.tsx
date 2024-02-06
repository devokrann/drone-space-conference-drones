import React from "react";

import { Anchor, Center, Container, Image, Stack, Text } from "@mantine/core";

import Layout from "@src/layouts";
import Partial from "@src/partials";

import { Link } from "react-router-dom";

export default function Login() {
	return (
		<Layout.Body>
			<Container size={"xs"}>
				<Center mih={"100vh"}>
					<Stack gap={"xl"} align="center">
						{/* <Image src={image.brand.full} w={160} /> */}
						<Stack align="center" gap={"xs"}>
							{/* <Title order={2}>Sign Up</Title> */}
							<Partial.Form.Login />
							<Text
								component="small"
								inherit
								fz={"sm"}
								c={"dimmed"}
							>
								Don't have an account yet?{" "}
								<Anchor
									component={Link}
									inherit
									to={"/auth/sign-up"}
									c={"pri.8"}
								>
									Sign Up
								</Anchor>
								.
							</Text>
						</Stack>
					</Stack>
				</Center>
			</Container>
		</Layout.Body>
	);
}
