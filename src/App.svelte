<script>
  import { onMount } from "svelte";
  import LocomotiveScroll from "locomotive-scroll";
  import {
    Header,
    Hero,
    Loader,
    Nav,
    About,
    Skills,
    Work,
    Footer,
    Miscellaneous,
  } from "./components/";
  onMount(async () => {
    await import("/src/assets/js/script.js");
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        orientation: "vertical",
        lerp: 0.1,
        wheelMultiplier: 1,
      },
    });

    // Access Lenis directly for more control
    console.log(scroll.lenisInstance.direction); // Get direction
    console.log(scroll.lenisInstance.velocity); // Get speed
  });
</script>

<link rel="stylesheet" href="./app.css" />
<link rel="stylesheet" href="/css/normalize.css" />
<link rel="stylesheet" href="/css/links.css" />
<link rel="stylesheet" href="/css/locomotive.css" />
<link rel="stylesheet" href="/css/style.css" />

<Loader />
<Nav />
<Miscellaneous />
<main class="mega-container" data-scroll-container>
  <Header />
  <Hero />
  <About />
  <Work />
  <Footer />
</main>
