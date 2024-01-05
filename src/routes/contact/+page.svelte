<script>
import { onMount } from 'svelte';
import { animate } from "motion";

onMount(() => {
    animate(
  "#mail",
  { y: 10 },
  {
    duration: 1,
    easing: "ease-in-out",
    repeat: 100000000,
    direction: "alternate"
  }) 
  });

  onMount(() => {
    animate(
  "#wings",
  { y: 3 },
  {
    duration: 0.3,
    easing: "ease",
    repeat: 100000000,
    direction: "alternate"
  }) 
  });

  const handleSubmit = (e) => {
    e.preventDefault()
		let myForm = document.getElementById('myform');
		let formData = new FormData(myForm);
		fetch('/', {
      method: 'POST',
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString()
		}).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
	}
</script>

<body class=" flex min-h-screen max-w-max m-0">
  <!-- this is the animation -->
  <div class="lg:ml-[8rem] self-start my-[2rem] mr-[2rem]">
    <div class=" bg-[url('/assets/sky.png')] lg:w-[450px] lg:h-[550px] m-4 md:w-[350px] md:h-[450px] h-0 w-0 flex items-center justify-center ">
      <img id="wings" src="/assets/wings.svg" alt="wings" class="w-auto md:h-auto w-0 h-0 px-2">
      <img id="mail" src="/assets/mail.svg"alt="mail" class="md:w-[230px] lg:w-auto absolute w-0">
    </div>
  </div>
<!-- form section -->
  <section class="self-start flex flex-col overflow-hidden ">
    <h3 class=" text-6xl lg:text-8xl mb-6 mx-6 lg:my-[1.7rem]">Contact Me</h3>
    <div class="flex flex-col border-[1.5px] border-black bg-white mx-6 mt-[2rem] justify-self-end">
      <!-- form -->
    <form id="myform" name="contact" method="POST" data-netlify="true" class="flex flex-col align-items-start p-4 mx-4 justify-self-end  mt-[1.5rem] ">
      <label for="name" class="my-2 font-semibold">Name</label>
      <input type="text" placeholder="Your Name" name="name" required class="border-b-[1px] border-black">

      <label for="email" class="my-2 font-semibold">Email</label>
      <input type="email" placeholder="Your Email" name="email" required class="border-b-[1px] border-black ">

      <label for="phone" class="my-2 font-semibold">Phone Number</label>
      <input type="text" placeholder="Phone" name="phone" required class="border-b-[1px] border-black ">

      <label for="message" class="my-2 font-semibold">Message</label>
      <textarea name="message" id="message" rows="1" placeholder="How can I help you?" required class="border-b-[1px] border-black "></textarea>

      <button type="submit" name="submit" class="border-[1px] border-black self-start min-w-[40%] mr-4 px-4 py-2 my-6 mb-6 text-lg font-semibold drop-shadow-flat bg-pupink hover:bg-accent">Send</button>
      <input type="hidden" name="form-name" value="contact">
    </form>
  </div>
</section>
</body>

<style>
  button {
    -webkit-box-shadow: 3px 3px 0px 2px #000000; 
    box-shadow: 3px 3px 0px 2px #000000;
  }
</style>