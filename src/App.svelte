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
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  injectAnalytics({ mode: dev ? "development" : "production" });
  injectSpeedInsights();
  onMount(async () => {
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
