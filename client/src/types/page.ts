import React from "react";

import { Box, Stack } from "@mantine/core";

type typePage = {
	padded?: boolean;
	stacked?: boolean | number;
	hero?: React.ReactNode;
	children: React.ReactNode;
} & React.ComponentProps<typeof Box & typeof Stack>;

export default typePage;
