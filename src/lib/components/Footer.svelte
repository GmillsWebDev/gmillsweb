<script>
        let year = new Date().getFullYear();
        import logo from "$lib/assets/images/branding/GMW_Logo.webp";
</script>

<footer>
<svg class="borderwave" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1800" height="75" preserveAspectRatio="none" viewBox="0 0 1800 75">
    <g mask="url(&quot;#SvgjsMask1109&quot;)" fill="none">
        <path d="M 0,67 C 120,56.6 360,20 600,15 C 840,10 960,45 1200,42 C 1440,39 1680,8.4 1800,0L1800 75L0 75z" fill="rgba(33, 94, 88, 1)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1109">
            <rect width="1800" height="75" fill="#ffffff"></rect>
        </mask>
    </defs>
</svg>
<div class="container-full footer">
<div class="container">
    <div class="links">
        <p>© {year} - G Mills Web</p>
    <div class="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms & Conditions</a>
        <a href="/contact">Contact</a>
    </div>
    </div>
    <div class="logo">
        <a href="/">
            <img src={logo} alt="GMills Web Development logo" />
        </a>
    </div>
</div>
</div>
</footer>

<style>
    .footer{
        background: var(--colour-secondary);
        padding-bottom: 2rem;
    }

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
    }
    img{
        width: 8rem;
    }    
</style>