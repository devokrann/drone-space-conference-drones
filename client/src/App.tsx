import React from "react";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import About from "./routes/about";
import Organizer from "./routes/about/organizer";
import Travel from "./routes/about/travel";

import BoothsInternational from "./routes/booths/international";
import BoothsLocal from "./routes/booths/local";

import Conference from "./routes/conference";
import Schedule from "./routes/conference/schedule";
import Tickets from "./routes/conference/tickets";

import Contact from "./routes/contact";

import Floorplan from "./routes/exhibition/floorplan";
import Exhibition from "./routes/exhibition";
import Pavilion from "./routes/exhibition/pavilion";
import WhyExhibit from "./routes/exhibition/why";

import Exhibitors2022 from "./routes/history/yr2022/exhibitors";
import Gallery2022 from "./routes/history/yr2022/gallery";
import Yr2022 from "./routes/history/yr2022";
import Speakers2022 from "./routes/history/yr2022/speakers";
import Sponsors2022 from "./routes/history/yr2022/sponsors";

import Home, { loader as loaderHome } from "./routes/home";

import Overview from "./routes/overview";

import Sponsorship from "./routes/sponsorship";

import Error from "./routes/error";

import Soon from "./routes/soon";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" errorElement={<Error />}>
			<Route index element={<Home />} />
			<Route path="event-overview" element={<Overview />} />

			<Route path="/exhibition">
				<Route index element={<Exhibition />} />
				<Route path="why-exhibit" element={<WhyExhibit />} />
				<Route path="booths">
					<Route path="local-booths" element={<BoothsLocal />} />
					<Route path="international-booths" element={<BoothsInternational />} />
				</Route>
				<Route path="university-pavilion" element={<Pavilion />} />
				<Route path="exhibition-flooplan" element={<Floorplan />} />
			</Route>

			<Route path="/conference">
				<Route index element={<Conference />} />
				<Route path="schedule" element={<Schedule />} />
				<Route path="tickets" element={<Tickets />} />
				<Route path="speakers" element={<Soon info="speakers" />} />
			</Route>

			<Route path="/sponsorship" element={<Sponsorship />} />

			<Route path="about">
				<Route index element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="organizer" element={<Organizer />} />
				<Route path="travel" element={<Travel />} />

				<Route path="history">
					<Route path="2022-highlights">
						<Route index element={<Yr2022 />} />
						<Route path="exhibitors" element={<Exhibitors2022 />} />
						<Route path="speakers" element={<Speakers2022 />} />
						<Route path="sponsors" element={<Sponsors2022 />} />
						<Route path="gallery" element={<Gallery2022 />} />
					</Route>
				</Route>
			</Route>
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
