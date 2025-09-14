<script>
  import LightWaves from "$lib/components/LightWaves.svelte";
  import IconCard from "$lib/components/IconCard.svelte";
  import ImgScroller from "$lib/components/ImgScroller.svelte";
  import { services } from "$lib/scripts/services.js";
  import img from "$lib/assets/images/mobile.webp"
</script>

<div id="Hero" class="container">
  <div>
    <h1>This is some text</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
      assumenda ipsum. Accusantium suscipit facilis quaerat voluptatem vel ipsa
      aliquam neque minus ducimus voluptatibus aut, eveniet odit aspernatur? Ex,
      mollitia quos!
    </p>
  </div>
  <div class="scroller">
    <ImgScroller
      images={[
        img, img, img, img
      ]}
      direction="down"
    />
    <ImgScroller
      images={[
        img, img, img, img
      ]}
      direction="up"
    />
  </div>
</div>
<LightWaves>
  <div id="Services" class="container">
    <h2>Services</h2>
    <div class="grid">
      {#each services as service}
        <!-- {service.icon} -->
        <IconCard title={service.title} description={service.description} />
      {/each}
    </div>
  </div>
</LightWaves>
<div id="Prices" class="container">
    <h2>Prices</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio
    alias. Fuga aliquid nemo ut possimus numquam aperiam laudantium nobis
    tenetur rerum eaque, vero eveniet natus eos. Architecto, excepturi
    recusandae.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio
    alias. Fuga aliquid nemo ut possimus numquam aperiam laudantium nobis
    tenetur rerum eaque, vero eveniet natus eos. Architecto, excepturi
    recusandae.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio
    alias. Fuga aliquid nemo ut possimus numquam aperiam laudantium nobis
    tenetur rerum eaque, vero eveniet natus eos. Architecto, excepturi
    recusandae.
  </p>
</div>

<style>

    #Hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2rem;
      min-height: 60vh;

      .scroller{
        display: flex;
        flex-direction: row;
        /* gap: 1rem; */
        height: 80vh;
        width: 100%;
      }
    }
  #Services {
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
  }
</style>
