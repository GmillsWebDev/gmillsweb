<script>
  import { onMount } from "svelte";

  let currentIndex = 0;
  let isHovered = false;
  let autoScrollInterval;

  export let testimonials = [
    {
      name: "John Smith",
      jobTitle: "Marketing Manager",
      review: "Excellent service and professional team. They delivered exactly what we needed on time."
    },
    {
      name: "Sarah Johnson",
      jobTitle: "Business Owner",
      review: "Highly recommended! The team went above and beyond to ensure our website was perfect."
    },
    {
      name: "Mike Chen",
      jobTitle: "CEO",
      review: "Outstanding work. They transformed our online presence and increased our conversions."
    }
  ];

  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (!isHovered) {
        currentIndex = (currentIndex + 1) % testimonials.length;
      }
    }, 8000); // Scroll every 8 seconds
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  }

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
  }

  onMount(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  });
</script>


    <div class="container" id="Testimonials">
        <div class="carousel" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
  <button class="carouselButton carouselButtonPrev" on:click={prevTestimonial} aria-label="Previous testimonial">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <div class="carouselContent">
    <div class="testimonial">
      <div class="testimonialQuote">
        "{testimonials[currentIndex].review}"
      </div>
      <div class="testimonialAuthor">
        <div class="testimonialName">{testimonials[currentIndex].name}</div>
        <div class="testimonialTitle">{testimonials[currentIndex].jobTitle}</div>
      </div>
    </div>
  </div>

  <button class="carouselButton carouselButtonNext" on:click={nextTestimonial} aria-label="Next testimonial">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

<div class="carouselIndicators">
  {#each testimonials as _, index}
    <button
      class="indicator {index === currentIndex ? 'active' : ''}"
      on:click={() => (currentIndex = index)}
      aria-label="Go to testimonial {index + 1}"
    />
  {/each}
</div>
    </div>

<style>
  .carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;
    background: var(--colour-background);
    border-radius: 8px;
    position: relative;
  }

  .carouselButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background-color: var(--colour-primary);
    border: none;
    border-radius: 50%;
    color: var(--colour-background);
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    flex-shrink: 0;
  }

  .carouselButton:hover {
    background-color: var(--colour-secondary);
    color: var(--colour-white);
    transform: scale(1.1);
  }

  .carouselButton:active {
    transform: scale(0.95);
  }

  .carouselContent {
    flex: 1;
    display: flex;
    justify-content: center;
    min-height: 150px;
    display: flex;
    align-items: center;
  }

  .testimonial {
    text-align: center;
  }

  .testimonialQuote {
    font-size: 1.2rem;
    color: var(--colour-white);
    font-style: italic;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .testimonialAuthor {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .testimonialName {
    font-weight: bold;
    color: var(--colour-primary);
    font-size: 1rem;
  }

  .testimonialTitle {
    color: var(--colour-white);
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .carouselIndicators {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid var(--colour-primary);
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .indicator.active {
    background-color: var(--colour-primary);
  }

  @media (max-width: 768px) {
    .carousel {
      gap: 1rem;
      padding: 1.5rem;
    }

    .carouselButton {
      width: 2.5rem;
      height: 2.5rem;
    }

    .carousel__content {
      min-height: 120px;
    }

    .testimonial__quote {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
</style>