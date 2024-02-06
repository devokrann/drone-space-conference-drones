import React from "react";

import { AspectRatio, Image, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./Gallery.module.scss";

import { typeGallery } from "@src/types/modal";

export default function Gallery({ data }: typeGallery) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal opened={opened} onClose={close} centered size={"75%"} withCloseButton={false}>
				<AspectRatio ratio={1920 / 1080}>
					<Image src={data.img} alt={data.title} w={"100%"} />
				</AspectRatio>
			</Modal>

			<AspectRatio ratio={1920 / 1080} onClick={open} style={{ overflow: "hidden" }}>
				<Image src={data.img} alt={data.title} w={"100%"} className={classes.img} />
			</AspectRatio>
		</>
	);
}
