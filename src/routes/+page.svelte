<script>
	import ReverseWorkcard from "../lib/ReverseWorkcard.svelte";
  import Workcard from "../lib/Workcard.svelte";
  import { onMount } from 'svelte';

  import { animate } from "motion";

// animation for face rotate
  onMount(() => {
    animate(
  "#box",
  { rotate: 10 },
  {
    duration: 1,
    easing: "ease-in-out",
    repeat: 100000000,
    direction: "alternate"
  }) 
  });
  // animation for computer scale
  onMount(() => {
    animate(
  "#box2",
  { scale: 1.05 },
  {
    duration: 1,
    easing: "ease-in-out",
    repeat: 100000000,
    direction: "alternate"
  }) 
  });

</script>
  <!-- header/hero section -->
<div class="flex items-center justify-around my-[6rem]">
  <div>
    <h1 class="text-6xl ml-2 text-bold lg:text-7xl lg:mb-4">Hello,</h1> 
    <h1 class="text-6xl ml-2 mb-2 text-bold lg:text-7xl lg:mb-4"> I'm Sydney Bruce</h1>
    <p class="text-2xl ml-2 mb-2 lg:text-3xl max-w-[35ch] lg:mb-4">Jr web designer and developer that makes unique web experiences.</p>
    <a href="#about"><button class="ml-2 bg-pupink max-w-max px-4 py-2 text-lg font-semibold border-[1.5px] border-black">Learn More</button></a>
  </div>
  <div class="bg-slate-200 rounded-full w-[0] h-[0] lg:w-[400px] lg:h-[400px]">
  </div>
</div>
  <!-- about me section -->
<section class="border-y-[1.5px] border-black pb-[5rem]" id="about">
  <div class="flex g-2 items-center mt-4">
    <h2 class=" text-4xl lg:text-5xl p-2 lg:ml-[10rem] mx-[2rem]">About Me</h2>
    <img id = "box" src="./assets/self.svg" alt = "hand drawn self portrait" class="w-[9rem] h-auto">
    <!-- <img id="box" src="./assets/hand.svg" alt="drawing of hand" class="w-[5rem] h-auto"> -->
  </div>
  <div class=" mx-[2rem] lg:mx-[10rem] py-2 my-4 text-xl lg:text-2xl lg:min-w-[90ch] max-w-[36ch] leading-relaxed">
    <p class="mb-4">
      I am a designer and web developer based in Calgary, AB.
      Three years ago I moved to Calgary from Ontario for my BFA at Alberta University of the Arts. 
      During my studies I caught a show in <em>The Illingworth Kerr Gallery</em> on a whim. It was a collection of work themed around AI, machine learning, surveillance, and ethical tech usage. Here I was introduced to how art and technology could come together. I was hooked, and it completely changed my process and my focus. 
    </p>
    <p class="mb-4">
      Between 2022 and 2023 I was featured in three public art shows where I was prominently mixing art and computer tech in my work. The success of these projects led to winning the Board of Governors Graduating Student Award in 2023. 
    </p>
    <div class="flex space-between items-center">
      <p class="mb-4 max-w-[75ch]">  
        Moving forward I am still combining art and tech in creating responsive web pages. I love learning new things and experimenting. If you have a web problem that requires a creative solution, reach out! I am actually very cool. 
      </p>
      <img id="box2" src="./assets/computer.svg" alt="drawing of computer" class="w-[8rem] h-auto ml-4 mb-2 ml-2">
    </div>
  </div>
</section>
<!-- portfolio section -->
<section id="projects">
  <h2 class="text-5xl p-2 text-center my-[6rem]">See my Work!</h2>
  <Workcard />
  
</section>

<style>
  /* imported fonts */
  p {
    font-family: 'Roboto', sans-serif;
  }
  h1,h2 {
    font-family: 'Montserrat', monospace;
  }
  /* drop shadow */
  button {
    -webkit-box-shadow: 3px 3px 0px 2px #000000; 
    box-shadow: 3px 3px 0px 2px #000000;
  }

</style>
