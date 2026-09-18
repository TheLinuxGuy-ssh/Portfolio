<script>
  import { onMount, onDestroy } from "svelte";
  let time = "";
  let clockInterval;
  onMount(() => {
    const tick = () =>
      (time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }));
    tick();
    clockInterval = setInterval(tick, 1000);
  });
  onDestroy(() => clearInterval(clockInterval));
</script>

<footer class="footer" id="contact">
  <div class="work-together">
    <h1 style="text-align: center; backdrop-filter: blur(0px);">Let's Talk.</h1>
  </div>
  <div class="footer-links">
    <a target="_blank" href="mailto:mr.linux.0@protonmail.com" data-scroll>
      <button class="Btn-Container">
        <span class="text">mr.linux.0@protonmail.com</span>
        <span class="icon-Container">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="nones"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
            <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
            <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
            <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
            <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
            <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
            <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
          </svg>
        </span>
      </button>
    </a>
  </div>
  <nav class="footer-nav" aria-label="Footer quick links">
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#work">Work</a>
    <a href="/matrix">Blog</a>
    <a href="#hero">Back to top ↑</a>
  </nav>
  <p class="footer-meta">
    © 2026 TheLinuxGuy
    <span class="dot">·</span>
    built with
    <span class="footer-highlight">Resilience</span
    >
    <span class="dot">·</span>
    local time {time}
  </p>
</footer>

<style>
  .Btn-Container {
    display: flex;
    width: auto;
    height: fit-content;
    background-color: #000000;
    box-shadow: 0px 0px 10px #00fe1a;
    border: 1px solid #00fe1a;
    outline: 0;
    align-items: center;
    font-family: HermitBold;
    cursor: pointer;
    transition: 0.1s;
  }
  .Btn-Container:hover {
    transform: scale(1.05);
  }
  .icon-Container {
    width: 35px;
    height: 35px;
    background-color: #00fe1a;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #1d2129;
  }
  .text {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    color: white;
    font-size: 1.1em;
    letter-spacing: 1.2px;
  }
  .icon-Container svg {
    transition-duration: 1.5s;
  }
  .Btn-Container:hover .icon-Container svg {
    transition-duration: 1.5s;
    animation: arrow 1s linear infinite;
  }
  @keyframes arrow {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(6px);
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    width: 95%;
    margin: 2.5%;
  }

  .footer * {
    z-index: 20 !important;
  }

  .footer .work-together {
    color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: white;
    -moz-text-stroke-width: 1.5px;
    -moz-text-stroke-color: white;
    font-size: 3em;
    font-family: Pro, Arial;
  }

  .footer-links {
    display: flex;
    margin-top: 5em;
    justify-content: center;
  }

  .footer-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.75em;
    margin-top: 3.5em;
    font-family: HermitBold, Arial;
    font-size: 0.95rem;
    letter-spacing: 0.06em;
  }

  .footer-nav a {
    color: #a0a0a0;
    text-decoration: none;
    transition: 0.15s color;
  }

  .footer-nav a:hover {
    color: #00fe1a;
  }

  .footer-meta {
    margin-top: 1.75em;
    font-family: Pro, Arial;
    font-size: 0.8rem;
    color: #9a9a9a;
    text-align: center;
  }

  .footer-meta .footer-highlight {
    color: #00fe1a;
    text-decoration: none;
  }

  .footer-meta a:hover {
    text-decoration: underline;
  }

  .footer-meta .dot {
    margin: 0 0.5em;
    color: #7a7a7a;
  }

  @media screen and (max-width: 1024px) {
    .footer-links {
      flex-direction: column;
      align-items: center;
    }
    .footer .work-together {
      font-size: 2em;
      -webkit-text-stroke-width: 1px;
      -moz-text-stroke-width: 1px;
    }
    .footer-nav {
      gap: 1.25em 1.5em;
      margin-top: 3em;
    }
    .footer-meta {
      margin-top: 1.5em;
    }
  }
</style>
