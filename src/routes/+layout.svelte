<script>
// @ts-nocheck

	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
	import '../styles.css';
	import { navbar } from './state';
	
	let showNavbar;

	navbar.subscribe(value => {
		showNavbar = value;
	});
</script>

<div class="app min-h-[100vh] flex flex-col">
	<Header />
	{#if showNavbar}
		<Navbar />
	{/if}

	<main class="flex flex-col grow pt-10 px-4 max-w-3xl mx-auto w-full">
		<slot />
	</main>
</div>
