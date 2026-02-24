<script>
        let year = new Date().getFullYear();
        // import ContactForm from "$lib/components/ContactForm.svelte";
        import logo from "$lib/assets/images/branding/GMW_Logo.webp";
        import phoneIcon from "$lib/assets/images/icons/phone.svg";
        import emailIcon from "$lib/assets/images/icons/email.svg";
        import whatsappIcon from "$lib/assets/images/icons/whatsapp.svg";
</script>

<footer id="Footer">
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
        <a href="/">
            <img class="logo" src={logo} alt="GMills Web Development logo" />
        </a>
        <p>©{year} - G Mills Web</p>
    <div class="footer-links">
        <!-- <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms & Conditions</a> -->
    </div>
    </div>
    <div class="contact">
        <h2>Get in touch</h2>
        <!-- <ContactForm /> -->
        <div class="contactWrapper">
            <a href="tel:+447896431081">
                <img src={phoneIcon} alt="Phone icon" />
                <span>+44(0) 7896431081</span>
            </a>
            <a href="mailto:info@gmillsweb.co.uk">
                <img src={emailIcon} alt="Email icon" />
                <span>info@gmillsweb.co.uk</span>
            </a>
            <a href="https://wa.me/447896431081">
                <img src={whatsappIcon} alt="WhatsApp icon" />
                <span>Message us</span>
            </a>
        </div>
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
        /* display: flex;
        justify-content: space-between; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 1rem 0;
    }
    img{
        width: 8rem;
    }    

    h2{
        color: var(--colour-white);
        text-align: center;
       }

    .contactWrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }

    .contactWrapper a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: var(--colour-white);
        transition: opacity 0.2s;
    }

    .contactWrapper a:hover {
        opacity: 0.8;
        text-decoration: underline;
    }

    .contactWrapper img {
        width: 2rem;
        height: 2rem;
        margin-bottom: 0.5rem;
    }

    .contactWrapper span {
        font-size: 0.9rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        .contactWrapper {
            grid-template-columns: 1fr;
        }
    }
</style>