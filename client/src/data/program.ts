const program = {
	schedule: {
		common: {
			day1: [
				{
					title: {
						duration: "09.00 AM – 09.50 AM",
						heading: "Welcome & Opening Keynote",
					},
					desc: {
						agenda: "Welcome and opening of the expo.",
						// participants: [
						// 	"Laban Cliff (MC, Overall and AI Platform)",
						// 	"Faith Maina (MC, Drone Platform)",
						// 	"Drone Space (Opening Remarks)",
						// 	"Title Sponsor (Opening Remarks)",
						// 	"PS Eng. John Tanui (Opening Remarks and Keynote)",
						// ],
					},
					common: true,
				},
				{
					title: {
						duration: "09.50 AM – 10.30 AM",
						heading: "Panel Session",
					},
					desc: {
						agenda: "How will AI transform the Future (Man vs AI)?",
						// participants: ["Google (Kenya)", "Microsoft", "Samsung", "Oracle (Kenya)", "Meta"],
						// moderator: "Brian George",
					},
					common: true,
				},
				{
					title: {
						duration: "10.30 AM – 11.00 AM",
						heading: "Coffee Break",
					},
					desc: {
						agenda: "Official opening of the expo. Attendees split to respective platforms.",
					},
					common: true,
				},
			],
			day2: [
				{
					title: {
						duration: "01.00 PM – 02.00 PM",
						heading: "Lunch Break",
					},
					desc: {
						agenda: "Lunch break",
					},
					common: true,
				},
				{
					title: {
						duration: "02.00 PM – 02.40 PM",
						heading: "Panel Session",
					},
					desc: {
						agenda: "AI job opportunities.",
						// participants: ["Microsoft", "Google", "Intel", "Meta"],
						// moderator: "Zee Gitahi",
					},
					common: true,
				},
				{
					title: {
						duration: "02.40 PM – 03.00 PM",
						heading: "Demonstration Session",
					},
					desc: {
						agenda: "Drone Demonstration using AI",
						// participants: ["Drone Space", "Bright Gameli"],
					},
					common: true,
				},
				{
					title: {
						duration: "03.00 PM – 03.40 PM",
						heading: "Hackathon Session",
					},
					desc: {
						agenda: "This track is designed to showcase the industry's leading startups and provide an opportunity for Venture Capitalists (VCs) on industry trends. All startups (5 Teams) that will be participating on this track are hand picked by Startinev and AI Conference Nairobi Team as the up-and-comers to be on the lookout for. These sessions of Hackathon (building models) and preparing presentations will be conducted in 48 hours and a showdown session of the finalists will each conduct a 10 minute pitch style format of their idea with prize totals of up to Kshs. 200,000.",
						// participants: [
						// 	"Mary Ndinda (Judge)",
						// 	"Sandeep (Judge)",
						// 	"Mbakaya Weever (Judge)",
						// 	"Laban Cliff (MC)",
						// ],
					},
					common: true,
				},
				{
					title: {
						duration: "03.40 PM – 04.00 PM",
						heading: "Coffee Break",
					},
					desc: {
						agenda: "Coffee break",
					},
					common: true,
				},
				{
					title: { duration: "04.00 PM – 04.40 PM", heading: "Hackathon Winner Announcement Session" },
					desc: {
						agenda: "Announcement of hackathon winner.",
					},
					common: true,
				},
				{
					title: { duration: "04.40 PM – 05.00 PM", heading: "Vote of Thanks" },
					desc: {
						agenda: "Official closing of the expo.",
						// participants: ["Faith Maina"],
					},
					common: true,
				},
			],
		},
		ai: {
			day1: [
				{
					title: { duration: "11.00 AM – 11.30 AM", heading: "Plenary Session" },
					desc: {
						agenda: "Understanding the Difference between ChatGPT and Microsoft Copilot, and Advantages of Azuri AI.",
						// participants: ["Ministry of Environment", "Climate Change Summit Organizers"],
					},
				},
				{
					title: { duration: "11.30 AM – 12.10 PM", heading: "Panel Session" },
					desc: {
						agenda: "How will the integration of AI in healthcare manage insurance claims, incorporate patient data from various providers, and facilitate the continuous flow of data for healthcare operations?",
						// participants: [
						// 	"Aga Khan Hospital",
						// 	"Nairobi Hospital",
						// 	"Britam Insurance",
						// 	"CIC Insurance",
						// 	"NHIF",
						// 	"Zuri Health",
						// 	"Cirga Health",
						// ],
						// moderator: "Dr. Shiku Gitau",
					},
				},
				{
					title: { duration: "12.10 PM – 01.00 PM", heading: "Panel Session" },
					desc: {
						agenda: "Data protection and regulation policy.",
						// participants: [
						// 	"Immaculate Kassait (Data Commissioner)",
						// 	"Nathan Ross (Michalsons, SA)",
						// 	"Alfred Ongere (AI Kenya)",
						// 	"Peter Walubengo (MMU)",
						// ],
						// moderator: selectorPerson("moderator", "George Ogada"),
					},
				},
				{
					title: { duration: "01.00 PM – 02.00 PM", heading: "Lunch Break" },
					desc: {
						agenda: "Lunch Break",
					},
				},
				{
					title: { duration: "02.00 PM – 02.30 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Masterclass on Leveraging on AI Lawfully.",
						// participants: ["Nathan Ross (Michalsons, SA)"],
					},
				},
				{
					title: { duration: "02.30 PM – 03.10 PM", heading: "Panel Session" },
					desc: {
						agenda: "How can organizations successfully navigate the era of AI powered automation? or Exploring emerging AI Market trends.",
						// participants: [
						// 	selectorPerson("speaker", "Michael Zimba"),
						// 	"Mutembei Kariuki (First Fastagger)",
						// 	"Beniah Wepundi (Cyphonia)",
						// ],
						// moderator: selectorPerson("moderator", "Moses Kemibaro"),
					},
				},
				{
					title: { duration: "03.10 PM – 03.40 PM", heading: "Panel Session" },
					desc: {
						agenda: "What are the Venture Capitalists/Investors Perspectives on AI?",
						// participants: ["Microsoft (Kenya)"],
					},
				},
				{
					title: { duration: "03.40 PM – 04.00 PM", heading: "Coffee Break" },
					desc: {
						agenda: "Coffee Break",
					},
				},
				{
					title: { duration: "04.00PM – 04.40PM", heading: "Panel Session" },
					desc: {
						agenda: "Chatbots for Change: Using Conversational AI to transform rural communities in Kenya?",
					},
				},
				{
					title: { duration: "04.50PM – 05.00PM", heading: "Plenary Session" },
					desc: {
						agenda: "The future of Work. Don’t give human a Robot.",
					},
				},
			],
			day2: [
				{
					title: { duration: "09.00 AM – 09.40 AM", heading: "Panel Session" },
					desc: {
						agenda: "Exploring data centres in the context of AI",
						// participants: [
						// 	"Safaricom",
						// 	"Oracle Kenya",
						// 	"Africa Data Centre",
						// 	"IXAfrica Data Centre",
						// 	"Icolo",
						// 	"PAIX Nairobi",
						// 	"AWS",
						// ],
						// moderator: "Mbugua Njihia",
					},
				},
				{
					title: { duration: "09.40 AM – 10.10 AM", heading: "Panel Session" },
					desc: {
						agenda: "The future with generative AI.",
						// participants: [selectorPerson("speaker", "Michael Michie")],
						// moderator: "TBC",
					},
				},
				{
					title: { duration: "10.10 AM – 10.30 AM", heading: "Plenary Session" },
					desc: {
						agenda: "A data monetization framework for AI.",
						// participants: ["TBC"],
					},
				},
				{
					title: { duration: "10:30 AM – 11.00 AM", heading: "Coffee Break" },
					desc: {
						agenda: "Coffee break.",
					},
				},
				{
					title: { duration: "11.00 AM – 11:40 PM", heading: "Panel Session" },
					desc: {
						agenda: "How can AI features empower financial institutions stay competitive and provide better services?",
						// participants: ["ABSA Bank", "Stanbic Bank", "Wapi Pay", "KPMG", "PWC", "KRA", "CMA"],
						// moderator: "Dean Gichuki",
					},
				},
				{
					title: { duration: "11:40 AM – 12.10 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Leveraging AI to monitor, address and prevent fraud (Cyber Security).",
						// participants: ["Bright Gameli"],
					},
				},
				{
					title: { duration: "12:10 PM – 12.50 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Integration AI for Education.",
						// participants: ["Moringa School"],
					},
				},
			],
		},
		drone: {
			day1: [
				{
					title: { duration: "11.00 AM – 11.50 AM", heading: "Panel Session" },
					desc: {
						agenda: "Drone regulation and policy",
						// participants: [
						// 	"Lynette Shalwa (KCAA)",
						// 	"Cleopa Otieno (Kenya Flying Labs)",
						// 	"Craig (Kendrone)",
						// 	"Drone Space",
						// ],
						// moderator: "Robert Yawe",
					},
				},
				{
					title: { duration: "11.50 AM – 12.50 PM", heading: "Plenary Session" },
					desc: {
						agenda: "How can UTM Systems enhance airspace safety for Unmanned Aircraft Systems (UAS) in Kenya?",
						// participants: ["Thales Group", "KCAA", "Airbus", "ndra"],
						// moderator: "TBC",
					},
				},
				{
					title: { duration: "01.00 PM – 02.00 PM", heading: "Lunch Break" },
					desc: {
						agenda: "Lunch Break",
					},
				},
				{
					title: { duration: "02.00 PM – 02.40 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Drones for early detection of pests and diseases.",
						// participants: ["Violet Ochieng"],
					},
				},
				{
					title: { duration: "02.40 PM – 03.20 PM", heading: "Panel Session" },
					desc: {
						agenda: "Drone deployment in agriculture and the challenges in crop spraying and data collection.",
						// participants: [
						// 	"Kush Gadhia (Astral Aviation)",
						// 	"Geoffrey Nyaga",
						// 	"Fahari Aviation",
						// 	"Tawanda Chihambakwe (Precision Zimbabwe)",
						// ],
						// moderator: "TBC",
					},
				},
				{
					title: { duration: "03.20 PM – 03.40 PM", heading: "Plenary Session" },
					desc: {
						agenda: "Precision Farming for high yields.",
						// participants: ["Tawanda Chihambakwe"],
					},
				},
				{
					title: { duration: "03.40 PM – 04.00 PM", heading: "Coffee Break" },
					desc: {
						agenda: "Coffee Break",
					},
				},
				{
					title: { duration: "04.00 PM – 05.00 PM", heading: "Panel Session" },
					desc: {
						agenda: "How can Drone pilots leverage on Jobs and operations opportunity?",
						// participants: ["Drone Space", "Fahari Aviation", "Kenya Flying Labs", "Geiod Technologies"],
						// moderator: "TBC",
					},
				},
			],
			day2: [
				{
					title: { duration: "09.00 AM – 09.50 AM", heading: "Panel Session" },
					desc: {
						agenda: "Geospatial professionals using drones for Surveying with Lidar and software.",
						// participants: [
						// 	"Fred Wekesa (Kengen)",
						// 	"Denis Mumo (Geocart)",
						// 	"Fred Onyango (Eco Space)",
						// 	"Peter Onyango (TUK)",
						// 	"Martin (Regional Centre for Mapping)",
						// ],
						// moderator: "Kimeu",
					},
				},
				{
					title: { duration: "09.50 AM – 10.30 AM", heading: "Panel Session" },
					desc: {
						agenda: "The safety aspects and lessons learned in Beyond Visual Line of Sight (BVLOS) operations across the continent.",
						// participants: ["Drone Space", "Zipline", " Astral"],
						// moderator: "Captain Hastings",
					},
				},
				{
					title: { duration: "10.30 AM – 11.00 AM", heading: "Coffee Break" },
					desc: {
						agenda: "Coffee break.",
					},
				},
				{
					title: { duration: "11.00 AM – 11:50 PM", heading: "Panel Session" },
					desc: {
						agenda: "Drones in Filming",
						// participants: ["Mwangi Kirubi", "Tosh Gitonga", "Ezekiel Onyango", "Appie Materi"],
						// moderator: "Martin Munyua",
					},
				},
				{
					title: { duration: "11:50 AM – 12.50 PM", heading: "Panel Session" },
					desc: {
						agenda: "Women in AI and Drone Tech - Are we making progress and inspiring others to grow their career prospects?",
						// participants: ["Loise Mwangi (KCAA)", "Priscah Kinyanjui (Drone Space)", "Lyela Mutisya"],
						// moderator: "Mercy Makau",
					},
				},
			],
		},
	},
};

export default program;
