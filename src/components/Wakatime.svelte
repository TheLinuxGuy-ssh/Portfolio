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
        border-bottom: 1px solid #575757;
        border-left: 1px solid #575757;
        border-right: 1px solid #575757;
        padding: 0.55rem 1rem;
        font-size: 0.875rem;
        background-color: rgba(0, 0, 0, 0.65);
        z-index: 30;
    }
    .coded {
        font-weight: bold;
        color: #c9ffcf;
    }

    @media screen and (max-width: 1024px) {
        .wakatime-widget {
            font-size: 0.75rem;
            padding: 0.4rem 0.75rem;
            top: 0.25rem;
        }
    }
</style>
