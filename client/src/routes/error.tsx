import React from "react";
import { Link, useRouteError } from "react-router-dom";

import { Button, Center, Stack, Text, Title } from "@mantine/core";

import { IconArrowRight } from "@tabler/icons-react";

import Layout from "@src/layouts";
import Partial from "@src/partials";

import image from "@src/assets/images";

export default function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<Layout.Body>
			<Layout.Page>
				<Layout.Section containerized>
					<Center mih={"100vh"}>
						<Stack align="center" ta={"center"} gap={"xl"}>
							<Title order={1} fz={96} c={"pri"}>
								{error.status}
							</Title>
							<Stack>
								<Title order={2} c={"sec"}>
									{error.statusText || error.message}
								</Title>
								<Text>Sorry, an unexpected error has occurred.</Text>
							</Stack>
							<Button color="sec" rightSection={<IconArrowRight size={16} />} component={Link} to={"/"}>
								Go Back Home
							</Button>
						</Stack>
					</Center>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
