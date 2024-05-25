<script>
    export let footerItems = [
    {name: "About", href:"#about"},
    {name: "Projects", href: "#projects"},
    // {name: "Contact", href: "/contact"}
  ];
  function smoothScroll(event, targetId) {
  event.preventDefault();
  
  // Check if we're already on the main page
  if (window.location.pathname === '/') {
    // Scroll to the target section directly
    scrollToSection(targetId);
  } else {
    // Navigate to the main page and then scroll to the target section
    window.location.href = '/';
    window.onload = () => scrollToSection(targetId);
  }
}
function scrollToSection(targetId) {
  // console.log('scroll')
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<footer class="border-2 border-black bg-[#FEF9F5] flex justify-around p-4 h-[10rem] items-center">
  <div class="a max-w-max lg:p-2 py-4">
    <a href="https://github.com/sydneyYYC">
    <svg enable-background="new 0 0 512 512" class= "w-[45px] h-[45px] lg:mx-4 mx-2" id="git-logo" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path clip-rule="evenodd" d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z" fill-rule="evenodd"/></g></svg>
    </a>
  </div>
  <div class="flex flex-col justify-around self-end">
  <ul class="flex justify-around items-center">
    {#each footerItems as {name , href}}
    <a href={href} on:click|preventDefault={e => smoothScroll(e, href)}><li class="p-2 lg:mx-2 px-2 lg:px-4 text-lg">{name}</li></a>
    {/each}
    <a href="/contact"><li class="p-2 lg:mx-2 px-2 lg:px-4 text-lg">Contact</li></a>
  </ul>
  <p class="text-md m-2 p-2 text-center">&copy;Sydney Bruce</p>
</div>
<a href="/" class="p-2"><img src="/SB.png" alt="sydney bruce icon"></a>
<!-- TODO: change png to svg -->
</footer>

<style>
  /* animations for hovers */
  /* hover animation for nav links */
  a:hover {
    text-decoration: underline 2px;
    text-decoration-color: #f0743e;
    animation-name: hover; 
    animation-duration: 0.5s;
    animation-timing-function: ease;
  }
  /* hover animation for github logo */
  .a:hover{
    animation-name: hover;
    animation-duration: 0.2s;
    animation-timing-function: ease;
  }

  @keyframes hover {
  from {text-decoration: underline 1.6px #f0743e;}
  to {text-decoration: underline 2px #f0743e;}
}

#git-logo:hover {
  fill:#f0743e;
  stroke:#f0743e;
}
</style>