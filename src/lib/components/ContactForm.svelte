<script>
  import { writable } from 'svelte/store';

  const status = writable(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const body = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message')
    };

    const res = await fetch('/.netlify/functions/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
});


    if (res.ok) status.set('sent');
    else status.set('error');
  }
</script>


<div class="contactForm">
  <h2>Get in touch</h2>
  <form id="contactForm" on:submit|preventDefault={handleSubmit}>
    <div class="inline">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required placeholder="Name" aria-label="Name">

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required placeholder="Email" aria-label="Email address">
    </div>

    <div>
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" required placeholder="Subject" aria-label="Subject">
    </div>

    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required placeholder="Your message here..." aria-label="Message"></textarea>
    </div>

    <button type="submit" aria-label="Send message">Send</button>
  </form>

  {#if $status === 'sent'}
    <p class="success">Thanks — your message has been sent.</p>
  {:else if $status === 'error'}
    <p class="error">Something went wrong. Please try again.</p>
  {/if}
</div>


<style>
    h2{
        color: var(--colour-white);
    }

    input, textarea{
        padding: 0.5rem;
        background: var(--colour-white);
        border: 1px solid var(--colour-background);
        color: var(--colour-black);
    }

    .contactForm{
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        form{
            width: 100%;
            &> div {
                margin-bottom: 1rem;
                display: flex;
                flex-direction: column;

                &.inline {
                    flex-direction: row;
                    gap: 1rem;

                    input {
                        flex: 1;
                    }
                }
                label {
                    margin-bottom: 0.5rem;
                    font-weight: bold;
                    display: none;
                }

                input, textarea {
                    font-size: 1rem;
                    border-radius: 4px;
                }

                textarea {
                    min-height: 100px;
                    resize: vertical;
                }
            }
        }
    }

    button {
        display: inline-block;
        padding: 0.5rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        color: white;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: fit-content;
        background-color: var(--colour-background);
        color: var(--colour-white);
        border: 1px solid var(--colour-background);
        cursor: pointer;
        &:hover {
            background-color: var(--colour-white);
            color: var(--colour-background);
        }
    }
</style>