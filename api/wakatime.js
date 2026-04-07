export default async function handler(req, res) {
    try {
        const apiKey = process.env.WAKATIME_API_KEY;

        const response = await fetch(
            "https://hackatime.hackclub.com/api/hackatime/v1/users/current/stats/last_7_days",
            {
                headers: {
                    Authorization:
                        "Basic " +
                        Buffer.from(apiKey).toString("base64"),
                },
            }
        );

        const data = await response.json();

        res.status(200).json({
            total: data.data.human_readable_total,
            seconds: data.data.total_seconds,
        });

    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
}