<script>
    import { onMount } from "svelte";
    import "../app.css";
    onMount(async () => {
        injectSpeedInsights();
        inject();
    });
</script>

<slot />
