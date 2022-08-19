<script>
	import Card from '$lib/Card.svelte';
	import { toggled } from '$lib/store.js';
</script>

<svelte:head>
	<title>Pricing Component With Toggle</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flow">
	<!--* card basic -->
	<Card type="secondary" storage="500 GB" users="2" bandwidth="3" left>
		<h2 class="card__header" slot="heading">Basic</h2>
		<div class="card__price" slot="price">
			{#if $toggled}
				$ <span>19.99</span>
			{:else}
				$ <span>199.99</span>
			{/if}
		</div>
	</Card>

	<!--* card professional -->
	<Card type="primary" storage="1 TB" users="5" bandwidth="10">
		<h2 class="card__header" slot="heading">Professional</h2>
		<div class="card__price" slot="price">
			{#if $toggled}
				$ <span>24.99</span>
			{:else}
				$ <span>249.99</span>
			{/if}
		</div>
	</Card>

	<!--* card master -->
	<Card type="secondary" storage="2 TB" users="10" bandwidth="50" right>
		<h2 class="card__header" slot="heading">Master</h2>
		<div class="card__price" slot="price">
			{#if $toggled}
				$ <span>39.99</span>
			{:else}
				$ <span>399.99</span>
			{/if}
		</div>
	</Card>
</section>

<style>
	section {
		padding-inline: theme('padding.6');
		margin-top: 1.25rem;
		--flow-space: theme('margin.8');
		padding-bottom: theme('padding.16');
		align-items: center;
	}

	@media (min-width: theme('screens.xl')) {
		section {
			display: flex;
			flex-direction: row;
			--flow-space: ;
			justify-content: center;
			align-items: center;
		}
	}

	.card__header {
		font-size: theme('fontSize.lg');
	}

	.card__price {
		font-size: theme('fontSize.4xl');
		--flow-space: 0.25rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: theme('gap.1');
	}

	.card__price span {
		font-size: theme('fontSize.7xl');
	}
</style>
