import React from "react";
import { Link } from "react-router-dom";

import { Button, ButtonGroup } from "@mantine/core";

export default function Purchase({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) {
	return (
		<ButtonGroup orientation={orientation ? orientation : "horizontal"}>
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
