<script>
  import { onMount } from "svelte";
  import LocomotiveScroll from "locomotive-scroll";
  import "./app.css";
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
  });
</script>

<link rel="stylesheet" href="/css/app.css" />
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
