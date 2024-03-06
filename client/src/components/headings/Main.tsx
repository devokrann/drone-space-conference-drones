import { Divider, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Icon } from "@tabler/icons-react";
import React from "react";

export default function Main({
	title,
	icon,
	...restProps
}: {
	title?: { plain: string; highlight: string };
	icon?: { icon: Icon };
} & React.ComponentProps<typeof Title>) {
	return (
		<Stack align="center" gap={"xs"}>
			{title && (
				<Title order={2} fw={500} fz={32} lts={2} ta={"center"} c={"sec"} {...restProps}>
					{title.plain}{" "}
					<Text component="span" fz={"inherit"} fw={"bold"} c={"pri.6"}>
						{title.highlight}
					</Text>
				</Title>
			)}
			{icon && (
				<Divider
					w={160}
					my={0}
					label={
						<ThemeIcon variant="transparent" color="pri.6">
							<icon.icon size={24} />
						</ThemeIcon>
					}
					color="sec.6"
				/>
			)}
		</Stack>
	);
}
