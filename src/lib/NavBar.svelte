<script>
	import { animate } from "motion";

  export let navItems = [
    {name: "about", href:"#about"},
    {name: "projects", href: "#projects"},
    {name: "contact", href:"/"}
  ];
  
</script>
<header class=" z-10 max-w-max border-2 border-black flex g-4 items-center self-center m-4 drop-shadow-flat lg:mr-[4rem] bg-[#FEF9F5]">
  <ul class="flex justify-around item-center">
    {#each navItems as {name , href}}
      <a href={href}><li class="p-2 m-2 lg:px-4 px-2 text-md lg:text-xl">{name}</li></a>
    {/each}
  </ul>
  <div class="a max-w-max p-2 py-4">
    <a href="https://github.com/sydneyYYC"><img src="./assets/github.svg" alt="github logo" class= "lg:w-[30px] lg:h-[30px] lg:mx-4 w-[25px] h-[25px] mx-2"></a>
  </div>
</header>

<style>
  /* header {
    -webkit-box-shadow: 3px 3px 0px 2px #000000; 
    box-shadow: 3px 3px 0px 2px #000000;
  } */

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
</style>