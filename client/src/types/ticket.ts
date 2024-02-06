export interface typeLocal {
	data: {
		title: string;
		desc: string;
		price: string;
		type: string;
	};
}

export interface typeSponsor {
	data: {
		title: string;
		desc: { item: string; desc: string }[];
		price: string;
	};
}
