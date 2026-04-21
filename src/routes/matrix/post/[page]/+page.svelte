<script>
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { posts } from "$lib/content.json";
    import leftArrow from "$lib/assets/left-arrow.webp";

    let top = 0;
    let bottom = 0;
    let showScroll = false;

    $: params = $page.params;
    $: post = posts.find((item) => `${item.id}` === `${params.page}`);
    $: content = post?.content || "";

    function updateScroller() {
        if (!browser) return;

        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const maxScroll = documentHeight - viewportHeight;

        if (maxScroll <= 0) {
            top = 0;
            bottom = 0;
            showScroll = false;
            return;
        }

        top = Math.round((scrollY / maxScroll) * 100);
        bottom = Math.round(
            ((scrollY + viewportHeight - documentHeight) / maxScroll) * 100,
        );

        showScroll = viewportHeight + window.pageYOffset > 1.2 * viewportHeight;
    }

    onMount(() => {
        if (!browser) return;

        const handler = () => updateScroller();

        window.addEventListener("scroll", handler);
        window.addEventListener("resize", handler);

        updateScroller();

        return () => {
            window.removeEventListener("scroll", handler);
            window.removeEventListener("resize", handler);
        };
    });
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/images/general/logo.webp" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="title" content={post.title} />
    <meta name="description" content={post.preview} />
    <meta
        name="keywords"
        content="Artificial Intelligence, Ai, AI, humans, history"
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="14 days" />
    <meta name="author" content="TheLinuxGuy" />
    <title>TheLinuxGuy | Tech Enthusiast</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Jura:wght@400&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="container">
    <div class="ruler">
        <div class="mask one">{top}%</div>
        <div class="mask two">{bottom}%</div>
        <div class="lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <a href="../" class="back-btn"
        ><enhanced:img src={leftArrow} class="back-img" alt="" />Back</a
    >
    <main id="main">
        <div class="line top"></div>

        <article>
            <h1>{post.title}</h1>
            <p contenteditable="false" bind:innerHTML={content}></p>
        </article>

        <div class="line bottom"></div>
    </main>

    <a class="scroll" style="opacity: {showScroll ? 1 : 0}" href="#main">
        <div class="container">
            <div class="rectangle"></div>
            <div class="rectangle"></div>
            <div class="rectangle"></div>
            <div class="rectangle"></div>
            <div class="rectangle"></div>
            <div class="rectangle"></div>
            <div class="rectangle"></div>
            <div class="rectangle"></div>
        </div>
        <span class="text">Throttle up</span>
    </a>
</div>

