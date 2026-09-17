<script>
    import { projects } from "$lib/projects.json";
    import { onMount, onDestroy } from "svelte";
    import linkArrow from "$lib/assets/arrow-right-top.svg";
    import githubLogo from "$lib/assets/github.webp";
    const statusMap = {
        0: { label: "Deprecated", class: "deprecated" },
        1: { label: "Ongoing", class: "ongoing" },
        2: { label: "Completed", class: "completed" },
        3: { label: "Paused", class: "paused" },
        4: { label: "Maintained", class: "maintained" },
    };

    let onMouseMove;

    onMount(() => {
        const trailer = document.getElementById("trailer");

        const animateTrailer = (e, interacting) => {
            const x = e.clientX - trailer.offsetWidth / 2,
                y = e.clientY - trailer.offsetHeight / 2;

            trailer.animate(
                {
                    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
                    background: interacting ? "#000000" : "#ffffff",
                },
                {
                    duration: 300,
                    fill: "forwards",
                },
            );
        };

        onMouseMove = (e) => {
            const interactable = e.target.closest(".interactable"),
                interacting = interactable !== null;
            const icon = document.getElementById("trailer-icon");

            animateTrailer(e, interacting);
            trailer.dataset.type = interacting ? interactable.dataset.type : "";

            if (interacting) {
                trailer.classList.add("hovered");
            } else {
                trailer.classList.remove("hovered");
            }
        };

        window.addEventListener("mousemove", onMouseMove);
    });

    onDestroy(() => {
        if (onMouseMove) window.removeEventListener("mousemove", onMouseMove);
    });
</script>

