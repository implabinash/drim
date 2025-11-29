<script lang="ts">
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Visitor from "$lib/components/Visitor.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Seo from "$lib/components/Seo.svelte";
</script>

<Seo title="The Problem" />

<section class="mx-auto max-w-2xl px-6 py-20 text-base sm:text-lg">
	<Sidebar />

	<Navbar />

	<header class="mb-20">
		<h1 class="mb-2 text-3xl font-bold">The Problem</h1>
		<div class="text-sm font-bold text-gray-500">DevRel Impact Model</div>
	</header>

	<main class="space-y-16 text-base leading-relaxed">
		<!-- Rapid Fires -->
		<section>
			<h2>01. Numbers</h2>
		</section>

		<!-- Context -->
		<section>
			<h2>02. Context</h2>
		</section>

		<!-- Core Problem -->
		<section>
			<h2>03. Problem</h2>
		</section>

		<!-- Underlying Causes -->
		<section>
			<h2>04. Underlying Causes</h2>
		</section>

		<!-- Impact -->
		<section>
			<h2>05. Impact</h2>
		</section>

		<!-- Examples  -->
		<section>
			<h2>06. Examples</h2>
		</section>

		<!-- Solution overview -->
		<section>
			<h2>07. Solution Overview</h2>
		</section>

		<!-- Boundary and Scope -->
		<section>
			<h2>08. Scope</h2>
		</section>

		<!-- References -->
		<section>
			<h2>09. References</h2>
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
