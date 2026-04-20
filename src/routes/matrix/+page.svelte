<script>
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import { posts } from "$lib/content.json";

    let asciiEl;

    let cols = 0;
    let rows = 0;

    function resize() {
        if (!browser) return;

        const charWidth = 7;
        const charHeight = 12;

        cols = Math.floor(window.innerWidth / charWidth);
        rows = Math.floor(window.innerHeight / charHeight);

        createStrings(); // important
    }

    /* MOUSE */
    let mouse = { x: 0, y: 0 };

    function handleMouseMove(e) {
        mouse.x = e.clientX / 7;
        mouse.y = e.clientY / 12;
    }

    /* CLICK EXPLOSIONS */
    let explosions = [];

    function handleClick(e) {
        explosions.push({
            x: e.clientX / 7,
            y: e.clientY / 12,
            radius: 0,
            life: 1,
        });
    }

    /* STRING LOGIC */
    let baseString = "The Matrix";
    let currentString = baseString;

    const mutations = [
        (s) => s.split("").reverse().join(""),
        (s) => s.replace(/O/g, "0"),
        (s) => s.replace(/E/g, "3"),
        (s) => s.slice(0, Math.max(1, Math.floor(Math.random() * s.length))),
        (s) => s + "_ERR",
    ];

    function mutateString() {
        const fn = mutations[Math.floor(Math.random() * mutations.length)];
        currentString = fn(currentString);

        if (currentString.length < 2) {
            currentString = baseString;
        }
    }

    class CursedString {
        constructor(index, total, depth) {
            this.index = index;
            this.total = total;
            this.depth = depth;

            this.baseY = (index / total) * rows;

            this.amplitude = 2 + depth * 4;
            this.wavelength = 0.08;
            this.speed = depth * 0.002;

            this.offset = Math.random() * 100;
        }

        update(time) {
            this.time = time;
        }

        getY(x) {
            let y =
                this.baseY +
                Math.sin(
                    x * this.wavelength + this.time * this.speed + this.offset,
                ) *
                    this.amplitude;

            y +=
                Math.sin(x * 0.04 + this.time * 0.0015) *
                (this.amplitude * 0.5);

            let dx = x - mouse.x;
            let dy = y - mouse.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 10) {
                y += (10 - dist) * 0.3 * this.depth;
            }

            return Math.floor(y);
        }
    }

    let strings = [];

    function createStrings() {
        strings = [];
        let total = 22;

        for (let i = 0; i < total; i++) {
            let depth = 0.6 + Math.random() * 0.8;
            strings.push(new CursedString(i, total, depth));
        }
    }

    let lastMutation = 0;
    let raf;

    function draw(time) {
        if (!rows || !cols) {
            raf = requestAnimationFrame(draw);
            return;
        }

        let grid = Array.from({ length: rows }, () => Array(cols).fill(" "));

        strings.forEach((s) => {
            s.update(time);

            for (let x = 0; x < cols; x++) {
                let y = s.getY(x);

                if (y >= 0 && y < rows) {
                    let charIndex =
                        (x + Math.floor(time * 0.01)) % currentString.length;

                    let char = currentString[charIndex];

                    if (Math.random() < 0.02) char = "#";

                    grid[y][x] = char;
                }
            }
        });

        explosions.forEach((exp) => {
            exp.radius += 0.3;
            exp.life -= 0.015;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    let dx = x - exp.x;
                    let dy = y - exp.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < exp.radius && Math.random() < 0.25) {
                        grid[y][x] = "@";
                    }
                }
            }
        });

        explosions = explosions.filter((e) => e.life > 0);

        if (asciiEl) {
            asciiEl.textContent = grid.map((r) => r.join("")).join("\n");
        }

        if (time - lastMutation > 2500) {
            mutateString();
            lastMutation = time;
        }

        raf = requestAnimationFrame(draw);
    }

    onMount(() => {
        if (!browser) return;

        resize();

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);

        raf = requestAnimationFrame(draw);
    });

    onDestroy(() => {
        if (!browser) return;

        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("click", handleClick);

        cancelAnimationFrame(raf);
    });
</script>

