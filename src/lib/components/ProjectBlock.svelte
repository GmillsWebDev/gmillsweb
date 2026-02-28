<script>
    export let imgUrl;
    export let imgAlt = "";
    export let projectName;
    export let projectDescription;
    export let projectUrl;

    import externalIcon from "$lib/assets/images/icons/externalIcon.svg";

    let scrollerImgElement;
    let isScrolling = false;
    let scrollAnimationId;

    function animateImageScroll() {
        if (!scrollerImgElement || isScrolling) return;
        
        isScrolling = true;
        
        const maxScroll = scrollerImgElement.scrollHeight - scrollerImgElement.clientHeight;
        if (maxScroll <= 0) {
            isScrolling = false;
            return;
        }
        
        const duration = 5000;
        const startTime = Date.now();
        
        function scroll() {
            if (!isScrolling) return; // Stop if scrolling was disabled
            
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            if (progress < 0.5) {
                scrollerImgElement.scrollTop = maxScroll * (progress * 2);
            } else {
                scrollerImgElement.scrollTop = maxScroll * (2 - progress * 2);
            }
            
            if (progress < 1 && isScrolling) {
                scrollAnimationId = requestAnimationFrame(scroll);
            } else {
                isScrolling = false;
            }
        }
        
        scroll();
    }

    function stopScroll() {
        isScrolling = false;
        if (scrollAnimationId) {
            cancelAnimationFrame(scrollAnimationId);
        }
        scrollBackToTop();
    }

    function scrollBackToTop() {
        if (!scrollerImgElement) return;
        
        const currentScroll = scrollerImgElement.scrollTop;
        if (currentScroll === 0) return; // Already at top
        
        const duration = 800; // 800ms to scroll back to top
        const startTime = Date.now();
        
        function scroll() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            scrollerImgElement.scrollTop = currentScroll * (1 - progress);
            
            if (progress < 1) {
                scrollAnimationId = requestAnimationFrame(scroll);
            }
        }
        
        scroll();
    }

    function toggleScroll() {
        if (isScrolling) {
            stopScroll();
        } else {
            animateImageScroll();
        }
    }
</script>

<div class="container">
    <div class="scrollerImg" bind:this={scrollerImgElement} on:mouseenter={animateImageScroll} on:mouseleave={stopScroll} on:click={toggleScroll}>
        <img src={imgUrl} alt={imgAlt}>
    </div>
    <div class="content">
        <h2>{projectName} </h2>
        <p>{@html projectDescription}</p>
        <a href={projectUrl} target="_blank">view site <img src={externalIcon} alt="External Link to {projectName}" /></a>
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
        height: 300px;
        border: 1px solid var(--colour-primary);
        box-shadow: 0 0 50px rgba(131, 198, 94, 0.5);
        overflow: hidden;
        overflow-y: scroll;
        cursor: pointer;
    }

    .content {
        width: 60%;
        a {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--colour-primary);
        font-weight: bold;
        margin-top: 1rem;
    }
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

    @media screen and (max-width: 480px) {
        .scrollerImg {
            height: 200px;
        }
        .container {
            gap: 1rem;
            margin-bottom: 2rem;
        }
    }
</style>