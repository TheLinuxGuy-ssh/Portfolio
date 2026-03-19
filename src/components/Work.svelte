<script>
    import { projects } from "../assets/projects.json";
</script>

<div class="projects">
{#each Object.entries(projects) as [key, project], index (key)}
    <div class="project">
        <img
            src={"/src/assets/images/projects/" + project.name + ".gif"}
            class="project-img"
            alt={project.name}
        />
        <div class="project-content">
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
        </div>
    </div>
{/each}
</div>
