import React from "react";

import { Anchor, Center, Container, Image, Stack, Text } from "@mantine/core";

import { IconHelpOctagon } from "@tabler/icons-react";

import Layout from "@src/layouts";
import Partial from "@src/partials";

import { Link } from "react-router-dom";

export default function Signup() {
	return (
		<Layout.Body>
			<Container size={"xs"}>
				<Center mih={"100vh"}>
					<Stack gap={"xl"} align="center">
						{/* <Image src={image.brand.full} w={160} /> */}
						<Stack align="center" gap={"xs"}>
							{/* <Title order={2}>Sign Up</Title> */}
							<Partial.Form.Signup />
							<Text
								component="small"
								inherit
								fz={"sm"}
								c={"dimmed"}
							>
								Already have an account?{" "}
								<Anchor
									component={Link}
									inherit
									to={"/auth/log-in"}
									c={"pri.8"}
								>
									Login
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
