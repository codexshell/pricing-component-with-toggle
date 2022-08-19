<script>
	import Switch from '$lib/Switch.svelte';
	import { toggled } from '$lib/store.js';

	const handleClick = () => {
		toggled.update((value) => !value);
	};

	const handleKey = (event) => {
		let key = event.key;
		if (key === 'Enter') toggled.update((value) => !value);
	};
</script>

<header class="flow">
	<h1>Our Pricing</h1>
	<div class="period">
		<span class:active={!$toggled}>Annually</span>
		<Switch {handleClick} {handleKey} />
		<span class:active={$toggled}>Monthly</span>
	</div>
</header>

<style>
	header {
		padding-block: 3.75rem;
	}

	h1 {
		font-size: theme('fontSize.3xl');
		color: theme('colors.n-grayish-blue');
	}

	.period {
		color: theme('colors.n-light-grayish-blue');
		display: flex;
		justify-content: center;
		align-items: center;
		gap: theme('gap.6');
		--flow-space: 2.3rem;
	}

	span {
		font-size: theme('fontSize.sm');
	}

	.active {
		color: theme('colors.n-dark-grayish-blue');
	}
</style>
