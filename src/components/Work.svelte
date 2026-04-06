<script>
    import { projects } from "../assets/projects.json";
    import { onMount } from "svelte";
    import linkArrow from "/images/svg/arrow-right-top.svg?enhanced";
    import githubLogo from "/images/general/github.png?enhanced";
    import boot from "/audio/boot.mp3";
    const statusMap = {
        0: { label: "Deprecated", class: "deprecated" },
        1: { label: "Ongoing", class: "ongoing" },
        2: { label: "Completed", class: "completed" },
        3: { label: "Paused", class: "paused" },
        4: { label: "Maintained", class: "maintained" },
    };
    onMount(() => {
        const trailer = document.getElementById("trailer");

        const animateTrailer = (e, interacting) => {
            const x = e.clientX - trailer.offsetWidth / 2,
                y = e.clientY - trailer.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
                background: `#000000`,
            };

            trailer.animate(keyframes, {
                duration: 300,
                fill: "forwards",
            });
        };

        const getTrailerClass = (type) => {
            switch (type) {
                case "video":
                    return "fa-solid fa-play";
                default:
                    return "fa-solid fa-arrow-up-right";
            }
        };

        window.onmousemove = (e) => {
            const interactable = e.target.closest(".interactable"),
                interacting = interactable !== null;

            const icon = document.getElementById("trailer-icon");

            animateTrailer(e, interacting);

            trailer.dataset.type = interacting ? interactable.dataset.type : "";

            if (interacting) {
                icon.className = getTrailerClass(interactable.dataset.type);
                trailer.classList.add("hovered");
            }
        };
    });
</script>

<div class="projects">
    <div id="trailer">
        <img id="trailer-icon" src={linkArrow} alt="" />
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
                    {project.name}
                    <div href="" class="status-btn {status.class}">
                        {status.label}
                    </div>
                </h2>
                <p class="project-desc">{project.desc}</p>
                <div class="project-links">
                    {#if project.github != null}
                        <a
                            class="github-btn"
                            href={"https://github.com/thelinuxguy-ssh/" +
                                project.github}
                            target="_blank"
                        >
                            <img src={githubLogo} alt="" /> Github
                        </a>
                    {/if}
                    {#if project.url != null}
                        <a href={project.url} class="live-btn" target="_blank">
                            Visit
                        </a>
                    {/if}
                </div>
                <div class="tags">
                    {#each Object.entries(project.tags || {}) as [key, tag], index (key)}
                        <div class="tag" style:color={tag.accent}>
                            {tag.name}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .project-name {
        display: flex;
        align-items: center;
    }

    .project-desc {
        padding-top: 0.75em;
        font-family: HermitBold;
    }

    .status-btn {
        height: fit-content;
        font-size: 0.55em;
        background-color: #000;
        padding: 0.2em 0.5em;
        border: 1px solid;
        display: flex;
        align-items: center;
        margin-left: 1em;
        font-weight: 100;
    }

    .status-btn.deprecated {
        color: tomato;
    }

    .status-btn.paused {
        color: sandybrown;
    }

    .status-btn.ongoing {
        color: #deee75;
    }

    .status-btn.completed {
        color: #00fe1a;
    }

    .status-btn.maintained {
        color: #9375ee;
    }

    .projects {
        margin: 20em 5vw;
        color: #fff;
    }

    .projects .project {
        display: flex;
        justify-content: end;
        align-items: center;
        font-family: Pro, Arial;
        transition: 0.2s all;
        text-decoration: none;
        color: #fff;
        width: 100%;
        border-top: 1px solid #575757;
    }
    .projects .project:nth-child(1) {
        border: 0;
    }

    .projects .project:hover {
        background-color: #e7e7e7;
        color: #000;
    }
    .project-title {
        text-align: center;
        padding: 1rem 0;
        font-size: 3em;
        font-family: Pro;
        margin-bottom: 10rem;
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
        font-family: "ProMono", Arial !important;
    }
    .projects .project .tag {
        padding: 0.25em 0.5em;
        font-size: 0.75em;
        border: 1px solid;
        margin: 0.25em;
        background-color: #000000;
    }

    .projects .project .project-category-pane {
        display: flex;
    }

    .projects .project .project-category-pane .project-category {
        padding: 0.25em 0.5em;
        font-weight: bold;
        background-color: #ffffff3f;
        margin-right: 0.5em;
    }

    .project-links {
        margin: 1em 0;
    }

    .github-btn {
        color: white;
        background-color: #000000;
        padding: 0.25em 0.5em;
        border: 1px solid #676767;
    }

    .live-btn {
        color: black;
        background-color: #fff;
        padding: 0.25em 0.5em;
        border: 1px solid #676767;
    }

    .github-btn img {
        width: 1em;
    }

    .projects .project * {
        cursor: default;
    }
    .projects .project:hover .project-vid {
        overflow: hidden;
        transform: scale(1.05);
    }

    .projects .project:hover .project-image img {
        width: 100%;
    }

    .projects .project .project-vid {
        margin: 1.5em 2em;
        margin-right: auto;
        height: 17.5em;
        transition: 0.2s all;
    }
    @media screen and (max-width: 1024px) {
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
    }
</style>
