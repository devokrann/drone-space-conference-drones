import React from "react";

import { Button, Container, Divider, Grid, Group, List, Stack, Text, Title } from "@mantine/core";

import Component from "../../components";
import Layout from "../../layouts";
import Partial from "../../partials";

import data from "../../data";
import image from "../../assets/images";

export default function Schedule() {
	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Partial.Hero.Route image={image.gallery.expo.yr2022.image11} />}>
				{/* <Layout.Section containerized padded id="schedule">
					<Component.Tab.Schedule />
				</Layout.Section> */}

				<Layout.Section containerized containerSize="xl" margined>
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri.6"}>
								Agenda
							</Title>
							<Text>
								Plan Your Conference Experience with Ease. Explore the sessions and tracks at the Ai
								Conference Nairobi. Stay tuned for the detailed agenda, which includes speaker session
								times, and valuable insights.
							</Text>
						</Stack>
						<Stack align="center">
							<Button
								color="pri.6"
								variant="outline"
								size="lg"
								radius={"xl"}
								component="a"
								href="#tracks"
							>
								View All Tracks
							</Button>
						</Stack>
						<Grid columns={21}>
							<Grid.Col span={{ base: 21, md: 10 }}>
								<Stack gap={"xl"}>
									<Title ta={"center"} order={3} fz={24} c={"sec"}>
										AI Platform
									</Title>
									<Divider color="sec" />
									<Grid>
										<Grid.Col span={{ base: 12, sm: 6 }}>
											<Stack ta={{ base: "center", sm: "start" }}>
												<Title order={4} fz={16}>
													26<sup>th</sup> March
												</Title>
												<List spacing={"xs"} listStyleType="none" size="sm">
													{data.program.schedule.ai.day1.map(item => (
														<List.Item key={item.title.duration}>
															<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
																<Text component="span" inherit>
																	{item.title.duration}
																</Text>
																-
																<Text component="span" inherit>
																	{item.title.heading}
																</Text>
															</Group>
														</List.Item>
													))}
												</List>
											</Stack>
										</Grid.Col>
										<Grid.Col span={{ base: 12, sm: 6 }}>
											<Stack ta={{ base: "center", sm: "start" }}>
												<Title order={4} fz={16}>
													27<sup>th</sup> March
												</Title>
												<List spacing={"xs"} listStyleType="none" size="sm">
													{data.program.schedule.ai.day2.map(item => (
														<List.Item key={item.title.duration}>
															<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
																<Text component="span" inherit>
																	{item.title.duration}
																</Text>
																-
																<Text component="span" inherit>
																	{item.title.heading}
																</Text>
															</Group>
														</List.Item>
													))}
												</List>
											</Stack>
										</Grid.Col>
									</Grid>
								</Stack>
							</Grid.Col>
							<Grid.Col span={{ base: 21, md: 1 }} visibleFrom="md">
								<Group justify="center" h={"100%"}>
									<Divider orientation="vertical" color="pri" />
								</Group>
							</Grid.Col>
							<Grid.Col span={{ base: 21, md: 10 }}>
								<Stack gap={"xl"}>
									<Title ta={"center"} order={3} fz={24} c={"sec"}>
										Drone Platform
									</Title>
									<Divider color="sec" />
									<Grid>
										<Grid.Col span={{ base: 12, sm: 6 }}>
											<Stack ta={{ base: "center", sm: "start" }}>
												<Title order={4} fz={16}>
													26<sup>th</sup> March
												</Title>
												<List spacing={"xs"} listStyleType="none" size="sm">
													{data.program.schedule.drone.day1.map(item => (
														<List.Item key={item.title.duration}>
															<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
																<Text component="span" inherit>
																	{item.title.duration}
																</Text>
																-
																<Text component="span" inherit>
																	{item.title.heading}
																</Text>
															</Group>
														</List.Item>
													))}
												</List>
											</Stack>
										</Grid.Col>
										<Grid.Col span={{ base: 12, sm: 6 }}>
											<Stack ta={{ base: "center", sm: "start" }}>
												<Title order={4} fz={16}>
													27<sup>th</sup> March
												</Title>
												<List spacing={"xs"} listStyleType="none" size="sm">
													{data.program.schedule.drone.day2.map(item => (
														<List.Item key={item.title.duration}>
															<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
																<Text component="span" inherit>
																	{item.title.duration}
																</Text>
																-
																<Text component="span" inherit>
																	{item.title.heading}
																</Text>
															</Group>
														</List.Item>
													))}
												</List>
											</Stack>
										</Grid.Col>
									</Grid>
								</Stack>
							</Grid.Col>
						</Grid>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized margined padded id="tracks">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri.6"}>
								Tracks
							</Title>
						</Stack>
						<Grid gutter={"xl"}>
							<Grid.Col span={12}>
								<Stack gap={"xl"}>
									<Title ta={"center"} order={2} fz={24}>
										26<sup>th</sup> March (Day 1)
									</Title>
									<Grid columns={21} gutter={"xl"}>
										<Grid.Col span={21}>
											<Component.Accordion.Program data={data.program.schedule.common.day1} />
										</Grid.Col>
										<Grid.Col span={21}>
											<Divider
												color="pri"
												label="Attendees Diverge to Respective Platforms"
												my={"xl"}
											/>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 10 }}>
											<Stack gap={"xl"}>
												<Title ta={"center"} order={3} fz={24} c={"sec"}>
													AI Platform
												</Title>
												<Component.Accordion.Program data={data.program.schedule.ai.day1} />
											</Stack>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 1 }} visibleFrom="md">
											<Group justify="center" h={"100%"}>
												<Divider orientation="vertical" />
											</Group>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 10 }}>
											<Stack gap={"xl"}>
												<Title ta={"center"} order={3} fz={24} c={"sec"}>
													Drone Platform
												</Title>
												<Component.Accordion.Program data={data.program.schedule.drone.day1} />
											</Stack>
										</Grid.Col>
									</Grid>
								</Stack>
							</Grid.Col>
							<Grid.Col span={12}>
								<Stack gap={"xl"}>
									<Title ta={"center"} order={2} fz={24}>
										27<sup>th</sup> March (Day 2)
									</Title>
									<Grid columns={21} gutter={"xl"}>
										<Grid.Col span={{ base: 21, md: 10 }}>
											<Stack gap={"xl"}>
												<Title ta={"center"} order={3} fz={24} c={"sec"}>
													AI Platform
												</Title>
												<Component.Accordion.Program data={data.program.schedule.ai.day2} />
											</Stack>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 1 }} visibleFrom="md">
											<Group justify="center" h={"100%"}>
												<Divider orientation="vertical" />
											</Group>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 10 }}>
											<Stack gap={"xl"}>
												<Title ta={"center"} order={3} fz={24} c={"sec"}>
													Drone Platform
												</Title>
												<Component.Accordion.Program data={data.program.schedule.drone.day2} />
											</Stack>
										</Grid.Col>
										<Grid.Col span={21}>
											<Divider color="pri" label="Attendees Converge to One Platform" my={"xl"} />
										</Grid.Col>
										<Grid.Col span={21}>
											<Component.Accordion.Program data={data.program.schedule.common.day2} />
										</Grid.Col>
									</Grid>
								</Stack>
							</Grid.Col>
						</Grid>
					</Stack>
				</Layout.Section>

				<Partial.Cta.Expect
					image={image.gallery.conference.yr2022.image4}
					title={{ plain: "What to", highlight: "Expect" }}
				/>

				<Partial.Cta.Industries />
			</Layout.Page>
		</Layout.Body>
	);
}
