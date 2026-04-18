<script>
	import { reveal } from '$lib/actions.js';

	const services = [
		{
			num: '01',
			title: 'Website-Erstellung',
			desc: 'Sie haben noch keine Website oder möchten ganz von vorne anfangen? Wir erstellen Ihnen eine professionelle, moderne Website – von der ersten Idee bis zum fertigen Ergebnis.',
			includes: [
				'Individuelles Design nach Ihren Wünschen',
				'Mobil-optimiert für Smartphone und Tablet',
				'Kontaktformular und Google Maps Integration',
				'Schnelle Ladezeiten',
				'Grundlegende Suchmaschinenoptimierung (SEO)',
				'3 Monate Gratis-Support nach Launch'
			]
		},
		{
			num: '02',
			title: 'Website-Überarbeitung',
			desc: 'Ihre Website ist in die Jahre gekommen oder entspricht nicht mehr Ihren Ansprüchen? Wir modernisieren sie von Grund auf – neues Design, bessere Technik, aktueller Inhalt.',
			includes: [
				'Analyse und Auswertung der bestehenden Website',
				'Neues, zeitgemässes Design',
				'Überarbeitung und Optimierung der Texte',
				'Technische Modernisierung und Beschleunigung',
				'Bestehende Inhalte übernehmen und aktualisieren',
				'Nahtloser Übergang ohne Ausfallzeit'
			]
		},
		{
			num: '03',
			title: 'Wartung & Pflege',
			desc: 'Eine Website ist kein Einmalprojekt. Sie braucht regelmässige Pflege. Wir übernehmen das für Sie – zuverlässig und unkompliziert, Monat für Monat.',
			includes: [
				'Monatliche technische Updates',
				'Sicherheits-Checks und Backups',
				'Texte und Bilder aktualisieren',
				'Technischer Support bei Problemen',
				'Geschwindigkeit und Performance überwachen',
				'Persönlicher Ansprechpartner'
			]
		}
	];

	const customers = [
		'Restaurants & Cafés',
		'Handwerker & Gewerbe',
		'Coiffeure & Kosmetik',
		'Arztpraxen & Therapeuten',
		'Lokale Geschäfte',
		'Freiberufler & Dienstleister',
		'Vereine & Verbände',
		'Kleinunternehmen aller Branchen'
	];
</script>

<svelte:head>
	<title>Leistungen – WebPro</title>
	<meta name="description" content="Website-Erstellung, Überarbeitung und Wartung für Schweizer Unternehmen. Professionell, persönlich und zum Festpreis." />
</svelte:head>

<div class="page-hero">
	<div class="container">
		<h1>Unsere Leistungen</h1>
		<p>Alles rund um Ihre Website – aus einer Hand, mit persönlicher Betreuung.</p>
	</div>
</div>

<!-- Services -->
<section class="section">
	<div class="container">
		{#each services as s, i}
			<div class="service-block" class:reversed={i % 2 !== 0} use:reveal>
				<div class="service-text">
					<span class="section-badge">{s.num}</span>
					<h2 class="section-title">{s.title}</h2>
					<p class="section-sub">{s.desc}</p>
					<a href="/kontakt" class="btn btn-dark" style="margin-top:1.5rem">Anfrage stellen</a>
				</div>
				<div class="service-includes" use:reveal={{ delay: 100 }}>
					<h3>Was dabei inklusive ist</h3>
					<ul>
						{#each s.includes as item}
							<li>
								<span class="check">✓</span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			</div>
			{#if i < services.length - 1}
				<div class="divider"></div>
			{/if}
		{/each}
	</div>
</section>

<!-- Für wen -->
<section class="section section-soft">
	<div class="container">
		<div class="customers-header" use:reveal>
			<span class="section-badge">Für wen wir arbeiten</span>
			<h2 class="section-title">Wir helfen Unternehmen jeder Grösse</h2>
			<p class="section-sub">Egal ob Einzelperson oder kleines Team – wenn Sie eine professionelle Website brauchen, sind Sie bei uns richtig.</p>
		</div>
		<div class="customers-grid" use:reveal={{ delay: 80 }}>
			{#each customers as c}
				<div class="customer-tag">{c}</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="cta-block">
	<div class="container">
		<h2>Welche Leistung brauchen Sie?</h2>
		<p>Schreiben Sie uns – wir beraten Sie kostenlos und unverbindlich.</p>
		<a href="/kontakt" class="btn btn-green btn-lg">Kostenlose Beratung anfragen</a>
	</div>
</section>

<style>
	.service-block {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5rem;
		align-items: center;
		padding: 3.5rem 0;
	}
	.service-block.reversed { direction: rtl; }
	.service-block.reversed > * { direction: ltr; }

	.service-includes h3 {
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #94a3b8;
		margin-bottom: 1.25rem;
	}
	.service-includes ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
	}
	.service-includes li {
		display: flex;
		align-items: center;
		gap: 0.875rem;
		font-size: 0.925rem;
		color: #1e293b;
	}
	.check {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 22px;
		height: 22px;
		background: #d1fae5;
		color: #059669;
		border-radius: 50%;
		font-size: 0.65rem;
		font-weight: 800;
	}

	.divider {
		height: 1px;
		background: #e2e8f0;
	}

	/* Customers */
	.customers-header { margin-bottom: 2.5rem; }
	.customers-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
	.customer-tag {
		padding: 0.625rem 1.25rem;
		background: #fff;
		border: 1.5px solid #e2e8f0;
		border-radius: 99px;
		font-size: 0.875rem;
		font-weight: 500;
		color: #374151;
		transition: border-color 0.2s, color 0.2s;
	}
	.customer-tag:hover { border-color: #059669; color: #059669; }

	@media (max-width: 768px) {
		.service-block { grid-template-columns: 1fr; gap: 2rem; }
		.service-block.reversed { direction: ltr; }
	}
</style>
