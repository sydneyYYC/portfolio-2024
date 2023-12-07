<script>
    export let footerItems = [
    {name: "about me", href:"#about"},
    {name: "projects", href: "#projects"},
    {name: "contact", href:"/"}
  ];
</script>

<footer class="border-2 border-black bg-[#FEF9F5] flex justify-around p-4 h-[10rem] items-center">
  <div class="a max-w-max p-2 py-4">
    <a href="https://github.com/sydneyYYC"><img src="./assets/github.svg" alt="github logo" class= "w-[45px] h-[45px] mx-4"></a>
  </div>
  <div class="flex flex-col justify-around self-end">
  <ul class="flex justify-around items-center">
    {#each footerItems as {name , href}}
    <a href={href}><li class="p-2 mx-2 px-4 text-lg">{name}</li></a>
    {/each}
  </ul>
  <p class="text-md m-2 p-2 text-center">&copy;Sydney Bruce</p>
</div>
<img src="/SB.png" alt="sydney bruce icon">
<!-- TODO: change png to svg -->
</footer>

<style>
  /* animations for hovers */

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