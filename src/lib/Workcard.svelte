<script>
  export let img = "/placeholder.jpg";
  export let alt = "placeholder";
  export let projectTitle = "Title of Project"
  export let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic quisquam iste ipsum earum tenetur deserunt, nam impedit officiis?"
  export let href= "/"
</script>

<aside id="card-work" class="min-w-screen grid grid-cols-12 grid-rows-2"> 
  <div class="border-[1.5px] bg-white border-black w-[16rem] lg:w-[20rem] flex flex-col z-10 col-start-2 col-span-4 row-start-1 row-span-2 self-center">
    <h5 class="text-2xl border-b-[1px] border-black m-4 p-2 mt-[2rem]">{projectTitle}</h5>
    <p class="mt-4 mx-4 text-lg">{description}</p>
    <a href={href}><button class="border-[1px] border-black self-start min-w-[40%] mx-4 px-4 py-2 my-4 mb-6 text-lg font-semibold drop-shadow-flat bg-pupink hover:bg-accent">See More</button></a>
  </div>
  <div class="max-w-max border-[1.5px] border-black col-span-9 col-start-3 row-start-1">
  <img src={img} alt={alt} class="w-[1050px] h-[400px] bg-cover">
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