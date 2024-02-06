import {
	IconAffiliate,
	IconBuildingFactory,
	IconBulb,
	IconBusinessplan,
	IconCloudCheck,
	IconDatabase,
	IconDrone,
	IconHelicopter,
	IconInputAi,
	IconLayersIntersect,
	IconLivePhoto,
	IconMicrophone2,
	IconNumber1,
	IconNumber2,
	IconNumber3,
	IconNumber4,
	IconNumber5,
	IconNumber6,
	IconPodium,
	IconPresentation,
	IconSchool,
	IconUsersGroup,
} from "@tabler/icons-react";

import image from "../assets/images";

const structure = {
	whyAttend: [
		{
			icon: IconBulb,
			title: "New Tech & Innovation Ideas",
			desc: "Gain maximum exposure and awareness of new ideas and initiatives, products and services beyond the local landscape and expand your horizons across regional markets around the globe.",
		},
		{
			icon: IconAffiliate,
			title: "Unlimited Networking Opportunities",
			desc: "Take advantage of the information sharing and networking which provide great opportunities for building new business and relationships with both partners and clients.",
		},
		{
			icon: IconPodium,
			title: "Insightful Conference",
			desc: "Key individuals and experts in their fields will share their knowledge, stories, and advice, covering a whole multitude of UAS, Big data and AI Topics.",
		},
		{
			icon: IconDrone,
			title: "Source the latest Drone Technology, Services, and Advice",
			desc: "Take advantage of free advice and consultations, helping you to secure the best deals and take your business to the next level!",
		},
		{
			icon: IconHelicopter,
			title: "Live outdoor flying demonstrations",
			desc: "This is where drones and AI collide before you invest in a system which provides much-needed insight into their capabilities. Leading vendors will demonstrate a range of drone tech and AI applications. Drone experts will be on-hand to narrate live scenarios and field questions from the audience.",
		},
	],

	audience: [
		{
			icon: IconNumber1,
			title: "Drone Enthusiasts",
			desc: "Hobbyists, drone pilots, and tech enthusiasts interested in the latest drone innovations.",
		},
		{
			icon: IconNumber2,
			title: "Industry Professionals",
			desc: "Data Engineers, surveyors, creatives, Software developers, researchers, and business professionals looking for networking opportunities and market insights on Drone Tech, Big data and AI.",
		},
		{
			icon: IconNumber3,
			title: "Investors",
			desc: "Individuals and organizations seeking investment opportunities in the Kenyan technology and innovation space including UAS, Big Data and AI.",
		},
		{
			icon: IconNumber4,
			title: "Exhibitors and Sponsors",
			desc: "Drone technology companies, Big Data and AI organizations and startups, Unmanned Aircraft Systems Training Organizations (UTOs), Remote Operator Certificate (ROC) holders and sponsors looking to showcase their products and services.",
		},
	],

	target: [
		{
			icon: IconBuildingFactory,
			title: "Target Industries",
			desc: [
				"Parks and Wildlife Managers ",
				"Mining Executives ",
				"Mining Operations Managers ",
				"Courier Services Managers ",
				"Farm Managers ",
				"Police Officers ",
				"Health Services Providers ",
				"University Students ",
				"Film Directors and Producers",
				"Editors and Photojournalists ",
				"UAS Pilots ",
				"UAS Training Experts ",
				"Civil Aviation Authority Managers ",
				"UAS Manufacture and Assembly Executives ",
				"Advertising Professionals ",
				"Fire Chiefs ",
				"Real Estate Agents ",
				"Land Surveyors",
			],
		},
		{
			icon: IconUsersGroup,
			title: "Who Should Attend?",
			desc: [
				"Innovators",
				"Corporates",
				"Investors",
				"Venture Capitalists",
				"Government Agencies",
				"Founders",
				"Business owners",
				"Students",
				"Tech Enthusiasts",
				"Tech Startups",
				"Trade Agencies",
				"Academics & Researchers",
				"Digital executives ",
				"Farmers",
				"Drone Pilots",
				"Web & mobile strategists",
				"Designers and managers",
				"Business leaders",
				"Business developers",
				"Thought leaders",
				"Data Analysts",
			],
		},
	],

	objectives: [
		{
			icon: IconSchool,
			title: "Inspiration and Learning",
			desc: "Immerse yourself in a world of inspiration and knowledge as we curate an agenda that features thought-provoking presentations, insightful panel discussions, and interactive workshops led by renowned experts.",
		},
		{
			icon: IconAffiliate,
			title: "Networking and Collaboration",
			desc: "Connect with a diverse community of drone enthusiasts, AI professionals, Big Data Organizations, and policymakers. Forge partnerships, share ideas, and collaborate on initiatives that have the potential to reshape industries.",
		},
		{
			icon: IconLivePhoto,
			title: "Innovative Presentations & Demonstrations",
			desc: "Witness firsthand presentations and demonstrations with advancements in drone technology, from state-of-the-art aerial platforms to groundbreaking software solutions. AI support innovative presentation formats, such as AI-generated content, interactive simulations, or data-driven visualizations.",
		},
		{
			icon: IconBusinessplan,
			title: "Empowering Businesses",
			desc: "For organizations and businesses, the expo offers a unique opportunity to showcase products and services, connect with potential clients and partners, and gain insights into the market trends that will define the coming years.",
		},
		{
			icon: IconCloudCheck,
			title: "Sustainable Impact",
			desc: "We believe in the power of drones to make a positive impact on society and the environment. Explore sessions that delve into the responsible use of drone technology, Big Data and AI Technology to address pressing challenges.",
		},
	],

	objectivesOther: [
		"To market and reinforce Kenya as the choice of setting up tech start-ups",
		"To explore the technical aspects of drone use in Kenya and Africa",
		"To get practical presentation of data capture and processing",
		"Analyzing the Unmanned Air Systems and Regulatory Framework",
		"Discuss ways in which drones can be integrated into every-day traffic",
		"Explore the integration and safety applications for UAS",
		"Discuss the growth and market potential perspectives that govern drones' usage",
		"Outline the challenges posed by drone technology and find possible solutions around them",
		"To give added value to the existing and potential innovations in the ICT  sector",
		"To support local economy by encouraging local companies and service providers to participate and showcase products and services that stand a chance for funding",
	],

	industries: [
		"Artificial Intelligence",
		"Big Data",
		"Agriculture",
		"Energy & Utilities",
		"Filming and Photography",
		"Surveying & Mapping",
		"UTM Systems",
		"Drone Deliveries",
		"Drone Training",
		"Machine / Deep Learning Business Solutions",
		"RPA / Intelligent Automation",
		"Chatbots / Conversational AI",
		"Cloud / Data Centre / Storage",
		"IoT / 5G",
		"Robotics",
		"AR / VR / Mixed Reality",
	],

	significance: [
		{
			icon: IconDrone,
			title: "Drones",
			desc: "Also known as Unmanned Aerial Systems (UASs), have evolved from Military applications to become versatile tools in civilian domains. They are increasingly used for surveillance, delivery services, agriculture, Inspection, Surveying and mapping etc. Drones play a crucial role in data collection across various fields, providing a cost-effective, efficient, and safe alternative to traditional methods. The continued development of drone technology is likely to expand their applications in the future.",
		},
		{
			icon: IconDatabase,
			title: "Data - The Fuel for AI",
			desc: "Data is the lifeblood of artificial intelligence. The abundance of data generated by drones provides a valuable resource for training and enhancing AI algorithms. The data collected by drones include imagery, sensor data, lidar data, weather data, thermal imaging etc. The quality of data collected by drones is crucial, especially in the context of AI applications because it directly impacts the effectiveness and reliability of AI applications. Rigorous data collection processes, validation, and quality assurance are essential to ensure that AI models are well-informed and capable of delivering meaningful insights or performing tasks accurately in various domains.",
		},
		{
			icon: IconInputAi,
			title: "Artificial Intelligence – Transformative Power",
			desc: "Artificial Intelligence empowers drones to go beyond simple automation, enabling them to make intelligent decisions based on the data they collect. AI enhances the capabilities of drones enabling them to process and analyze data in real-time, recognize patters, navigate autonomously and optimize their missions for various applications which makes drones more efficient and adaptable capable of performing a wide range of tasks across different industries.",
		},
		{
			icon: IconLayersIntersect,
			title: "Synergies & Enhancing Capabilities",
			desc: "The integration of Drones, Data and AI creates synergies that amplify the capabilities of each component where this convergence is driving innovation such as precision agriculture, disaster response and infrastructure inspection. As we navigate the opportunities presented by this synergy, it is essential to strike a balance between innovation and responsible use, fostering a future where these technologies benefit society at large.",
		},
	],

	travel: [
		{
			image: image.illustration.travel.image1,
			title: { plain: "Experience", highlight: "Nairobi" },
			desc: "Nairobi is a vibrant city with unmistakable warm and welcoming people. Nairobi is also known as the safari capital of Kenya, and it offers a unique fusion of modernity and tradition. The social scene has great nightlife, outstanding restaurants, and a broad range of accommodation that caters for all budgets. Remarkably, this metropolis is just 7km north of Nairobi National Park.Nairobi has other attractions that give it it’s appeal and includes National Museums of Kenya, The Sheldrick Wildlife Trust, The Giraffe Centre, The Bomas of Kenya and Weekly masaai craft markets among others.",
		},
		{
			image: image.illustration.travel.image2,
			title: { plain: "Getting Around", highlight: "Nairobi" },
			desc: "The best way to get around Nairobi as a newcomer is through Rideshare apps like Uber Little Cab or Bolt which are popular and abundant in Kenya. Using this means as a newcomer is safer and more convenient than using public transport and more economical than hiring a vehicle.",
		},
		{
			image: image.illustration.travel.image3,
			title: { plain: "Walking In", highlight: "Nairobi" },
			desc: "Walking around Nairobi as a foreigner may be ok within the Central business district but can get you in trouble in any of the outskirts. Many of the outskirts of Nairobi and some streets within the Central business district are unsafe for you if you are new to the city.",
		},
		{
			image: image.illustration.travel.image4,
			title: { plain: "Public", highlight: "Transport" },
			desc: "Public transport vehicles in Kenya, better known as Matatus are notorious for a lot of things. Despite the bad reputation of the entire public transport industry, not all of them are bad. If you have to take public transport in Nairobi, use buses from the following companies:",
			list: [
				{ image: image.travel.kbs, desc: "KBS (Kenya Bus Service)" },
				{ image: image.travel.citiHoppa, desc: "City Hoppa" },
				{ image: image.travel.cityShuttle, desc: "City Shuttle" },
				{
					image: image.travel.modernCoast,
					desc: "Modern Coast. (This is a long-distance bus If you’re going to the Mombasa)",
				},
			],
		},
		{
			image: image.illustration.travel.image5,
			title: { plain: "Uber & Bolt", highlight: "(Taxi Mobile Apps)" },
			desc: "The very best way of getting around Nairobi as a tourist is through vehicles from ride-sharing apps like Uber Little Cab or Bolt. These taxi-hailing apps are popular in Kenya and are abundant and reliably available 24 hours a day within Nairobi.",
		},
		{
			image: image.illustration.travel.image6,
			title: { plain: "Shopping In", highlight: "Nairobi" },
			desc: "Nairobi is arguably the best place in East and Central Africa to shop. Some of the shopping places of note include: Sarit Centre, The Village Market, The Junction, Yaya Centre among others. If you want to buy African traditional fabrics, craft, beads, pottery, rugs or weaving, you would get this in the Masaai Market.",
		},
	],

	highlights: [
		{
			icon: IconPodium,
			title: "Engaging Conference Sessions",
		},
		{
			icon: IconPresentation,
			title: "Interactive Exhibitions",
		},
		{
			icon: IconAffiliate,
			title: "Networking Opportunities",
		},
		{
			icon: IconMicrophone2,
			title: "Inspirational Speakers",
		},
		{
			icon: IconBusinessplan,
			title: "Sponsorship Opportunities",
		},
	],

	sections: [
		{
			icon: IconNumber1,
			title: "Event Overview",
			desc: "Discover the significance, theme, and objectives of this year's expo. Get a glimpse of what awaits you during the event and how you can be part of the drone revolution.",
			links: { link: "event-overview", label: "Overview" },
		},
		{
			icon: IconNumber2,
			title: "2022 Expo",
			desc: "Relive the highlights of our previous expo. Explore the exhibitors, sponsors, partners, speakers, and captivating moments that made the 2022 event a grand success.",
			links: { link: "about/history/2022-highlights", label: "2022 Expo" },
		},
		{
			icon: IconNumber3,
			title: "Exhibitors",
			desc: "If you're looking to showcase your innovations or explore the latest drone technologies, this section is your comprehensive guide. Find out how you can make your presence impactful.",
			links: {
				link: "about/history/2022-highlights/exhibitors",
				label: "Exhibitors",
			},
		},
		{
			icon: IconNumber4,
			title: "Conference",
			desc: "Immerse yourself in insightful discussions and presentations by industry experts. Get ready to expand your knowledge and stay updated on the latest trends.",
			links: { link: "/conference", label: "Conference" },
		},
		{
			icon: IconNumber5,
			title: "Tickets",
			desc: "Secure your spot at the expo by exploring our diverse ticket categories. Whether you're an industry professional, student, or enthusiast, there's a pass tailored for you.",
			links: { link: "/conference/tickets", label: "Tickets" },
		},
		{
			icon: IconNumber6,
			title: "About",
			desc: "Stay informed with the latest updates, press releases, and frequently asked questions about the Drone Tech & Data Expo. Find essential contacts and resources to ensure a seamless event experience.",
			links: { link: "/about", label: "About" },
		},
	],
};

export default structure;
