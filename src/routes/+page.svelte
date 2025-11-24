<script lang="ts">
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Visitor from "$lib/components/Visitor.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
	<title>DRIM: DevRel Impact Model</title>
	<meta name="description" content="A decision making framework for DevRel resource allocation" />
</svelte:head>

<section class="mx-auto max-w-2xl px-6 py-20 text-base sm:text-lg">
	<Sidebar />

	<Navbar />

	<header class="mb-20">
		<h1 class="mb-2 text-3xl font-bold">DRIM</h1>
		<div class="text-sm font-bold text-gray-500">DevRel Impact Model</div>
	</header>

	<main class="space-y-16 text-base leading-relaxed">
		<section>
			<h2>01. Introduction</h2>

			<p>
				DRIM is a decision-making framework for DevRel resource allocation. It uses a simple 0–100
				scoring model that helps DevRel teams decide what to work on. Instead of guessing between
				blogs, docs, videos, or events, DRIM gives you a structured way to score each option based
				on effort, demand, potential impact, and resources.
			</p>

			<p>
				It doesn't predict exact outcomes; it helps you make smarter and more intentional decisions
				before you invest your time and resources.
			</p>
		</section>

		<section>
			<h2>02. The Problem</h2>

			<p>
				DevRel teams work with endless possibilities - blogs, docs, videos, events, workshops,
				community, tutorials, demos, samples, and more. But choosing what to work on next often
				feels like a guessing game.
			</p>

			<p>
				Most DevRel teams just try different things and see what sticks. That’s expensive,
				time-consuming, and forces teams into constant experiments, which leads to high costs for
				the company.
			</p>

			<p class="font-semibold">
				We need a way to make smarter decisions before investing time and resources.
			</p>

			<p>
				DRIM (DevRel Impact Model) is my attempt to solve this. It’s a simple decision-making
				framework that uses a structured scoring system to give each DevRel input a score from 0 to
				100, based on core variables like effort, demand, potential impact, and resource cost.
			</p>

			<p>
				The goal is not to predict exact outcomes, but to give DevRel teams a decision-making
				framework to prioritize their work instead of relying on intuition alone.
			</p>

			<p>
				With DRIM, you can decide smarter, faster, and with more confidence, no matter if you’re
				choosing between two blog ideas, evaluating two events, or comparing different content
				formats entirely.
			</p>
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
