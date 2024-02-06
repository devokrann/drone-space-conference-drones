const url = "http://localhost:3000/contact";

import { typeContact } from "@src/types/form";
import { typeMail } from "@src/types/options";

export default async function postContact(
	formValues: typeContact,
	mailOptions: typeMail
) {
	const postOptions = {
		method: "POST",
		body: JSON.stringify({ values: formValues, options: mailOptions }),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	};

	try {
		const response = await fetch(url, postOptions);
		const result = await response.json();

		return result;
	} catch (error: Error) {
		console.error("x-> Contact request failed:", error.message);
	}
}
