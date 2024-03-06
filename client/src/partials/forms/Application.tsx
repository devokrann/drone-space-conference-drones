import React, { useEffect, useState } from "react";

import { Anchor, Button, Checkbox, Grid, Group, Select, Text, TextInput, Textarea } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

import utils from "@src/utilities";

import emailjs from "@emailjs/browser";

import Component from "@src/components";

import notificationSuccess from "@src/styles/notifications/Success.module.scss";
import notificationFail from "@src/styles/notifications/Fail.module.scss";

interface typeForm {
	fname: string;
	lname: string;
	email: string;
	application: string;
	message: string;
	policy: boolean;
}

export default function Application() {
	const [sending, setSending] = useState(false);
	const [applicant, setApplicant] = useState("");

	const form = useForm({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			application: "",
			message: "",
			policy: false,
		},

		validate: {
			fname: value => utils.validator.form.special.text(value, 2, 24),
			lname: value => utils.validator.form.special.text(value, 2, 24),
			email: value => utils.validator.form.special.email(value),
			application: value => utils.validator.form.special.text(value, 5, 24),
			message: hasLength({ min: 10 }, "Value must have 10  or more characters"),
			policy: value => utils.validator.form.generic.isEmpty.checkbox(value),
		},
	});

	const parse = (data: typeForm) => {
		let { fname, lname, email, application, message } = data;

		fname = fname.trim().toLowerCase().charAt(0).toUpperCase() + fname.trim().slice(1).toLowerCase();
		lname = lname.trim().toLowerCase().charAt(0).toUpperCase() + lname.trim().slice(1).toLowerCase();
		email = email.trim().toLowerCase();
		application = application;
		message = message.trim().toLowerCase().charAt(0).toUpperCase() + message.trim().slice(1).toLowerCase();

		const parseData = {
			fname: fname,
			lname: lname,
			email: email,
			application: application,
			message: message,
		};

		return parseData;

		// console.log(parseData);
	};

	useEffect(() => {
		setApplicant(form.values.application);
	}, [form.values.application]);

	const onSubmit = async (data: typeForm) => {
		setSending(true);

		await emailjs
			.send("service_gmail", "form_application", parse(data), "m4Z8q5FsjIDKvyj1I")
			.then(() =>
				notifications.show({
					id: "send-success",
					withCloseButton: false,
					icon: <IconCheck size={16} stroke={1.5} />,
					autoClose: 5000,
					title: "Sent",
					message: "Someone will get back to you within 24 hours",
					classNames: {
						root: notificationSuccess.root,
						icon: notificationSuccess.icon,
						description: notificationSuccess.description,
						title: notificationSuccess.title,
					},
				})
			)
			.then(() => form.reset())
			.then(() => setSending(false))
			.catch(error => {
				notifications.show({
					id: "send-fail",
					withCloseButton: false,
					icon: <IconX size={16} stroke={1.5} />,
					autoClose: 5000,
					title: "Send Failed",
					message: `Error: ${error.message}`,
					classNames: {
						root: notificationFail.root,
						icon: notificationFail.icon,
						description: notificationFail.description,
						title: notificationFail.title,
					},
				});
				setSending(false);
			});

		setSending(false);
	};

	return (
		<form onSubmit={form.onSubmit(values => onSubmit(values))} noValidate>
			<Grid>
				<Grid.Col span={{ base: 12, xs: 6 }}>
					<Component.Input.Text
						required
						label="First Name"
						placeholder="Enter your first name here"
						{...form.getInputProps("fname")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6 }}>
					<Component.Input.Text
						required
						label="Last Name"
						placeholder="Enter your last name here"
						{...form.getInputProps("lname")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6 }}>
					<Component.Input.Text
						required
						label="Email"
						description="We will never share your email"
						placeholder="Enter your email here"
						{...form.getInputProps("email")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6 }}>
					<Component.Input.Select
						required
						label="Type of Application"
						description={"Are you applying as an exhibitor or as a sponsor?"}
						placeholder="Select application type"
						data={["Exhibition", "Sponsorship"]}
						{...form.getInputProps("application")}
					/>
				</Grid.Col>
				<Grid.Col span={12}>
					<Component.Input.Textarea
						required
						label="Message"
						description={
							applicant == "" ? null : applicant == "Exhibition" ? (
								<>Kindly include the exhibitor booth you would like to purchase</>
							) : applicant == "Sponsorship" ? (
								<>Kindly include the company you represent</>
							) : (
								""
							)
						}
						placeholder="Enter your message here..."
						autosize
						minRows={2}
						maxRows={10}
						{...form.getInputProps("message")}
					/>
				</Grid.Col>
				<Grid.Col span={12}>
					<Checkbox
						required
						defaultChecked={false}
						radius={"xl"}
						ml={"md"}
						label={
							<Text component="p" fz={"inherit"}>
								I have read and accept the 'Drone Tech & Data Expo'{" "}
								<Anchor href="#privacy-policy" fw={500} fz={"inherit"} c={"pri.6"}>
									privacy policy
								</Anchor>
								.
							</Text>
						}
						{...form.getInputProps("policy")}
					/>
				</Grid.Col>
				<Grid.Col span={12} mt={"xl"}>
					<Grid>
						<Grid.Col span={{ base: 12, xs: 6 }}>
							<Button type="reset" onClick={form.reset} disabled={sending} fullWidth>
								Clear
							</Button>
						</Grid.Col>
						<Grid.Col span={{ base: 12, xs: 6 }}>
							<Button type="submit" color="sec" loading={sending} fullWidth>
								Send
							</Button>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>
		</form>
	);
}
