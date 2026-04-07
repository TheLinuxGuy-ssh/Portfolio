<script>
  import { onMount } from "svelte";
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
    Widget,
  } from "./components/";
  import { injectSpeedInsights } from "@vercel/speed-insights";
  import { inject } from "@vercel/analytics";
  
  onMount(async () => {
    // Initialize Vercel Speed Insights
    injectSpeedInsights();
    // Initialize Vercel Web Analytics
    inject();
    await import("/src/assets/js/script.js");
  });
</script>

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
  <Widget />
</main>
