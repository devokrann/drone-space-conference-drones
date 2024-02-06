const url = "http://localhost:3000/auth/verify/:userEmail";

import { typeVerify } from "@src/types/form";

export default async function postOtp({ email, otp }: typeVerify) {
	const postOptions = {
		method: "POST",
		body: JSON.stringify({ email, otp }),
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
		console.error("x-> Otp request failed:", error.message);
	}
}
