import { Icon } from "@tabler/icons-react";

export interface typeContact {
	data: {
		icon: Icon;
		title: string;
		desc: { link: string; label: string }[];
	};
}

export interface typeExhibitor {
	data: {
		img: string;
		name: string;
		desc: string;
	};
	w: string;
}

export interface typeSocial {
	data: {
		icon: Icon;
		link: string;
		label: string;
		tag?: string | null;
	};
}

export interface typeSponsor {
	data: {
		img: string;
		name: string;
		width?: string | undefined;
	};
}

export interface typeStat {
	data: {
		stat: string;
		value: number;
	};
}
