export default async function handler(req, res) {
    try {
        const apiKey = process.env.WAKATIME_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: "Missing WAKATIME_API_KEY",
            });
        }

        const response = await fetch(
            "https://api.hakatime.com/v1/users/current/stats/last_7_days",
            {
                headers: {
                    Authorization:
                        "Basic " +
                        Buffer.from(apiKey).toString("base64"),
                },
            }
        );

        if (!response.ok) {
            const text = await response.text();
            return res.status(response.status).json({
                error: "Hakatime API error",
                details: text,
            });
        }

        const data = await response.json();

        return res.status(200).json({
            total: data.data.human_readable_total,
            seconds: data.data.total_seconds,
        });

    } catch (err) {
        return res.status(500).json({
            error: "Internal Server Error",
            message: err.message,
        });
    }
}