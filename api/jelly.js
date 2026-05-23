import axios from 'axios';

export default async function handler(req, res) {
    try {
        const url = process.env.JELLY_URL;
        const key = process.env.JELLY_API;

        if (!url || !key) {
            return res.status(500).json({ error: "Missing env vars" });
        }

        const { streamId } = req.query;
        if (streamId) {
            const parts = url.split('/Sessions');
            const domain = parts[0];
            const audioStreamUrl = `${domain}/Audio/${streamId}/stream?static=true&api_key=${key}`;

            const audioResponse = await axios({
                method: 'get',
                url: audioStreamUrl,
                responseType: 'stream'
            });

            res.setHeader("Content-Type", audioResponse.headers['content-type'] || "audio/mpeg");
            res.setHeader("Accept-Ranges", "bytes");

            audioResponse.data.pipe(res);
            return;
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
