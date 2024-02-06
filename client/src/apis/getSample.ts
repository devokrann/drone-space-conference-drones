const url = "https://currency-exchange.p.rapidapi.com/listquotes";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "1a787336dbmshbf77e4d611a3422p131322jsn829ee00c3884",
		"X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
	},
};

export default async function getSample() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();

		return result;
	} catch (error: Error) {
		console.error("x-> Sample fetch error:", error.message);
	}
}
