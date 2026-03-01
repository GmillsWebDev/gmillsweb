<script>
  import Button from "$lib/components/Button.svelte";
  import LightWaves from "$lib/components/LightWaves.svelte";
  import IconCard from "$lib/components/IconCard.svelte";
  import ImgScroller from "$lib/components/ImgScroller.svelte";
  import PriceCard from "$lib/components/PriceCard.svelte";
  import CtaBanner from "$lib/components/CtaBanner.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import { services } from "$lib/scripts/services.js";
  import { process } from "$lib/scripts/process.js";
  import img from "$lib/assets/images/mobile.webp";
</script>
<svelte:head>
  <title>GMillsWeb | Chichester Web Design & Development</title>
  <meta name="description" content="GMillsWeb is a web development studio based in Chichester, specialising in clean, responsive websites built with modern frameworks. We help businesses, creatives, and independent professionals create digital experiences that are fast, accessible, and easy to manage." />
  <meta name="keywords" content="web design, web development, responsive websites, SEO, accessibility, Chichester, front-end development, digital services" />
  <meta name="author" content="GMillsWeb" />
</svelte:head>

<div id="Hero" class="container">
  <div>
    <h1>Bespoke Websites, Tailored for You</h1>
    <p>
      Welcome to GMillsWeb, your Chichester-based partner for friendly, expert
      web design and development. We create fast, responsive websites that delight users with effortless navigation, meet
      the highest accessibility standards and run like a dream. Whether you’re launching a new brand
      or refining an existing site, we’re here to guide you with clear
      communication, proactive support and scalable solutions that grow with
      your business.
    </p>
    <Button content="Get in Touch" linkUrl="/#Footer" variant="secondary" />
  </div>
  <div class="scroller">
    <ImgScroller hide={"hideOnMobile"} images={[img, img, img, img]} direction="down" />
    <!-- if viewport <768px, hide -->

    <ImgScroller hide={"hideOnTablet"} images={[img, img, img, img]} direction="up" />

  </div>
</div>
<LightWaves>
  <div id="Services" class="container">
    <h2>Services</h2>
    <div class="grid">
      {#each services as service}
        <!-- {service.icon} -->
        <IconCard icon={service.icon} title={service.title} description={service.description} />
      {/each}
    </div>
  </div>
</LightWaves>
<div id="Prices" class="container">
  <h2>Prices</h2>
  <div class="grid">
    <PriceCard title="Personal" price="50" features={["1-2 Pages"]} />
    <PriceCard
      title="Small business"
      price="100"
      features={["3-5 Pages", "Monthly analytics", "Contact form"]}
    />
    <PriceCard
      title="Enterprise"
      price="300"
      features={[
        "6+ Pages",
        "Monthly analytics",
        "Contact form",
        "User analysis",
      ]}
    />
    <PriceCard
      custom={true}
      title="Take away"
      features={[
        "Bespoke, mobile optimised solution for self hosting. All files will be packaged up and provided ready to be dropped into your own hosting solution.",
      ]}
    />
  </div>
  <div class="cta">
    <Button content="Get in touch" linkUrl="#Footer" />
  </div>
</div>
<LightWaves>
  <div id="Process" class="container">
    <h2>The Process</h2>
    <div class="grid">
      {#each process as process}
        <IconCard
          icon={process.icon}
          title={process.title}
          description={process.description}
        />
      {/each}
    </div>
  </div>
</LightWaves>
<CtaBanner />
<Carousel/>

<style>

  .cta {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  #Hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    min-height: 60vh;
    z-index: 2;
    @media screen and (max-width: 768px) {
      grid-template-columns: 2fr 1fr;
    }
    @media screen and (max-width: 450px) {
      grid-template-columns: 1fr;
    }

    .scroller {
      display: flex;
      flex-direction: row;
      /* gap: 1rem; */
      height: 80vh;
      width: 100%;
      @media screen and (max-width: 450px) {
      display: none;
    }
    }
  }
  #Services {
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
  }

  #Prices {
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
  }

  #Process {
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;

      @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 450px) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
