<script>
    import { projects } from "../assets/projects.json";
    const statusMap = {
        0: { label: "Deprecated", class: "deprecated" },
        1: { label: "Ongoing", class: "ongoing" },
        2: { label: "Completed", class: "completed" },
        3: { label: "Paused", class: "paused" },
        4: { label: "Maintained", class: "maintained" },
    };
</script>

<div class="projects">
    <h1 class="project-title">What I’ve been up to.</h1>
    {#each Object.entries(projects) as [key, project], index (key)}
        {@const status = statusMap[project.status] || {
            label: "Unknown",
            class: "",
        }}
        <div class="project">
            <a href={project.url} target="_blank">
                <img
                    src={"/src/assets/images/projects/" + project.name + ".gif"}
                    class="project-img"
                    alt={project.name}
                />
            </a>
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
                            <img
                                src="/public/images/general/github.png"
                                alt=""
                            /> Github
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
        padding: 0.5em 0;
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
        font-family: Pro;
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
        font-family: HermitBold;
    }

    .projects .project .project-content {
        margin: 0 4em;
        width: 60%;
        text-align: left;
    }
    .projects .project .tags {
        display: flex;
        font-family: "ProMono" !important;
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
    .projects .project:hover .project-img {
        transform: scale(1.05);
        overflow: hidden;
    }

    .projects .project:hover .project-image img {
        width: 100%;
    }

    .projects .project .project-img {
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
        .projects .project:hover .project-img {
            transform: scale(1.02);
        }
        .projects .project .project-img {
            width: 95%;
            padding: 0;
            margin: 2.5%;
            height: fit-content;
        }
        .projects .project .project-content {
            margin: 0 5%;
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
