<script>
	import ReverseWorkcard from "../lib/ReverseWorkcard.svelte";
  import Workcard from "../lib/Workcard.svelte";

	
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
  <div class="flex min-w-screen m-0 border-b-[1.5px] border-black items-end">
    <svg id="pencil" class="m-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" height="80px" ><path fill="#f4c4ac" stroke="#f4c4ac" d="M111.698 13.721c-1.733.261-3.124 1.269-3.646 2.642-.464 1.22-1.592 2.84-2.506 3.598-.914.759-2.269 2.835-3.012 4.613-.744 1.778-2.305 3.536-3.471 3.906-1.165.37-2.894 2.128-3.841 3.907-1.882 3.535-3.929 6.799-15.295 24.392C58.088 90.58 42.041 115.856 40.59 118.74c-1.38 2.742-1.589 6.427-1.36 23.987.316 24.25-.277 23.295 11.072 17.836 4.074-1.96 7.761-3.563 8.193-3.563 3.675 0 23.531-11.235 25.88-14.644 2.739-3.973 11.793-18.007 14.854-23.023 3.579-5.863 12.707-19.584 25.872-38.889 12.331-18.081 15.548-23.853 15.059-27.017-.092-.59.96-2.131 2.337-3.424 1.377-1.293 2.503-2.728 2.503-3.188 0-.46.93-2.816 2.067-5.235 1.828-3.889 1.926-4.872.842-8.49-1.217-4.06-2.16-4.961-14.973-14.308-7.074-5.16-12.3-6.406-21.238-5.061" fill-rule="evenodd"/><path fill="#fbbc4c" stroke="#fbbc4c" d="M96.485 31.136c-.397 1.3-1.323 3.052-2.057 3.892C91.503 38.373 41 117.389 41 118.619c0 .725.617 1.081 1.371.792 1.817-.697 4.482 2.07 5.211 5.409.322 1.474.746 3.21.943 3.859.218.72 2.517 1.178 5.912 1.178 6.806 0 10.958 2.59 13.221 8.246L69.217 142h6.392c3.594 0 6.391.438 6.391 1 0 2.389 1.891.616 4.53-4.25 3.368-6.209 5.024-8.718 30.604-46.359 23.727-34.913 23.983-35.429 20.061-40.325-6.242-7.792-27.962-21.364-36.341-22.709-3.21-.515-3.733-.302-4.369 1.779M39.216 152.738c.24 9.071.542 10.788 1.944 11.056 1.954.374 17.833-6.892 17.837-8.162.007-2.152-6.813-8.382-11.9-10.869-8.409-4.112-8.206-4.317-7.881 7.975" fill-rule="evenodd"/><path fill="#1c0b0c" stroke="#1c0b0c" d="M39.216 152.738c.24 9.071.542 10.788 1.944 11.056 1.954.374 17.833-6.892 17.837-8.162.007-2.152-6.813-8.382-11.9-10.869-8.409-4.112-8.206-4.317-7.881 7.975" fill-rule="evenodd"/></svg>
  </div>
<section class="border-b-[1.5px] border-black pb-[5rem]">
<h2 class="text-5xl p-2 text-center my-[6rem]">About Me</h2>

<div class="mx-[10rem] py-2 my-4 text-xl min-w-[40ch]" id="about">
  <p>
    I am a designer and web developer based in Calgary, AB.
    Three years ago I moved to Calgary from Ontario for my BFA at Alberta University of the Arts. 
    During my studies I caught a show in <em>The Illingworth Kerr Gallery</em> on a whim. It was a collection of work themed around AI, machine learning, surveillance, and ethical tech usage. Here I was introduced to how art and technology could come together. I was hooked, and it completely changed my process and my focus. 
  </p>

  <p>
    Between 2022 and 2023 I was featured in three public art shows where I was prominently mixing art and computer tech in my work. The success of these projects led to winning the Board of Governors Graduating Student Award in 2023. 
  </p>

   <p>  
    Moving forward I am still combining art and tech in creating responsive web pages. I love learning new things and experimenting. If you have a web problem that requires a creative solution, reach out! I am actually very cool. 
  </p>
</div>
</section>
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
/*pencil animation*/
  #pencil {
  position: relative;
  left: -60px;
  align-self: flex-start;
  transition-property: transform;
  transition-duration: 3s;
  transition-timing-function: ease;
  transition-delay: 0s;
}

#pencil:hover {
  /* animation-name: slidein; */
  animation-duration: 3s;
  transform: translateX(96vw);
  animation-iteration-count: 0;
  /* align-self: flex-end; */
  }

  /* @keyframes slidein {
  from {
    transform: translateX(0);
    align-self: flex-start
  }

  to {
    transform: translateX(96vw);
  } */



</style>
