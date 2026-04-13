<script>
    import { onMount } from "svelte";
    import "../app.css";
    import { injectSpeedInsights } from "@vercel/speed-insights";
    import { inject } from "@vercel/analytics";
    onMount(async () => {
        injectSpeedInsights();
        inject();
    });
</script>

<slot />
