<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

{#if $page.url.pathname !== '/'}
	<Nav />
{/if}

{@render children()}

{#if $page.url.pathname !== '/'}
	<Footer />
{/if}
