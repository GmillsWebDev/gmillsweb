<script>
  import Hero from "$lib/components/Hero.svelte";
  import Button from "$lib/components/Button.svelte";
  import cookieIcon from '$lib/assets/images/icons/cookieIcon.svg';
</script>

<Hero
  header="Cookie Policy"
  subheader="See how and why we use cookies on our website"
/>

<div class="container">
  <p class="last-updated">Last Updated: March 2026</p>

  <p>
    Welcome to <strong>G Mills Web</strong>. We value your privacy as much as
    you do. This policy explains how we handle your personal information and the
    steps we take to ensure your data stays protected while you use our website.
  </p>

  <hr />

  <h2>1. Who We Are</h2>
  <p>
    <strong>G Mills Web</strong> is the "Data Controller" for any personal information
    collected through this website.
  </p>
  <ul>
    <li><strong>Website:</strong> gmillsweb.co.uk</li>
    <li>
      <strong>Contact:</strong>
      <a href="mailto:info@gmillsweb.co.uk">info@gmillsweb.co.uk</a>
    </li>
  </ul>

  <h2>2. Information We Collect</h2>
  <p>
    We collect information to provide a better service to all our users. This
    falls into three main categories:
  </p>

  <table>
    <thead>
      <tr>
        <th>Type of Data</th>
        <th>What it Includes</th>
        <th>Why we collect it</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Voluntary Data</strong></td>
        <td>Name, email, or phone numbers provided via contact forms.</td>
        <td>To respond to your inquiries or provide requested services.</td>
      </tr>
      <tr>
        <td><strong>Technical Data</strong></td>
        <td>IP addresses (anonymized), browser type, and device information.</td
        >
        <td
          >To ensure the website displays correctly on your specific device.</td
        >
      </tr>
      <tr>
        <td><strong>Experience Data</strong></td>
        <td>Click patterns, scrolling behavior, and navigation paths.</td>
        <td
          >To identify bugs and improve our website's layout and performance.</td
        >
      </tr>
    </tbody>
  </table>

  <h2>3. Analytics & Digital Experience Tools</h2>
  <p>
    To make our website as user-friendly as possible, we use the following
    tools. We only activate these if you provide <strong
      >explicit consent</strong
    > via our cookie banner.
  </p>

  <h3>Google Analytics 4 (GA4)</h3>
  <p>
    We use Google Analytics to understand general site traffic—such as which
    pages are popular and how visitors find us. This data is aggregated and does
    not identify you personally.
  </p>

  <h3>Contentsquare (Experience Diagnostics)</h3>
  <p>
    We use Contentsquare to help us visualize how users interact with our site.
    This is strictly for <strong>Root Cause Analysis (RCA)</strong> and user experience
    optimization.
  </p>
  <div class="highlight-box">
    <p>
      <strong>Privacy First:</strong> This tool is configured to
      <strong>mask sensitive data</strong>. We cannot see what you type into
      form fields, and your identity remains protected while we analyze site
      performance. It allows our technical team to see where the website may be
      failing, enabling us to provide a smoother, error-free service.
    </p>
  </div>

  <h2>4. Our Legal Basis for Processing</h2>
  <p>Under UK GDPR, we rely on the following legal bases:</p>
  <ul>
    <li>
      <strong>Consent:</strong> For the use of GA4 and Contentsquare cookies.
    </li>
    <li>
      <strong>Legitimate Interest:</strong> For responding to your direct messages
      and maintaining essential site security.
    </li>
  </ul>

  <h2>5. Data Sharing & Security</h2>
  <p>
    We do not sell your data to third parties. We only share data with our
    trusted service providers (Google and Contentsquare) to help run and improve
    our site. All data is handled with industry-standard encryption and stored
    securely.
  </p>

  <h2>6. Your Rights</h2>
  <p>Under UK data protection law, you have the following rights:</p>
  <ul>
    <li>
      <strong>Access:</strong> The right to ask us for copies of your personal information.
    </li>
    <li>
      <strong>Rectification:</strong> The right to ask us to rectify information
      you think is inaccurate.
    </li>
    <li>
      <strong>Withdrawal:</strong> The right to withdraw consent for cookies at any
      time via our settings icon <img class="cookieIcon" src={cookieIcon} alt="Cookie Settings Icon" width="16" height="16" /> located at the bottom of your screen.
      
      
    </li>
    <li>
      <strong>Erasure:</strong> The right to ask us to erase your personal information
      in certain circumstances.
    </li>
  </ul>

  <h2>7. Changes to This Policy</h2>
  <p>
    We may update this policy occasionally to reflect changes in our practices
    or for legal reasons. We recommend checking this page regularly.
  </p>

  <h2>8. Contact Us</h2>
  <p>
    If you have any questions about this policy or our privacy practices, please
    contact us at: <a href="mailto:info@gmillsweb.co.uk">info@gmillsweb.co.uk</a
    >.
  </p>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  th,
  td {
    text-align: left;
    padding: 12px;
    border: 1px solid var(--colour-white);
  }
  th {
    background-color: var(--colour-secondary);
  }
  .highlight-box {
    border: 1px solid var(--colour-primary);
    padding: 15px;
    border-left: 10px solid var(--colour-primary);
    margin: 20px 0;
  }
  .last-updated {
    font-style: italic;
    color: #777;
  }

  hr {
    margin: 40px 0;
    border: none;
    border-top: 1px solid var(--colour-primary);
  }

  .cookieIcon{
    display: inline-block;
  }
</style>
