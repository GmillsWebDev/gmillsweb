<script>
  import Hero from "$lib/components/Hero.svelte";
  import LightWaves from "$lib/components/LightWaves.svelte";

  import threeScreens from "$lib/assets/images/img_threeScreens.jpg?enhanced";
  import aboutServices from "$lib/assets/images/img_aboutServices.jpg?enhanced";
  import {processImg} from "$lib/scripts/imgBank.js";
  
</script>
<svelte:head>
    <title>GMillsWeb | About</title>
    <meta name="description" content="Learn more about GMillsWeb, a Chichester-based web development studio specialising in clean, responsive websites built with modern frameworks. Discover our services, process, and commitment to creating fast, accessible digital experiences." />
</svelte:head>

<Hero
  header="Modern websites, Made to perform"
  subheader="Scalable, SEO-ready sites optimised for speed—from initial design right through to deployment."
  button={true}
  content="Let's Chat"
  linkUrl="#Footer"
  variant="primary"
/>
<div id="About" class="container">
  <div>
    <h2>About Us</h2>
    <p>
      GMillsWeb is a web development studio based in Chichester, specialising in
      clean, responsive websites built with modern frameworks. We help
      businesses, creatives, and independent professionals create digital
      experiences that are fast, accessible, and easy to manage.
    </p>
    <p>
      Our work blends technical precision with a relaxed, coastal-inspired
      aesthetic—think intuitive layouts, modular design systems, and a touch of
      sea breeze. Every site is crafted to perform beautifully across devices,
      with SEO, accessibility, and speed baked in from the start.
    </p>
  </div>
  <div>
    <enhanced:img
      src={threeScreens}
      alt="Three screens showing background code"
    />
  </div>
</div>

<LightWaves>
  <div id="What" class="container">
    <div class="imgContainer">
      <enhanced:img
        src={aboutServices}
        alt="Three screens showing background code"
      />
    </div>

    <div>
      <h2>Our Services</h2>
      <p>
        We offer a full range of front-end and digital services to help your
        brand thrive online:
      </p>
      <ul>
        <li>
          <strong>Web design & development</strong> – From wireframes to deployment,
          we build scalable websites.
        </li>
        <li>
          <strong>SEO & performance optimisation</strong> – We fine-tune your site
          for search engines and fast load times, improving visibility and user experience.
        </li>
        <li>
          <strong>Accessibility audits</strong> – We test and refine your site to
          meet WCAG standards, ensuring it’s inclusive and user-friendly for all.
        </li>
        <li>
          <strong>Content strategy & copywriting</strong> – Clear, compelling messaging
          that supports your brand and drives engagement.
        </li>
        <li>
          <strong>Analytics & user insight</strong> – We set up tracking tools and
          interpret the data to help you make informed decisions.
        </li>
        <li>
          <strong>Ongoing support & maintenance</strong> – Regular updates, security
          patches, and performance monitoring to keep your site running smoothly.
        </li>
      </ul>
    </div>
  </div>
</LightWaves>
<div id="Process">
  <div class="container">
    <h2>The Process</h2>
  </div>
  <div class="container">
    <div>
      <h3>Discovery</h3>
      <p>
        It all begins with a discovery session where we get to know your goals,
        brand story and audience. By asking the right questions and reviewing
        any existing assets, we shape a clear project brief, timetable and set
        of success metrics that guide the entire build.
      </p>
    </div>
    <div>
      <div class="circleContainer">
        <div class="circle">
          <img
            class="processImg"
            src={processImg.consult}
            alt="Illustration of a person consulting with another person"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div>
      <div class="circleContainer">
        <div class="circle">
          <img
            class="processImg"
            src={processImg.design}
            alt="Illustration of a person consulting with another person"
          />
        </div>
      </div>
    </div>
    <div>
      <h3>Design</h3>
      <p>
        Next, we turn ideas into visuals. Starting with low-fidelity wireframes,
        we map out user flows and page layouts before crafting high-fidelity
        mockups that bring your brand to life. You’ll explore a clickable
        prototype, share feedback, and watch us refine typography, imagery and
        interactions until everything feels just right.
      </p>
    </div>
  </div>
  <div class="container">
    <div>
      <h3>Build</h3>
      <p>
        Once the design’s locked down, our developers write clean, semantic
        HTML, CSS and JavaScript using the right framework for your project.
        Every component is built with performance, scalability and accessibility
        in mind, so your site not only looks great but also loads fast and
        adapts as your needs evolve.
      </p>
    </div>
    <div>
      <div class="circleContainer">
        <div class="circle">
          <img
            class="processImg"
            src={processImg.code}
            alt="Illustration of a person consulting with another person"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div>
      <div class="circleContainer">
        <div class="circle">
          <img
            class="processImg"
            src={processImg.bug}
            alt="Illustration of a person consulting with another person"
          />
        </div>
      </div>
    </div>
    <div>
      <h3>Test</h3>
      <p>
        As we approach completion, we run both automated and manual testing
        across browsers and devices, audit Core Web Vitals and check against
        WCAG guidelines. We’ll squash any bugs, polish animations and ensure
        every interaction is rock-solid before giving you a final walkthrough.
      </p>
    </div>
  </div>
  <div class="container">
    <div>
      <h3>Deploy</h3>
      <p>
        When you’re happy, we configure your hosting environment—SSL
        certificates, CDN setup, DNS configuration and domain all handled for
        you—and then push your site live. But we don’t stop there: we keep an
        eye on performance metrics, analyse user behaviour and offer ongoing
        maintenance, so your digital presence stays sharp long after launch.
      </p>
    </div>
    <div>
      <div class="circleContainer">
        <div class="circle">
          <img
            class="processImg"
            src={processImg.launch1}
            alt="Illustration of a person consulting with another person"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div>
      <div class="circleContainer">
        <div class="circle">
          <img
            class="processImg"
            src={processImg.chart}
            alt="Illustration of a person consulting with another person"
          />
        </div>
      </div>
    </div>
    <div>
      <h3>Maintain</h3>
      <p>
        Once your site is live, we dont just step away. We perform regular
        backups and security updates. We will also run periodic reviews of user
        analytics to identify bottlenecks or oportunities for enhancement. This
        proactive maintenance keeps your website secure, optimised and evolving
        in line with your ambitions.
      </p>
    </div>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 4rem;
    align-items: center;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  img {
    border-radius: 0.5rem;
  }

  .circleContainer {
    width: 25rem
  }

  .circle {
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
    &::before {
      content: "";
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

  #What{
    .imgContainer{
        height: calc(100% - 6rem);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }
  }

  #Process{
    .container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
    }

     img.processImg {
    transform: scale(1.5);
    position: absolute;
    /* right: -2rem; */
    z-index: 3;
  }
    @media screen and (max-width: 768px) {
        .container{
            flex-direction: column;
            &:nth-child(odd){
                flex-direction: column-reverse;
            }
        }
    }
  }

</style>
