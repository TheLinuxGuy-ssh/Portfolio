<script>
    import data from "$lib/experience.json";

    const typeMap = {
        "full-time": { label: "Full-time", class: "full-time" },
        "part-time": { label: "Part-time", class: "part-time" },
        event: { label: "Event", class: "event" },
        education: { label: "Education", class: "education" },
        advocacy: { label: "Advocacy", class: "advocacy" },
        "open-source": { label: "Open Source", class: "open-source" },
    };

    function initials(org) {
        return org
            .replace(/[^a-zA-Z0-9 ]/g, " ")
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase();
    }
</script>

<section class="experience" id="experience">
    <h1 class="experience-title">Where I’ve put in the hours.</h1>
    <ol class="timeline">
        {#each data.experience as entry, i}
            {@const type = typeMap[entry.type] || {
                label: entry.type,
                class: "",
            }}
            <li class="timeline-item">
                <div class="timeline-rail" aria-hidden="true">
                    <span class="timeline-node">
                        {#if entry.logo}
                            <img
                                src={"/images/orgs/" + entry.logo}
                                alt=""
                                width="56"
                                height="56"
                                loading="lazy"
                            />
                        {:else}
                            <span class="timeline-fallback"
                                >{initials(entry.organization)}</span
                            >
                        {/if}
                    </span>
                    {#if i < data.experience.length - 1}
                        <span class="timeline-line"></span>
                    {/if}
                </div>
                <article class="timeline-card">
                    <div class="timeline-meta">
                        <time class="timeline-period">{entry.period}</time>
                        <span class="type-btn {type.class}">{type.label}</span>
                    </div>
                    <h2 class="timeline-role">{entry.role}</h2>
                    <p class="timeline-org">
                        {entry.organization}
                        <span class="sep">·</span>
                        {entry.location}
                    </p>
                    <p class="timeline-desc">{entry.description}</p>
                    {#if entry.highlights?.length}
                        <ul class="timeline-highlights">
                            {#each entry.highlights as highlight}
                                <li>{highlight}</li>
                            {/each}
                        </ul>
                    {/if}
                    {#if entry.skills?.length}
                        <div class="tags">
                            {#each entry.skills as skill}
                                <span class="tag">{skill}</span>
                            {/each}
                        </div>
                    {/if}
                </article>
            </li>
        {/each}
    </ol>
</section>

<style>
    .experience {
        margin: 10vw auto;
        padding: 0 5vw;
        max-width: 56rem;
        color: #fff;
    }

    .experience-title {
        text-align: center;
        padding: 1rem 0;
        font-size: 3.5em;
        font-family: Pro, Arial;
        margin-bottom: 5rem;
    }

    .timeline {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 4.5em 1fr;
        gap: 1.5em;
        align-items: stretch;
    }

    .timeline-rail {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .timeline-node {
        width: 3.5em;
        height: 3.5em;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #00fe1a;
        background: #0a0a0a;
        display: grid;
        place-items: center;
        flex-shrink: 0;
        z-index: 1;
        box-shadow: 0 0 0.75em rgba(0, 254, 26, 0.25);
        transition:
            0.2s transform,
            0.2s box-shadow;
    }

    .timeline-item:hover .timeline-node {
        transform: scale(1.06);
        box-shadow: 0 0 1.1em rgba(0, 254, 26, 0.45);
    }

    .timeline-node img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .timeline-fallback {
        font-family: Pro, Arial;
        font-size: 0.95rem;
        color: #00fe1a;
        letter-spacing: 0.04em;
    }

    .timeline-line {
        flex: 1;
        width: 2px;
        min-height: 2.5em;
        margin: 0.4em 0 0;
        background: linear-gradient(
            to bottom,
            rgba(0, 254, 26, 0.65),
            rgba(87, 87, 87, 0.45)
        );
    }

    .timeline-card {
        font-family: Pro, Arial;
        padding: 0 0 2.75em;
        border-bottom: 1px solid transparent;
        transition: 0.2s color;
    }

    .timeline-item:last-child .timeline-card {
        padding-bottom: 0;
    }

    .timeline-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.65em;
        margin-bottom: 0.55em;
    }

    .timeline-period {
        font-family: HermitBold, Arial;
        font-size: 0.9rem;
        color: #00fe1a;
        letter-spacing: 0.02em;
    }

    .type-btn {
        font-size: 0.7rem;
        background-color: #000;
        padding: 0.2em 0.5em;
        border: 1px solid;
        display: inline-flex;
        align-items: center;
        font-weight: 400;
        letter-spacing: 0.02em;
        color: #00fe1a;
        border-color: #00fe1a;
    }

    .type-btn.part-time {
        color: #deee75;
        border-color: #deee75;
    }

    .type-btn.event {
        color: #b59aff;
        border-color: #b59aff;
    }

    .type-btn.education {
        color: sandybrown;
        border-color: sandybrown;
    }

    .type-btn.advocacy {
        color: tomato;
        border-color: tomato;
    }

    .type-btn.open-source {
        color: #7dd3fc;
        border-color: #7dd3fc;
    }

    .timeline-role {
        font-size: 1.65em;
        line-height: 1.2;
        margin: 0;
    }

    .timeline-org {
        margin-top: 0.35em;
        color: #a0a0a0;
        font-size: 1rem;
    }

    .sep {
        margin: 0 0.25em;
    }

    .timeline-desc {
        margin-top: 0.85em;
        font-family: HermitBold, Arial;
        line-height: 1.55;
        font-size: 1rem;
        color: #d8d8d8;
    }

    .timeline-highlights {
        margin-top: 0.85em;
        padding-left: 1.15em;
        font-family: HermitBold, Arial;
        font-size: 0.92rem;
        line-height: 1.55;
        color: #b0b0b0;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.9em;
        gap: 0.35em;
    }

    .tag {
        padding: 0.25em 0.5em;
        font-size: 0.75rem;
        border: 1px solid rgba(190, 238, 175, 0.55);
        background-color: transparent;
        color: rgba(190, 238, 175, 0.95);
        letter-spacing: 0.02em;
        font-family: Pro, Arial;
    }

    .timeline-item:hover .timeline-desc {
        color: #ececec;
    }

    .timeline-item:hover .timeline-org {
        color: #c4c4c4;
    }

    @media screen and (max-width: 1024px) {
        .experience-title {
            font-size: 2.25em;
            margin-bottom: 3.5rem;
        }

        .timeline-item {
            grid-template-columns: 3.25em 1fr;
            gap: 1em;
        }

        .timeline-node {
            width: 2.75em;
            height: 2.75em;
        }

        .timeline-role {
            font-size: 1.3em;
        }
    }
</style>
