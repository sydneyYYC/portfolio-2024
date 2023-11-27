<script>
	import NavBar from "../lib/NavBar.svelte";
	import "../app.css";
	import Contactbtn from "../lib/Contactbtn.svelte";

</script>
<main class="flex flex-col">
		<header class="flex justify-between items-center mx-12">
			<div>
				LOGO
			</div>
		<div class="flex items-center justify-between">
			<NavBar></NavBar>
			<Contactbtn></Contactbtn>
		</div>
	</header>
<slot />
</main>

<style>
	/* required css to change bg color */
	main {
		background-color: #FEF9F5;
	}
	
</style>