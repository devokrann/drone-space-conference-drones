import React from "react";

import { Switch, useMantineColorScheme } from "@mantine/core";

import { IconMoonStars, IconSun } from "@tabler/icons-react";

export default function Theme() {
	const { colorScheme, setColorScheme } = useMantineColorScheme({ keepTransitions: true });
	let value;

	const sunIcon = <IconSun size={16} stroke={2.5} color={"var(--mantine-color-yellow-4)"} />;

	const moonIcon = <IconMoonStars size={16} stroke={2.5} color={"var(--mantine-color-blue-6)"} />;

	if (colorScheme == "dark") {
		value = false;
	}

	if (colorScheme == "light") {
		value = true;
	}

	const toggleColorScheme = () => {
		setColorScheme(colorScheme === "dark" ? "light" : "dark");
	};

	return (
		<Switch
			size="sm"
			color="dark.4"
			onLabel={sunIcon}
			offLabel={moonIcon}
			checked={value}
			onChange={() => toggleColorScheme()}
		/>
	);
}
