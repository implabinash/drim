<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Problem from "$lib/components/Problem.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<svelte:head>
	<title>DRIM: DevRel Impact Model</title>
	<meta name="description" content="A decision making framework for DevRel resource allocation" />
</svelte:head>

<section class="mx-auto max-w-2xl bg-white px-6 py-20 text-base sm:text-lg">
	<Sidebar />
	<nav class="mb-20 flex justify-end gap-8 text-sm font-bold">
		<a href="https://x.com/implabinash" target="_blank">Twitter</a>
		<a href="https://github.com/implabinash/drim" target="_blank">GitHub</a>
		<a href="https://cal.com/implabinash/drim" target="_blank">Let’s Talk</a>
	</nav>

	<header class="mb-20">
		<h1 class="mb-2 text-3xl font-bold">DRIM</h1>
		<div class="text-sm font-bold text-gray-500">DevRel Impact Model</div>
	</header>

	<main class="mb-20">
		<Problem />
	</main>

	<Footer />
</section>
