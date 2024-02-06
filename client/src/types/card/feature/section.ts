import { Icon } from "@tabler/icons-react";

export interface typeSection {
	data: {
		icon: Icon;
		title: string;
		desc: string;
		links: { link: string; label: string };
	};
}
