<script>
    import Button from "./Button.svelte";
    export let header;
    export let subheader;
    export let button = false;
    export let content;
    export let linkUrl;
    export let variant;

</script>

<div class="hero container-full">
    <div class="wave">
    <span></span>
    <span></span>
    <span></span>
  </div>
    <div class="container content">
        <h1>{header}</h1>
        <span>{subheader}</span>
        {#if button}
            <Button {content} {linkUrl} {variant} />
        {/if}
    </div>
</div>

<style>
    .hero{
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 55vh;
        .wave {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: var(--colour-secondary);
            box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
            transition: 0.5s;

            span {
                content: "";
                position: absolute;
                width: 250vh;
                height: 250vh;
                top: 0;
                left: 50%;
                transform: translate(-50%, -75%);
                background: var(--colour-background);
                }
            }
    }

.content {
  position: relative;
  z-index: 1;
  span{
    display: block;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
}
.wave span:nth-child(1) {
  border-radius: 45%;
  background: rgba(0, 4, 32, 0.8);
  animation: animate 15s linear infinite;
}

.wave span:nth-child(2) {
  border-radius: 40%;
  background: rgba(0, 4, 32, 0.5);
  animation: animate 20s linear infinite;
}
.wave span:nth-child(3) {
  border-radius: 42.5%;
  background: rgba(0, 4, 32, 0.5);
  animation: animate 25s linear infinite;
}
@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}

@media screen and (max-width:768px){
  .hero {
    min-height: 40vh;
    /* border-bottom: 1px solid var(--colour-primary); */
    .content {
      text-align: center;
      h1 {
        font-size: 2.5rem;
      }
    }
  }
}
</style>