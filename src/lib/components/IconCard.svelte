<script>
    // export let icon;
    export let title;
    export let description;
</script>

<div class="card">
    <!-- <img src={icon} alt="" /> -->
    <h3>{title}</h3>
    <p>{description}</p>
</div>

<style>
    .card {
        background: var(--colour-white);
        border: 1px solid var(--colour-lightgrey);
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(23, 59, 34, 0.2);
    }

    /* img {
        width: 64px;
        height: 64px;
        margin-bottom: 1rem;
    } */

    h3 {
        margin: 0.5rem 0;
        font-size: 1.25rem;
        color: var(--colour-primary);
    }

    p {
        color: var(--colour-darkgrey);
        font-size: 1rem;
        line-height: 1.5;
    }
</style>