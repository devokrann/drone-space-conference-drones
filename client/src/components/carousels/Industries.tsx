import React from "react";
import { useRef } from "react";

import { Center, Image, Stack, Text } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import Autoplay from "embla-carousel-autoplay";

import data from "@src/data";

export default function Industries() {
	const autoplay = useRef(Autoplay({ delay: 3000 }));

	const slides = data.industries.map(slide => (
		<CarouselSlide key={slide.name}>
			<Stack gap={"xs"} align="center" py={"xl"}>
				<Center w={slide.width} mih={100}>
					<Image src={slide.img} alt={slide.name} w={"100%"} />
				</Center>
				<Text component="p" fz={{ base: "xs" }} c={"pri.6"} fw={500} ta={"center"}>
					{slide.name}
				</Text>
			</Stack>
		</CarouselSlide>
	));

	return (
		<Carousel
			withIndicators
			loop
			withControls={false}
			slideSize={{ base: "50%", xs: "33%", sm: "25%", md: "16.67%", lg: "12.5%" }}
			plugins={[autoplay.current]}
			slidesToScroll={1}
			// onMouseEnter={autoplay.current.stop}
			// onMouseLeave={autoplay.current.reset}
		>
			{slides}
		</Carousel>
	);
}
