<script lang="ts">
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Pagenav from "$lib/components/Pagenav.svelte";
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
		<section class="scroll-mt-24">
			<h2 class="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
				01. The Problem
			</h2>

			<p>
				Developer Relations teams often drown in "opportunity." Every conference, every integration,
				every blog post feels urgent.
			</p>

			<p>
				But not all work is equal. Without a clear decision-making framework, resources are
				allocated based on vibes, internal politics, or whoever shouts the loudest. This leads to
				burnout, lack of focus, and low-impact outcomes.
			</p>
		</section>

		<section class="scroll-mt-24">
			<h2 class="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
				02. Origin Story
			</h2>

			<div class="gap-8">
				<img src="/creator.JPG" alt="Creator of DRIM" class="mb-6 h-32 w-28 object-cover" />

				<div>
					<h3 class="mb-2 text-xl font-bold">Abinash Sahoo</h3>
					<p class="font-bold text-gray-500">Creator of DRIM</p>

					<p>
						It was 2 AM on a Tuesday before Q4 planning. The coffee was cold, and the Jira backlog
						was infinite. Every department wanted "just one small thing" from the DevRel team.
					</p>

					<p>
						I realized we were drowning in opportunity but starving for impact. We were busy, but
						not effective. I needed a shield—a way to say "no" that sounded like math, not an
						opinion.
					</p>

					<p>
						DRIM wasn't born in a boardroom. It was scribbled on a napkin at a falafel shop in
						Berlin, trying to calculate if a $50k sponsorship was worth the headache. (Spoiler: It
						wasn't).
					</p>
				</div>
			</div>
		</section>

		<Pagenav next="problem" />
	</main>

	<Footer />
	<Visitor />
</section>
