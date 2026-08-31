export async function GET() {
    try {
        const url = process.env.JELLY_URL;
        const key = process.env.JELLY_API;

        if (!url || !key) {
            return new Response(JSON.stringify({ error: "Missing env vars" }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const response = await fetch(url, {
            headers: {
                Authorization: `MediaBrowser Token="${key}"`,
            },
        });

        if (!response.ok) {
            const text = await response.text();
            console.error("Jellyfin error response:", text);
            return new Response(JSON.stringify({ error: "Failed fetch", status: response.status, detail: text }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            console.error("Jellyfin returned non-JSON:", text);
            return new Response(JSON.stringify({ error: "Invalid JSON from Jellyfin", detail: text }), {
                status: 502,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        const parts = url.split('/Sessions');
        const jfBaseUrl = parts[0];

        return new Response(JSON.stringify({
            sessions: data,
            serverUrl: jfBaseUrl,
            token: key
        }), {
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err) {
        console.error("Function error:", err);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}