<script>
  import { mount, onMount } from "svelte";
  import { Terminal } from "svelte-bash";
  import boot from "/audio/boot.mp3";
  import tlgLink from "/tlglink.mp4";

  const fileSystem = {
    "readme.md": `thelinuxguy-ssh@github
-----------------
OS: Arch (Primary) · Windows[VM] (for no privacy) · OSX[VM] (for feeling dumb)            
Role: Server Administrator · Web Developer
Desktop Environment: Hyprland · GNOME               
Shell: ZSH
Editor: Neovim · VSCode   
Theme: Matrix Dark

Lang: JS · TS · BASH       
FW: Svelte(basics) · React · Node
Stack: Nginx · MySQL

Projects: TheSpartanRage · DarwinX · Start-Page · Unite.Do
Mode: Building · Learning · Privacy
Music: Soundtracks · Phonk · Soul
      `,
    secrets: {
      github_token: "You really thought this was it?",
    },
  };
  let isBored = false;
  let paused = true;
  function Bored() {
    isBored = true;
    paused = false;
    console.log("done boi");
  }
  const commands = {
    help: () =>
      "Available commands: fetch, clear, ls, cat, cd, pwd, help, history, mkdir, touch, rm, alias",
    fetch: () => `thelinuxguy-ssh@github
-----------------
OS: Arch (Primary) · Windows[VM] (for no privacy) · OSX[VM] (for feeling dumb)            
Role: Server Administrator · Web Developer
Desktop Environment: Hyprland · GNOME               
Shell: ZSH
Editor: Neovim · VSCode   
Theme: Matrix Dark

Lang: JS · TS · BASH       
FW: Svelte(basics) · React · Node
Stack: Nginx · MySQL

Projects: TheSpartanRage · DarwinX · Start-Page · Unite.Do
Mode: Building · Learning · Privacy
Music: Soundtracks · Phonk · Soul
      `,
  };
</script>

<audio src={boot} preload="metadeta" bind:paused></audio>
<section class="about">
  <div class="bg">
    <div></div>
    <div></div>
  </div>
  <div class="header-text" aria-hidden="true" data-scroll>
    <div class="revolutionising" style="font-size: 5.75vw">Revolutionising</div>
    <br /><span
      class="glow-filter"
      data-text="The Internet"
      style="filter: hue-rotate(90deg);">The Internet</span
    ><br /><br />
    <div
      data-scroll
      data-scroll-speed="7"
      data-scroll-direction="horizontal"
      class="server"
      style="font-size: 5.75vw;"
    >
      One Server At A Time.
    </div>
    <br />
  </div>
  <svg
    class="filters"
    width="1440px"
    height="300px"
    viewBox="0 0 1440 300"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <filter
        id="glow-4"
        color-interpolation-filters="sRGB"
        x="-50%"
        y="-200%"
        width="200%"
        Height="500%"
      >
        <feGaussianBlur
          in="SourceGraphic"
          data-target-blur="4"
          stdDeviation="4"
          result="blur4"
        />
        <feGaussianBlur
          in="SourceGraphic"
          data-target-blur="19"
          stdDeviation="19"
          result="blur19"
        />
        <feGaussianBlur
          in="SourceGraphic"
          data-target-blur="9"
          stdDeviation="9"
          result="blur9"
        />
        <feGaussianBlur
          in="SourceGraphic"
          data-target-blur="30"
          stdDeviation="30"
          result="blur30"
        />
        <feColorMatrix
          in="blur4"
          result="color-0-blur"
          type="matrix"
          values="1 0 0 0 0
                      0 0.9803921568627451 0 0 0
                      0 0 0.9647058823529412 0 0
                      0 0 0 0.8 0"
        />
        <feOffset
          in="color-0-blur"
          result="layer-0-offsetted"
          dx="0"
          dy="0"
          data-target-offset-y="0"
        />
        <feColorMatrix
          in="blur19"
          result="color-1-blur"
          type="matrix"
          values="0.8156862745098039 0 0 0 0
                      0 0.49411764705882355 0 0 0
                      0 0 0.2627450980392157 0 0
                      0 0 0 1 0"
        />
        <feOffset
          in="color-1-blur"
          result="layer-1-offsetted"
          dx="0"
          dy="2"
          data-target-offset-y="2"
        />
        <feColorMatrix
          in="blur9"
          result="color-2-blur"
          type="matrix"
          values="1 0 0 0 0
                      0 0.6666666666666666 0 0 0
                      0 0 0.36470588235294116 0 0
                      0 0 0 0.65 0"
        />
        <feOffset
          in="color-2-blur"
          result="layer-2-offsetted"
          dx="0"
          dy="2"
          data-target-offset-y="2"
        />
        <feColorMatrix
          in="blur30"
          result="color-3-blur"
          type="matrix"
          values="1 0 0 0 0
                      0 0.611764705882353 0 0 0
                      0 0 0.3921568</strong>
                      0 0 0 1 0"
        />
        <feOffset
          in="color-4-blur"
          result="layer-4-offsetted"
          dx="0"
          dy="16"
          data-target-offset-y="16"
        />
        <feColorMatrix
          in="blur30"
          result="color-5-blur"
          type="matrix"
          values="0.4235294117647059 0 0 0 0
                      0 0.19607843137254902 0 0 0
                      0 0 0.11372549019607843 0 0
                      0 0 0 1 0"
        />
        <feOffset
          in="color-5-blur"
          result="layer-5-offsetted"
          dx="0"
          dy="64"
          data-target-offset-y="64"
        />
        <feColorMatrix
          in="blur30"
          result="color-6-blur"
          type="matrix"
          values="0.21176470588235294 0 0 0 0
                      0 0.109803921</strong>56862745 0 0 0
                      0 0 0.07450980392156863 0 0
                      0 0 0 1 0"
        />
        <feOffset
          in="color-6-blur"
          result="layer-6-offsetted"
          dx="0"
          dy="64"
          data-target-offset-y="64"
        />
        <feColorMatrix
          in="blur30"
          result="color-7-blur"
          type="matrix"
          values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.68 0"
        />
        <feOffset
          in="color-7-blur"
          result="layer-7-offsetted"
          dx="0"
          dy="64"
          data-target-offset-y="64"
        />
        <feMerge>
          <feMergeNode in="layer-0-offsetted" />
          <feMergeNode in="layer-1-offsetted" />
          <feMergeNode in="layer-2-offsetted" />
          <feMergeNode in="layer-3-offsetted" />
          <feMergeNode in="layer-4-offsetted" />
          <feMergeNode in="layer-5-offsetted" />
          <feMergeNode in="layer-6-offsetted" />
          <feMergeNode in="layer-7-offsetted" />
          <feMergeNode in="layer-0-offsetted" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs></svg
  >
  <section class="gray">
    <div class="box gradient-green"></div>
  </section>
