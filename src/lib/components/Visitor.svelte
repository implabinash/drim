<script lang="ts">
	import { onMount } from "svelte";

	let visits = $state(0);

	onMount(async () => {
		const response = await fetch("/api/visits", { method: "POST" });
		const data = await response.json();
		visits = data.visits;
	});
</script>

<div class="fixed right-4 bottom-4 z-50 sm:right-8 sm:bottom-8">
	<div
		class="flex items-center gap-3 border border-black bg-white px-3 py-2 text-xs font-semibold sm:px-4 sm:py-2"
	>
		<span class="relative flex h-2 w-2">
			<span
				class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
			></span>
			<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
		</span>
		{visits} Visitors
	</div>
</div>
