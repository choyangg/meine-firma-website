<script>
	import { page } from '$app/stores';

	let menuOpen = $state(false);

	const links = [
		{ href: '/leistungen', label: 'Leistungen' },
		{ href: '/ablauf', label: 'Ablauf' },
		{ href: '/referenzen', label: 'Referenzen' },
		{ href: '/preise', label: 'Preise' }
	];

	function close() {
		menuOpen = false;
	}
</script>

<nav>
	<div class="container nav-inner">
		<a href="/" class="logo" onclick={close}>
			Web<span>Pro</span>
		</a>

		<div class="links" class:open={menuOpen}>
			{#each links as link}
				<a
					href={link.href}
					class:active={$page.url.pathname.startsWith(link.href)}
					onclick={close}
				>
					{link.label}
				</a>
			{/each}
			<a href="/kontakt" class="btn btn-green cta" onclick={close}>Anfrage stellen</a>
		</div>

		<button
			class="burger"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Menü öffnen"
		>
			{menuOpen ? '✕' : '☰'}
		</button>
	</div>
</nav>

{#if menuOpen}
	<div class="backdrop" onclick={close} role="presentation"></div>
{/if}

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 200;
		height: 64px;
		display: flex;
		align-items: center;
		background: rgba(255, 255, 255, 0.97);
		backdrop-filter: blur(16px);
		border-bottom: 1px solid #e2e8f0;
	}

	.nav-inner {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		height: 100%;
	}

	.logo {
		font-size: 1.3rem;
		font-weight: 900;
		color: #111827;
		letter-spacing: -0.035em;
		flex: 1;
	}
	.logo span { color: #059669; }

	.links {
		display: flex;
		align-items: center;
		gap: 0.125rem;
	}

	.links a:not(.btn) {
		padding: 0.5rem 0.875rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: #64748b;
		border-radius: 8px;
		transition: color 0.15s, background 0.15s;
	}
	.links a:not(.btn):hover { color: #111827; background: #f1f5f9; }
	.links a.active:not(.btn) { color: #059669; background: #f0fdf4; }

	.cta { margin-left: 0.625rem; padding: 0.6rem 1.1rem; font-size: 0.875rem; }

	.burger {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.25rem;
		color: #111827;
		padding: 0.5rem;
		line-height: 1;
	}

	.backdrop {
		position: fixed;
		inset: 64px 0 0;
		background: rgba(0, 0, 0, 0.35);
		z-index: 190;
	}

	@media (max-width: 768px) {
		.burger { display: flex; }

		.links {
			display: none;
			position: fixed;
			top: 64px;
			left: 0;
			right: 0;
			background: #fff;
			border-bottom: 1px solid #e2e8f0;
			flex-direction: column;
			padding: 1rem 1.5rem 1.25rem;
			gap: 0.25rem;
			z-index: 199;
			align-items: stretch;
		}
		.links.open { display: flex; }
		.links a:not(.btn) { padding: 0.75rem 1rem; }
		.cta { margin-left: 0; margin-top: 0.5rem; }
	}
</style>
