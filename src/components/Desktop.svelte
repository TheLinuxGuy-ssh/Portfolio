<script>
    let paused = false;
</script>

<div class="desktop-container">
    <h1 class="desktop-title">Current Desktop</h1>

    <div class="current-desktop">
        <video src="/Desktop.mp4" bind:paused muted loop playsinline></video>
    </div>
</div>

<style>
    .desktop-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        width: 70%;
        height: fit-content;
        margin: 0 auto;
        border: 1px solid #242424;
        overflow: hidden;
    }
    .desktop-title {
        position: absolute;
        text-align: center;
        font-size: 1em;
        padding: 0.25rem 0.5rem;
        font-family: Pro;
        font-weight: 100;
        color: #fff;
        border-top: 1px solid;
        border-left: 1px solid;
        border-right: 1px solid;
        border-color: rgba(190, 238, 175, 0.2);
        box-shadow:
            0rem 0 0.1em 0.1em rgba(190, 238, 175, 0.2),
            0rem 0 1em 0.4em rgba(190, 238, 175, 0.3);
        width: fit-content;
        bottom: 0.25em;
        right: 1em;
    }
    .current-desktop {
        width: 100%;
        height: max-content;
    }
    .current-desktop video {
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 1024px) {
        .desktop-container {
            width: 100%;
        }
    }
</style>
