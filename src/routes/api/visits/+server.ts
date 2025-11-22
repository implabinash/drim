import { json } from "@sveltejs/kit";

const KEY = "total_visits";

export async function GET({ platform }) {
	try {
		const visits = await platform?.env.VISITS.get(KEY);
		return json({ visits: parseInt(visits ?? "0") || 0 });
	} catch (error) {
		console.error("Total visits error: ", error);
		return json({ visits: 0 });
	}
}

export async function POST({ platform, url }) {
	try {
		const current = await platform?.env.VISITS.get(KEY);
		const newCount = (parseInt(current ?? "0") || 0) + 1;

		if (url.origin !== "https://drim.pages.dev") {
			await platform?.env.VISITS.put(KEY, newCount.toString());
		}

		return json({ visits: newCount });
	} catch (error) {
		console.error("Update visits error: ", error);
		return json({ visits: 0 });
	}
}
