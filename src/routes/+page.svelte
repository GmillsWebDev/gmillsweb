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
  import {scrollerImg} from "$lib/scripts/imgBank.js";
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
    <ImgScroller hide="hideOnMobile" images={[
      scrollerImg.RegentMockup,
      scrollerImg.FillingInMockup,
      scrollerImg.TreeMendersMockup,
      scrollerImg.BCHairMockup,
      scrollerImg.RichardsonsMockup,
    ]} direction="down" />
    <!-- if viewport <768px, hide -->

    <ImgScroller hide="hideOnTablet" images={[
      scrollerImg.BCHairMockup,
      scrollerImg.RegentMockup,
      scrollerImg.RichardsonsMockup,
      scrollerImg.FillingInMockup,
      scrollerImg.TreeMendersMockup,
      
    ]} direction="up" />

  </div>
</div>
<LightWaves>
  <div id="Services" class="container">
    <h2>Services</h2>
    <div class="grid">
      {#each services as service (service.title)}
        <!-- {service.icon} -->
        <IconCard icon={service.icon} title={service.title} description={service.description} />
      {/each}
    </div>
  </div>
</LightWaves>
<div id="Prices" class="container">
  <h2>Prices</h2>
  <div class="grid">
      <div class="card">
        <h3>Basics</h3>
        <p>Your business isn't a carbon copy of someone else's, so your website shouldn't be either. We price our work based on the unique requirements of each client to make sure you're getting exactly what you pay for. Whether you need a simple digital business card or a deep, multi-page site with a custom CMS, we’ll handle the heavy lifting.</p>
        <p>If you'd like to spread the cost, we offer monthly payment options to keep things manageable. Let’s have a chat about what it is that you need and we’ll get a proposal over to you.</p>
      </div>
      <div class="card">
        <h3>Hosting</h3>
        <p>Our hosting packages start from £200 per year and are designed to give you total peace of mind. We take care of all the "behind-the-scenes" bits, including SSL certificates for security, regular backups, and routine maintenance to keep everything running like clockwork. Essentially, we handle the tech so you can focus on the important stuff, running your business.</p>
        
      </div>
      <div class="card">
        <h3>Extras</h3>
        <p>We can also arrange extra domain names and setting up professional email accounts, provide deep dives into user analytics and accessibility overviews, we’ve got you covered. We'll make sure your site isn't just easy to find, but easy for everyone to use, too.</p>
        
      </div>
  </div>
  <div class="cta">
    <Button content="Get in touch" linkUrl="#Footer" />
  </div>
</div>
<LightWaves>
  <div id="Process" class="container">
    <h2>The Process</h2>
    <div class="grid">
      {#each process as process (process.title)}
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
    .card {
        background: var(--colour-white);
        border: 1px solid var(--colour-lightgrey);
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
        box-shadow: 5px 4px 6px rgba(131, 198, 94, 0.6);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        p{
          color: var(--colour-black);
        }
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(131, 198, 94, 0.2);
    }

    h3 {
        color: var(--colour-secondary);
        margin-bottom: 2rem;
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
