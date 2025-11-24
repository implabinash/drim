<script lang="ts">
	import { resolve } from "$app/paths";

	let { previous, next }: { previous?: string; next?: string } = $props();
</script>

<div class="flex items-center justify-between">
	{#if previous}
		<a href={resolve("/")}>Previous</a>
	{/if}

	{#if next}
		<a href={resolve("/")} class="place-self-end">Next</a>
	{/if}
</div>
