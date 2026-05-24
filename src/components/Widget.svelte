<script>
  import { onMount, onDestroy } from "svelte";
  import Marquee from "svelte-neomarquee";

  let status = "Loading...";
  let type = "Idle";
  let play = false;
  let tmp = "";
  let volume = 0.25;
  let audioPlayer;
  let currentTrackId = "";
  let streamUrl = "";
  let intervalId;
  let currentIntervalTime = 5000;

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

      const sessions = json.sessions;
      const serverUrl = json.serverUrl;
      const token = json.token;

      const active = sessions.find(
        (s) =>
          s.UserId === "713b523feca84f72b89f94af1f1472a2" && s.NowPlayingItem,
      );

      let nextIntervalTime = 5000;

      if (active?.NowPlayingItem) {
        if (active.NowPlayingItem.Type == "Movie") {
          type = "Watching:";
          tmp = "Movie";
        } else if (active.NowPlayingItem.Type == "Audio") {
          type = "Listening:";
          tmp = active.NowPlayingItem.AlbumArtist;

          if (active.NowPlayingItem.Id !== currentTrackId) {
            currentTrackId = active.NowPlayingItem.Id;
            streamUrl = `${serverUrl}/Audio/${active.NowPlayingItem.Id}/stream?static=true&api_key=${token}`;
            nextIntervalTime = 1500;
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
        if (audioPlayer && !audioPlayer.paused) {
          audioPlayer.pause();
          nextIntervalTime = 1500;
        }
      } else {
        if (audioPlayer && streamUrl) {
          if (audioPlayer.paused) {
            audioPlayer.play().catch(() => {});
            nextIntervalTime = 1500;
          }

          if (active.PlayState?.PositionTicks !== undefined) {
            const serverSeconds = active.PlayState.PositionTicks / 10000000;
            if (Math.abs(audioPlayer.currentTime - serverSeconds) > 2) {
              audioPlayer.currentTime = serverSeconds;
            }
          }
        }
      }

      if (nextIntervalTime !== currentIntervalTime) {
        currentIntervalTime = nextIntervalTime;
        clearInterval(intervalId);
        intervalId = setInterval(checkStatus, currentIntervalTime);
      }
    } catch (err) {
      status = "Connection failed";
      type = "Error:";
      play = false;
    }
  }

  onMount(async () => {
    await checkStatus();
    intervalId = setInterval(checkStatus, currentIntervalTime);
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

  <!-- {#if streamUrl && type === "Listening:"}
    <audio
      bind:this={audioPlayer}
      src={streamUrl}
      bind:volume
      preload="metadata"
    >
      <track kind="captions" />
    </audio>
  {/if} -->
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
