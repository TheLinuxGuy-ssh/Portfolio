<script>
    import { onMount } from "svelte";

    let weeklyHours = "Loading...";

    onMount(async () => {
        const res = await fetch("/api/wakatime");
        const data = await res.json();

        weeklyHours = data.total;
    });
</script>

<div class="wakatime-widget">
    <span class="coded">Weekly Coding</span>: {weeklyHours}
</div>

<style>
    .wakatime-widget {
        width: max-content;
        position: absolute;
        top: 0;
        font-family: HermitBold;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        border-bottom: 0.1px solid;
        border-left: 0.1px solid;
        border-right: 0.1px solid;
        border-color: #242424;
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
    }
    .coded {
        font-weight: bold;
    }
</style>
