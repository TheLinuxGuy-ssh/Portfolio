<footer class="footer" id="contact">
  <div class="work-together">
    <h1 style="text-align: center; backdrop-filter: blur(0px);">Let's Talk.</h1>
  </div>
  <div class="footer-links">
    <a target="_blank" href="mailto:mail@linuxguy.tech">
      <button class="social-btn"><span>mail@linuxguy.tech</span></button>
    </a>
  </div>
</footer>

<style>
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

    .footer-links .social-btn {
      margin: 1em 0;
    }
  }
</style>
