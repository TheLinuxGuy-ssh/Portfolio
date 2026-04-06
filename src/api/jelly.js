// /api/jelly.js
export default async function handler(req, res) {
    const url = process.env.JELLY_URL;
    const key = process.env.JELLY_API;

    // Fetch sessions from your backend
    const response = await fetch(`${url}/Sessions?api_key=${key}`);
    const data = await response.json();

    res.status(200).json(data);
}