<script>
	import NavBar from "../lib/NavBar.svelte";
	import "../app.css";
	import Footer from "../lib/Footer.svelte";

</script>
<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@600;700&family=Montserrat:ital,wght@0,600;1,500;1,700&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
</svelte:head>

<main class="flex flex-col">
		<header class="flex justify-between items-center mx-12">
			<div>
				<img src="./assets/SYDNEY-BRUCE.svg" alt="sydney bruce wordmark" class="w-auto h-[65px] m-4">
			</div>
		<div class="flex items-center justify-between">
			<NavBar></NavBar>
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
	
</style>