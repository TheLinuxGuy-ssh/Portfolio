<script>
    import { onMount } from "svelte";
    let status = "Loading...";
    import Marquee from "svelte-neomarquee";
    let play = true;
    onMount(async () => {
        const res = await fetch("/api/jelly");
        const sessions = await res.json();

        const active = sessions.find(
            (s) =>
                s.UserId === "5771a9a1f3c14063b8440151bc91af2c" &&
                s.NowPlayingItem,
        );

        status = active?.NowPlayingItem
            ? `${active.NowPlayingItem.Name} - ${active?.NowPlayingItem.AlbumArtist || ""}`
            : "Nothing playing";
    });
</script>

<div class="widget">
    <div class="playing">Currently Listening:</div>
    <div class="master-wrapper">
        <Marquee bind:play speed={30} direction={"left"}>
            <span class="marquee-content">{status}</span>
            <span class="marquee-content">{status}</span>
        </Marquee>
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
    .marquee-content {
        margin: 0 1em;
    }
</style>
