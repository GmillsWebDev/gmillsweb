<script>
    import consult from '$lib/assets/images/vec_consult.svg'
</script>

<h1>Contact Page</h1>


<div class="circle">
    <img src={consult} alt="Illustration of a person consulting with another person" />
</div>

<style>
    .circle{
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: var(--colour-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        position: relative;
        overflow: visible;
        z-index: 2;
        &::before{
            content:'';
            position: relative;
            width: 230px;
            height: 230px;
            border-radius: 50%;
            background: var(--colour-secondary);
            top: -10px;
            right: -10px;
            z-index: 0;
        }
    }

    img{
        transform: scale(1.5);
        position: absolute;
        right: -2rem;
        z-index: 3;
    }
</style>