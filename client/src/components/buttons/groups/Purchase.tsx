import React from "react";
import { Link } from "react-router-dom";

import { Button, ButtonGroup } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Purchase({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) {
	const mobile = useMediaQuery("(max-width: 36em)");
	return (
		<ButtonGroup orientation={mobile ? "vertical" : orientation}>
			<Button
				component={Link}
				to={"/conference/tickets"}
				tt={"uppercase"}
				fz={"xs"}
				miw={150}
				radius={orientation == "horizontal" ? "xl" : "sm"}
			>
				Buy a Ticket
			</Button>
			<Button
				component={Link}
				to={"/exhibition/booths/local-booths"}
				tt={"uppercase"}
				fz={"xs"}
				miw={150}
				radius={orientation == "horizontal" ? "xl" : "sm"}
				color="sec"
			>
				Book a Booth
			</Button>
		</ButtonGroup>
	);
}
