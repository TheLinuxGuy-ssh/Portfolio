
<script>
  import { onMount } from 'svelte';
  import { Header, Hero, Loader, Nav, About, Skills, Work, Footer, Miscellaneous } from "./components/";
  onMount(async () => {
    await import('/src/assets/js/script.js');
  });
</script>
<link rel="stylesheet" href="/src/assets/css/normalize.css">
<link rel="stylesheet" href="/src/assets/css/links.css">
<link rel="stylesheet" href="/src/assets/css/locomotive.css">
<link rel="stylesheet" href="/src/assets/css/style.css">

<Loader />
<Nav />
<Miscellaneous />
<main class="mega-container" data-scroll-container>
  <Header />
  <Hero />
  <About />
  <Skills />
  <Work />
  <Footer />

</main>