<div class="loader">
    <pre bind:this={asciiEl}></pre>
</div>
<div class="container" style="color: white;">
    <div class="hero-title">The Matrix</div>
</div>
<slot />

<div class="matrix-container">
    {#each Object.entries(posts) as [key, post], index (key)}
        <a href={`./matrix/post/` + `${post.id}`}>
            <div class="card">
                <div class="date-time-container">
                    <time class="date-time">
                        <span>{post.year}</span>
                        <span class="separator"></span>
                        <span>{post.date}</span>
                    </time>
                </div>
                <div class="content">
                    <div class="infos">
                        <span>
                            <span class="title">
                                {post.title}
                            </span>
                        </span>

                        <p class="description">
                            {post.preview}
                        </p>
                    </div>
                    <div class="post-tags">
                        {#each Object.entries(post.tags || {}) as [key, tag], index (key)}
                            <div class="tag">{tag.name}</div>
                        {/each}
                    </div>

                    <span class="action" href="#"> Read Blog </span>
                </div>
            </div>
        </a>
    {/each}
</div>

<style>
    .container {
        z-index: 10 !important;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: #fff;
    }
    .hero-title {
        color: #04ff9f;
        font-size: 5vw;
        font-family: Pro, Arial;
        text-shadow: 0 0 10px rgba(190, 238, 175, 0.9);
        user-select: none;
        text-align: center;
        padding: 0em 0.2em;

        box-shadow: 0 0 20px 5px #000;
    }
    .loader {
        margin: 0;
        padding: 0;
        background: black;
        overflow: hidden;
        width: 100%;
        position: absolute;
        height: 100vh;
    }

    .loader::after {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.03) 0px,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 2px,
            transparent 4px
        );
    }

    .matrix-container {
        z-index: 10;
        color: white;
        margin: 1em 2.5em;
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        font-family: HermitBold;
    }

    .card {
        box-sizing: border-box;
        display: flex;
        max-width: 320px;
        background-color: rgb(22, 22, 22);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        border: 2px solid #04ff9f;
        margin: 1em;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.081);
    }

    .card:hover {
        box-shadow:
            0 0 0.1em 0.1em rgba(190, 238, 175, 0.2),
            0 0 1em 0.4em rgba(190, 238, 175, 0.3);
    }

    .date-time-container {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        padding: 0.5rem;
    }

    .date-time {
        display: flex;
        align-items: center;
        justify-content: space-between;
        grid-gap: 1rem;
        gap: 1rem;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
    }

    .separator {
        width: 1px;
        flex: 1 1 0%;
        background-color: rgba(4, 255, 159, 0.195);
    }

    .content {
        display: flex;
        flex: 1 1 0%;
        flex-direction: column;
        justify-content: space-between;
    }

    .infos {
        border-left: 1px solid rgba(17, 24, 39, 0.1);
        padding: 1rem;
    }

    .title {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 18.72px;
        color: #fff;
        font-family: Pro;
    }

    .description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        line-clamp: 5;
        margin-top: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(244, 244, 244);
    }

    .action {
        display: block;
        background-color: #04ff9f;
        padding: 0.75rem 1.25rem;
        text-align: center;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #000;
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .post-tags {
        display: flex;
        margin: 0 1em 1em 1em;
    }
    .post-tags .tag {
        border: 1px solid #00ff9f;
        padding: 0 0.25em;
        color: #fff;
    }
    .post-tags .tag:nth-child(even) {
        margin: 0 0.5em;
    }
    .card:hover .action {
        background-color: rgb(88, 255, 127);
    }

    pre {
        position: relative;
        top: 0;
        left: 0;

        margin: 0vh 0;
        padding: 0;

        width: 100vw;
        height: 100vh;
        box-shadow: inset 0 0 3em 2em rgba(0, 0, 0, 0.5);
        overflow: hidden;

        font-family: monospace;
        font-size: 12px;
        line-height: 12px;

        color: #00ff9f;
        white-space: pre;
        opacity: 0.6;
    }
    @keyframes disappear {
        0% {
            width: 100vw;
        }
        100% {
            width: 0;
        }
    }
</style>
