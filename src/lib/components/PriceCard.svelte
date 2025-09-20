<script>
    export let price = "";
    export let title;
    export let features = [];
    export let custom = false;
</script>

<div class="card">
    <h3>{title}</h3>
    {#if custom}
        <p class="price">Custom</p>
        <ul>
        {#each features as feature}
            <li>{feature}</li>
        {/each}
    </ul>
    {:else}
        <p class="price"><span>from </span> £{price}<span>/month</span></p>
        <ul>
        <li>Hosting</li>
        <li>SSL Certificate</li>
        <li>Domain<sup>*</sup></li>
        <li>Support</li>
        {#each features as feature}
            <li>{feature}</li>
        {/each}
    </ul>
    {/if}
</div>

<style>
    .card {
        background: var(--colour-white);
        border: 1px solid var(--colour-lightgrey);
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
        box-shadow: 5px 4px 6px rgba(131, 198, 94, 0.6);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(131, 198, 94, 0.2);
    }

    h3 {
        color: var(--colour-secondary);
        margin-bottom: 2rem;
    }

    .price {
        font-size: 2rem;
        color: var(--colour-accent);
        margin: 1rem 0;
        span{
            font-size: 0.75rem;
            color: var(--colour-darkgrey);
            font-weight: normal;
        }
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 1rem 0 0 0;
    }

    li {
        margin: 0.5rem 0;
        color: var(--colour-black);
        font-size: 1rem;
    }
</style>