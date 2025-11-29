<script lang="ts">
	type SeoProps = {
		title: string;
		description?: string;
		ogTitle?: string;
		ogDescription?: string;
		twitterTitle?: string;
		twitterDescription?: string;
	};

	let {
		title,
		description = "DRIM is a decision-making framework for DevRel resource allocation. It uses a simple 0–100 scoring model that helps DevRel teams decide what to work on.",

		ogTitle = "DRIM - DevRel Impact Model",
		ogDescription = "DRIM is a decision-making framework for DevRel resource allocation. It uses a simple 0–100 scoring model that helps DevRel teams decide what to work on.",

		twitterTitle = "DRIM - DevRel Impact Model",
		twitterDescription = "DRIM is a decision-making framework for DevRel resource allocation. It uses a simple 0–100 scoring model that helps DevRel teams decide what to work on."
	}: SeoProps = $props();
</script>

<svelte:head>
	<title>{title} | DRIM</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="DRIM, DevRel Impact Model, DevRel, developer relations, DevRel framework, DevRel impact,
DevRel prioritization, DevRel resource allocation, DevRel decision making, DevRel scoring model"
	/>

	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={ogDescription} />
	<meta property="og:image" content="https://drim.pages.dev/favicon.svg" />
	<meta property="og:url" content="https://drim.pages.dev/" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={twitterTitle} />
	<meta name="twitter:description" content={twitterDescription} />
	<meta name="twitter:image" content="https://drim.pages.dev/favicon.svg" />
</svelte:head>
