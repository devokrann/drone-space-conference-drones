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

import postChange from "@src/apis/postChange";

export default function Change({
	params,
}: {
	params: { id?: string; token?: string };
}) {
	const [submitted, setSubmitted] = useState(false);
	const navigate = useNavigate();

	const form = useForm({
		initialValues: {
			password: "",
			passwordConfirm: "",
		},

		validate: {
			password: (value) =>
				utility.validator.form.special.password(value, 8, 24),
			passwordConfirm: matchesField("password", "Passwords do not match"),
		},
	});

	const handleSubmit = async () => {
		if (form.isValid()) {
			setSubmitted(true);

			await postChange(form.values.password, params.id, params.token)
				.then((response) => {
					console.log(response);
					if (response.exists == false) {
						notifications.show({
							id: "user-not-found",
							color: "red",
							icon: <IconX size={16} stroke={1.5} />,
							autoClose: 5000,
							title: `Not Found`,
							message: `The account is not valid.`,
							styles: (theme) => ({
								closeButton: {
									color: theme.colors.red[6],
								},
							}),
						});
					} else {
						if (response.valid == false) {
							notifications.show({
								id: "invalid-token",
								color: "red",
								icon: <IconX size={16} stroke={1.5} />,
								autoClose: 5000,
								title: `Invalid Link`,
								message: `The link is broken, expired or already used.`,
								styles: (theme) => ({
									closeButton: {
										color: theme.colors.red[6],
									},
								}),
							});
						} else {
							if (response.different == false) {
								notifications.show({
									id: "same-password",
									color: "red",
									icon: <IconX size={16} stroke={1.5} />,
									autoClose: 5000,
									title: `Change Error`,
									message: `The old and new passwords must be different.`,
									styles: (theme) => ({
										closeButton: {
											color: theme.colors.red[6],
										},
									}),
								});
							} else {
								notifications.show({
									id: "password-valid",
									withCloseButton: false,
									color: "pri.6",
									icon: <IconCheck size={16} stroke={1.5} />,
									autoClose: 5000,
									title: "Password Changed",
									message: `You have successfully cahnged your password.`,
									styles: (theme) => ({
										icon: {
											color: theme.colors.sec[4],
										},
										closeButton: {
											color: theme.colors.pri[6],
										},
									}),
								});

								navigate(`/auth/log-in`);
							}
						}
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
						Change Password
					</Title>
					<Text ta={"center"}>
						Enter the new credentials for your account.
					</Text>
				</Stack>
				<Grid pb={"md"}>
					<Grid.Col span={{ base: 12 }}>
						<TextInput
							required
							label={"Password"}
							type="password"
							placeholder="Your Password"
							{...form.getInputProps("password")}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<TextInput
							required
							label={"Confirm Password"}
							type="password"
							placeholder="Confirm Your Password"
							{...form.getInputProps("passwordConfirm")}
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
								{submitted ? "Updating" : "Update"}
							</Button>
						</Center>
					</Grid.Col>
				</Grid>
			</Stack>
		</Box>
	);
}
