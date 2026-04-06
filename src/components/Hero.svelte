<script>
</script>

<section class="hero" id="hero">
  <div class="hero-content">
    <div class="center">
      <div
        class="hero-title"
        data-scroll
        data-scroll-speed="-0.1"
        data-scroll-direction="vertical"
        data-aos="zoom-in-up"
      >
        TheLinuxGuy
      </div>
      <div class="hero-desc"></div>
    </div>
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    white-space: nowrap;
    text-align: center;
    z-index: 20;
    background:
      conic-gradient(
          from 90deg at 1px 1px,
          #0000 25%,
          rgba(220, 220, 220, 0.05) 0%
        ) -0.5px -0.5px/1em 1em,
      linear-gradient(
          45deg,
          #0000 calc(50% + -1 * 0.5px),
          rgba(220, 220, 220, 0.05) 0 calc(50% + 0.5px),
          #0000 0
        )
        0 0/2em 2em,
      linear-gradient(
          -45deg,
          #0000 calc(50% + -1 * 0.5px),
          rgba(220, 220, 220, 0.05) 0 calc(50% + 0.5px),
          #0000 0
        )
        0 0/2em 2em;
  }

  .hero:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 0;
    margin-right: -0.25em;
    height: 100%;
  }

  .hero-content {
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
  }

  .hero-title {
    color: white;
    font-size: 6vw;
    font-family: Pro, Arial;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.75);
    user-select: none;
    text-align: center;
  }
  .hero-desc {
    margin-top: 2em;
    font-weight: 100;
    font-size: 28px;
    color: #fafafa;
    font-family: Pro, Arial;
    text-align: center;
  }
  @media screen and (max-width: 1024px) {
    .hero-title {
      font-size: 10vw;
    }
  }
</style>
