<script>
	import { reveal } from '$lib/actions.js';

	const projects = [
		{
			category: 'Restaurant',
			title: 'Trattoria Napoli',
			desc: 'Elegante Restaurant-Website mit Speisekarte, Bildergalerie und Online-Reservierung per Formular.',
			pages: '6 Seiten'
		},
		{
			category: 'Handwerk',
			title: 'Schreinerei Huber',
			desc: 'Professioneller Webauftritt mit Referenzgalerie, Leistungsübersicht und einfachem Anfrage-Formular.',
			pages: '5 Seiten'
		},
		{
			category: 'Kosmetik',
			title: 'Beauty Studio Lena',
			desc: 'Elegante Website mit Behandlungsübersicht, Preisliste und Online-Terminbuchung per Formular.',
			pages: '4 Seiten'
		},
		{
			category: 'Praxis',
			title: 'Physiotherapie Weber',
			desc: 'Vertrauenserweckende Praxis-Website mit Leistungen, Team-Vorstellung und Kontaktformular.',
			pages: '5 Seiten'
		},
		{
			category: 'Bäckerei',
			title: 'Bäckerei Berger',
			desc: 'Herzliche Website mit Produktübersicht, Öffnungszeiten und Standort-Karte. Jetzt deutlich mehr Laufkundschaft.',
			pages: '4 Seiten'
		},
		{
			category: 'Dienstleistung',
			title: 'Reinigung Cristal',
			desc: 'Klare, übersichtliche Website mit Leistungspaket-Übersicht, Kundenstimmen und Kontaktformular.',
			pages: '5 Seiten'
		}
	];

	const testimonials = [
		{
			name: 'Klaus Berger',
			role: 'Bäckerei Berger, Zürich',
			text: '„Seit wir unsere neue Website haben, melden sich viel mehr Kunden. Unkompliziert, schnell und das Ergebnis übertrifft unsere Erwartungen."'
		},
		{
			name: 'Sandra Hoffmann',
			role: 'Beauty Studio Lena, Bern',
			text: '„Persönliche Betreuung von Anfang bis Ende. Wir hatten immer jemanden, der uns erklärt, was passiert. Klare Empfehlung!"'
		},
		{
			name: 'Markus Huber',
			role: 'Schreinerei Huber, Basel',
			text: '„Professionell, pünktlich und preiswert. Die Website sieht genau so aus, wie ich es mir vorgestellt habe – ohne dass ich ein IT-Experte sein musste."'
		}
	];
</script>

<svelte:head>
	<title>Referenzen – WebPro</title>
	<meta name="description" content="Webseiten, die wir für Schweizer Unternehmen realisiert haben – Restaurants, Handwerker, Praxen und mehr." />
</svelte:head>

<div class="page-hero">
	<div class="container">
		<h1>Unsere Referenzen</h1>
		<p>Einige Websites, die wir für Schweizer Unternehmen realisiert haben.</p>
	</div>
</div>

<!-- Projects grid -->
<section class="section">
	<div class="container">
		<div class="projects-grid">
			{#each projects as p, i}
				<div class="project-card" use:reveal={{ delay: (i % 3) * 80 }}>
					<div class="project-visual">
						<div class="browser-bar">
							<span class="dot"></span><span class="dot"></span><span class="dot"></span>
						</div>
						<div class="project-screen">
							<div class="screen-line long"></div>
							<div class="screen-line medium"></div>
							<div class="screen-block"></div>
							<div class="screen-line short"></div>
							<div class="screen-line medium"></div>
						</div>
					</div>
					<div class="project-info">
						<div class="project-meta">
							<span class="project-cat">{p.category}</span>
							<span class="project-pages">{p.pages}</span>
						</div>
						<h3>{p.title}</h3>
						<p>{p.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="section section-soft">
	<div class="container">
		<div class="t-header" use:reveal>
			<span class="section-badge">Kundenstimmen</span>
			<h2 class="section-title">Was unsere Kunden sagen</h2>
		</div>
		<div class="t-grid">
			{#each testimonials as t, i}
				<div class="t-card" use:reveal={{ delay: i * 100 }}>
					<div class="stars">★★★★★</div>
					<p>{t.text}</p>
					<footer>
						<strong>{t.name}</strong>
						<span>{t.role}</span>
					</footer>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="cta-block">
	<div class="container">
		<h2>Ihr Unternehmen fehlt noch hier.</h2>
		<p>Lassen Sie uns gemeinsam etwas aufbauen, das Ihre Kunden begeistert.</p>
		<a href="/kontakt" class="btn btn-green btn-lg">Projekt besprechen</a>
	</div>
</section>

<style>
	/* Projects */
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}
	.project-card {
		border: 1px solid #e2e8f0;
		border-radius: 16px;
		overflow: hidden;
		transition: transform 0.22s, box-shadow 0.22s;
	}
	.project-card:hover { transform: translateY(-5px); box-shadow: 0 16px 48px rgba(0,0,0,0.09); }

	/* Browser mockup */
	.project-visual {
		background: #f1f5f9;
		padding: 1rem;
		border-bottom: 1px solid #e2e8f0;
	}
	.browser-bar {
		display: flex;
		gap: 5px;
		margin-bottom: 0.75rem;
	}
	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #cbd5e1;
	}
	.project-screen {
		background: #fff;
		border-radius: 6px;
		padding: 0.875rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		min-height: 90px;
	}
	.screen-line {
		height: 7px;
		background: #e2e8f0;
		border-radius: 4px;
	}
	.screen-line.long { width: 80%; }
	.screen-line.medium { width: 60%; }
	.screen-line.short { width: 40%; }
	.screen-block {
		height: 28px;
		width: 45%;
		background: #d1fae5;
		border-radius: 4px;
	}

	.project-info { padding: 1.375rem 1.5rem 1.625rem; }
	.project-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
	}
	.project-cat {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #059669;
	}
	.project-pages {
		font-size: 0.75rem;
		color: #94a3b8;
	}
	.project-info h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
	.project-info p { font-size: 0.865rem; color: #64748b; line-height: 1.65; }

	/* Testimonials */
	.t-header { margin-bottom: 2.5rem; }
	.t-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}
	.t-card {
		background: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 14px;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.stars { color: #f59e0b; letter-spacing: 2px; font-size: 0.9rem; }
	.t-card p { font-size: 0.9rem; color: #374151; line-height: 1.75; font-style: italic; flex: 1; }
	.t-card footer { display: flex; flex-direction: column; gap: 0.2rem; }
	.t-card strong { font-size: 0.875rem; }
	.t-card span { font-size: 0.8rem; color: #94a3b8; }

	@media (max-width: 900px) {
		.projects-grid { grid-template-columns: repeat(2, 1fr); }
		.t-grid { grid-template-columns: repeat(2, 1fr); }
	}
	@media (max-width: 600px) {
		.projects-grid { grid-template-columns: 1fr; }
		.t-grid { grid-template-columns: 1fr; }
	}
</style>
