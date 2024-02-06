import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
	Anchor,
	Box,
	Button,
	Center,
	Checkbox,
	Grid,
	Group,
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

import postOtp from "@src/apis/postOtp";
import resendOtp from "@src/apis/resendOtp";

export default function Verify({ userEmail }: { userEmail: string }) {
	const [submitted, setSubmitted] = useState(false);
	const [requested, setRequested] = useState(false);

	const [time, setTime] = useState();

	const navigate = useNavigate();

	const form = useForm({
		initialValues: {
			otp: "",
		},

		validate: {
			otp: (value) => value.length < 4,
		},
	});

	const handleSubmit = async () => {
		if (form.isValid()) {
			setSubmitted(true);

			const templateParams = {
				email: userEmail,
				otp: form.values.otp,
			};

			await postOtp(templateParams)
				.then((response) => {
					if (response.exists == false) {
						notifications.show({
							id: "otp-invalid",
							color: "red",
							icon: <IconX size={16} stroke={1.5} />,
							autoClose: 5000,
							title: "Invalid OTP",
							message: `The email doesn't exist or has already been verified`,
							styles: (theme) => ({
								closeButton: {
									color: theme.colors.red[6],
								},
							}),
						});
					} else {
						if (response.match == false) {
							notifications.show({
								id: "otp-mismatch",
								color: "red",
								icon: <IconX size={16} stroke={1.5} />,
								autoClose: 5000,
								title: "Wrong OTP",
								message: `You have entered the wrong OTP for this email.`,
								styles: (theme) => ({
									closeButton: {
										color: theme.colors.red[6],
									},
								}),
							});
						} else {
							if (response.expired == true) {
								notifications.show({
									id: "otp-expired",
									color: "red",
									icon: <IconX size={16} stroke={1.5} />,
									autoClose: 5000,
									title: "OTP Expired",
									message: `Request another in the link provided on this page`,
									styles: (theme) => ({
										closeButton: {
											color: theme.colors.red[6],
										},
									}),
								});
							} else {
								notifications.show({
									id: "otp-match",
									withCloseButton: false,
									color: "pri.6",
									icon: <IconCheck size={16} stroke={1.5} />,
									autoClose: 5000,
									title: "Email Verified",
									message: `You can now log in to your account.`,
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

	const handleRequest = async () => {
		setRequested(true);

		await resendOtp(userEmail).then((response) => {
			if (response.exists == false) {
				notifications.show({
					id: "otp-request-error",
					color: "red",
					icon: <IconX size={16} stroke={1.5} />,
					autoClose: 5000,
					title: "Not Found",
					message: `The email doesn't exist or has already been verified`,
					styles: (theme) => ({
						closeButton: {
							color: theme.colors.red[6],
						},
					}),
				});
			} else {
				if (response.verified == false) {
					if (response.expired == false) {
						notifications.show({
							id: "otp-not-sent",
							color: "red",
							icon: <IconX size={16} stroke={1.5} />,
							autoClose: 5000,
							title: "Already Sent",
							message: `Remember to check the spam or junk folder.`,
							styles: (theme) => ({
								closeButton: {
									color: theme.colors.red[6],
								},
							}),
						});

						setTime(response.time);
					} else {
						notifications.show({
							id: "otp-resent",
							withCloseButton: false,
							color: "pri.6",
							icon: <IconCheck size={16} stroke={1.5} />,
							autoClose: 5000,
							title: "New OTP Sent",
							message: `A new code has been sent to the provided email.`,
							styles: (theme) => ({
								icon: {
									color: theme.colors.sec[4],
								},
								closeButton: {
									color: theme.colors.pri[6],
								},
							}),
						});
					}
				} else {
					notifications.show({
						id: "user-verified",
						withCloseButton: false,
						color: "pri.6",
						icon: <IconCheck size={16} stroke={1.5} />,
						autoClose: 5000,
						title: "User Verified",
						message: `The email has already been verified.`,
						styles: (theme) => ({
							icon: {
								color: theme.colors.sec[4],
							},
							closeButton: {
								color: theme.colors.pri[6],
							},
						}),
					});
				}
			}
		});

		setRequested(false);
	};

	return (
		<Box
			component="form"
			onSubmit={form.onSubmit(handleSubmit)}
			noValidate
			w={"100%"}
		>
			<Stack gap={"xl"} ta={"center"}>
				<Stack gap={"xs"}>
					<Title order={1} ta={"center"}>
						Verify Email
					</Title>
					<Text inherit>
						A verification code has been sent to{" "}
						<Text component="span" inherit c={"pri"} fw={"500"}>
							{userEmail}
						</Text>
						. Copy the code from the email and paste it here.
					</Text>
				</Stack>
				<Grid pb={"md"}>
					<Grid.Col span={{ base: 12 }}>
						<Center>
							<PinInput
								oneTimeCode
								inputType="number"
								inputMode="numeric"
								aria-label="One time code"
								{...form.getInputProps("otp")}
							/>
						</Center>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Center py={"md"}>
							<Group grow w={"100%"}>
								<Button
									color="pri.8"
									loading={requested}
									variant="outline"
									onClick={() => handleRequest()}
								>
									{requested
										? "Requesting"
										: "Request Another"}
								</Button>
								<Button
									type="submit"
									color="pri.8"
									loading={submitted}
								>
									{submitted ? "Verifying" : "Verify"}
								</Button>
							</Group>
						</Center>
					</Grid.Col>
				</Grid>
				<Stack display={time ? "block" : "none"}>
					<Text c={"dimmed"} inherit fz={"sm"}>
						If the email you provided is valid, you should have
						received it. You can otherwise request another code in{" "}
						<Text component="span" inherit c={"pri"} fw={500}>
							{`${time && time.minutes} minute(s)`}
						</Text>
						.
					</Text>
				</Stack>
			</Stack>
		</Box>
	);
}
