<script lang="ts">
	import { resolve } from "$app/paths";

	import Sidebar from "$lib/components/Sidebar.svelte";
	import Visitor from "$lib/components/Visitor.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
	<title>DRIM: DevRel Impact Model</title>
	<meta name="description" content="A decision making framework for DevRel resource allocation" />
	<meta
		name="keywords"
		content="DRIM, DevRel Impact Model, DevRel, developer relations, DevRel framework, DevRel impact,
DevRel prioritization, DevRel resource allocation, DevRel decision making, DevRel scoring model"
	/>

	<meta property="og:title" content="DRIM - DevRel Impact Model" />
	<meta
		property="og:description"
		content="DRIM is a decision-making framework for DevRel resource allocation. It uses a simple 0–100 scoring model that helps DevRel teams decide what to work on."
	/>
	<meta property="og:image" content="https://drim.pages.dev/favicon.svg" />
	<meta property="og:url" content="https://drim.pages.dev/" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="DRIM - DevRel Impact Model" />
	<meta
		name="twitter:description"
		content="DRIM is a decision-making framework for DevRel resource allocation. It uses a simple 0–100 scoring model that helps DevRel teams decide what to work on."
	/>
	<meta name="twitter:image" content="https://drim.pages.dev/favicon.svg" />
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
				feels like a guessing game, and if you are a startup, then good luck starting your DevRel
				journey without any historical data.
			</p>

			<p>
				Most DevRel teams just try different things and see what sticks. Every action, successful or
				not, costs time, money, and resources. That’s expensive, time-consuming, and forces teams
				into constant experiments, which leads to high costs for the company.
			</p>

			<p>
				The real issue isn’t measurement. It’s the absence of a decision model that helps DevRel
				teams choose input options wisely before committing effort.
			</p>

			<p>
				So, we need a simple way to make smarter decisions to evaluate different input options and
				allocate resources wisely.
			</p>

			<a href={resolve("/problem")}>Read More</a>
		</section>

		<section>
			<h2>02. The Solution</h2>

			<p>
				DRIM (DevRel Impact Model) is my attempt to solve this. It’s a decision-making framework
				that uses a simple 0–100 scoring model. Each potential activity, like a blog post, video
				tutorial, conference, or documentation update, gets evaluated against a set of core
				variables like effort, demand, potential impact, and resource cost.
			</p>

			<p>
				Instead of endless experiments, DRIM helps you compare ideas, rank them, and choose the
				highest-value option. It works for single decisions (like scoring one blog idea),
				homogeneous comparisons (like choosing between events), and heterogeneous comparisons (like
				deciding between writing docs or video tutorials).
			</p>

			<p>
				DRIM doesn’t try to predict exact outcomes. It gives teams a structured, evidence-informed
				way to prioritize their work and allocate DevRel resources with clarity, not guesswork.
			</p>

			<p>
				With DRIM, you can decide smarter, faster, and with more confidence, no matter if you’re
				choosing between two blog ideas, evaluating two events, or comparing different content
				formats entirely.
			</p>

			<a href={resolve("/solution")}>Read More</a>
		</section>

		<section>
			<h2>03. Origin Story</h2>

			<img src="/creator.JPG" alt="Creator of DRIM" class="mb-6 h-32 w-28 object-cover" />

			<h3 class="mb-2 text-xl font-bold">Abinash Sahoo</h3>

			<p class="font-bold text-gray-500">Creator of DRIM</p>

			<a href={resolve("/origin")}>Read More</a>
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
