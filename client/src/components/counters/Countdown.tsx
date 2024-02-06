import React, { useEffect, useState } from "react";

import { Grid, Stack, Text } from "@mantine/core";

import timer from "@src/hooks/timers";

export default function Countdown() {
	const target = new Date(2024, 2, 24, 23, 59, 59);

	const [time, setTime] = useState(timer.useCountdown(target));

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(timer.useCountdown(target));
		}, 1000);

		return () => clearInterval(interval);
	});

	const details = [
		{
			unit: "Month",
			time: time.months,
		},
		{
			unit: "Day",
			time: time.days,
		},
		{
			unit: "Hour",
			time: time.hours,
		},
		{
			unit: "Minute",
			time: time.minutes,
		},
		{
			unit: "Second",
			time: time.seconds,
		},
	];

	return (
		<Grid align="center" fz={{ base: 24, xs: 28, sm: 32, md: 36 }} fw={500} lh={1}>
			{details.map(item => (
				<Grid.Col
					key={item.unit}
					span={"auto"}
					// style={(theme) => ({
					// 	borderLeft: `1px solid ${theme.colors.pri[6]}`,
					// })}
				>
					<Stack align="center" gap={2}>
						<Text component="span" fz={"inherit"} fw={"inherit"} lh={"inherit"}>
							{item.time}
						</Text>
						<Text component="p" fw={500} tt={"uppercase"} fz={{ base: 8, xs: 12, sm: 16, md: 20 }}>
							{item.unit}
							{item.time != 1 && <>s</>}
						</Text>
					</Stack>
				</Grid.Col>
			))}
		</Grid>
	);
}
