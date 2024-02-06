import { Container, createTheme } from "@mantine/core";

const projectName = createTheme({
	//font
	fontSmoothing: true,

	// color
	colors: {
		pri: [
			"#ffeaea",
			"#ffd3d5",
			"#f7a4a9",
			"#f17379",
			"#eb4952",
			"#e83038",
			"#e8202a", // src -> 6
			"#cf121d",
			"#b90a19",
			"#a20012",
		],
		sec: [
			"#eaeaff",
			"#c3c4f1",
			"#9d9de3",
			"#7676d6",
			"#4f4ec9",
			"#3635b0",
			"#292989", // src -> 6
			"#1c1d63",
			"#10123e",
			"#05051a",
		],
	},
	primaryColor: "pri",
	primaryShade: 6,
	defaultGradient: {
		from: "orange",
		to: "red",
		deg: 45,
	},

	cursorType: "pointer",

	components: {
		Container: Container.extend({
			defaultProps: {
				size: "lg",
			},
		}),
	},
});

export default projectName;
