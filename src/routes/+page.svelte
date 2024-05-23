<script>
	import ReverseWorkcard from "../lib/ReverseWorkcard.svelte";
  import Workcard from "../lib/Workcard.svelte";
  import { onMount } from 'svelte';

  import { animate } from "motion";
	import Footer from "../lib/Footer.svelte";
	import Scrollbtn from "../lib/Scrollbtn.svelte";

  let quizApp = {
    img : "./assets/test2.png",
    alt: "character mascot of brain with hat",
    projectTitle: "Quiz App",
    description: "Makes learning fun! This App asks questions from four well known periods in art history and tests your knowledge of each one. Built with Vanilla HTML, CSS and JavaScript.",
    href: "https://fine-art-quiz.netlify.app/"
  }

  let revQuizApp = {
    revImg : "./assets/test2.png",
    revAlt: "character mascot of brain with hat",
    revProjectTitle: "Quiz App",
    revDescription: "Makes learning fun! This app asks questions from four well known periods in art history and tests your knowledge of each one. Built with Vanilla HTML, CSS and JavaScript. This quiz uses local storage to store your highscore data, so you can always come back later. ",
    revHref: "https://fine-art-quiz.netlify.app/"
  } 
  let hotwaxCard = {
    img: "./assets/hotwax-screenshot.png",
    alt: "red record player",
    projectTitle: "Hot Wax Music",
    description: "A music app that connects to the Spotify API. Created in React using async API fetches to render info from the users spotify account. Pause, play and change the currently playing song. It's like having your own personal DJ at your fingertips!",
    href: "https://hotwax.netlify.app/"
  };
  let symbioticAi = {
    img: "./assets/symbiotic.png",
    alt: "screenshot of Symbiotic Ai Website",
    projectTitle: "Symbiotic AI",
    description: "A super sleek website I designed and developed using Next.js 14. I've fine-tuned every detail to represent Symbiotic AI to its fullest potential. Plus, behind the scenes, I also managed a CI/CD pipeline in Azure making updates a breeze, with 0 downtime.",
    href: "https://www.symbioticai.ca"
  }
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

 function smoothScroll(event, id) {
    event.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>
<Scrollbtn />
  <!-- header/hero section -->
<div id="top"class="flex items-center justify-around my-[6rem]">
  <div>
    <h1 class="text-6xl ml-2 text-bold lg:text-7xl lg:mb-4">Hello,</h1> 
    <h1 class="text-6xl ml-2 mb-2 text-bold lg:text-7xl lg:mb-4"> I'm Sydney Bruce</h1>
    <p class="text-2xl ml-2 mb-2 lg:text-3xl max-w-[35ch] lg:mb-4">Jr web designer and developer that makes unique web experiences.</p>
    <a href="#about" on:click|preventDefault={e => smoothScroll(e, 'about')}><button class="ml-2 bg-pupink max-w-max px-4 py-2 text-lg font-semibold border-[1.5px] border-black" id="learn-button">Learn More</button></a>
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
      I'm a designer and web developer based in Calgary, AB, with a passion for creating captivating digital experiences.  
    </p>
    <p class="mb-4">
      After graduating from the Web Developer program at SAIT in 2023, I kicked off my career as a UXI Developer intern at Symbiotic AI. There, I had the opportunity to design, develop, and maintain their company website. Since then, I've transitioned into a full-time developer role, where I leverage my unique blend of design and coding expertise to craft visually stunning applications.
    </p>
    <p class="mb-4 max-w-[75ch]">  
    As I move forward, I'm dedicated to advancing my expertise and exploring new avenues within the field, particularly in enhancing user experience and maintaining well crafted code.
    </p>
    </div>
  </div>
</section>
<!-- portfolio section -->
<section id="projects">
  <h2 class="text-4xl lg:text-5xl p-2 lg:ml-[5rem] mx-[2rem] mb-[3rem]">See my Work!</h2>
  <Workcard {...symbioticAi}/>
  <ReverseWorkcard {...revQuizApp}/>
  <Workcard {...hotwaxCard}/>


  <!-- <Workcard {...quizApp}/> -->

  
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
