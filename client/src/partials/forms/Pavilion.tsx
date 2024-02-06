import React, { useState } from "react";

import { Anchor, Button, Checkbox, Grid, Group, Text, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

import utils from "../../utilities";

import emailjs from "@emailjs/browser";

import classesSuccess from "@src/styles/notifications/Success.module.scss";
import classesFail from "@src/styles/notifications/Fail.module.scss";

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
			universityDescription: value => utils.validator.form.special.text(value, 5, 2048),
			policy: value => utils.validator.form.generic.isEmpty.checkbox(value),
		},
	});

	const parse = (data: typeForm) => {
		let { universityName, contactPerson, contactEmail, contactPhoneNumber, universityDescription } = data;

		universityName = utils.parser.string.capitalize.word(universityName);
		contactPerson = utils.parser.string.capitalize.word(contactPerson);
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
					title: "Sent",
					message: "Message delivered. One of our representatives will be in touch within 24 hours.",
					color: "sec",
					classNames: classesSuccess,
					icon: <IconCheck size={16} stroke={2} />,
				})
			)
			.then(() => form.reset())
			.then(() => setSending(false))
			.catch(() => {
				notifications.show({
					title: `Send Failed`,
					message: `Sorry, an error occured and we could not deliver your request.`,
					color: "pri",
					classNames: classesFail,
					icon: <IconX size={16} stroke={2} />,
				});
				setSending(false);
			});
	};

	return (
		<form onSubmit={form.onSubmit(values => onSubmit(values))} noValidate>
			<Grid c={"sec"}>
				<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						required
						label="University Name"
						placeholder="Enter your university name here"
						{...form.getInputProps("universityName")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						required
						label="Contact Person"
						placeholder="Enter your name(s) here"
						{...form.getInputProps("contactPerson")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						required
						label="Contact Email"
						description="We will never share your email"
						placeholder="Enter your email here"
						{...form.getInputProps("contactEmail")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6 }}>
					<TextInput
						required
						label="Contact Phone Number"
						description="We will never share your phone number"
						placeholder="Enter your phone number here"
						{...form.getInputProps("contactPhoneNumber")}
					/>
				</Grid.Col>
				<Grid.Col span={12}>
					<Textarea
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
						size="xs"
						label={
							<Text component="p" fz={"inherit"}>
								I have read and accept the 'Drone Tech & Data Expo'{" "}
								<Anchor href="#privacy-policy" fw={500} fz={"inherit"}>
									privacy policy
								</Anchor>
								.
							</Text>
						}
						{...form.getInputProps("policy")}
					/>
				</Grid.Col>
				<Grid.Col span={12} mt={"xl"}>
					<Group align="center" grow>
						<Button
							type="reset"
							color="sec"
							tt={"uppercase"}
							fz={"xs"}
							onClick={form.reset}
							disabled={sending}
						>
							Clear
						</Button>
						<Button type="submit" tt={"uppercase"} fz={"xs"} loading={sending}>
							Send
						</Button>
					</Group>
				</Grid.Col>
			</Grid>
		</form>
	);
}
