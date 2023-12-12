<script>
	import { animate } from "motion";

  import Modal from './Modal.svelte';

  let showModal = false;

  export let navItems = [
    {name: "about", href:"#about"},
    {name: "projects", href: "#projects"}
  ];
  
</script>
<header class=" z-10 max-w-max  flex g-4 items-center self-center m-4 drop-shadow-flat lg:mr-[4rem]">
  <ul class="flex justify-around item-center">
    {#each navItems as {name , href}}
      <a href={href}><li class="p-2 m-2 lg:px-4 px-2 text-md lg:text-xl">{name}</li></a>
    {/each}
    <button  on:click={() => (showModal = true)} class="lg:px-4 px-2 text-md lg:text-xl">resume</button>
  </ul>
  <div class="a max-w-max p-2 py-4">
    <a href="https://github.com/sydneyYYC"><img src="./assets/github.svg" alt="github logo" class= "lg:w-[30px] lg:h-[30px] lg:mx-4 w-[25px] h-[25px] mx-2"></a>
  </div>
  <Modal bind:showModal>
    <h2 slot="header">
      <img src="./assets/resume.png" alt="resume"/>
      <a class="max-w-[30px] max-h-min" href="https://www.linkedin.com/in/sydney-bruceyyc/"><img class="w-[25px] h-auto ml-6 mb-2"src="./assets/linkedin.svg" alt="linkedin icon"/></a>
    </h2>
    </Modal>
</header>

<style>

  /* hover animation for nav links */
  a:hover {
    background-color: #F6C3AE;
    animation-name: hover;
    animation-duration: 0.4s;
    animation-timing-function: ease;
  }
  /* hover animation for github logo */
  .a:hover{
    background-color: #F6C3AE;
    animation-name: hover;
    animation-duration: 0.4s;
    animation-timing-function: ease;
  }

  @keyframes hover {
  from {background-color: #FEF9F5;}
  to {background-color: #F6C3AE;}

}

button:hover{
  background-color: #F6C3AE;
    animation-name: hover;
    animation-duration: 0.4s;
    animation-timing-function: ease;
}

@keyframes button {
  from {background-color: #FEF9F5;}
  to {background-color: #F6C3AE;}
}
</style>