export default async function handler(req, res) {
    try {
        const apiKey = process.env.DATABASE_API_KEY;

        const response = await fetch(
            "https://database.linuxguy.tech",
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
            total: data.data.users,
        });

    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
}