<style>
    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    :root {
        --c: 4, 255, 159;
        --t: 204, 204, 204;
    }
    .back-btn {
        position: fixed;
        top: 0.5rem;
        left: 0.5rem;
        color: #fff;
        border: 1px;
        box-shadow:
            0 0 0.1em 0.1em rgba(190, 238, 175, 0.2),
            0 0 1em 0.1em rgba(190, 238, 175, 0.3);
        padding: 0.25rem 0.75rem;
        font-size: 1.25em;
    }
    .back-img {
        width: 0.75em;
        height: 0.75em;
        filter: invert(1);
    }
    .container {
        background-color: rgb(4, 255, 159);
        color: rgb(204, 204, 204);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #000;
        margin: 0;
        font-family: "Jura";
        color: rgb(var(--t));
        position: relative;
    }

    h1,
    p {
        font-weight: normal;
    }

    h1 {
        font-size: 3rem;
        margin: 0 0 3rem 0;
        text-align: center;
    }

    p {
        line-height: 200%;
        margin-bottom: 3rem;
    }

    .scroll {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.2rem;
        gap: 0.2rem;
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        cursor: pointer;
        transition: all ease 0.3s;
    }

    .text {
        text-shadow: 0 0 20px 1px rgb(var(--c), 1);
        color: rgb(var(--c));
        font-family: "Jura";
    }

    .container {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .rectangle {
        opacity: 0;
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        transform: translateY(20px);
        box-shadow:
            0 0 200px 5px rgb(var(--c), 1),
            0 0 20px 1px rgb(var(--c), 0.3);
    }

    .rectangle:first-child {
        opacity: 1;
        transform: translateY(0);
        background-color: rgba(var(--c), 1);
    }

    .scroll:hover .rectangle:not(:first-child) {
        opacity: 1;
        transform: translateY(0);
    }

    .rectangle:nth-child(1) {
        width: 100px;
        height: 15px;
    }
    .rectangle:nth-child(2) {
        width: 70px;
        height: 12px;
        transition-delay: 0.05s;
        background-color: rgba(var(--c), 0.9);
    }
    .rectangle:nth-child(3) {
        width: 50px;
        height: 9px;
        transition-delay: 0.1s;
        background-color: rgba(var(--c), 0.8);
    }
    .rectangle:nth-child(4) {
        width: 40px;
        height: 7px;
        transition-delay: 0.15s;
        background-color: rgba(var(--c), 0.7);
    }
    .rectangle:nth-child(5) {
        width: 32px;
        height: 6px;
        transition-delay: 0.2s;
        background-color: rgba(var(--c), 0.6);
    }
    .rectangle:nth-child(6) {
        width: 28px;
        height: 5px;
        transition-delay: 0.25s;
        background-color: rgba(var(--c), 0.5);
    }
    .rectangle:nth-child(7) {
        width: 25px;
        height: 4px;
        transition-delay: 0.3s;
        background-color: rgba(var(--c), 0.4);
    }
    .rectangle:nth-child(8) {
        width: 22px;
        height: 3px;
        transition-delay: 0.35s;
        background-color: rgba(var(--c), 0.3);
    }
    .scroll:not(:hover) .rectangle:nth-child(2) {
        transition-delay: 0.35s;
    }
    .scroll:not(:hover) .rectangle:nth-child(3) {
        transition-delay: 0.3s;
    }
    .scroll:not(:hover) .rectangle:nth-child(4) {
        transition-delay: 0.25s;
    }
    .scroll:not(:hover) .rectangle:nth-child(5) {
        transition-delay: 0.2s;
    }
    .scroll:not(:hover) .rectangle:nth-child(6) {
        transition-delay: 0.15s;
    }
    .scroll:not(:hover) .rectangle:nth-child(7) {
        transition-delay: 0.05s;
    }
    .scroll:not(:hover) .rectangle:nth-child(8) {
        transition-delay: 0s;
    }

    /* extra */

    main {
        border-style: solid;
        border-color: rgb(var(--t), 0.2);
        border-width: 0 1px 0 1px;
        width: 60%;
        height: auto;
        margin: 0 15rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .line {
        width: 100%;
        height: 1px;
        position: relative;
        background-color: rgb(var(--t), 0.2);
    }

    .top {
        top: 5rem;
    }

    .bottom {
        bottom: 5rem;
    }

    article {
        position: relative;
        margin: 10rem 4rem;
    }

    a {
        color: rgb(var(--c));
        text-decoration: none;
    }

    @media screen and (max-width: 1080px) {
        main {
            width: 100%;
            margin: 0 0rem;
        }
        article {
            margin: 10rem 1.75rem !important;
        }
        * {
            font-size: 2.75vw;
        }
        h1 {
            font-size: 3.5em;
        }
        .rectangle:nth-child(1) {
            width: 60px;
            height: 10px;
        }
        .rectangle:nth-child(2) {
            width: 47.5px;
            height: 7px;
            transition-delay: 0.05s;
            background-color: rgba(var(--c), 0.9);
        }
        .rectangle:nth-child(3) {
            width: 32px;
            height: 5px;
            transition-delay: 0.1s;
            background-color: rgba(var(--c), 0.8);
        }
        .rectangle:nth-child(4) {
            width: 22px;
            height: 4px;
            transition-delay: 0.15s;
            background-color: rgba(var(--c), 0.7);
        }
        .rectangle:nth-child(5) {
            width: 18px;
            height: 3px;
            transition-delay: 0.2s;
            background-color: rgba(var(--c), 0.6);
        }
        .rectangle:nth-child(6) {
            width: 14px;
            height: 2px;
            transition-delay: 0.25s;
            background-color: rgba(var(--c), 0.5);
        }
        .rectangle:nth-child(7) {
            width: 10px;
            height: 1.5px;
            transition-delay: 0.3s;
            background-color: rgba(var(--c), 0.4);
        }
        .rectangle:nth-child(8) {
            width: 8px;
            height: 1px;
            transition-delay: 0.35s;
            background-color: rgba(var(--c), 0.3);
        }
        .one,
        .two {
            font-size: 1.2em;
        }

        .ruler {
            right: 0rem !important;
        }
        .scroll .rectangle:not(:first-child) {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .ruler {
        width: 2rem;
        height: 100%;
        position: absolute;
        right: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .lines {
        width: 1px;
        height: 100%;
        background-color: rgb(var(--c), 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
    }

    .lines span {
        width: 1rem;
        background-color: rgb(var(--c), 0.4);
        height: 1px;
        position: absolute;
    }

    .mask {
        position: fixed;
        height: 10%;
        width: 1rem;
        background-color: #000;
        z-index: 500;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        color: rgb(var(--c));
    }

    .one {
        top: 0;
        border-width: 0 0 1px 0;
        border-color: rgb(var(--c));
        border-style: solid;
    }
    .two {
        bottom: 0;
        border-width: 1px 0 0px 0;
        border-color: rgb(var(--c));
        border-style: solid;
    }

    .lines span:nth-child(1) {
        top: 4%;
    }

    .lines span:nth-child(2) {
        top: 8%;
    }

    .lines span:nth-child(3) {
        top: 12%;
    }

    .lines span:nth-child(4) {
        top: 16%;
    }

    .lines span:nth-child(5) {
        top: 20%;
    }

    .lines span:nth-child(6) {
        top: 24%;
    }

    .lines span:nth-child(7) {
        top: 28%;
    }

    .lines span:nth-child(8) {
        top: 32%;
    }

    .lines span:nth-child(9) {
        top: 36%;
    }

    .lines span:nth-child(10) {
        top: 40%;
    }

    .lines span:nth-child(11) {
        top: 44%;
    }

    .lines span:nth-child(12) {
        top: 48%;
    }

    .lines span:nth-child(13) {
        top: 52%;
    }

    .lines span:nth-child(14) {
        top: 56%;
    }

    .lines span:nth-child(15) {
        top: 60%;
    }

    .lines span:nth-child(16) {
        top: 64%;
    }

    .lines span:nth-child(17) {
        top: 68%;
    }

    .lines span:nth-child(18) {
        top: 72%;
    }

    .lines span:nth-child(19) {
        top: 76%;
    }

    .lines span:nth-child(20) {
        top: 80%;
    }

    .lines span:nth-child(21) {
        top: 84%;
    }

    .lines span:nth-child(22) {
        top: 88%;
    }

    .lines span:nth-child(23) {
        top: 92%;
    }

    .lines span:nth-child(24) {
        top: 96%;
    }

    .lines span:nth-child(25) {
        top: 100%;
    }
</style>
