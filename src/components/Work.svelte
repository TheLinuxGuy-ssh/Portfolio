<script>
    import { projects } from "../assets/projects.json";
</script>

<div class="projects">
    {#each Object.entries(projects) as [key, project], index (key)}
        <div class="project">
        <a href={project.url} target="_blank">
            <img
                src={"/src/assets/images/projects/" + project.name + ".gif"}
                class="project-img"
                alt={project.name}
            />
        </a>
            <div class="project-content">
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
                <div class="project-links">
                {#if (project.github != null)}
                    <a class="github-btn" href={"https://github.com/thelinuxguy-ssh/" + project.github} target="_blank">
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
