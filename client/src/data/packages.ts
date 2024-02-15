const packages = {
	tickets: [
		{
			title: "Regular",
			desc: "This ticket includes admission to the Drone Tech & Data Expo/Conference for one day.",
			price: "2,500",
			type: "local",
		},
		{
			title: "Regular (Season Ticket)",
			desc: "This ticket includes admission to the Drone Tech & Data Expo/Conference for two days.",
			price: "4,500",
			type: "local",
		},
		{
			title: "VIP",
			desc: "This ticket includes admission to the Drone Tech & Data Expo/Conference. This will also include tea breaks and snacks for one day.",
			price: "5,000",
			type: "local",
		},
		{
			title: "VIP (Season Ticket)",
			desc: "This ticket includes admission to the Drone Tech & Data Expo/Conference. This will also include tea breaks and snacks for two days.",
			price: "9,500",
			type: "local",
		},
		{
			title: "Corporate",
			desc: "This includes 10 regular corporate tickets for the two-day event. Admission to the Drone Tech & Data Expo/Conference.",
			price: "40,000",
			type: "local",
		},
		{
			title: "Corporate (VIP)",
			desc: "This includes 10 VIP corporate tickets for the two-day event. Admission to the Drone Tech & Data Expo/Conference. This will also include tea breaks and snacks for two days.",
			price: "90,000",
			type: "local",
		},
		{
			title: "Regular",
			desc: "This ticket includes admission to the Kenya Drone Tech and Data Conference/Expo for the two days.",
			price: "80",
			type: "international",
		},
		{
			title: "VIP",
			desc: "This ticket includes access to the Business/Speaker lounge and special events in addition to all of the benefits of the regular ticket. It also includes Tea Breaks and lunch for the two days.",
			price: "120",
			type: "international",
		},
	],

	sponsorship: [
		{
			title: "Platinum",
			price: "2,000,000",
			desc: [
				{
					item: "Event",
					desc: "Title Sponsor",
				},
				{
					item: "Event#2",
					desc: "Speaker of day 1 of the conference",
				},
				{
					item: "Publications",
					desc: "X3 Pages in the Event Booklet & Program",
				},
				{
					item: "Presentations",
					desc: "X1 Open Plenary on day 1 – 20 Mins",
				},
				{
					item: "Presentations#2",
					desc: "X2 Panel Seats in Topic Sessions",
				},
				{ item: "Exhibition", desc: "12m x 3m Booth Space" },
				{
					item: "Banners",
					desc: "5 Banners in the Conference & Expo areas",
				},
				{
					item: "Giveaways",
					desc: "X3 Giveaways for the Panel Speakers Pack/Bag",
				},
				{ item: "Delegates", desc: "Conference Pass for 10" },
				{ item: "Other", desc: "Lanyard Branding Branding" },
			],
			link: { link: "/registration/sponsorship", label: "Sponsor" },
		},
		{
			title: "Gold",
			price: "1,250,000",
			desc: [
				{ item: "Event", desc: "Speaker of day 1 of the conference" },
				{
					item: "Publications",
					desc: "X2 Pages in the Event Booklet & Program",
				},
				{
					item: "Presentations",
					desc: "X1 Panel Seats in Topic Sessions",
				},
				{ item: "Exhibition", desc: "6m x 3m Booth Space" },
				{ item: "Banners", desc: "3 Banners" },
				{
					item: "Giveaways",
					desc: "X2 Giveaways for the Panel Speakers Pack/Bag",
				},
				{ item: "Delegates", desc: "Conference Pass for 7" },
			],
			link: { link: "/registration/sponsorship", label: "Sponsor" },
		},
		{
			title: "Silver",
			price: "750,000",
			desc: [
				{ item: "Event", desc: "Speaker of day 1 of the conference" },
				{
					item: "Publications",
					desc: "X1 Pages in the Event Booklet & Program",
				},
				{
					item: "Presentations",
					desc: "X1 Panel Seats in Topic Sessions",
				},
				{ item: "Exhibition", desc: "6m x 3m Booth Space" },
				{ item: "Banners", desc: "2 Banners" },
				{
					item: "Giveaways",
					desc: "X2 Giveaways for the Panel Speakers Pack/Bag",
				},
				{ item: "Delegates", desc: "Conference Pass for 4" },
			],
			link: { link: "/registration/sponsorship", label: "Sponsor" },
		},
		{
			title: "Other",
			price: "400,000",
			desc: [
				{
					item: "Event",
					desc: "Coffee bar set up provided by event management",
				},
				{
					item: "Event#2",
					desc: "Coffee is refreshed throughout the day",
				},
				{
					item: "Publications",
					desc: "Banner ad on Drone Tech & Data Expo event website for two months",
				},
				{
					item: "Presentations",
					desc: "Creative provided by sponsor",
				},
				{
					item: "Presentations#2",
					desc: "Onsite acknowledgment at keynote, onsite signage, featured in show app and on event website",
				},
				{
					item: "Exhibition",
					desc: "Sponsor encouraged to provide branded napkins and giveaways",
				},
				{
					item: "Banners",
					desc: "Conference Pass for 3",
				},
			],
			link: { link: "/registration/sponsorship", label: "Sponsor" },
		},
	],
};

export default packages;
