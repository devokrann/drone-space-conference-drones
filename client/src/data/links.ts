import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import image from "../assets/images";

const links = {
	navbar: [
		{
			link: "/event-overview",
			label: "Overview",
			subLinks: null,
		},

		{
			link: "/exhibition",
			label: "Exhibition",
			subLinks: [
				{
					link: "/exhibition",
					label: "Exhibitor Information",
					subLinks: null,
				},
				{
					link: "/exhibition/why-exhibit",
					label: "Why Exhibit?",
					subLinks: null,
				},
				{
					link: "/exhibition/booths",
					label: "Exhibitor Booth Pricing",
					subLinks: [
						{
							link: "/exhibition/booths/local-booths",
							label: "Kenyan Companies",
						},
						{
							link: "/exhibition/booths/international-booths",
							label: "Non-Kenyan Companies",
						},
					],
				},
				{
					link: "/exhibition/university-pavilion",
					label: "University Pavilion",
					subLinks: null,
				},
				{
					link: "/exhibition/exhibition-flooplan",
					label: "Floorplan",
					subLinks: null,
				},
			],
		},

		{
			link: "/conference",
			label: "Conference",
			subLinks: [
				{
					link: "/conference",
					label: "Conference Information",
					subLinks: null,
				},
				{
					link: "/conference/schedule",
					label: "Conference Schedule",
					subLinks: null,
				},
				{
					link: "/conference/tickets",
					label: "Conference Tickets",
					subLinks: null,
				},
				// {
				// 	link: "/conference/keynotes",
				// 	label: "Keynotes",
				// 	subLinks: null,
				// },
				{
					link: "/conference/speakers",
					label: "Keynotes & Speakers",
					subLinks: null,
				},
			],
		},
		{
			link: "/sponsorship",
			label: "Sponsorship",
			subLinks: null,
		},
		{
			link: "/about",
			label: "About",
			subLinks: [
				{
					link: "/about",
					label: "About The Expo & Conference",
					subLinks: null,
				},
				{
					link: "/about/organizer",
					label: "Organizer",
					subLinks: null,
				},
				{
					link: "/about/history",
					label: "2022 Expo",
					subLinks: [
						{
							link: "/about/history/2022-highlights",
							label: "Overview",
						},
						{
							link: "/about/history/2022-highlights/exhibitors",
							label: "2022 Exhibitors",
						},
						{
							link: "/about/history/2022-highlights/speakers",
							label: "2022 Speakers",
						},
						{
							link: "/about/history/2022-highlights/sponsors",
							label: "2022 Sponsors",
						},
						{
							link: "/about/history/2022-highlights/gallery",
							label: "2022 Moments",
						},
					],
				},
				{
					link: "/about/travel",
					label: "Travel",
					subLinks: null,
				},
				{
					link: "/about/contact",
					label: "Contact",
					subLinks: null,
				},
			],
		},
	],

	social: [
		{
			icon: image.icons.facebook,
			link: "https://www.facebook.com/KenyaDroneExpo/",
			label: "Facebook",
			tag: null,
		},
		{
			icon: image.icons.twitter,
			link: "https://twitter.com/KenyaDroneExpo",
			label: "X",
			tag: null,
		},
		{
			icon: image.icons.instagram,
			link: "https://www.instagram.com/kenyadronexpo/?hl=en",
			label: "Instagram",
			tag: null,
		},
	],
};

export default links;
