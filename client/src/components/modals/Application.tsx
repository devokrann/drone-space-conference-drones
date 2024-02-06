import React from "react";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

import Partial from "@src/partials";

export default function Application({ title, children }: { title: string; children: React.ReactNode }) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal opened={opened} centered onClose={close} title={`Application for ${title}`} size={"xl"}>
				<Partial.Form.Application />
			</Modal>

			<Button onClick={open} fullWidth tt={"uppercase"}>
				{children}
			</Button>
		</>
	);
}
