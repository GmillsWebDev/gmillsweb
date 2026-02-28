<script>

</script>

<div class="container">
    <div class="scrollerImg">
        Image goes here
    </div>
    <div class="content">
        <h2>Project Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed at ligula a enim efficitur bibendum. Curabitur ac odio a nisl convallis tincidunt. Proin ut felis nec nisi efficitur fermentum. Nulla facilisi.</p>
    </div>
</div>

<style>
    .container {
        display: flex;
        gap: 2rem;
        margin-bottom: 4rem;
    }

    .scrollerImg {
        width: 40%;
        height: 200px;
        background-color: var(--colour-secondary);
    }

    .content {
        width: 60%;
    }

    @media screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            align-items: center;
        }

        .scrollerImg, .content {
            width: 100%;
        }
    }
</style>