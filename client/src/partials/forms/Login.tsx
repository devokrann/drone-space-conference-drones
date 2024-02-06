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
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { isNotEmpty, matchesField, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

// utils
import { IMaskInput } from "react-imask";
// import emailjs from "@emailjs/browser";

// icons
import { IconCheck, IconX } from "@tabler/icons-react";

import utility from "@src/utilities";

import { postLogin } from "@src/apis/user/post";

export default function Login() {
	const [submitted, setSubmitted] = useState(false);
	const navigate = useNavigate();

	const form = useForm({
		initialValues: {
			email: "",
			password: "",
		},

		validate: {
			email: (value) => utility.validator.form.special.email(value),
			password: isNotEmpty("Please fill out this field"),
		},
	});

	const templateParams = {
		email: form.values.email.trim().toLowerCase(),
		password: form.values.password,
	};

	const handleSubmit = async () => {
		if (form.isValid()) {
			setSubmitted(true);

			await postLogin(templateParams)
				.then((response) => {
					if (response.exists == false) {
						notifications.show({
							id: "not-found",
							color: "red",
							icon: <IconX size={16} stroke={1.5} />,
							autoClose: 5000,
							title: `Not Found`,
							message: `No account with that email has been found.`,
							styles: (theme) => ({
								closeButton: {
									color: theme.colors.red[6],
								},
							}),
						});
					} else {
						if (response.match == false) {
							notifications.show({
								id: "invalid-login",
								color: "red",
								icon: <IconX size={16} stroke={1.5} />,
								autoClose: 5000,
								title: `Invalid Login`,
								message: `Username password mismatch`,
								styles: (theme) => ({
									closeButton: {
										color: theme.colors.red[6],
									},
								}),
							});
						} else {
							notifications.show({
								id: "valid-login",
								withCloseButton: false,
								color: "pri.6",
								icon: <IconCheck size={16} stroke={1.5} />,
								autoClose: 5000,
								title: "Authenticated",
								message: `User has logged in.`,
								styles: (theme) => ({
									icon: {
										color: theme.colors.sec[4],
									},
									closeButton: {
										color: theme.colors.pri[6],
									},
								}),
							});

							navigate(`/`);
						}
					}
				})
				.then(() => form.reset())
				.catch((error) => {
					notifications.show({
						id: "failed-login",
						color: "red",
						icon: <IconX size={16} stroke={1.5} />,
						autoClose: 5000,
						title: `Error`,
						message: `${error.message}`,
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
		<Box
			component="form"
			onSubmit={form.onSubmit(handleSubmit)}
			noValidate
			w={"100%"}
		>
			<Stack gap={"xl"}>
				<Stack gap={"xs"}>
					<Title order={1} ta={"center"}>
						Log In
					</Title>
					<Text ta={"center"}>
						Enter your credentials to access your account.
					</Text>
				</Stack>
				<Grid pb={"md"}>
					<Grid.Col span={{ base: 12 }}>
						<TextInput
							label={"Email"}
							description="We will never share your email"
							required
							component={IMaskInput}
							type="email"
							placeholder="Your Email"
							{...form.getInputProps("email")}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Stack gap={"xs"} align="end">
							<TextInput
								w={"100%"}
								required
								label={"Password"}
								type="password"
								placeholder="Your Password"
								{...form.getInputProps("password")}
							/>
							<Anchor
								component={Link}
								inherit
								to={"/auth/password-reset"}
								c={"pri.8"}
							>
								Lost your password?
							</Anchor>
						</Stack>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Center py={"md"}>
							<Button
								type="submit"
								w={{ base: "100%", sm: "50%" }}
								color="pri.8"
								loading={submitted}
							>
								{submitted ? "Loggin In" : "Login"}
							</Button>
						</Center>
					</Grid.Col>
				</Grid>
			</Stack>
		</Box>
	);
}
