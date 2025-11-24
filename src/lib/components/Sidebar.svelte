<script lang="ts">
	import { resolve } from "$app/paths";

	import type { NavItem } from "$lib/types/navitems";

	let { navItems }: { navItems: NavItem[] } = $props();
</script>

<nav class="fixed top-1/2 left-8 z-50 hidden -translate-y-1/2 xl:block">
	<ul class="space-y-4">
		<li>
			<a
				href={resolve("/")}
				class="flex items-center gap-3 no-underline! opacity-40 transition-opacity duration-300 hover:bg-white! hover:opacity-100"
			>
				<span class="text-xs font-semibold tracking-widest text-black">00 Home</span>
			</a>
		</li>

		{#each navItems as navItem (navItem.id)}
			<li>
				<a
					href={`#${navItem.id}`}
					class="flex items-center gap-3 no-underline! opacity-40 transition-opacity duration-300 hover:bg-white! hover:opacity-100"
				>
					<span class="text-xs font-semibold tracking-widest text-black"
						>{navItem.number} {navItem.label}</span
					>
				</a>
			</li>
		{/each}
	</ul>
</nav>
