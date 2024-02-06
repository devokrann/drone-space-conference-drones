import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
	Anchor,
	Box,
	Button,
	Center,
	Checkbox,
	Grid,
	PinInput,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { isNotEmpty, matchesField, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { IconCheck, IconX } from "@tabler/icons-react";

import { IMaskInput } from "react-imask";

import utility from "@src/utilities";

import postEmail from "@src/apis/postEmail";

export default function Reset() {
	const [submitted, setSubmitted] = useState(false);
	const navigate = useNavigate();

	const [time, setTime] = useState();

	const form = useForm({
		initialValues: {
			email: "",
		},

		validate: {
			email: (value) => utility.validator.form.special.email(value),
		},
	});

	const handleSubmit = async () => {
		if (form.isValid()) {
			setSubmitted(true);

			await postEmail(form.values.email)
				.then((response) => {
					if (response.exists == false) {
						notifications.show({
							id: "account-invalid",
							color: "red",
							icon: <IconX size={16} stroke={1.5} />,
							autoClose: 5000,
							title: "Invalid Email",
							message: `No account with the provided email has been found.`,
							styles: (theme) => ({
								closeButton: {
									color: theme.colors.red[6],
								},
							}),
						});
					} else {
						if (response.otlRecord.exists == false) {
							notifications.show({
								id: "otl-sent",
								withCloseButton: false,
								color: "pri.6",
								icon: <IconCheck size={16} stroke={1.5} />,
								autoClose: 5000,
								title: "One-time Link Sent",
								message: `A reset link has been sent to the provided email.`,
								styles: (theme) => ({
									icon: {
										color: theme.colors.sec[4],
									},
									closeButton: {
										color: theme.colors.pri[6],
									},
								}),
							});
						} else {
							if (response.expired == true) {
								notifications.show({
									id: "otl-resent",
									withCloseButton: false,
									color: "pri.6",
									icon: <IconCheck size={16} stroke={1.5} />,
									autoClose: 5000,
									title: "New One-time Link Sent",
									message: `A new reset link has been sent to the provided email.`,
									styles: (theme) => ({
										icon: {
											color: theme.colors.sec[4],
										},
										closeButton: {
											color: theme.colors.pri[6],
										},
									}),
								});
							} else {
								notifications.show({
									id: "otl-not-expired",
									color: "red",
									icon: <IconX size={16} stroke={1.5} />,
									autoClose: 5000,
									title: "Link Already Sent",
									message: `Remember to check your spam/junk folder(s).`,
									styles: (theme) => ({
										closeButton: {
											color: theme.colors.red[6],
										},
									}),
								});

								setTime(response.time);
							}
						}
					}
				})
				.then(() => form.reset())
				.catch((error) => {
					notifications.show({
						id: "otp-verify-fail",
						color: "red",
						icon: <IconX size={16} stroke={1.5} />,
						autoClose: 5000,
						title: `Send Failed`,
						message: `Error: ${error.message}`,
						styles: (theme) => ({
							closeButton: {
								color: theme.colors.red[6],
							},
						}),
					});
				});

			setSubmitted(false);
		}
	};

	return (
		<Stack gap={"xl"}>
			<Stack gap={"xs"}>
				<Title order={1} ta={"center"}>
					Password Reset
				</Title>
				<Text ta={"center"}>
					Enter the email you used to create your account and we'll
					send you a link to reset your password.
				</Text>
			</Stack>
			<Box
				component="form"
				onSubmit={form.onSubmit(handleSubmit)}
				noValidate
				w={"100%"}
			>
				<Grid pb={"md"}>
					<Grid.Col span={{ base: 12 }}>
						<TextInput
							label={"Email"}
							description="The email you signed up with"
							required
							component={IMaskInput}
							type="email"
							placeholder="Your Email"
							{...form.getInputProps("email")}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Center py={"md"}>
							<Button
								type="submit"
								color="pri.8"
								w={{ base: "100%", sm: "50%" }}
								loading={submitted}
							>
								{submitted ? "Sending" : "Send"}
							</Button>
						</Center>
					</Grid.Col>
				</Grid>
			</Box>
			<Stack display={time ? "block" : "none"}>
				<Text c={"dimmed"} inherit ta={"center"} fz={"sm"}>
					The last link that was sent to the provided email hasn't
					expired yet. To limit the number of times a user can change
					their password, you can't request another link until the
					existing one expires (in{" "}
					<Text component="span" inherit c={"pri"} fw={500}>
						{`${time && time.minutes} minutes`}
					</Text>
					).
				</Text>
			</Stack>
		</Stack>
	);
}
