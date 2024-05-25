<script>
  export let revImg = "/placeholder.jpg";
  export let revAlt = "placeholder";
  export let revProjectTitle = "Title of Project"
  export let revDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic quisquam iste ipsum earum tenetur deserunt, nam impedit officiis? Assumenda amet excepturi libero cumque ab totam dignissimos esse? Odio, excepturi? Ratione, debitis. Debitis quam soluta."
  export let revHref = "/"
</script>
<!-- TODO: ADD MOBILE STYLES TO THIS -->
<aside id="card-work" class="min-w-screen grid grid-cols-12 grid-rows-2">
  <div class="border-[1.5px] bg-white border-black w-[16rem] lg:w-[20rem] flex flex-col z-10 sm:col-start-9 col-start-5 col-span-3 row-start-1 row-span-2 self-center mr-2rem">
    <h5 class="text-2xl border-b-[1px] border-black m-4 p-2 mt-[2rem]">{revProjectTitle}</h5>
    <p class="mt-4 mx-4 text-lg md:width-[5rem] width-[1rem]"> {revDescription}</p>
    <a href={revHref}><button class="border-[1px] border-black self-start min-w-[40%] mx-4 px-4 py-2 my-4 mb-6 hover:bg-pupink text-lg font-semibold drop-shadow-flat bg-pupink hover:bg-[#F0743E]">See More</button></a>
  </div>
  <div class="max-w-max border-[1.5px] border-black col-span-9 col-start-2 row-start-1">
  <img src={revImg} alt={revAlt} class="w-[1050px] h-[400px]">
  </div>
</aside>

<style>
  button {
    -webkit-box-shadow: 3px 3px 0px 2px #000000; 
    box-shadow: 3px 3px 0px 2px #000000;
  }

  img {
    object-fit: cover;
  }
</style>
