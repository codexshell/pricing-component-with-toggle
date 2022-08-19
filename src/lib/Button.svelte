<script>
	export let type;
</script>

<button type="button" class:primary={type === 'primary'} class:secondary={type === 'secondary'}
	>Learn More</button
>

<style>
	button {
		--flow-space: 2rem;
		text-transform: uppercase;
		font-size: theme('fontSize.xs');
		letter-spacing: 0.15rem;
		width: 100%;
		padding-block: theme('padding[3.5]');
		border-radius: theme('borderRadius.lg');
	}

	.primary {
		background-color: theme('colors.n-very-light-grayish-blue');
		color: theme('colors.p-linear-to');
	}

	.primary:hover {
		background-color: transparent;
		color: theme('colors.n-very-light-grayish-blue');
		outline: solid 0.0625rem;
	}

	.primary:active {
		background-color: theme('colors.n-very-light-grayish-blue');
		color: theme('colors.p-linear-to');
		outline: none;
	}

	.secondary {
		background: linear-gradient(
			to right,
			theme('colors.p-linear-from'),
			theme('colors.p-linear-to')
		);
		color: theme('colors.n-very-light-grayish-blue');
	}

	.secondary:hover {
		background: transparent;
		color: theme('colors.p-linear-to');
		outline: solid 0.0625rem;
	}

	.secondary:active {
		background: linear-gradient(
			to right,
			theme('colors.p-linear-from'),
			theme('colors.p-linear-to')
		);
		color: theme('colors.n-very-light-grayish-blue');
	}
</style>
