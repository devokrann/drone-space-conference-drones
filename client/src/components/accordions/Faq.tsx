import React from "react";

import { Accordion, Text } from "@mantine/core";

import { typeFaq } from "@src/types/faq";

export default function Faq({ data }: typeFaq) {
	return (
		<Accordion defaultValue={data[0].question}>
			{data.map(question => (
				<Accordion.Item key={question.question} value={question.question}>
					<Accordion.Control>
						<Text component="p" fz={"sm"} fw={500}>
							{question.question}
						</Text>
					</Accordion.Control>
					<Accordion.Panel>
						<Text component="p" fz={"sm"} py={"xs"}>
							{question.answer}
						</Text>
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
