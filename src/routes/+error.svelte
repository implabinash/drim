<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
</script>

<div class="grid h-screen place-items-center">
	<div class="space-y-8 text-center">
		<h1 class="text-9xl font-bold tracking-tighter">{page.status}</h1>

		<a href={resolve("/")}>Return to Home</a>
	</div>
</div>