<div class="projects" id="work">
    <div id="trailer">
        <enhanced:img id="trailer-icon" src={linkArrow} alt="" />
    </div>
    <h1 class="project-title">What I’ve been up to.</h1>
    {#each Object.entries(projects) as [key, project], index (key)}
        {@const status = statusMap[project.status] || {
            label: "Unknown",
            class: "",
        }}
        <div class="project">
            {#if project.url != null}
                <a
                    href={project.url || null}
                    class:interactable={project.url != null}
                    aria-label="project"
                    target="_blank"
                >
                    <video
                        class="project-vid"
                        preload="metadeta"
                        src={"/images/projects/" + project.name + ".mp4"}
                        muted
                        autoplay
                        loop
                        playsinline
                    >
                    </video>
                </a>
            {:else}
                <div>
                    <video
                        class="project-vid"
                        preload="metadeta"
                        src={"/images/projects/" + project.name + ".mp4"}
                        muted
                        autoplay
                        loop
                        playsinline
                    >
                    </video>
                </div>
            {/if}
            <div class="project-content">
                <h2 class="project-name">
                    {project.name} <span class="project-type">[{project.type}]</span>
                    <div href="" class="status-btn {status.class}">
                        {status.label}
                    </div>
                </h2>
                <p class="project-desc">{project.desc}</p>
                <div class="project-links">
                    {#if project.github != null}
                        <a
                            class="project-btn github-btn"
                            href={project.github.slice(0,5) != "https" ? ("https://github.com/thelinuxguy-ssh/" +
                                project.github) : project.github}
                            target="_blank"
                        >
                            <enhanced:img src={githubLogo} alt="" /> <span>Github</span>
                        </a>
                    {/if}
                    {#if project.url != null}
                        <a href={project.url} class="project-btn live-btn" target="_blank">
                            Visit
                        </a>
                    {/if}
                </div>
                <div class="tags">
                    {#each Object.entries(project.tags || {}) as [key, tag], index (key)}
                        <div
                            class="tag"
                            style="--tag-accent: {tag.accent}; color: {tag.accent}"
                        >
                            {tag.name}
                        </div>
                    {/each}
                </div>
                <!-- <div class="skills">
                    {#each Object.entries(project.skills || {}) as [key, skill], index (key)}
                        <div class="skill" style:background-color={"#000000"} style:color={"rgba(190, 238, 175, 1)"}>
                            {skill.name}
                        </div>
                    {/each}
                </div> -->
            </div>
        </div>
    {/each}
</div>

<style>
    .project-name {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5em;
    }

    .project-desc {
        padding-top: 0.75em;
        font-family: HermitBold;
        line-height: 1.55;
        font-size: 1rem;
    }

    .status-btn {
        height: fit-content;
        font-size: 0.7rem;
        background-color: #000;
        padding: 0.25em 0.55em;
        border: 1px solid;
        display: inline-flex;
        align-items: center;
        margin-left: 0;
        font-weight: 400;
        letter-spacing: 0.02em;
    }

    .status-btn.deprecated {
        color: tomato;
        border-color: tomato;
    }

    .status-btn.paused {
        color: sandybrown;
        border-color: sandybrown;
    }

    .status-btn.ongoing {
        color: #deee75;
        border-color: #deee75;
    }

    .status-btn.completed {
        color: #00fe1a;
        border-color: #00fe1a;
    }

    .status-btn.maintained {
        color: #9375ee;
        border-color: #9375ee;
    }

    .projects {
        margin: 20vw 5vw;
        color: #fff;
    }

    .projects .project {
        display: flex;
        justify-content: end;
        align-items: center;
        font-family: Pro, Arial;
        transition: 0.2s background-color, 0.2s color, 0.2s border-color;
        text-decoration: none;
        color: #fff;
        width: 100%;
        border-top: 1px solid #575757;
    }

    .projects .project-title + .project {
        border-top: 0;
    }

    .projects .project:hover {
        background-color: #e7e7e7;
        color: #000;
        border-color: #bbb;
    }

    .projects .project:hover .status-btn {
        background-color: #111;
    }

    .project-title {
        text-align: center;
        padding: 1rem 0;
        font-size: 3.5em;
        font-family: Pro;
        margin-bottom: 10rem;
    }

    .project-type {
        font-size: 1rem;
        margin: 0 0.5rem;
        color: #999999;
    }

    .projects .project:hover .project-type {
        color: #444;
    }

    .projects .project .project-no {
        font-size: 2em;
        text-align: center;
        font-weight: bold;
        margin-left: 1em;
    }

    .projects .project .project-content .project-subheading {
        margin-bottom: 0.2em;
    }

    .projects .project .project-content .project-heading {
        margin-top: 0.2em;
        text-transform: uppercase;
        font-family: HermitBold, Arial;
    }

    .projects .project .project-content {
        margin: 0 4em;
        width: 60%;
        text-align: left;
    }

    .projects .project .tags {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        font-family: "Pro", Arial !important;
        margin-bottom: auto;
        gap: 0.15em;
    }

    .projects .project .tag {
        padding: 0.3em 0.55em;
        font-size: 0.8125rem;
        border: 1px solid var(--tag-accent, currentColor);
        margin: 0.2em;
        background-color: #000000;
        letter-spacing: 0.02em;
    }

    .projects .project:hover .tag {
        background-color: #fff;
        color: #111 !important;
        border-color: var(--tag-accent, #111);
    }

    .projects .project .skills {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        font-family: "Pro", Arial !important;
    }

    .projects .project .skill {
        padding: 0.25em 0.5em;
        font-size: 0.8125rem;
        border: 1px solid;
        margin: 0.25em;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    .projects .project .project-category-pane {
        display: flex;
    }

    .project-links {
        margin: 1em 0;
        display: flex;
        gap: 0.5em;
    }

    .project-btn {
        display: flex;
        width: fit-content;
        justify-content: center;
        align-items: center;
        transition: 0.055s all ease-in-out;
        cursor: pointer;
    }

    .project-btn:hover {
        transform: scale(1.05) !important;
    }

    .project-btn:active {
        transform: scale(0.9) !important;
    }

    .github-btn {
        color: white;
        background-color: #000000;
        padding: 0.25em 0.5em;
        border: 1px solid #676767;
    }

    .projects .project:hover .github-btn {
        border-color: #111;
    }

    .live-btn {
        color: black;
        background-color: #fff;
        padding: 0.25em 0.5em;
        border: 1px solid #676767;
    }

    .projects .project:hover .live-btn {
        background-color: #111;
        color: #fff;
        border-color: #111;
    }

    .github-btn img {
        width: 1em;
    }

    .github-btn span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.2em;
        line-height: 0.8;
    }

    .projects .project {
        cursor: default;
    }

    .projects .project a {
        cursor: pointer;
    }

    .projects .project:hover .project-vid {
        overflow: hidden;
        transform: scale(1.05);
    }

    .projects .project .project-vid {
        margin: 1.5em 2em;
        margin-right: auto;
        height: 22.5em;
        transition: 0.2s all;
        box-shadow: 0 0 1px 0 rgba(190, 238, 175, 0.502);
    }

    @media screen and (max-width: 1024px) {
        .project-title {
            font-size: 2.25em;
            margin-bottom: 4rem;
        }

        .projects .project {
            flex-direction: column;
            margin: 2em 0;
        }

        .projects .project:hover .project-vid {
            transform: scale(1.02);
        }

        .projects .project .project-vid {
            width: 95%;
            padding: 0;
            margin: 0.5em 2.5%;
            height: auto;
        }

        .projects .project .project-content {
            margin: 1em 5%;
            width: 95%;
        }

        .projects .project .project-no {
            display: none;
        }

        .projects .project .tags {
            margin: 2.5% 0;
        }

        .projects .project .skills {
            margin: 2.5% 0;
        }
    }
</style>
