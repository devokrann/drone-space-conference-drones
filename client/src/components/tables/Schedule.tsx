import React from "react";

import { Grid, Table } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Schedule({
	data,
}: {
	data: { date: string; time: string; title: string }[];
}) {
	const mobile = useMediaQuery("(max-width: 47em)");

	const rows = data.map((item) => (
		<Table.Tr key={item.time}>
			<Grid>
				<Grid.Col span={3} visibleFrom="sm">
					<Table.Td>{item.date}</Table.Td>
				</Grid.Col>
				<Grid.Col span={mobile ? 6 : 3}>
					<Table.Td>{item.time}</Table.Td>
				</Grid.Col>
				<Grid.Col span={mobile ? 6 : 6}>
					<Table.Td>{item.title}</Table.Td>
				</Grid.Col>
			</Grid>
		</Table.Tr>
	));

	return (
		<Table
			verticalSpacing={"xs"}
			captionSide="top"
			striped
			highlightOnHover
			withTableBorder
		>
			<Table.Caption mb={"xl"}>
				Registration Hours (Badge & Ticket Pick-up) will be on{" "}
				<strong>
					Monday 25
					<sup>th</sup> March, 2024
				</strong>{" "}
				from <strong>10:00 AM - 05:00 PM</strong>
			</Table.Caption>
			<Table.Thead>
				<Table.Tr>
					<Grid>
						<Grid.Col span={3} visibleFrom="sm">
							<Table.Th>Date</Table.Th>
						</Grid.Col>
						<Grid.Col span={mobile ? 6 : 3}>
							<Table.Th>Time</Table.Th>
						</Grid.Col>
						<Grid.Col span={mobile ? 6 : 6}>
							<Table.Th>Activity</Table.Th>
						</Grid.Col>
					</Grid>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>{rows}</Table.Tbody>
		</Table>
	);
}
