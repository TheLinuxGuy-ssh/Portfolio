<script>
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";

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

<style>
    .container {
        z-index: 10 !important;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .hero-title {
        color: #04ff9f;
        font-size: 5vw;
        font-family: Pro, Arial;
        text-shadow: 0 0 10px rgba(190, 238, 175, 0.9);
        user-select: none;
        text-align: center;
        padding: 0em 0.2em;
        background-color: #000;
        box-shadow: 0 0 20px 40px #000;
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
