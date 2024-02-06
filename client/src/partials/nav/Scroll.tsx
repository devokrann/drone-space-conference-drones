import React from "react";
import { Link } from "react-router-dom";

import {
	Menu,
	Group,
	Burger,
	Container,
	Image,
	Text,
	Box,
	Button,
	ButtonGroup,
	Drawer,
	Stack,
	rgba,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";

import image from "@src/assets/images";

import button from "@src/components/buttons";

import classes from "./Scroll.module.scss";

interface typeScroll {
	data: {
		link: string;
		label: string;
		subLinks?:
			| {
					link: string;
					label: string;
					subLinks?:
						| {
								link: string;
								label: string;
								subLinks?:
									| {
											link: string;
											label: string;
									  }[]
									| null;
						  }[]
						| null;
			  }[]
			| null;
	}[];
}

export default function Scroll({ data }: typeScroll) {
	const [opened, { toggle, close }] = useDisclosure(false);
	const matches = useMediaQuery("(min-width: 62em)");

	const items = data.map(link => {
		const menuItems = link.subLinks?.map(subLink => {
			const menuISubtems = subLink.subLinks?.map(subSubLink => (
				<Menu.Item
					key={subSubLink.link}
					component={Link}
					to={subSubLink.link}
					onClick={() => matches && close()}
				>
					{subSubLink.label}
				</Menu.Item>
			));

			if (menuISubtems) {
				return (
					<Menu
						key={subLink.label}
						trigger="hover"
						openDelay={50}
						closeDelay={100}
						// withArrow
						offset={0}
						arrowPosition="center"
						transitionProps={{ transition: "fade", duration: 250 }}
						withinPortal
						position={matches ? "right-start" : "right-start"}
						classNames={{
							dropdown: classes["menu-dropdown"],
							item: classes["menu-item"],
							itemLabel: classes["menu-item-label"],
							arrow: classes["menu-arrow"],
						}}
					>
						<Menu.Target>
							<Menu.Item
								component={Link}
								to={subLink.link}
								onClick={event => event.preventDefault()}
								rightSection={<IconChevronRight size={12} stroke={2} />}
							>
								{subLink.label}
							</Menu.Item>
						</Menu.Target>
						<Menu.Dropdown>{menuISubtems}</Menu.Dropdown>
					</Menu>
				);
			}

			return (
				<Menu.Item key={subLink.link} component={Link} to={subLink.link} onClick={() => matches && close()}>
					{subLink.label}
				</Menu.Item>
			);
		});

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger="hover"
					openDelay={50}
					closeDelay={100}
					withArrow
					arrowPosition="center"
					transitionProps={{ transition: "fade", duration: 250 }}
					withinPortal
					position={matches ? "bottom-end" : "bottom-start"}
					classNames={{
						dropdown: classes["menu-dropdown"],
						item: classes["menu-item"],
						itemLabel: classes["menu-item-label"],
						arrow: classes["menu-arrow"],
					}}
				>
					<Menu.Target>
						<Link to={link.link} onClick={event => event.preventDefault()} className={classes.link}>
							<Group align="center" gap={4}>
								{link.label}
								<IconChevronDown size={12} stroke={2} />
							</Group>
						</Link>
					</Menu.Target>
					<Menu.Dropdown miw={140}>{menuItems}</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<Link key={link.label} to={link.link} className={classes.link} onClick={() => matches && close()}>
				{link.label}
			</Link>
		);
	});

	return (
		<Box
			style={theme => ({
				boxShadow: theme.shadows.xl,
				borderBottom: `2px solid ${theme.colors.pri[6]}`,
				backgroundColor: rgba(theme.white, 0.8),
				backdropFilter: "blur(4px)",
			})}
		>
			<Container size="lg" py={"xs"}>
				<Group align="center" justify="space-between">
					<Group gap={"xs"} visibleFrom="md">
						{items}
					</Group>

					<Text component={Link} to={"/"} hiddenFrom="md">
						<Image
							src={image.logo.brand.landscape}
							w={{ base: 120, xs: 140, sm: 160 }}
							alt={"kenya drone tech and data expo logo"}
						/>
					</Text>

					<Box visibleFrom="md">
						<button.Group.Purchase />
					</Box>

					<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />

					<Drawer opened={opened} onClose={close} withCloseButton={false} size={240}>
						<Stack gap={"xl"}>
							<Stack gap={"xs"} align="center" ta={"center"}>
								{items}
							</Stack>
							<button.Group.Purchase orientation="vertical" />
						</Stack>
					</Drawer>
				</Group>
			</Container>
		</Box>
	);
}
