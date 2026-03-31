<script>
    import { onMount } from 'svelte';
    let ascii;
    onMount(async () => {
    const stl = await import('/src/assets/js/stl.js')
    stl.init?.(ascii);
  });
</script>
<style>
    
</style>
   
   <section class="about">
      <div class="bg">
        <div></div>
        <div></div>
      </div>
      <div class="header-text" aria-hidden="true" data-scroll>
        <div class="revolutionising" style="font-size: 5.75vw">
          Revolutionising
        </div>
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
      <div class="about-content">
        <div class="pccase" data-aos="fade-right" data-aos-delay="0.5">
          <div class="screen oldscreeneffect">
            <div class="screentext">
              <p class="sctext">Booting</p>
              <hr />
              <p class="sctext">
                ▄▀█ █▄▄ █▀█ █░█ ▀█▀   █▀▄▀█ █▀▀<br />
                █▀█ █▄█ █▄█ █▄█ ░█░   █░▀░█ ██▄<br />
                <br />A passionate Tech Enthusiast who is a well experienced
                Server Administrator, Web Developer, Designer with a great sense
                of humour. A mind which works just like electrical
                current in terms of coding, finding the shortest and least
                resistant path towards a goal, that is keeping a clean and
                optimised code ensuring the best efficiency to get the best out
                of his projects. Self Reliant like the Servers, Creative like the
                Builders. A refined observer caring about every pixel of detail.
                Not a perfectionist, Just
                <span class="sc-highlight">Precision-Driven</span><b>.</b><br
                />Copyright (c) 2026<br />
              </p>
              <p class="sctext">
                anonymous@starwalk-core:~$ <input class="screentext" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <div id="ascii-sec" class="ascii-sec"  bind:this={ascii}>
      </div>