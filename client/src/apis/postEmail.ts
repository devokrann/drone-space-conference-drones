const url = "http://localhost:3000/auth/password-reset";

export default async function postEmail(email: string) {
	const postOptions = {
		method: "POST",
		body: JSON.stringify({ email }),
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
		console.error("x-> Email post request failed:", error.message);
	}
}
