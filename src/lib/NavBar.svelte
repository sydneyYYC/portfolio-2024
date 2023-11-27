<script>
  export let navItems = [
    {name: "about me", href:"#about"},
    {name: "projects", href: "#projects"}
  ];
</script>
<header class=" max-w-max border-2 border-black flex g-4 rounded-full items-center self-center m-4">
  <ul class="flex justify-around item-center">
    {#each navItems as {name , href}}
    <li class="p-2 mx-2"><a href={href}></a>{name}</li>
    {/each}
  </ul>
  <div>
    <a href="https://github.com/sydneyYYC"><img src="./assets/github.svg" alt="github logo" class= "w-[30px] h-[30px] mx-2"></a>
  </div>
</header>

<style>
  header {
    -webkit-box-shadow: 3px 3px 0px 2px #000000; 
box-shadow: 3px 3px 0px 2px #000000;
  }
</style>