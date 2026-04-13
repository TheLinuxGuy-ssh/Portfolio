<script>
    import { onMount } from "svelte";
    import {
        Header,
        Hero,
        Nav,
        About,
        Desktop,
        Skills,
        Work,
        Footer,
        Miscellaneous,
        Widget,
        Wakatime,
    } from "../components";
    onMount(async () => {
        await import("$lib/js/script.js");
    });
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/images/general/logo.webp" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="title" content="TheLinuxGuy | Tech Enthusiast" />
    <meta
        name="description"
        content="I live and breathe Linux, manage powerful servers, and build fast, functional websites with eye-catching design. With lightning-fast fingers, I turn ideas into custom web development and server solutions before you can blink—and nothing is ever “good enough.” Welcome to my digital playground for Linux enthusiasts, web developers, and anyone who loves high-performance, beautifully designed websites."
    />
    <meta
        name="keywords"
        content="Linux developer, server management, web developer, website design, web development portfolio, full-stack development, system administration, Linux enthusiast, server solutions, custom websites, high-performance websites, fast web development, functional website design, Linux system expert, web development with design focus, personal tech portfolio, website optimization expert, Linux and server administration, web design and development projects"
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="14 days" />
    <meta name="author" content="TheLinuxGuy" />
    <title>TheLinuxGuy | Tech Enthusiast</title>
</svelte:head>
<link rel="stylesheet" href="/css/normalize.css" />
<link rel="stylesheet" href="/css/links.css" />
<link rel="stylesheet" href="/css/locomotive.css" />
<link rel="stylesheet" href="/css/style.css" />
<Nav />
<Miscellaneous />
<main class="mega-container" data-scroll-container>
    <Header />
    <Hero />
    <Wakatime />
    <About />
    <Desktop />
    <Work />
    <Footer />
    <Widget />
</main>
