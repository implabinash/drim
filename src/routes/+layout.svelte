<script lang="ts">
	import "./layout.css";

	import Visitor from "$lib/components/Visitor.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<div class="app">
	<main>
		<nav class="mx-auto mt-20 flex max-w-2xl justify-end gap-8 text-sm font-bold">
			<a href="https://x.com/implabinash" target="_blank">Twitter</a>
			<a href="https://github.com/implabinash/drim" target="_blank">GitHub</a>
			<a href="https://cal.com/implabinash/drim" target="_blank">Let’s Talk</a>
		</nav>

		{@render children()}

		<Footer />
		<Visitor />
	</main>
</div>
