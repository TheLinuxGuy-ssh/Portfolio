<footer class="footer" id="contact">
  <div class="work-together">
    <h1 style="text-align: center; backdrop-filter: blur(0px);">Let's Talk.</h1>
  </div>
  <div class="footer-links">
    <a target="_blank" href="mailto:mail@linuxguy.tech" data-scroll>
      <button class="Btn-Container">
        <span class="text">mail@linuxguy.tech</span>
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
      margin-left: 0px;
    }
    100% {
      opacity: 1;
      margin-left: 10px;
    }
  }

  .footer {
    height: 80vh;
    width: 95%;
    margin: 2.5%;
  }

  .footer * {
    z-index: 20 !important;
  }

  .footer .work-together {
    color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: white;
    -moz-text-stroke-width: 3px;
    -moz-text-stroke-color: white;
    font-size: 3em;
    margin-top: 20%;
    font-family: ProMono, Arial;
  }

  .footer-links {
    display: flex;
    margin-top: 5em;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    .footer-links {
      flex-direction: column;
      align-items: center;
    }
    .footer .work-together {
      font-size: 2em;
    }
    .icon-Container svg {
      transition-duration: 1.5s;
      animation: arrow 1s linear infinite;
    }
  }
</style>
