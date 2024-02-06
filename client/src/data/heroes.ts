const heroes = {
	overview: {
		title: "Event Overview",
		breadcrumbs: [
			{ label: "Home", link: "/" },
			{ label: "Overview", link: "#" },
		],
	},

	exhibition: {
		root: {
			title: "Exhibition",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Exhibition", link: "#" },
			],
		},
		why: {
			title: "Why Exhibit?",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Exhibition", link: "#exhibition" },
				{ label: "Why Exhibit?", link: "#" },
			],
		},
		pavilion: {
			title: "University Pavilion & Booth Allocation",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Exhibition", link: "#exhibition" },
				{ label: "University Pavilion", link: "#" },
			],
		},
		floorplan: {
			title: "Floor Plan",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Exhibition", link: "#exhibition" },
				{ label: "Floor Plan", link: "#" },
			],
		},
		information: {
			title: "Exhibitor Information",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Exhibition", link: "#exhibition" },
				{ label: "Exhibitor Information", link: "#" },
			],
		},
	},

	conference: {
		root: {
			title: "Conference",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Conference", link: "#" },
			],
		},
		information: {
			title: "Conference Information",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Conference", link: "#conference" },
				{ label: "Conference Information", link: "#" },
			],
		},
		schedule: {
			title: "Conference Schedule",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Conference", link: "#conference" },
				{ label: "Program", link: "#" },
			],
		},
		keynotes: {
			title: "Keynotes",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Conference", link: "#conference" },
				{ label: "Keynotes", link: "#" },
			],
		},
		speakers: {
			title: "Speakers",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Conference", link: "#conference" },
				{ label: "Speakers", link: "#" },
			],
		},
	},

	sponsorship: {
		title: "Sponsorship",
		breadcrumbs: [
			{ label: "Home", link: "/" },
			{ label: "Sponsorship", link: "#" },
		],
	},

	about: {
		root: {
			title: "About The Expo & Conference",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "About", link: "#" },
			],
		},
		organizers: {
			title: "Organizer",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "About", link: "#about" },
				{ label: "Organizer", link: "#" },
			],
		},
		travel: {
			title: "Travel",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "About", link: "#about" },
				{ label: "Travel", link: "#" },
			],
		},
		contact: {
			title: "Contacts",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "About", link: "#about" },
				{ label: "Contacts", link: "#" },
			],
		},
	},

	hisory: {
		root: {
			title: "History",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "History", link: "#" },
			],
		},
		year: {
			yr2022: {
				root: {
					title: "2022 Expo Post-Show Report",
					breadcrumbs: [
						{ label: "Home", link: "/" },
						{ label: "History", link: "#history" },
						{ label: "2022", link: "#" },
					],
				},
				exhibitors: {
					title: "2022 Expo Post-Show Report",
					breadcrumbs: [
						{ label: "Home", link: "/" },
						{ label: "History", link: "#history" },
						{ label: "2022", link: "#history/2022" },
						{ label: "Exhibitors", link: "#" },
					],
				},
				gallery: {
					title: "2022 Expo Post-Show Report",
					breadcrumbs: [
						{ label: "Home", link: "/" },
						{ label: "History", link: "#history" },
						{ label: "2022", link: "#history/2022" },
						{ label: "Gallery", link: "#" },
					],
				},
				sponsors: {
					title: "2022 Expo Post-Show Report",
					breadcrumbs: [
						{ label: "Home", link: "/" },
						{ label: "History", link: "#history" },
						{ label: "2022", link: "#history/2022" },
						{ label: "Sponsors", link: "#" },
					],
				},
				speakers: {
					title: "2022 Expo Post-Show Report",
					breadcrumbs: [
						{ label: "Home", link: "/" },
						{ label: "History", link: "#history" },
						{ label: "2022", link: "#history/2022" },
						{ label: "Speakers", link: "#" },
					],
				},
			},
		},
	},

	booths: {
		root: {
			title: "Booths",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Booths", link: "#" },
			],
		},
		local: {
			title: "Kenyan Company Booths",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Booths", link: "#booths" },
				{ label: "Local", link: "#" },
			],
		},
		international: {
			title: "Non-Kenyan Company Booths",
			breadcrumbs: [
				{ label: "Home", link: "/" },
				{ label: "Booths", link: "#booths" },
				{ label: "International", link: "#" },
			],
		},
	},

	tickets: {
		title: "Tickets",
		breadcrumbs: [
			{ label: "Home", link: "/" },
			{ label: "Tickets", link: "#" },
		],
	},

	gallery: {
		title: "Gallery",
		breadcrumbs: [
			{ label: "Home", link: "/" },
			{ label: "Gallery", link: "#" },
		],
	},

	soon: {
		title: "Coming Soon",
		breadcrumbs: [
			{ label: "Home", link: "/" },
			{ label: "Coming Soon", link: "#" },
		],
	},
};

export default heroes;
