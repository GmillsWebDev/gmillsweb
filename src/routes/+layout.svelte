
<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>
<svelte:head>
	<title>GMillsWeb - Modern, Responsive Websites</title>
	<meta name="description" content="GMillsWeb is a web development studio based in Chichester, specialising in clean, responsive websites built with modern frameworks. We help businesses, creatives, and independent professionals create digital experiences that are fast, accessible, and easy to manage." />
	<link rel="icon" type="image/png" href="/favicon/android-chrome-512x512.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="GMillsWeb is a web development studio based in Chichester, specialising in clean, responsive websites built with modern frameworks. We help businesses, creatives, and independent professionals create digital experiences that are fast, accessible, and easy to manage." />
  <meta name="keywords" content="web design, web development, responsive websites, SEO, accessibility, Chichester, front-end development, digital services" />
  <meta name="author" content="GMillsWeb" />
  <meta property="og:title" content="GMillsWeb | Chichester Web Design & Development" />
  <meta property="og:description" content="GMillsWeb is a web development studio based in Chichester, specialising in clean, responsive websites built with modern frameworks. We help businesses, creatives, and independent professionals create digital experiences that are fast, accessible, and easy to manage." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.gmillsweb.co.uk/" />
  <meta property="og:image" content="https://www.gmillsweb.co.uk/favicon/preview-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="GMillsWeb | Chichester Web Design & Development" />
  <meta name="twitter:description" content="GMillsWeb is a web development studio based in Chichester, specialising in clean, responsive websites built with modern frameworks. We help businesses, creatives, and independent professionals create digital experiences that are fast, accessible, and easy to manage." />
  <meta name="twitter:image" content="https://www.gmillsweb.co.uk/favicon/preview-image.png" />
</svelte:head>
<Nav />

<slot />
<Footer />
