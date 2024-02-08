import React from "react";

import { Accordion, Container, Divider, Group, Stack, Text } from "@mantine/core";

import clases from "./Program.module.scss";

export default function Program({
	data,
}: {
	data: {
		title: string;
		desc: { agenda: string[]; speakers?: string[]; panelists?: string[]; moderator?: string[] };
	}[];
}) {
	const items = data.map(item => (
		<Accordion.Item key={item.title} value={item.title}>
			<Accordion.Control>{item.title}</Accordion.Control>
			<Accordion.Panel fz={"sm"}>
				<Container>
					<Stack>
						{item.desc.agenda && (
							<Stack gap={"xs"}>
								{item.desc.agenda.map(agend => (
									<Text inherit key={agend}>
										<Text component="span" inherit fw={500}>
											Agenda {item.desc.agenda.length > 1 && item.desc.agenda.indexOf(agend) + 1}
										</Text>{" "}
										: {agend}
									</Text>
								))}
							</Stack>
						)}
						{item.desc.speakers && (
							<>
								{/* <Divider variant="dashed" /> */}
								<Group>
									{item.desc.speakers?.map(speaker => (
										<Text inherit key={speaker}>
											<Text component="span" inherit fw={500}>
												Speaker{" "}
												{item.desc.speakers &&
													item.desc.speakers?.length > 1 &&
													item.desc.speakers?.indexOf(speaker) + 1}
											</Text>{" "}
											: {speaker}
										</Text>
									))}
								</Group>
							</>
						)}
						{item.desc.panelists && (
							<>
								{/* <Divider variant="dashed" /> */}
								<Group gap={"xl"}>
									{item.desc.panelists?.map(panelist => (
										<Text inherit key={panelist}>
											<Text component="span" inherit fw={500}>
												Panelist{" "}
												{item.desc.panelists &&
													item.desc.panelists?.length > 1 &&
													item.desc.panelists?.indexOf(panelist) + 1}
											</Text>{" "}
											: {panelist}
										</Text>
									))}
								</Group>
							</>
						)}
						{item.desc.moderator && (
							<>
								{/* <Divider variant="dashed" /> */}
								<Group gap={"xl"}>
									{item.desc.moderator?.map(moderat => (
										<Text inherit key={moderat}>
											<Text component="span" inherit fw={500}>
												Moderator{" "}
												{item.desc.moderator &&
													item.desc.moderator?.length > 1 &&
													item.desc.moderator?.indexOf(moderat) + 1}
											</Text>{" "}
											: {moderat}
										</Text>
									))}
								</Group>
							</>
						)}
					</Stack>
				</Container>
			</Accordion.Panel>
		</Accordion.Item>
	));

	return (
		<Accordion
			defaultValue={data[0].title}
			classNames={{
				item: clases.item,
				control: clases.control,
				content: clases.content,
				label: clases.label,
				panel: clases.panel,
			}}
		>
			{items}
		</Accordion>
	);
}
