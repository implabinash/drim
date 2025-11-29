<script lang="ts">
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Visitor from "$lib/components/Visitor.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Seo from "$lib/components/Seo.svelte";
</script>

<Seo title="The Solution" />

<section class="mx-auto max-w-2xl px-6 py-20 text-base sm:text-lg">
	<Sidebar />

	<Navbar />

	<header class="mb-20">
		<h1 class="mb-2 text-3xl font-bold">The Solution</h1>
		<div class="text-sm font-bold text-gray-500">DevRel Impact Model</div>
	</header>

	<main class="space-y-16 text-base leading-relaxed">
		<section>
			<p>Working...</p>
		</section>
	</main>

	<Footer />
	<Visitor />
</section>

<style>
	h2 {
		margin-bottom: 1.5rem;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		color: #9ca3af;
		text-transform: uppercase;
	}
</style>
