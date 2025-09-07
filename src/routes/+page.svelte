<script>
  import LightWaves from "$lib/components/LightWaves.svelte";
  import IconCard from "$lib/components/IconCard.svelte";
  import { services } from "$lib/scripts/services.js";
</script>
<div class="container">
    
<h1>This is some text</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, assumenda ipsum. Accusantium suscipit facilis quaerat voluptatem vel ipsa aliquam neque minus ducimus voluptatibus aut, eveniet odit aspernatur? Ex, mollitia quos!</p>

<h2>Some more text</h2>
<p>text with a <a href="#">link</a></p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequatur! Ut et, exercitationem quas provident harum quos aliquid id molestiae facilis dolore libero quasi iusto unde quam illo iste quisquam?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequatur! Ut et, exercitationem quas provident harum quos aliquid id molestiae facilis dolore libero quasi iusto unde quam illo iste quisquam?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequatur! Ut et, exercitationem quas provident harum quos aliquid id molestiae facilis dolore libero quasi iusto unde quam illo iste quisquam?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequatur! Ut et, exercitationem quas provident harum quos aliquid id molestiae facilis dolore libero quasi iusto unde quam illo iste quisquam?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequatur! Ut et, exercitationem quas provident harum quos aliquid id molestiae facilis dolore libero quasi iusto unde quam illo iste quisquam?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequatur! Ut et, exercitationem quas provident harum quos aliquid id molestiae facilis dolore libero quasi iusto unde quam illo iste quisquam?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequatur! Ut et, exercitationem quas provident harum quos aliquid id molestiae facilis dolore libero quasi iusto unde quam illo iste quisquam?</p>


</div>
<LightWaves>    
    <div id="services" class="container">
        <h2>Services</h2>
        <div class="grid">
            {#each services as service}
            <!-- {service.icon} -->
            <IconCard title={service.title} description={service.description} />
            {/each}
        </div>
    </div>
</LightWaves>
<div class="container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio alias. Fuga aliquid nemo ut possimus numquam aperiam laudantium nobis tenetur rerum eaque, vero eveniet natus eos. Architecto, excepturi recusandae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio alias. Fuga aliquid nemo ut possimus numquam aperiam laudantium nobis tenetur rerum eaque, vero eveniet natus eos. Architecto, excepturi recusandae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio alias. Fuga aliquid nemo ut possimus numquam aperiam laudantium nobis tenetur rerum eaque, vero eveniet natus eos. Architecto, excepturi recusandae.</p>

</div>

<style>
    #services{
        .grid{
            display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        }
    }
</style>