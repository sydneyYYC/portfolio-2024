<script>
	import ReverseWorkcard from "../lib/ReverseWorkcard.svelte";
  import Workcard from "../lib/Workcard.svelte";
  import { onMount } from 'svelte';

  import { animate } from "motion";
	import Footer from "../lib/Footer.svelte";

  let quizApp = {
    img : "./assets/test2.png",
    alt: "character mascot of brain with hat",
    projectTitle: "Quiz App",
    description: "Makes learning fun! This App asks questions from four well known periods in art history and tests your knowledge of each one. Built with Vanilla HTML, CSS and JavaScript.",
    href: "https://fine-art-quiz.netlify.app/"
  }

  let hotwaxCard = {
    img: "./assets/hotwax-screenshot.png",
    alt: "red record player",
    projectTitle: "Hot Wax Music",
    description: "A music app that connects to the Spotify API. Created in React using async API fetches to render info from the users spotify account. Pause, play and change the currently playing song.",
    href: "https://hotwax.netlify.app/"
  };
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
<div id="top"class="flex items-center justify-around my-[6rem]">
  <div>
    <h1 class="text-6xl ml-2 text-bold lg:text-7xl lg:mb-4">Hello,</h1> 
    <h1 class="text-6xl ml-2 mb-2 text-bold lg:text-7xl lg:mb-4"> I'm Sydney Bruce</h1>
    <p class="text-2xl ml-2 mb-2 lg:text-3xl max-w-[35ch] lg:mb-4">Jr web designer and developer that makes unique web experiences.</p>
    <a href="#about"><button class="ml-2 bg-pupink max-w-max px-4 py-2 text-lg font-semibold border-[1.5px] border-black" id="learn-button">Learn More</button></a>
  </div>
  <img id = "box" src="./assets/self.svg" alt = "hand drawn self portrait" class="w-[0] h-[0] lg:w-[400px] lg:h-[400px]">

</div>
  <!-- about me section -->
<section class=" pb-[5rem]" id="about">
  <div class="flex g-2 items-center mt-4">
    <h2 class=" text-4xl lg:text-5xl p-2 lg:ml-[5rem] mx-[2rem]">About Me</h2>
    <!-- this is an unsused hand animation -->
    <!-- <img id="box" src="./assets/hand.svg" alt="drawing of hand" class="w-[5rem] h-auto"> -->
  </div>
  <div class=" mx-[2rem] lg:mx-[4rem] py-2 my-4 text-lg lg:text-xl leading-relaxed lg:flex lg:space-around min-w-screen ">
    <div class="min-w-max self-center justify-self-stretch lg:mx-4 lg:mr-[6rem]">
      <img id="box2" src="./assets/computer.svg" alt="drawing of computer" class="w-[10rem] h-auto mb-2 lg:w-[300px]">
    </div>
    <div class="lg:min-w-[65ch] max-w-[36ch]">
    <p class="mb-4">
      I am a designer and web developer based in Calgary, AB.
      Three years ago I moved to Calgary from Ontario for my BFA at Alberta University of the Arts. 
      During my studies I caught a show in <em>The Illingworth Kerr Gallery</em> on a whim. It was a collection of work themed around AI, machine learning, surveillance, and ethical tech usage. Here I was introduced to how art and technology could come together. I was hooked, and it completely changed my process and my focus. 
    </p>
    <p class="mb-4">
      Between 2022 and 2023 I was featured in three public art shows where I was prominently mixing art and computer tech in my work. The success of these projects led to winning the Board of Governors Graduating Student Award in 2023. 
    </p>
    <p class="mb-4 max-w-[75ch]">  
      Moving forward I am still combining art and tech in creating responsive web pages. I love learning new things and experimenting. If you have a web problem that requires a creative solution, reach out! I am actually very cool. 
    </p>
    </div>
  </div>
</section>
<!-- portfolio section -->
<section id="projects">
  <h2 class="text-4xl lg:text-5xl p-2 lg:ml-[5rem] mx-[2rem] mb-[3rem]">See my Work!</h2>
  <Workcard {...hotwaxCard}/>

  <Workcard {...quizApp}/>
  
</section>
<Footer />
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
  
  #learn-button:hover {
    background-color: #F0743E;
  }
</style>
