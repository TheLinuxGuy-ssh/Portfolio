<script>
  import { onMount, onDestroy } from "svelte";
  import Marquee from "svelte-neomarquee";

  let status = "Loading...";
  let type = "Idle";
  let play = false;
  let tmp = "";

  let audioPlayer;
  let currentTrackId = "";
  let streamUrl = "";
  let intervalId;

  async function checkStatus() {
    try {
      const res = await fetch("/api/jelly");
      const json = await res.json();

      if (!res.ok) {
        status = json.error || "API error";
        play = false;
        type = "Offline:";
        return;
      }

      const sessions = json;

      const active = sessions.find(
        (s) =>
          s.UserId === "713b523feca84f72b89f94af1f1472a2" && s.NowPlayingItem,
      );

      if (active?.NowPlayingItem) {
        if (active.NowPlayingItem.Type == "Movie") {
          type = "Watching:";
          tmp = "Movie";
        } else if (active.NowPlayingItem.Type == "Audio") {
          type = "Listening:";
          tmp = active.NowPlayingItem.AlbumArtist;

          if (active.NowPlayingItem.Id !== currentTrackId) {
            currentTrackId = active.NowPlayingItem.Id;
            streamUrl = `/api/jelly?streamId=${active.NowPlayingItem.Id}`;
          }
        } else if (active.NowPlayingItem.Type == "Episode") {
          type = "Binging:";
          tmp = active.NowPlayingItem.SeriesName;
        }
      } else {
        streamUrl = "";
        currentTrackId = "";
      }

      status = active?.NowPlayingItem
        ? `${active.NowPlayingItem.Name} - ${tmp || ""}`
        : "Nothing playing";

      play = true;

      if (active?.PlayState?.IsPaused) {
        if (audioPlayer && !audioPlayer.paused) audioPlayer.pause();
      } else {
        if (audioPlayer && audioPlayer.paused && streamUrl) {
          audioPlayer.play().catch(() => {});
        }
      }
    } catch (err) {
      status = "Connection failed";
      type = "Error:";
      play = false;
    }
  }

  onMount(async () => {
    await checkStatus();
    intervalId = setInterval(checkStatus, 5000);
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<div class="widget">
  <div class="playing">Currently {type}</div>
  <div class="master-wrapper">
    <Marquee
      bind:play
      speed={30}
      on:hoverstart={() => (play = false)}
      on:hoverend={() => (play = true)}
      style={"--gap: 2.75em"}
      direction={"left"}
    >
      <span class="marquee-content">{status}</span>
      <span class="marquee-content">{status}</span>
    </Marquee>
  </div>

  {#if streamUrl && type === "Listening:"}
    <div class="audio-container">
      <audio bind:this={audioPlayer} src={streamUrl} controls preload="auto">
        <track kind="captions" />
      </audio>
    </div>
  {/if}
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
  .audio-container {
    margin-top: 0.5em;
    width: 100%;
  }
  audio {
    width: 100%;
    height: 28px;
  }
</style>
