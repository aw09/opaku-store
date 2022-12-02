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

	<!-- <footer>
		<p>Opaku Store</p>
		<p>By <span>Agung Wicaksono</span></p>
		<a target="_blank" rel="noopener noreferrer" href="https://github.com/aw09">Github</a>
	</footer> -->
</div>

<style>
	/* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	} */

	/* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 48rem;
		margin: 0 auto;
		box-sizing: border-box;
		margin: auto;
	} */

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer span {
		font-weight: bold;
	}

	footer p {
		margin: 0;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
