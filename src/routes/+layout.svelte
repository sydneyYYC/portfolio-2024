<script>
	import NavBar from "../lib/NavBar.svelte";
	import { navItems } from '../stores/navStore.js';
	import "../app.css";
	import Scrollbtn from "../lib/Scrollbtn.svelte";
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@600;700&family=Montserrat:ital,wght@0,600;1,500;1,700&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
</svelte:head>

<!-- <div class="m-auto bg-[#FEF9F5] max-h-min max-w-max z-10"><NavBar></NavBar></div> -->
<main class="flex flex-col text-clip max-w-screen overflow-x-hidden">
	<header class="mt-4 flex justify-between items-center bg-white min-w-[95vw] z-20 border-black border-2 self-center max-w-[100vw] top-4 ">
		<div class=" flex justify-between items-center">
			<a href="/">
				<img src="./assets/SYDNEY-BRUCE.svg" alt="sydney bruce wordmark" class="w-auto h-[55px] lg:h-[65px] m-4 min-w-[40px]">
			</a>
		</div>
		<div class="flex items-center justify-between max-w-max">
			<NavBar {navItems}/>
		</div>
	</header>
<slot />
</main>


<style>
	/* required css to change bg color */
	main {
		background-color: #FEF9F5;
	}
	
	header {
		-webkit-box-shadow: 3px 3px 0px 2px #000000; 
    box-shadow: 3px 3px 0px 2px #000000;
	}

</style>