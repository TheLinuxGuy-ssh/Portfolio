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

  .social-btn {
    padding: 0.1em 0.25em;
    width: fit-content;
    height: 4.2em;
    background-color: #000;
    border: 0;
    border-radius: 0.3em;
    font-size: 12px;
    margin: 0 1em;
  }

  .social-btn span:not(hover) {
    transition: all 1s;
  }

  .social-btn span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0.4em;
    width: fit-content;
    height: 2.5em;
    font-family: Pro, Arial;
    background-color: #000;
    border-radius: 0.2em;
    padding: 0 0.75em;
    font-size: 1.5em;
    color: #53fe03;
    border: 0.08em solid #00fe1a;
    box-shadow: 0 0.4em 0.1em 0.019em #00fe1a;
  }

  .social-btn span:hover {
    transition: all 0.5s;
    transform: translate(0, 0.4em);
    box-shadow: 0 0 0 0 #00fe1a;
  }

  .footer-links .footer-item {
    width: 100%;
    text-align: center;
    border: 0.5px solid #00fe1a;
    padding: 1em;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Pro, Arial;
    color: #fff;
    transition: 0.2s;
  }

  .footer-links .footer-item:nth-child(1) {
    border-left: 0;
  }

  .footer-links .footer-item {
    border-right: 0;
  }

  .footer-links .footer-item:hover {
    background-color: #00fe1a;
  }

  .footer .contact-btn {
    padding: 0.5em 1em;
    border: 1px solid #00fe1a;
    border-radius: 0.5em;
    transition: 0.2s ease-in-out;
    width: fit-content;
    position: relative;
  }

  .footer .contact-btn:hover {
    background: #00fe1a;
  }

  @media screen and (max-width: 1024px) {
    .footer-links {
      flex-direction: column;
      align-items: center;
    }
    .footer .work-together {
      font-size: 2em;
    }

    .footer-links .social-btn {
      margin: 1em 0;
    }
    .icon-Container svg {
      transition-duration: 1.5s;
      animation: arrow 1s linear infinite;
    }
  }
</style>
