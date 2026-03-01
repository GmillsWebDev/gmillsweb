<script>
import Hero from "$lib/components/Hero.svelte";
import ProjectBlock from "$lib/components/ProjectBlock.svelte";

import fillingIn from "$lib/assets/images/projects/FillingInProject.webp";
import regentTherapy from "$lib/assets/images/projects/RegentTherapyProject.webp";
import treemenders from "$lib/assets/images/projects/TreemendersProject.webp";
import BCHair from "$lib/assets/images/projects/BchProject.webp";

let projects = [
    {
        imgUrl: treemenders,
        projectName: "Treemenders Arboriculture",
        projectDescription: `A website built on the SvelteKit framework, promoting a tree surgery business based in Chichester. The site provides information on the services that the business provide. The client had a logo already but needed branding built around it.`,
        projectUrl: "https://treemendersarb.co.uk/"
    },
    {
        imgUrl: fillingIn,
        projectName: "Filling In",
        projectDescription: `A wordpress site promoting a business covering Sussex and Hampshire that allows dental surgeries to find temporary staff, and in turn allowing nurses to find temporary positions. 
        The client wanted a clean, modern design with a calming colour scheme to reflect the nature of the business. The site features contact and application forms and a blog.`,
        projectUrl: "https://fillingin.agency"
    },
    {
        imgUrl: regentTherapy,
        projectName: "Regent Therapy",
        projectDescription: `A wordpress site promoting a Southampton business offering soft tissue therapy and assistance for those living with long term and/or incurable conditions.
        The client wanted the branding to blend seamelessly with their practice. The site acts as an information hub and entry point to their services. `,
        projectUrl: "https://regent-therapy.co.uk/1/"
    },
    {
        imgUrl: BCHair,
        projectName: "Beth Chapple Hair",
        projectDescription: `A Bootstrap site promoting a hair salon based in Petersfield. The client wanted a clean, modern design where she could show off her magic and guide her clients towards her online booking system. The site contains a gallery and services/price list.`,
        projectUrl: "https://bethchapplehair.co.uk/"
    },
    // Add more projects here
]
</script>

<Hero 
    header="Projects" 
    subheader="A collection of my projects and works." 
    button  
    content="Lets talk" 
    linkUrl="#Footer" 
    variant="primary"
/>

{#each projects as project}
    <ProjectBlock
        imgUrl={project.imgUrl}
        projectName={project.projectName}
        projectDescription={project.projectDescription}
        projectUrl={project.projectUrl}
    />
{/each}