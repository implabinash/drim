<script lang="ts">
	import type { NavItem } from "$lib/types/navitems";

	import Problem from "$lib/components/Problem.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Origin from "$lib/components/Origin.svelte";

	const navItems: NavItem[] = [
		{ id: "problem", label: "The Problem", number: "01" },
		{ id: "origin", label: "Origin Story", number: "02" }
	];
</script>

<svelte:head>
	<title>DRIM: DevRel Impact Model</title>
	<meta name="description" content="A decision making framework for DevRel resource allocation" />
</svelte:head>

<section class="mx-auto max-w-2xl px-6 py-20 text-base sm:text-lg">
	<Sidebar {navItems} />

	<header class="mb-20">
		<h1 class="mb-2 text-3xl font-bold">DRIM</h1>
		<div class="text-sm font-bold text-gray-500">DevRel Impact Model</div>
	</header>

	<main class="text-base leading-relaxed">
		<Problem />

		<Origin />
	</main>
</section>
