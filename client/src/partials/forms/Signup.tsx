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

import { IconCheck, IconX } from "@tabler/icons-react";

import { IMaskInput } from "react-imask";

import utility from "@src/utilities";
import postUser from "@src/apis/postUser";

export default function Signup() {
	const [submitted, setSubmitted] = useState(false);
	const navigate = useNavigate();

	const form = useForm({
		initialValues: {
			email: "",
			password: "",
			passwordConfirm: "",
			policy: false,
		},

		validate: {
			email: (value) => utility.validator.form.special.email(value),
			password: (value) =>
				utility.validator.form.special.password(value, 8, 24),
			passwordConfirm: matchesField("password", "Passwords do not match"),
			policy: isNotEmpty("You must accept to proceed"),
		},
	});

	const handleSubmit = async () => {
		if (form.isValid()) {
			setSubmitted(true);

			const templateParams = {
				email: form.values.email.trim().toLowerCase(),
				password: form.values.password,
			};

			// console.log(templateParams);

			await postUser(templateParams)
				.then((response) => {
					if (response.exists == false) {
						notifications.show({
							id: "signup-success",
							withCloseButton: false,
							color: "pri.6",
							icon: <IconCheck size={16} stroke={1.5} />,
							autoClose: 5000,
							title: "Registered",
							message:
								"A verification code has been sent to the provided email.",
							styles: (theme) => ({
								icon: {
									color: theme.colors.sec[4],
								},
								closeButton: {
									color: theme.colors.pri[6],
								},
							}),
						});

						navigate(`/auth/verify/${templateParams.email}`);
					} else {
						notifications.show({
							id: "signup-exists",
							color: "red",
							icon: <IconX size={16} stroke={1.5} />,
							autoClose: 5000,
							title: `User Exists`,
							message: `An account with the provided email already exists.`,
							styles: (theme) => ({
								closeButton: {
									color: theme.colors.red[6],
								},
							}),
						});

						navigate(`/auth/log-in`);
					}
				})
				.then(() => form.reset())
				.catch((error) => {
					notifications.show({
						id: "signup-fail",
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
		<Box
			component="form"
			onSubmit={form.onSubmit(handleSubmit)}
			noValidate
			w={"100%"}
		>
			<Stack gap={"xl"}>
				<Stack gap={"xs"}>
					<Title order={1} ta={"center"}>
						Sign Up
					</Title>
					<Text ta={"center"}>
						Enter your details to create an account.
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
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<TextInput
							required
							label={"Password"}
							type="password"
							placeholder="Your Password"
							{...form.getInputProps("password")}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<TextInput
							required
							label={"Confirm Password"}
							type="password"
							placeholder="Confirm Your Password"
							{...form.getInputProps("passwordConfirm")}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 12 }}>
						<Checkbox
							size="xs"
							label={
								<Text inherit>
									I have read and accept the{" "}
									<Anchor
										component={Link}
										to={"/terms-and-conditions"}
										inherit
										fw={500}
										c={"pri.8"}
									>
										terms of use
									</Anchor>
									.
								</Text>
							}
							{...form.getInputProps("policy", {
								type: "checkbox",
							})}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Center py={"md"}>
							<Button
								type="submit"
								w={{ base: "100%", sm: "50%" }}
								color="pri.8"
								loading={submitted}
							>
								{submitted ? "Signing Up" : "Signup"}
							</Button>
						</Center>
					</Grid.Col>
				</Grid>
			</Stack>
		</Box>
	);
}
