<script>
	import Button from '$lib/Button.svelte';

	export let type;
	export let storage;
	export let users;
	export let bandwidth;
	export let left;
	export let right;
</script>

<div class="card | flow" class:card__professional={type === 'primary'} class:left class:right>
	<slot name="heading" />
	<slot name="price" />
	<div class="card__content">
		<p class:border__professional={type === 'primary'}>{storage} Storage</p>
		<p class:border__professional={type === 'primary'}>{users} Allowed</p>
		<p class:border__professional={type === 'primary'}>Send up to {bandwidth} GB</p>
	</div>
	<Button {type} />
</div>

<style>
	.card {
		background-color: white;
		border-radius: theme('borderRadius.xl');
		color: theme('colors.n-dark-grayish-blue');
		padding-block: theme('padding.8');
		padding-inline: theme('padding.6');
		box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
		max-width: 21.45rem;
		flex-basis: 24.45rem;
		margin-inline: auto;
	}

	@media (min-width: theme('screens.xl')) {
		.card {
			margin-inline: 0;
		}
	}

	p {
		border-top: solid 0.0625rem rgba(0, 0, 0, 0.15);
		padding-block: theme('padding.4');
	}

	:where(p:last-child) {
		border-bottom: solid 0.0625rem rgba(0, 0, 0, 0.15);
	}

	.card__professional {
		background: linear-gradient(
			to right bottom,
			theme('colors.p-linear-from'),
			theme('colors.p-linear-to')
		);
		color: theme('colors.n-very-light-grayish-blue');
	}

	@media (min-width: theme('screens.xl')) {
		.card__professional {
			padding-block: theme('padding.14');
		}
	}

	.border__professional {
		border-color: rgba(255, 255, 255, 0.25);
	}

	.left {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.right {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
</style>
