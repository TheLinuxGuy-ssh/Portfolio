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

<section class="volunteering" id="volunteering">
    <h1 class="volunteering-title">Outside the day job.</h1>
    <div class="mosaic">
        {#each data.volunteering as entry}
            {@const type = typeMap[entry.type] || {
                label: entry.type,
                class: ""
            }}
            <article class="tile {type.class}">
                <span class="tile-chip">{type.label}</span>
                <div class="tile-top">
                    <div class="tile-logo">
                        {#if entry.logo}
                            <enhanced:img
                                src={`/images/orgs/${entry.logo}`}
                                alt="{entry.organization} logo"
                                width="56"
                                height="56"
                                loading="lazy"
                            />
                        {:else}
                            <span class="tile-fallback" aria-hidden="true"
                                >{initials(entry.organization)}</span
                            >
                        {/if}
                    </div>
                    <div class="tile-heading">
                        <h2 class="tile-role">{entry.role}</h2>
                        <p class="tile-org">{entry.organization}</p>
                    </div>
                </div>
                <p class="tile-period">{entry.period}</p>
                <p class="tile-desc">{entry.description}</p>
                {#if entry.skills?.length}
                    <div class="tile-tags">
                        {#each entry.skills.slice(0, 4) as skill}
                            <span class="tile-tag">{skill}</span>
                        {/each}
                    </div>
                {/if}
            </article>
        {/each}
    </div>
</section>

<style>
    .volunteering {
        margin: 10vw auto;
        padding: 0 5vw;
        max-width: 72rem;
        color: #fff;
        --type-color: #00fe1a;
    }

    .volunteering-title {
        text-align: center;
        padding: 1rem 0;
        font-size: 3.5em;
        font-family: Pro, Arial;
        margin-bottom: 4.5rem;
    }

    .mosaic {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.25em;
    }

    .tile {
        --type-color: #00fe1a;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.75em;
        padding: 1.35em;
        background: #080808;
        border: 1px solid #2a2a2a;
        font-family: Pro, Arial;
        transition:
            0.2s border-color,
            0.2s transform,
            0.2s background-color;
        overflow: hidden;

    }

    .tile.event {
        --type-color: #b59aff;
    }

    .tile.education {
        --type-color: sandybrown;
    }

    .tile.advocacy {
        --type-color: tomato;
    }

    .tile.open-source {
        --type-color: #7dd3fc;
    }

    .tile.part-time {
        --type-color: #deee75;
    }

    .tile:hover {
        border-color: color-mix(in srgb, var(--type-color) 35%, #4a4a4a);
        background: #0d0d0d;
        transform: translateY(-3px);
    }

    .tile-chip {
        position: absolute;
        top: 1em;
        right: 1em;
        font-size: 0.68rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        padding: 0.28em 0.55em;
        border: 1px solid var(--type-color);
        color: var(--type-color);
        background: rgba(0, 0, 0, 0.85);
        line-height: 1;
    }

    .tile-top {
        display: flex;
        gap: 0.9em;
        align-items: flex-start;
        padding-right: 5.5em;
    }

    .tile-logo {
        flex-shrink: 0;
        width: 3.25em;
        height: 3.25em;
        border-radius: 0.65em;
        overflow: hidden;
        border: 1.5px solid var(--type-color);
        background: #000;
        display: grid;
        place-items: center;
        box-shadow: 0 0 0.65em color-mix(in srgb, var(--type-color) 35%, transparent);
        transition:
            0.2s box-shadow,
            0.2s transform;
    }

    .tile:hover .tile-logo {
        transform: scale(1.04);
        box-shadow: 0 0 1em color-mix(in srgb, var(--type-color) 55%, transparent);
    }

    .tile-logo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .tile-fallback {
        font-size: 0.9rem;
        color: var(--type-color);
        letter-spacing: 0.04em;
    }

    .tile-heading {
        min-width: 0;
    }

    .tile-role {
        font-size: 1.2em;
        line-height: 1.25;
        margin: 0;
    }

    .tile-org {
        margin-top: 0.3em;
        color: #9a9a9a;
        font-size: 0.9rem;
        line-height: 1.35;
    }

    .tile-period {
        font-family: HermitBold, Arial;
        font-size: 0.82rem;
        color: #6f6f6f;
    }

    .tile-desc {
        font-family: HermitBold, Arial;
        font-size: 0.92rem;
        line-height: 1.5;
        color: #c8c8c8;
        display: -webkit-box;
        ;
        -webkit-box-orient: vertical;
        flex: 1;
    }

    .tile-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35em;
        margin-top: 0.15em;
    }

    .tile-tag {
        font-size: 0.7rem;
        padding: 0.2em 0.45em;
        border: 1px solid #333;
        color: #b0b0b0;
        letter-spacing: 0.02em;
    }

    @media screen and (max-width: 1024px) {
        .volunteering-title {
            font-size: 2.25em;
            margin-bottom: 3rem;
        }

        .mosaic {
            grid-template-columns: 1fr;
            gap: 1em;
        }

        .tile-role {
            font-size: 1.1em;
        }

        .tile-top {
            padding-right: 0;
            padding-top: 1.6em;
        }

        .tile-chip {
            top: 0.85em;
            right: 0.85em;
        }
    }
</style>
