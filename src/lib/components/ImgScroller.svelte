<script>
import { onMount, onDestroy } from 'svelte';
  const isBrowser = typeof window !== 'undefined';

  export let images = [];
  export let direction = 'down'; // 'down' or 'up'
  export let hide ="";

  let scrollPos = 0;
  let interval;
  const imageCount = 4;
  const paneCount = 3;
  const scrollSpeed = 1; // px per frame
  let containerHeight = 0;
  let imageHeight = 0;
  let scroller;

  // Create a longer sequence of repeating images for smoother looping
  $: displayImages = images.slice(0, imageCount).map(img => img?.toString?.() ?? img);
  $: scrollerImages = [
    ...displayImages,
    ...displayImages,
    ...displayImages,
    ...displayImages
  ];
  let totalHeight = 0;
  let resetPoint = 0;

  function startScroll() {
    if (interval) clearInterval(interval);
    scrollPos = 0;
    interval = setInterval(() => {
      if (!scroller) return;
      scrollPos += direction === 'down' ? scrollSpeed : -scrollSpeed;
      
      // Reset position seamlessly when we've scrolled one full set
      if (direction === 'down') {
        if (scrollPos >= resetPoint) {
          scrollPos = 0;
        }
      } else {
        if (scrollPos <= 0) {
          scrollPos = resetPoint;
        }
      }
      
      scroller.style.transform = `translateY(${-scrollPos}px)`;
    }, 16);
  }

  function stopScroll() {
    if (interval) clearInterval(interval);
  }

  function onResize() {
    if (scroller) {
      containerHeight = scroller.offsetHeight;
      const img = scroller.querySelector('img');
      if (img) {
        imageHeight = img.offsetHeight;
        // Set reset point to one full set of images
        resetPoint = imageHeight * imageCount;
        totalHeight = imageHeight * imageCount * 2;
      }
    }
  }

  onMount(() => {
    if (isBrowser) {
      startScroll();
      window.addEventListener('resize', onResize);
      onResize();
    }
  });
  onDestroy(() => {
    if (isBrowser) {
      stopScroll();
      window.removeEventListener('resize', onResize);
    }
  });
</script>

<div class="img-scroller-container {hide}">
  <div class="img-scroller" bind:this={scroller}>
    {#each scrollerImages as img, i}
      <div class="img-pane">
        <img src={img} alt="Mobile mockup {i+1}" on:load={onResize} />
      </div>
    {/each}
  </div>
</div>

<style>
.img-scroller-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 8;
  &::before, &::after{
    content:"";
    position: absolute; 
    width: 100%;
    height: 30%;
    z-index: 10;
  }
  &::before{
    top: 0;
    background: linear-gradient(to bottom, var(--colour-background), rgba(255,255,255,0));
  }
  &::after{
    bottom: 0;
    background: linear-gradient(to top, var(--colour-background), rgba(255,255,255,0));
  }
}
.img-scroller {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  display: flex;
  flex-direction: column;
  transition: transform 0.1s linear;
  @media screen and (max-width: 768px) {
    left: 25%;
  }
}
.img-pane {
  width: auto;
  margin: 1rem auto;
  position: relative;
  z-index: 1;
}
.img-pane img {
  display: block;
  width: auto;
  object-fit: contain;
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
}
</style>