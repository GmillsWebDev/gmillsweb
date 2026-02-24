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
  <button class="carousel__button carousel__button--prev" on:click={prevTestimonial} aria-label="Previous testimonial">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <div class="carousel__content">
    <div class="testimonial">
      <div class="testimonial__quote">
        "{testimonials[currentIndex].review}"
      </div>
      <div class="testimonial__author">
        <div class="testimonial__name">{testimonials[currentIndex].name}</div>
        <div class="testimonial__title">{testimonials[currentIndex].jobTitle}</div>
      </div>
    </div>
  </div>

  <button class="carousel__button carousel__button--next" on:click={nextTestimonial} aria-label="Next testimonial">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

<div class="carousel__indicators">
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

  .carousel__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background-color: var(--colour-primary);
    border: none;
    border-radius: 50%;
    color: var(--colour-white);
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    flex-shrink: 0;
  }

  .carousel__button:hover {
    background-color: var(--colour-secondary);
    transform: scale(1.1);
  }

  .carousel__button:active {
    transform: scale(0.95);
  }

  .carousel__content {
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

  .testimonial__quote {
    font-size: 1.2rem;
    color: var(--colour-white);
    font-style: italic;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .testimonial__author {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .testimonial__name {
    font-weight: bold;
    color: var(--colour-primary);
    font-size: 1rem;
  }

  .testimonial__title {
    color: var(--colour-white);
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .carousel__indicators {
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

    .carousel__button {
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