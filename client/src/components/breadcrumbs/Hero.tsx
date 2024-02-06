import React from "react";
import { Link } from "react-router-dom";

import { Box, Breadcrumbs } from "@mantine/core";

import { IconChevronRight } from "@tabler/icons-react";

import classes from "./Hero.module.scss";

export default function Hero({ data }: { data: { label: string; link: string }[] }) {
	return (
		<Breadcrumbs separator={<IconChevronRight size={12} stroke={2} color="white" />}>
			{data.map(crumb => (
				<Box
					component={Link}
					to={crumb.link}
					key={crumb.link}
					className={classes.link}
					onClick={e => e.preventDefault()}
					c={data.indexOf(crumb) == data.length - 1 ? "pri.6" : "white"}
				>
					{crumb.label}
				</Box>
			))}
		</Breadcrumbs>
	);
}
