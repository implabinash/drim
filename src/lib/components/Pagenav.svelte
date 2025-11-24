<script lang="ts">
	let { previous, next }: { previous?: string; next?: string } = $props();
</script>

<div class="flex items-center justify-between">
	{#if previous}
		<a href="/{previous}">Previous</a>
	{/if}

	{#if next}
		<a href="/{next}" class="ml-auto">Next</a>
	{/if}
</div>
