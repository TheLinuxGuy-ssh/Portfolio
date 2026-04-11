<script>
</script>

<div class="loader" style="display: none;">
    <div class="scanline"></div>
    <pre class="code"><span class="blink">█</span></pre>
    <div class="terminal glitch">
        <div class="scanline"></div>
        <p class="spinner" style="margin-top: 4em;">[/]</p>
        <div class="hydra">
            <div class="hydra_rebooting">
                <p>&lt; SYSTEM BOOTING &gt;</p>
                <p class="text--sm">ARCH 1.01 SYS BOOTUP</p>
                <p class="text--sm">
                    PROCESS: <span class="process-amount">0</span>%
                </p>
                <p class="loading-bar"></p>
            </div>
            <div class="hydra_reboot_success hidden">
                <p>BOOTING SUCCESSFUL</p>
            </div>
        </div>
    </div>
    <div class="caption">
        There's a difference, between knowing the path and walking it...
    </div>
</div>

<style>
    .loader {
        position: fixed;
        top: 0;
        color: green;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #212121;
        z-index: 99999999999999999 !important;
        animation: 12s loaded ease-in-out forwards;
    }
    .blink {
        opacity: 1;
        animation: blink 1s linear infinite;
    }
    .glitch {
        animation: glitch 1.5s linear infinite;
    }

    .hydra {
        box-shadow:
            0 0 2px green,
            inset 0 0 2px green;
        padding: 2vw;
        border: 0.2vw solid green;
        grid-row: 2/2;
        grid-column: 2/2;
        width: fit-content;
        margin: 0 auto;
    }

    .scanline {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.03);
        animation: scanline 6s linear infinite;
    }
    @keyframes blink {
        0.01% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        50.01% {
            opacity: 1;
        }
    }
    @keyframes scanline {
        0.01% {
            height: 0;
        }
        99.99% {
            height: 100%;
        }
        100% {
            height: 0;
        }
    }

    .code {
        position: absolute;
    }

    .scanline {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.02);
        animation: scanline 8s linear infinite;
        pointer-events: none;
        z-index: -2;
    }

    .hidden {
        display: none;
    }

    p {
        font-family: monospace;
        font-size: inherit;
        line-height: 1.5;
        margin: 0;
    }

    .text--sm {
        font-size: 1.75vw;
    }

    * + .text--sm {
        padding-top: 0.5vw;
    }

    * + .loading-bar {
        padding-top: 1vw;
    }

    .caption {
        position: absolute;
        bottom: 1em;
        right: 1em;
        padding: 0.5rem;
    }
    @keyframes scanline {
        0.01% {
            transform: translatey(-100%);
        }

        99.99% {
            transform: translatey(0);
        }

        100% {
            transform: translatey(-100%);
        }
    }

    @keyframes glitch {
        2%,
        64% {
            transform: translate(2px, 0) skew(0deg);
        }

        4%,
        60% {
            transform: translate(-2px, 0) skew(0deg);
        }

        62% {
            transform: translate(0, 0) skew(5deg);
        }
    }

    @keyframes glitch--top {
        2%,
        64% {
            transform: translate(2px, -2px);
        }

        4%,
        60% {
            transform: translate(-2px, 2px);
        }

        62% {
            transform: translate(13px, -1px) skew(-13deg);
        }
    }

    @keyframes glitch--bottom {
        2%,
        64% {
            transform: translate(-2px, 0);
        }

        4%,
        60% {
            transform: translate(-2px, 0);
        }

        62% {
            transform: translate(-22px, 5px) skew(21deg);
        }
    }
    @keyframes loaded {
        0% {
            visibility: visible;
        }

        90% {
            visibility: visible;
            opacity: 1;
        }

        100% {
            visibility: hidden;
            opacity: 0;
        }
    }

    @keyframes animateColor {
        0% {
            filter: hue-rotate(0deg);
        }

        100% {
            filter: hue-rotate(360deg);
        }
    }
</style>
