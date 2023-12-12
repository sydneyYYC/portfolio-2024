<script>
	import NavBar from "../lib/NavBar.svelte";
	import "../app.css";
	import Footer from "../lib/Footer.svelte";

</script>
<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@600;700&family=Montserrat:ital,wght@0,600;1,500;1,700&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
</svelte:head>

<!-- <div class="m-auto bg-[#FEF9F5] max-h-min max-w-max z-10"><NavBar></NavBar></div> -->
<main class="flex flex-col text-clip">
	<header class="mt-4 flex justify-between items-center sticky top-4 bg-white min-w-[95vw] z-20 border-black border-2 self-center">
		<div>
			<a href="#top">
				<img src="./assets/SYDNEY-BRUCE.svg" alt="sydney bruce wordmark" class="w-auto h-[55px] lg:h-[65px] m-4">
			</a>
		</div>
		<div class="flex items-center justify-between">
			<NavBar />
		</div>
	</header>
<slot />
</main>
<Footer></Footer>

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