<script>
	import ReverseWorkcard from "../lib/ReverseWorkcard.svelte";
  import Workcard from "../lib/Workcard.svelte";
  import { onMount } from 'svelte';

  import { animate } from "motion";
// animation for rotate
  onMount(() => {
    animate(
  "#box",
  { rotate: 45 },
  {
    duration: 1,
    easing: "ease-in-out",
    repeat: 100000000,
    direction: "alternate"
  }) 
  });
  // animation for scale
  onMount(() => {
    animate(
  "#box2",
  { scale: 1.15 },
  {
    duration: 1,
    easing: "ease-in-out",
    repeat: 100000000,
    direction: "alternate"
  }) 
  });

  // animate for other 
  onMount(() => {
    animate(
  "#box3",
  { rotate: 360 },
  {
    duration: 1,
    easing: "none",
    repeat: 100000000,
    direction: "normal"
  })
  });
</script>

<div class="flex items-center justify-around my-[6rem]">
  <div>
    <h1 class="text-bold text-7xl mb-4">Hello,</h1> 
    <h1 class="text-bold text-7xl mb-4"> I'm Sydney Bruce</h1>
    <p class="text-3xl max-w-[35ch] mb-4">Jr web designer and developer that makes unique web experiences.</p>
    <button class="bg-[#F6C3AE] max-w-max px-4 py-2 text-lg font-semibold border-[1.5px] border-black">Learn More</button>
  </div>
  <div class="bg-slate-200 rounded-full w-[400px] h-[400px]">
  </div>
</div>
<section class="border-b-[1.5px] border-black pb-[5rem]">
<h2 class="text-5xl p-2 mx-[10rem] my-[6rem]">About Me</h2>


  <svg id="box2" width="400" height="110" class="animate">
    <rect width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
  </svg>
 
  <svg width="400" height="110">
    <rect  id="box3" width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
  </svg>

<div class="mx-[10rem] py-2 my-4 text-xl min-w-[40ch]" id="about">
  <p class="mb-4">
    I am a designer and web developer based in Calgary, AB.
    Three years ago I moved to Calgary from Ontario for my BFA at Alberta University of the Arts. 
    During my studies I caught a show in <em>The Illingworth Kerr Gallery</em> on a whim. It was a collection of work themed around AI, machine learning, surveillance, and ethical tech usage. Here I was introduced to how art and technology could come together. I was hooked, and it completely changed my process and my focus. 
  </p>
  <p class="mb-4">
    Between 2022 and 2023 I was featured in three public art shows where I was prominently mixing art and computer tech in my work. The success of these projects led to winning the Board of Governors Graduating Student Award in 2023. 
  </p>
  
  <p class="mb-4">  
    Moving forward I am still combining art and tech in creating responsive web pages. I love learning new things and experimenting. If you have a web problem that requires a creative solution, reach out! I am actually very cool. 
  </p>
</div>
</section>

<div class="animate">
  <svg id="box" width="400" height="110" class="animate">
    <rect width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
  </svg>
</div>
<section id="projects">
  <h2 class="text-5xl p-2 text-center my-[6rem]">See my Work!</h2>

  <Workcard />
  <ReverseWorkcard />
</section>

<style>
  /* imported fonts */
  p {
    font-family: 'Roboto', sans-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', monospace;
  }
  /* drop shadow */
  button {
    -webkit-box-shadow: 3px 3px 0px 2px #000000; 
    box-shadow: 3px 3px 0px 2px #000000;
  }
  /* #box {
    animation: myAnim 2 ease 0s infinite alternate-reverse none;
  }

  @keyframes myAnim {
	0% {
		transform: rotate(0);
	}

	100% {
		transform: rotate(360deg);
	}
} */
</style>
