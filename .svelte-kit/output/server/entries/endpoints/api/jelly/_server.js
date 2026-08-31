async function GET() {
  try {
    const url = process.env.JELLY_URL;
    const key = process.env.JELLY_API;
    if (!url || !key) {
      return new Response(JSON.stringify({ error: "Missing env vars" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const response = await fetch(url, {
      headers: {
        Authorization: `MediaBrowser Token="${key}"`
      }
    });
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed fetch", status: response.status }), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = await response.json();
    const parts = url.split("/Sessions");
    const jfBaseUrl = parts[0];
    return new Response(JSON.stringify({
      sessions: data,
      serverUrl: jfBaseUrl,
      token: key
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Function error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
export {
  GET
};
