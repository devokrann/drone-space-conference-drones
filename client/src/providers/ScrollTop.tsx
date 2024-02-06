import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function ScrollTop({ children }: { children: React.ReactNode }) {
	const location = useLocation();
	const [previousLocation, setPreviousLocation] = useState(null);

	useEffect(() => {
		if (previousLocation !== location.pathname) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			setPreviousLocation(location.pathname);
		}
	}, [location, previousLocation]);

	return <>{children}</>;
}