</section>
<section class="about-real" id="about">
  <div class="about-change" class:appear={isBored} id="change-is-real">
    <!-- <pre><code>
#!/usr/bin/env developer

<span class="off-white">role=</span><span class="double-quotes"
          >"Full-stack developer"</span
        >
<span class="off-white">stack=</span><span class="light-blue">(</span><span
          class="double-quotes">"React" "Node.js" "TypeScript"</span
        ><span class="light-blue">)</span>

<span class="off-blue">function</span> <span class="off-white">build</span><span
          class="light-blue"
          >() &#123; </span>
  <span class="special-orange">echo</span> <span class="double-quotes"
          >"Creating fast, scalable web applications"</span
        >
<span class="light-blue">&#125;</span>

<span class="off-blue">function</span> <span class="off-white">focus</span><span
          class="light-blue">() &#123;</span
        >
  <span class="special-orange">echo</span> <span class="double-quotes"
          >"Clean architecture and performance"</span
        >
<span class="light-blue">&#125;</span>

current_interest="Backend systems & developer tools"
</code></pre> -->
  </div>
  <div class="about-content" id="content">
    <div class="pccase" data-aos="fade-right" data-aos-delay="0.5">
      <div class="screen oldscreeneffect">
        <div class="desktop" class:netboot={isBored}>
          <div class="tlg-link">
            <video
              class="tlg-link-vid"
              src={tlgLink}
              bind:paused
              muted
              playsinline
            ></video>
          </div>
          <Terminal
            structure={fileSystem}
            class={"tlg-terminal"}
            {commands}
            user="TLG"
            autofocus
            theme={{
              background: "transparent",
              foreground: "#00fe1a",
              prompt: "#fff",
            }}
            welcomeMessage={`Type 'help' for known commands`}
            typewriter={true}
            syntaxHighlight={true}
            ghostCompletion={true}
            bootplay={[{ command: "fetch" }]}
          />
        </div>
        <div class="screentext" class:bored={isBored}>
          <p class="sctext">Booting</p>
          <hr />
          <p class="sctext">
            <span class="about-title">
              ▄▀█ █▄▄ █▀█ █░█ ▀█▀   █▀▄▀█ █▀▀<br />
              █▀█ █▄█ █▄█ █▄█ ░█░   █░▀░█ ██▄<br />
            </span>
            <br />A passionate Tech Enthusiast who is a well experienced Server
            Administrator, Web Developer, Designer with a great sense of humour.
            A mind which works just like electrical current in terms of coding,
            finding the shortest and least resistant path towards a goal, that
            is keeping a clean and optimised code ensuring the best efficiency
            to get the best out of his projects. Self Reliant like the Servers,
            Creative like the Builders. A refined observer caring about every
            pixel of detail. Not a perfectionist, Just
            <span class="sc-highlight">Precision-Driven</span><b>.</b><br /><br
            />Copyright (c) 2026<br />
          </p>
          <p class="sc-text change-text">
            Bored yet? Same. Let’s
            <button on:click={() => Bored()} class="change-is-necessary"
              >change</button
            >
            that.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .desktop {
    opacity: 0;
    color: #00fe1a;
    text-align: center;
    z-index: -1;
    justify-content: center;
    align-items: center;
    display: none;
    width: 100%;
    border-radius: 2rem;
    height: 27.5em;
    animation: 5s bootflash;
  }

  .about-title {
    font-size: 1rem;
  }
  .server {
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }
  .tlg-link {
    display: flex;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 2em;
    justify-content: center;
    z-index: 11;
    animation: 5s bootflash forwards;
    background-color: #000;
  }
  .tlg-link-vid {
    width: 20em;
  }
  @keyframes bootflash {
    0% {
      background-color: #fff;
      display: flex;
    }
    1% {
      background-color: #000;
    }
    12% {
      background-color: #000;
    }
    13% {
      background-color: #00fe1a;
    }
    16% {
      background-color: #00fe1a;
    }
    17% {
      background-color: #000;
    }
    98% {
      background-color: #000;
    }
    99% {
      background-color: #fff;
      display: flex;
    }
    100% {
      background-color: #000;
      display: none;
    }
  }

  .desktop.netboot {
    opacity: 1;
    z-index: 10;
    display: block;
    position: relative;
  }
  .off-white {
    color: #bebbb5;
  }
  .double-quotes {
    color: #c6b28a;
  }
  .off-blue {
    color: #56afee;
  }
  .light-blue {
    color: #4c749a;
  }
  .special-orange {
    color: #d5a087;
  }
  .about {
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    font-family: Pro, Arial;
    overflow: hidden;
    font-size: calc(var(--_size) * 0.022);
    --_factor: min(1000px, 100vh);
    --_size: min(var(--_factor), 100vw);
    background-image: url("data:image/svg+xml,%3Csvg width='15.972' height='15.972' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E");
  }
  .about::before {
    content: "";
    display: block;
    width: 100%;
    height: 100px;
    margin-top: -5em;
    margin-bottom: -2.5em;
  }

  .about canvas {
    width: 100% !important;
    height: 100% !important;
  }

  .about .caption {
    position: fixed;
    bottom: 1em;
    right: 1em;

    font-family: ProMono, Arial;
  }
  .change-text {
    text-align: center;
    margin-bottom: 1em !important;
  }
  .change-is-necessary {
    border: 0;
    outline: 0;
    padding: 0.1em;
    border-radius: 0.1em;
    background-color: #00fe1a;
    border: 2px solid #000;
    cursor: pointer;
    text-decoration: underline;
  }
  .about-change {
    opacity: 0;
    color: white;
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-change.appear {
    opacity: 1;
    z-index: 11;
  }
  .header-text {
    color: #c0c8bd;
    font-size: 5em;
    text-align: center;
    line-height: 1.0625;
    font-weight: 600;
    letter-spacing: -0.009em;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .pccase {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 1024px) {
    .caption {
      text-align: center;
      margin: 0 1em;
    }
  }
  @media screen and (max-width: 768px) {
    .about-title {
      font-size: 2.75vw;
      line-height: 2vw;
    }
  }
  .terminal {
    grid-row: 1;
    grid-column: 1;
    display: grid;
    grid-gap: 3vw;
    padding: 3vw;
    grid-template-rows: 1fr auto 1fr;
    grid-template-columns: 1fr auto 1fr;
  }

  .about p {
    position: absolute;
    color: #868b88;
    font-weight: 600;
    background: linear-gradient(0deg, #b3b3e7 0%, #99c0f7 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    top: 0;
    bottom: 0;
    margin: auto;
    height: fit-content;
    translate: 0 12em;
    max-width: 28em;
    text-align: center;
    font-family: Pro, Arial;
  }

  .about p span {
    position: relative;
    display: inline-block;
    -webkit-text-fill-color: #619c54;
    font-weight: 1000;
    font-family: Pro, Arial;
  }

  .about .bg {
    width: 100%;
    height: 100vh;
    max-width: 44vw;
    position: absolute;
    animation: 4.5s flicker infinite;
    animation-delay: 2s;
  }

  @media screen and (max-width: 1024px) {
    .about .bg {
      max-width: 80vw;
    }
  }

  .about .bg > div {
    position: absolute;
    scale: 1.2;
    opacity: 0.6;
  }

  .about .bg > div:nth-child(1) {
    width: 100%;
    height: 200%;
    border-radius: 100em;
    box-shadow:
      inset 0 0 4em 3em rgba(190, 238, 175, 0.2),
      inset 0 0 2em 0.4em rgba(190, 238, 175, 0.2),
      0 0 0.1em 0.1em rgba(190, 238, 175, 0.2),
      0 0 1em 0.4em rgba(190, 238, 175, 0.3);

    translate: 0 -75%;
    animation: onloadbgt 1s ease-in-out forwards;
  }

  .about .bg > div:nth-child(2) {
    width: 100%;
    height: 120%;
    border-radius: 100em;

    translate: 0 70%;
    animation: onloadbgb 1s ease-in-out forwards;
  }
  .glow-filter {
    position: relative;
    display: inline-block;
    scale: 1;

    animation: onloadscale 1s ease-out forwards;
  }

  .glow-filter::before {
    content: attr(data-text);
    position: absolute;
    pointer-events: none;
    color: #f6fff6;
    background: linear-gradient(0deg, #dfeee1 0%, #e5f8d5 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: url(#glow-4);
    -moz-filter: url(#glow-4);
    -webkit-filter: url(#glow-4);

    opacity: 0;
    animation: onloadopacity 1s ease-out forwards;
  }

  @keyframes onloadscale {
    24% {
      scale: 1;
    }

    100% {
      scale: 1.02;
    }
  }

  @keyframes onloadopacity {
    24% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes onloadbgt {
    0% {
      translate: 0 -70%;
      opacity: 0.3;
    }

    100% {
      translate: 0 -64%;
      opacity: 0.8;
    }
  }

  @keyframes onloadbgb {
    0% {
      translate: 0 70%;
      opacity: 0.3;
    }

    100% {
      translate: 0 64%;
      opacity: 0.8;
    }
  }

  .oldscreeneffect {
    background: radial-gradient(ellipse at center, #000 50%, #003d02 100%);
    background-size: 100% 4px;
    background-repeat: repeat-y;
    opacity: 0.9;
    animation: 5s flicker infinite;
  }

  .screen {
    width: 60%;
    height: auto;
    margin: 35px 35px 0px 35px;
    border: 3px solid #222121;
    border-radius: 20px;
    box-shadow: inset 0px 0px 10px 10px #000;
  }

  @media screen and (max-width: 1024px) {
    .oldscreeneffect {
      background: radial-gradient(
        ellipse at center,
        #0000007e 50%,
        #003d0288 100%
      );
    }

    .screen {
      width: 90%;
      margin: 5%;
    }
  }

  .screen .screentext {
    color: #00fe1a;
    margin: 20px 30px;
    text-shadow: 0px 0px 10px #ffffff;
    opacity: 0.6;
    font-size: 1.25rem;
    transition: 0.2s opacity;
  }

  .sc-highlight {
    margin: 0.5rem 0;
    font-weight: bold;
    text-decoration: underline;
    color: #c9ffcf;
  }

  .sctext {
    font-size: 1rem;
    line-height: 1.5;
    margin: 1em 0 0 0;
  }

  .about-real {
    margin: 15em 0;
  }

  .about-real input {
    opacity: 1 !important;
    background-color: transparent;
    position: relative;
    width: 83%;
    left: -20px;
    bottom: 1px;
    border-style: none;
    border-image: none;
    font-size: 15pt;
  }

  .about-real input:focus {
    outline: none;
  }

  .about-content {
    transform: none;
    transition: 0.5s opacity;
    opacity: 1;
  }

  .bored {
    opacity: 0 !important;
    display: none !important;
  }
</style>
