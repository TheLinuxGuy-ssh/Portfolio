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
                                src="/src/assets/images/general/github.png"
                                alt=""
                            /> Github
                        </a>
                    {/if}
                    <a href={project.url} class="live-btn" target="_blank">
                        Visit
                    </a>
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
        border-radius: 0.5em;
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
        margin: 20em 5em;
        color: #fff;
    }

    .projects .project {
        display: flex;
        justify-content: end;
        align-items: center;
        border-top: 1px solid #fff;
        font-family: Pro;
        transition: 0.2s all;
        text-decoration: none;
        color: #fff;
        width: 100%;
    }

    .projects .project:hover {
        background-color: #e7e7e7;
        color: #000;
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

    .projects .project .project-category-pane {
        display: flex;
    }

    .projects .project .project-category-pane .project-category {
        padding: 0.25em 0.5em;
        font-weight: bold;
        background-color: #ffffff3f;
        margin-right: 0.5em;
        border-radius: 0.25em;
    }

    .project-links {
        margin: 1em 0;
    }

    .github-btn {
        color: white;
        background-color: #000000;
        padding: 0.25em 0.5em;
        border-radius: 0.75em;
        border: 1px solid #676767;
    }

    .live-btn {
        color: black;
        background-color: #fff;
        padding: 0.25em 0.5em;
        border-radius: 0.75em;
        border: 1px solid #676767;
    }

    .github-btn img {
        width: 1em;
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
        border-radius: 0.75em;
    }

    @media screen and (max-width: 768px) {
        .projects .project {
            flex-direction: column;
            flex-direction: column-reverse;
            margin: 2em 0;
        }

        .projects .project .project-no {
            display: none;
        }
    }
</style>
