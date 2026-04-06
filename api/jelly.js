// /api/jelly.js
export default async function handler(req, res) {
    try {
        const url = process.env.JELLY_URL;
        const key = process.env.JELLY_API;

        if (!url || !key) {
            return res.status(500).json({ error: "Missing env vars" });
        }

        const response = await fetch(url, {
            headers: {
                Authorization: `MediaBrowser Token="${key}"`,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed fetch", status: response.status });
        }

        const data = await response.json();
        return res.status(200).json(data);

    } catch (err) {
        console.error("Function error:", err);
        return res.status(500).json({ error: err.message });
    }
}