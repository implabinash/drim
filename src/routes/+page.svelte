<script lang="ts">
	import type { NavItem } from "$lib/types/navitems";

	import Problem from "$lib/components/Problem.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Origin from "$lib/components/Origin.svelte";
	import Pagenav from "$lib/components/Pagenav.svelte";

	const navItems: NavItem[] = [
		// { id: "problem", label: "The Problem", number: "01" },
		// { id: "solution", label: "The Solution", number: "02" },
		// { id: "origin", label: "Origin Story", number: "03" },
		// { id: "resources", label: "Resources", number: "04" }
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

	<main class="space-y-16 text-base leading-relaxed">
		<Problem />

		<Origin />

		<Pagenav next="problem" />
	</main>
</section>
