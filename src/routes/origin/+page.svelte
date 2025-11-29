<script lang="ts">
	import Visitor from "$lib/components/Visitor.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Seo from "$lib/components/Seo.svelte";
</script>

<Seo title="Origin Story" />

<section class="mx-auto max-w-2xl px-6 py-20 text-base sm:text-lg">
	<Sidebar />

	<Navbar />

	<header class="mb-20">
		<h1 class="mb-2 text-3xl font-bold">Origin Story</h1>
		<div class="text-sm font-bold text-gray-500">DevRel Impact Model</div>
	</header>

	<main class="space-y-16 text-base leading-relaxed">
		<section class="scroll-mt-24">
			<h2 class="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">01. Creator</h2>

			<div class="gap-8">
				<img src="/creator.JPG" alt="Creator of DRIM" class="mb-6 h-32 w-28 object-cover" />

				<div>
					<h3 class="mb-2 text-xl font-bold">Abinash Sahoo</h3>
					<p class="font-bold text-gray-500">Creator of DRIM</p>
				</div>

				<p>Working...</p>
			</div>
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
