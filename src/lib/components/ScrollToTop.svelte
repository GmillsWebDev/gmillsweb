
<!-- Scroll to Top Button for use in layout -->
<script>
    import { onMount, onDestroy } from 'svelte';
    import upArrow from '$lib/assets/images/icons/arrowIcon.svg';
    
    let showButton = false;
    let isBrowser = typeof window !== 'undefined';

    function handleScroll() {
    showButton = window.scrollY > (window.innerHeight * 1);
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    onMount(() => {
        if (isBrowser) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial scroll position
        }
    });

    onDestroy(() => {
        if (isBrowser) {
            window.removeEventListener('scroll', handleScroll);
        }
    });
</script>

{#if showButton}
    <div 
        tabindex="0"
        on:click={scrollToTop}
        on:keydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
        }
    }}
        role="button"
        aria-label="Scroll to top of page"
    >
        <img src={upArrow} alt="Scroll to top" width="25" height="25" />
    </div>
{/if}

<style>
    div {
        position: fixed;
        bottom: 4.5rem;
        left: 1rem;
        background: var(--colour-secondary);
        color: white;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: background 0.3s, transform 0.3s;
        z-index: 100;
    }
    div:hover {
        background: var(--colour-accent);
        transform: scale(1.1);
    }

</style>