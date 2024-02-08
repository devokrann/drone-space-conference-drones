import React, { useState } from "react";

import { Anchor, Button, Checkbox, Grid, Group, Text, TextInput, Textarea } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

import utils from "../../utilities";

import emailjs from "@emailjs/browser";

import Component from "@src/components";

import notificationSuccess from "@src/styles/notifications/Success.module.scss";
import notificationFail from "@src/styles/notifications/Fail.module.scss";

interface typeForm {
	universityName: string;
	contactPerson: string;
	contactEmail: string;
	contactPhoneNumber: string;
	universityDescription: string;
	policy: boolean;
}

export default function Pavilion() {
	const [sending, setSending] = useState(false);

	const form = useForm({
		initialValues: {
			universityName: "",
			contactPerson: "",
			contactEmail: "",
			contactPhoneNumber: "",
			universityDescription: "",
			policy: false,
		},

		validate: {
			universityName: value => utils.validator.form.special.text(value, 2, 24),
			contactPerson: value => utils.validator.form.special.text(value, 2, 24),
			contactEmail: value => utils.validator.form.special.email(value),
			contactPhoneNumber: value => utils.validator.form.special.phone(value),
			universityDescription: hasLength({ min: 10 }, "Value must have 10  or more characters"),
			policy: value => utils.validator.form.generic.isEmpty.checkbox(value),
		},
	});

	const parse = (data: typeForm) => {
		let { universityName, contactPerson, contactEmail, contactPhoneNumber, universityDescription } = data;

		universityName = utils.parser.string.capitalize.words(universityName);
		contactPerson = utils.parser.string.capitalize.words(contactPerson);
		contactEmail = contactEmail.toLowerCase();
		universityDescription = utils.parser.string.capitalize.word(universityDescription);

		const parseData = {
			universityName: universityName,
			contactPerson: contactPerson,
			contactEmail: contactEmail,
			contactPhoneNumber: contactPhoneNumber,
			universityDescription: universityDescription,
		};

		return parseData;
	};

	const onSubmit = async (data: typeForm) => {
		setSending(true);

		// console.log(parse(data));

		await emailjs
			.send("service_gmail", "university_pavilion", parse(data), "Qf6uaGYBS0fakVDua")
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
				<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<Component.Input.Text
						required
						label="University Name"
						placeholder="Enter your university name here"
						{...form.getInputProps("universityName")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<Component.Input.Text
						required
						label="Contact Person"
						placeholder="Enter your name(s) here"
						{...form.getInputProps("contactPerson")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<Component.Input.Text
						required
						label="Contact Email"
						description="We will never share your email"
						placeholder="Enter your email here"
						{...form.getInputProps("contactEmail")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<Component.Input.Text
						required
						label="Contact Phone Number"
						description="We will never share your phone number"
						placeholder="Enter your phone number here"
						{...form.getInputProps("contactPhoneNumber")}
					/>
				</Grid.Col>
				<Grid.Col span={12}>
					<Component.Input.Textarea
						required
						label="University Description"
						description={
							"Brief description of university's focus in Drones, Data, and AI, and any other relevant information."
						}
						placeholder="Enter your university description here..."
						autosize
						minRows={5}
						maxRows={10}
						{...form.getInputProps("universityDescription")}
					/>
				</Grid.Col>
				<Grid.Col span={12}>
					<Checkbox
						required
						defaultChecked={false}
						radius={"xl"}
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
							<Button type="reset" fullWidth onClick={form.reset} disabled={sending}>
								Clear
							</Button>
						</Grid.Col>
						<Grid.Col span={{ base: 12, xs: 6 }}>
							<Button type="submit" fullWidth color="sec" loading={sending}>
								Send
							</Button>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>
		</form>
	);
}
