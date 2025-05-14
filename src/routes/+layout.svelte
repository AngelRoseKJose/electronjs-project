<script>
	import { onMount } from 'svelte';
	let showSplash = true;

	onMount(() => {
		if (!sessionStorage.getItem('splash-shown')) {
			showSplash = true;
			setTimeout(() => {
				showSplash = false;
				sessionStorage.setItem('splash-shown', 'true');
			}, 1500); // 1.5 seconds
		} else {
			showSplash = false;
		}
	});
</script>

{#if showSplash}
	<div class="splash-screen">
		<img src="/assets/splash_logo.jpg" alt="Logo" />
	</div>
{:else}
	<slot />
{/if}

<style>
.splash-screen {
	position: fixed;
	inset: 0;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
}
</style>

