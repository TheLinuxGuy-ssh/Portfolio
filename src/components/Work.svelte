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
</style>
