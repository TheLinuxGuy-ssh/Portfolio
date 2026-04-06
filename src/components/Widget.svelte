<script>
    import { onMount } from "svelte";
    let status = "Loading...";

    onMount(async () => {
        const res = await fetch("/api/jelly");
        const sessions = await res.json();

        const active = sessions.find(
            (s) =>
                s.UserId === "5771a9a1f3c14063b8440151bc91af2c" &&
                s.NowPlayingItem,
        );

        status =
            `${active?.NowPlayingItem?.Name} - ${active?.NowPlayingItem?.Artist}` ??
            "Nothing playing";
    });
</script>

<div class="widget">
    <div class="playing">Current Listening:</div>
    <div class="master-wrapper">
        <div class="marquee-wrapper">
            <span class="marquee-content">{status}</span>
            <span class="marquee-content">{status}</span>
        </div>
    </div>
</div>

<style>
    .widget {
        font-family: HermitBold;
        position: fixed;
        bottom: 1em;
        right: 1em;
        width: 12em;
        color: #fff;
    }
    .playing {
        margin: 1em 0;
        font-size: 0.75em;
    }
    .master-wrapper {
        width: 100%;
        overflow: hidden;
        padding: 1em 0;
        white-space: nowrap;
        background-color: #000;
        box-shadow:
            0 0 0.1em 0.1em rgba(190, 238, 175, 0.2),
            0 0 1em 0.4em rgba(190, 238, 175, 0.3);
    }
    .marquee-wrapper {
        display: flex;
        margin: 0 1rem;
        width: max-content;
        animation: scroll 10s linear infinite;
        color: #fff;
    }

    .marquee-content {
        flex-shrink: 0;
        padding-right: 2rem; /* spacing between repeats */
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }
</style>
