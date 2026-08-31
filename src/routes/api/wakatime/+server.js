export async function GET() {
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

        return new Response(JSON.stringify({
            total: data.data.human_readable_total,
            seconds: data.data.total_seconds,
        }), {
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err) {
        return new Response(JSON.stringify({
            error: err.message,
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}