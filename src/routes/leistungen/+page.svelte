<script>
	import { reveal } from '$lib/actions.js';

	const services = [
		{
			num: '01',
			title: 'Website-Erstellung',
			desc: 'Sie haben noch keine Website oder möchten ganz von vorne beginnen? Wir erstellen Ihnen eine professionelle, moderne Website – von der ersten Idee bis zum fertigen Ergebnis.',
			includes: [
				'Individuelles Design nach Ihren Wünschen',
				'Mobil-optimiert für alle Geräte',
				'Kontaktformular und Google Maps',
				'Schnelle Ladezeiten',
				'Grundlegende Suchmaschinenoptimierung',
				'3 Monate Gratis-Support nach Launch'
			]
		},
		{
			num: '02',
			title: 'Website-Überarbeitung',
			desc: 'Ihre Website ist in die Jahre gekommen? Wir modernisieren sie von Grund auf – neues Design, bessere Technik, aktueller Inhalt. Nahtlos und ohne Ausfallzeit.',
			includes: [
				'Analyse der bestehenden Website',
				'Neues, zeitgemässes Design',
				'Überarbeitung und Optimierung der Texte',
				'Technische Modernisierung',
				'Bestehende Inhalte übernehmen',
				'Nahtloser Übergang'
			]
		},
		{
			num: '03',
			title: 'Wartung & Pflege',
			desc: 'Eine Website braucht regelmässige Pflege. Wir übernehmen das für Sie – zuverlässig und unkompliziert, Monat für Monat, ohne dass Sie sich darum kümmern müssen.',
			includes: [
				'Monatliche technische Updates',
				'Sicherheits-Checks und Backups',
				'Texte und Bilder aktualisieren',
				'Technischer Support',
				'Performance überwachen',
				'Persönlicher Ansprechpartner'
			]
		}
	];

</script>

<svelte:head>
	<title>Leistungen – Aura</title>
</svelte:head>

<div class="page-hero">
	<div class="container">
		<span class="eyebrow">Was wir tun</span>
		<h1>Unsere Leistungen</h1>
		<p>Alles rund um Ihre Website – aus einer Hand, mit persönlicher Betreuung.</p>
	</div>
</div>

<section class="section section-black">
	<div class="container">
		{#each services as s, i}
			<div class="srv-block" use:reveal>
				<div class="srv-intro">
					<span class="eyebrow">{s.num}</span>
					<h2 class="display">{s.title}</h2>
					<p class="srv-desc">{s.desc}</p>
					<a href="/kontakt" class="btn-border" style="margin-top:2rem">Anfrage stellen</a>
				</div>
				<div class="srv-includes" use:reveal={{ delay: 120 }}>
					<p class="includes-label">Inklusive</p>
					<ul>
						{#each s.includes as item}
							<li>
								<span class="dot">—</span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			</div>
			{#if i < services.length - 1}
				<div class="line-divider" style="margin: 1rem 0"></div>
			{/if}
		{/each}
	</div>
</section>

<div class="cta-block">
	<div class="container" use:reveal>
		<span class="eyebrow">Los geht's</span>
		<h2>Welche Leistung<br /><em>brauchen Sie?</em></h2>
		<p>Wir beraten Sie kostenlos und unverbindlich.</p>
		<div class="cta-actions">
			<a href="/kontakt" class="btn-border">Kostenlos anfragen</a>
		</div>
	</div>
</div>

<style>
	.srv-block {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5rem;
		align-items: start;
		padding: 5rem 0;
	}
	.srv-intro h2 {
		font-size: clamp(1.75rem, 3.5vw, 2.75rem);
		font-weight: 600;
		color: #fff;
		margin: 0.5rem 0 1.25rem;
	}
	.srv-desc { font-size: 0.95rem; color: rgba(200,218,235,0.85); line-height: 1.85; }

	.includes-label {
		font-size: 0.65rem;
		font-weight: 500;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #c9a96e;
		margin-bottom: 1.5rem;
	}
	.srv-includes ul { list-style: none; display: flex; flex-direction: column; gap: 1rem; }
	.srv-includes li { display: flex; gap: 1rem; font-size: 0.9rem; color: rgba(200,218,235,0.82); }
	.dot { color: #c9a96e; flex-shrink: 0; }

	@media (max-width: 768px) {
		.srv-block { grid-template-columns: 1fr; gap: 3rem; padding: 4rem 0; }
	}
</style>
