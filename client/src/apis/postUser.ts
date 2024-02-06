const url = "http://localhost:3000/auth/sign-up";

import { typeSignup } from "@src/types/form";

export default async function postUser(formValues: typeSignup) {
	const postOptions = {
		method: "POST",
		body: JSON.stringify(formValues),
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
		console.error("x-> Signup request failed:", error.message);
	}
}
