export default async function handler(req, res) {
    const response = await fetch(
        "https://api.hakatime.com/v1/users/current/stats/last_7_days",
        {
            headers: {
                Authorization:
                    "Basic " +
                    Buffer.from(process.env.WAKATIME_API_KEY).toString("base64"),
            },
        }
    );

    const data = await response.json();

    res.status(200).json({
        total: data.data.human_readable_total,
        seconds: data.data.total_seconds,
    });
}