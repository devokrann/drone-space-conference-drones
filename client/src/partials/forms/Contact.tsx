import React, { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Anchor, Box, Button, Checkbox, Grid, Input, Select, Text, TextInput, Textarea } from "@mantine/core";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { IconCheck, IconX } from "@tabler/icons-react";

import { IMaskInput } from "react-imask";

import postContact from "@src/apis/postContact";

import emailjs from "@emailjs/browser";

import email from "../email";

import Component from "@src/components";

import utils from "@src/utilities";

import notificationSuccess from "@src/styles/notifications/Success.module.scss";
import notificationFail from "@src/styles/notifications/Fail.module.scss";
import { typeContact } from "@src/types/form";

export default function Contact({ defaultInquiry = "" }: { defaultInquiry?: string }) {
	const [submitted, setSubmitted] = useState(false);

	const form = useForm({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			subject: defaultInquiry,

			companyName: "",

			universityName: "",
			contactPerson: "",
			contactEmail: "",
			contactPhoneNumber: "",

			boothPackage: "",
			boothSize: "",

			message: "",
			policy: false,
		},

		validate: {
			fname: value => utils.validator.form.special.text(value, 2, 24),
			lname: value => utils.validator.form.special.text(value, 2, 24),
			email: value => utils.validator.form.special.email(value),

			companyName: (value, values) =>
				(values.boothPackage == "Corporates Booth" || values.subject == "Sponsorship Application") &&
				utils.validator.form.special.text(value, 2, 24),

			universityName: (value, values) =>
				values.subject == "University Pavilion Application" && utils.validator.form.special.text(value, 2, 24),
			contactPerson: (value, values) =>
				(values.subject == "University Pavilion Application" || values.subject == "Sponsorship Application") &&
				utils.validator.form.special.text(value, 2, 24),
			contactEmail: (value, values) =>
				(values.subject == "University Pavilion Application" || values.subject == "Sponsorship Application") &&
				utils.validator.form.special.email(value),
			contactPhoneNumber: (value, values) =>
				(values.subject == "University Pavilion Application" || values.subject == "Sponsorship Application") &&
				utils.validator.form.special.phone(value),

			boothPackage: (value, values) =>
				values.subject == "Booth Registration" && (value.trim().length < 1 ? "Please select a package" : null),
			boothSize: (value, values) =>
				values.subject == "Booth Registration" && (value.trim().length < 1 ? "Please select a size" : null),

			subject: value => (value.trim().length < 1 ? "Please select a line of inquiry" : null),
			message: hasLength({ min: 10 }, "At least 10 characters"),
			policy: isNotEmpty("You must accept to proceed"),
		},
	});

	const parse = (rawData: typeContact) => {
		let {
			fname,
			lname,
			email,

			companyName,

			universityName,
			contactPerson,
			contactEmail,
			contactPhoneNumber,

			boothPackage,
			boothSize,

			subject,
			message,
			policy,
		} = rawData;

		fname = utils.parser.string.capitalize.word(fname);
		lname = utils.parser.string.capitalize.word(lname);
		email = contactEmail.toLowerCase();

		companyName = utils.parser.string.capitalize.words(companyName);

		universityName = utils.parser.string.capitalize.words(universityName);
		contactPerson = utils.parser.string.capitalize.words(contactPerson);
		contactEmail = contactEmail.toLowerCase();

		const parsedData = {
			fname,
			lname,
			email,

			companyName: companyName.length > 1 ? `Company Name: ${companyName}` : "",

			universityName: universityName.length > 1 ? `University Name: ${universityName}` : "",
			contactPerson: contactPerson.length > 1 ? `Contact Person: ${contactPerson}` : "",
			contactEmail: contactEmail.length > 1 ? `Contact Email: ${contactEmail}` : "",
			contactPhoneNumber: contactPhoneNumber.length > 1 ? `Contact PhoneNumber: ${contactPhoneNumber}` : "",

			boothPackage: boothPackage.length > 1 ? `Booth Package: ${boothPackage}` : "",
			boothSize: boothSize.length > 1 ? `Booth Size: ${boothSize}` : "",

			subject: subject == "Other" ? "General" : subject,
			message,
			policy,
		};

		return parsedData;
	};

	const messageContent = () => {
		switch (form.values.subject) {
			case "University Pavilion Application":
				return {
					label: "University Description",
					desc: "Brief description of university's focus in Drones, Data, and AI, and any other relevant information.",
				};

			case "Sponsorship Application":
				return {
					label: "Sponsor Description",
					desc: "Brief description of the organization you represent and any other relevant information.",
				};

			case "Booth Registration":
				return {
					label: "Exhibitior Description",
					desc: "Brief description of what you would like to showcase and any other relevant information.",
				};

			default:
				return { label: "Message", desc: "" };
		}
	};

	const handleSubmit = async (formValues: typeContact) => {
		if (form.isValid()) {
			setSubmitted(true);

			// console.log(parse(formValues));

			await emailjs
				.send("service_gmail", "general_inquiries", parse(formValues), "m4Z8q5FsjIDKvyj1I")
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
				.then(() => setSubmitted(false))
				.catch(error =>
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
					})
				);

			setSubmitted(false);
		}
	};

	const companyNameInput = (
		<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
			<Component.Input.Text
				required
				label="Company Name"
				description={"The organization you represent"}
				placeholder="Enter your company name here"
				{...form.getInputProps("companyName")}
			/>
		</Grid.Col>
	);

	return (
		<Box component="form" onSubmit={form.onSubmit(values => handleSubmit(values))} noValidate>
			<Grid>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Component.Input.Text
						required
						label={"First Name"}
						placeholder="Your Name"
						{...form.getInputProps("fname")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Component.Input.Text
						required
						label={"Last Name"}
						placeholder="Your Name"
						{...form.getInputProps("lname")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Component.Input.Text
						required
						label={"Email"}
						description="We will never share your email"
						placeholder="Your Email"
						{...form.getInputProps("email")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Component.Input.Select
						label="Inquiry"
						description="What are you inquiring about?"
						// placeholder="Select an inquiry"
						defaultValue={""}
						data={[
							{
								label: "Select an inquiry",
								value: "",
							},
							{
								label: "Booth Registration",
								value: "Booth Registration",
							},
							{
								label: "Sponsorship Application",
								value: "Sponsorship Application",
							},
							{
								label: "University Pavilion Application",
								value: "University Pavilion Application",
							},
							{ label: "Other", value: "Other" },
						]}
						required
						{...form.getInputProps("subject")}
					/>
				</Grid.Col>

				{form.values.subject == "Sponsorship Application" && companyNameInput}

				<Grid.Col
					span={{ base: 12, xs: 6, sm: 12, md: 6 }}
					display={form.values.subject == "University Pavilion Application" ? "block" : "none"}
				>
					<Component.Input.Text
						required
						label="University Name"
						description={`The ${
							form.values.subject == "University Pavilion Application" ? "university" : "organization"
						} you represent`}
						placeholder="Enter your university name here"
						{...form.getInputProps("universityName")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, xs: 6, sm: 12, md: 6 }}
					display={
						form.values.subject == "University Pavilion Application" ||
						form.values.subject == "Sponsorship Application"
							? "block"
							: "none"
					}
				>
					<Component.Input.Text
						required
						label="Contact Person"
						description={`Any PR representative of the ${
							form.values.subject == "University Pavilion Application" ? "university" : "organization"
						}`}
						placeholder="Enter your name(s) here"
						{...form.getInputProps("contactPerson")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, xs: 6, sm: 12, md: 6 }}
					display={
						form.values.subject == "University Pavilion Application" ||
						form.values.subject == "Sponsorship Application"
							? "block"
							: "none"
					}
				>
					<Component.Input.Text
						required
						label="Contact Email"
						description={`The ${
							form.values.subject == "University Pavilion Application" ? "university" : "organization"
						}'s contact email`}
						placeholder="Enter your email here"
						{...form.getInputProps("contactEmail")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, xs: 6, sm: 12, md: 6 }}
					display={
						form.values.subject == "University Pavilion Application" ||
						form.values.subject == "Sponsorship Application"
							? "block"
							: "none"
					}
				>
					<Component.Input.Text
						required
						label="Contact Phone Number"
						description={`The ${
							form.values.subject == "University Pavilion Application" ? "university" : "organization"
						}'s contact number`}
						placeholder="Enter your phone number here"
						{...form.getInputProps("contactPhoneNumber")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, xs: 6, sm: 12, md: 6 }}
					display={form.values.subject == "Booth Registration" ? "block" : "none"}
				>
					<Component.Input.Select
						label="Booth Package"
						defaultValue={""}
						data={[
							{
								label: "Select a booth type",
								value: "",
							},
							{
								label: "SME'S Booth",
								value: "SME'S Booth",
							},
							{
								label: "Corporates Booth",
								value: "Corporates Booth",
							},
						]}
						required
						{...form.getInputProps("boothPackage")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, xs: 6, sm: 12, md: 6 }}
					display={form.values.subject == "Booth Registration" ? "block" : "none"}
				>
					<Component.Input.Select
						label="Booth Size"
						defaultValue={""}
						data={[
							{
								label: "Select a booth size",
								value: "",
							},
							{
								label: "3m by 3m (9 sqm)",
								value: "3m by 3m (9 sqm)",
							},
							{
								label: "6m by 3m (18 sqm)",
								value: "6m by 3m (18 sqm)",
							},
						]}
						required
						{...form.getInputProps("boothSize")}
					/>
				</Grid.Col>

				{form.values.boothPackage == "Corporates Booth" && companyNameInput}

				<Grid.Col span={12}>
					<Component.Input.Textarea
						label={messageContent().label}
						description={messageContent().desc}
						required
						placeholder="Write your message here..."
						autosize
						minRows={3}
						maxRows={10}
						{...form.getInputProps("message")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 12 }}>
					<Checkbox
						radius={"xl"}
						ml={"md"}
						defaultValue={0}
						label={
							<Text inherit>
								I have read and accept the{" "}
								<Anchor
									component={Link}
									to={"/policy/terms-and-conditions"}
									inherit
									fw={500}
									onClick={e => e.preventDefault()}
									c={"pri.6"}
								>
									terms of use
								</Anchor>
								.
							</Text>
						}
						{...form.getInputProps("policy", { type: "checkbox" })}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12 }} mt={"xl"}>
					<Grid>
						<Grid.Col span={{ base: 12, sm: 6 }}>
							<Button
								type="reset"
								fullWidth
								color="pri.6"
								onClick={() => form.reset()}
								disabled={submitted}
							>
								Clear
							</Button>
						</Grid.Col>
						<Grid.Col span={{ base: 12, sm: 6 }}>
							<Button type="submit" color={"sec"} fullWidth loading={submitted}>
								{submitted ? "Submitting" : "Submit"}
							</Button>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>
		</Box>
	);
}
