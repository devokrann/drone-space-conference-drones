import React from "react";
import ReactDOM from "react-dom/client";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";

import "@src/styles/global.scss";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import projectName from "./theme";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider theme={projectName} defaultColorScheme="dark">
			<Notifications limit={3} />
			<App />
		</MantineProvider>
	</React.StrictMode>
);
