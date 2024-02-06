import React from "react";

type typeBody = {
	header?: React.ReactNode;
	nav?: React.ReactNode;
	children: React.ReactNode;
	aside?: {
		position: string;
		element: React.ReactNode;
		hero?: React.ReactNode;
	};
	footer?: React.ReactNode;
};

export default typeBody;
