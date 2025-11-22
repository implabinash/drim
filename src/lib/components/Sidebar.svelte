<script lang="ts">
	import { resolve } from "$app/paths";

	type NavItem = {
		id: string;
		label: string;
		number: string;
	};

	const navIteams: NavItem[] = [
		{ id: "problem", label: "The Problem", number: "01" },
		{ id: "origin", label: "Origin Story", number: "02" }
	];
</script>

<nav class="fixed top-1/2 left-8 z-50 hidden -translate-y-1/2 xl:block">
	<ul class="space-y-4">
		<li>
			<a
				href={resolve("/")}
				class="flex items-center gap-3 opacity-60 transition-opacity duration-300 hover:opacity-100"
			>
				<span class="text-xs font-semibold tracking-widest text-white">00 Home</span>
			</a>
		</li>

		{#each navIteams as navIteam (navIteam.id)}
			<li>
				<a
					href={`#${navIteam.id}`}
					class="flex items-center gap-3 opacity-60 transition-opacity duration-300 hover:opacity-100"
				>
					<span class="text-xs font-semibold tracking-widest text-white"
						>{navIteam.number} {navIteam.label}</span
					>
				</a>
			</li>
		{/each}
	</ul>
</nav>
