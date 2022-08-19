<script>
	import { toggled } from '$lib/store.js';

	export let handleClick;
	export let handleKey;
</script>

<div tabindex="0" on:click={handleClick} on:keydown={handleKey} class="switch">
	<span class:toggle-on={$toggled} class="slider" />
</div>

<style>
	.switch {
		background: linear-gradient(
			90deg,
			theme('colors.p-linear-from') 0%,
			theme('colors.p-linear-to') 100%
		);
		width: theme('width.14');
		height: theme('height.8');
		border-radius: theme('borderRadius.full');
		display: flex;
		align-items: center;
		padding-inline: theme('padding[1]');
		cursor: pointer;
	}

	.switch:hover {
		background: theme('colors.p-linear-from');
	}

	.slider {
		background-color: white;
		aspect-ratio: 1 / 1;
		width: 50%;
		display: inline-block;
		border-radius: 50%;
		animation: toggle-off 500ms ease-out;
	}

	.slider:hover {
		background-color: theme('backgroundColor.n-very-light-grayish-blue');
	}

	.toggle-on {
		animation: toggle-on 500ms ease-out forwards;
	}

	@keyframes toggle-on {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(100%);
		}
	}

	@keyframes toggle-off {
		from {
			transform: translateX(100%);
		}

		to {
			transform: translateX(0%);
		}
	}
</style>
