<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	:global(body) {
		min-height: 100vh;
		text-align: center;
		font-family: theme('fontFamily.montserrat');
		font-size: theme('fontSize.body-copy');
		background-color: theme('colors.n-very-light-grayish-blue');
		background-image: url("bg-top.svg");
		background-repeat: no-repeat;
		background-position: top -5rem right -13.5rem;
		background-size: 110%;
	}
</style>
