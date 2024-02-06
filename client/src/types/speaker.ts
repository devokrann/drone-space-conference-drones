import { Icon } from "@tabler/icons-react";

export interface typeListing {
	data: {
		img: string;
		name: string;
		position: string | null;
		pow: string | null;
		bio: string | null;
		social:
			| {
					icon: Icon;
					link: string;
			  }[]
			| null;
	};
}
