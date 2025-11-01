<script lang="ts">
	import '../app.css';
	import Navbar from "../components/Navbar.svelte";
	import Footer from "../components/Footer.svelte";
	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main class="flex-1 bg-black text-green-500 p-2">
		{@render children()}
	</main>
	<Footer />
</div>

