// /api/jelly.js
export default async function handler(req, res) {
    const url = process.env.JELLY_URL;
    const key = process.env.JELLY_API;

    // Fetch sessions from your backend
    const response = await fetch(
        JELLY_URL,
        {
            headers: {
                Authorization:
                    `MediaBrowser Token='${JELLY_API}'`,
            },
        },
    );
    const data = await response.json();

    res.status(200).json(data);
}