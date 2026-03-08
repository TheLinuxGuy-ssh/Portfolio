<script>
    import { projects } from "../assets/projects.json";
</script>

{#each Object.entries(projects) as [key, project], index (key)}
    <div class="project">
        <img
            src={"/src/assets/images/projects/" + project.name + ".gif"}
            class="project-img"
            alt={project.name}
        />
        <h2>{project.name}</h2>
    </div>
{/each}
