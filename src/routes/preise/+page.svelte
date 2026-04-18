<script>
	import { reveal } from '$lib/actions.js';

	const plans = [
		{
			name: 'Einstieg',
			price: "890",
			tagline: 'Ideal für einen ersten professionellen Auftritt',
			features: [
				'1 Landing Page (eine Seite)',
				'Modernes, mobil-optimiertes Design',
				'Kontaktformular',
				'Google Maps Integration',
				'Grundlegende SEO-Einrichtung',
				'3 Monate Support'
			],
			highlight: false
		},
		{
			name: 'Standard',
			price: "1'490",
			tagline: 'Für Unternehmen mit mehreren Seiten und Inhalten',
			features: [
				'Bis zu 5 Seiten',
				'Individuelles Design',
				'Kontaktformular & Karte',
				'Bilder-Galerie',
				'SEO-Grundoptimierung',
				'6 Monate Support'
			],
			highlight: true
		},
		{
			name: 'Profi',
			price: "2'490",
			tagline: 'Umfangreichere Projekte mit mehr Seiten und Funktionen',
			features: [
				'Bis zu 10 Seiten',
				'Individuelles Design & Branding',
				'Blog oder Aktuelles-Bereich',
				'Erweiterte SEO-Optimierung',
				'Schulung für eigene Anpassungen',
				'12 Monate Support'
			],
			highlight: false
		}
	];

	const faqs = [
		{
			q: 'Was ist im Preis alles inklusive?',
			a: 'Im Festpreis inbegriffen ist das komplette Design, die Entwicklung, das Einrichten des Hostings und die Übergabe der fertigen Website. Die Support-Monate nach dem Launch sind ebenfalls enthalten. Hosting-Kosten (ca. CHF 10–15/Monat) werden direkt mit dem Anbieter abgerechnet.'
		},
		{
			q: 'Gibt es monatliche Kosten?',
			a: 'Die einmaligen Projektkosten aus unserer Offerte sind das Einzige, was Sie uns bezahlen. Dazu kommen nur die Hosting-Kosten beim Anbieter Ihrer Wahl (ca. CHF 10–15/Monat), die Sie direkt dort bezahlen.'
		},
		{
			q: 'Was wenn mein Projekt grösser ist?',
			a: 'Kein Problem – wir erstellen Ihnen gerne eine individuelle Offerte. Kontaktieren Sie uns einfach mit einer Beschreibung Ihres Projekts, und wir melden uns innerhalb von 24 Stunden.'
		},
		{
			q: 'Wie läuft die Zahlung ab?',
			a: '50% bei Projektstart, 50% nach Abnahme der fertigen Website. Keine Vorauszahlung des gesamten Betrags, kein Risiko für Sie.'
		},
		{
			q: 'Was wenn ich nicht zufrieden bin?',
			a: 'Wir arbeiten so lange mit Ihnen, bis Sie begeistert sind. Feedback-Runden sind in jedem Paket eingeschlossen. Bisher mussten wir das noch nie in Anspruch nehmen – aber die Garantie gilt.'
		}
	];

	let openFaq = $state(-1);
</script>

<svelte:head>
	<title>Preise – WebPro</title>
	<meta name="description" content="Transparente Festpreise für professionelle Webseiten. Kein Stundenlohn, keine bösen Überraschungen. Alles in CHF." />
</svelte:head>

<div class="page-hero">
	<div class="container">
		<h1>Transparente Preise</h1>
		<p>Festpreise ohne Überraschungen. Sie wissen von Anfang an, was Sie bezahlen.</p>
	</div>
</div>

<!-- Pricing -->
<section class="section">
	<div class="container">
		<div class="pricing-grid">
			{#each plans as plan, i}
				<div class="plan" class:featured={plan.highlight} use:reveal={{ delay: i * 80 }}>
					{#if plan.highlight}<span class="popular">Meistgebucht</span>{/if}
					<div class="plan-head">
						<h2>{plan.name}</h2>
						<p>{plan.tagline}</p>
					</div>
					<div class="plan-price">
						<span class="from">ab</span>
						<span class="amount">CHF {plan.price}</span>
					</div>
					<ul class="plan-features">
						{#each plan.features as f}
							<li>
								<span class="check">✓</span>
								{f}
							</li>
						{/each}
					</ul>
					<a href="/kontakt" class="btn" class:btn-green={plan.highlight} class:btn-dark={!plan.highlight}>
						Anfrage stellen
					</a>
				</div>
			{/each}
		</div>
		<p class="pricing-note" use:reveal>Alle Preise exkl. MwSt. · Hosting-Kosten (ca. CHF 10–15/Mt.) beim Anbieter separat · Individuelle Projekte auf Anfrage</p>
	</div>
</section>

<!-- FAQ -->
<section class="section section-soft">
	<div class="container faq-container">
		<div use:reveal>
			<span class="section-badge">Häufige Fragen</span>
			<h2 class="section-title">Alles klar zum Thema Preise</h2>
		</div>
		<div class="faq-list" use:reveal={{ delay: 80 }}>
			{#each faqs as faq, i}
				<div class="faq-item" class:open={openFaq === i}>
					<button onclick={() => openFaq = openFaq === i ? -1 : i}>
						<span>{faq.q}</span>
						<span class="faq-icon">{openFaq === i ? '−' : '+'}</span>
					</button>
					{#if openFaq === i}
						<div class="faq-answer"><p>{faq.a}</p></div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="cta-block">
	<div class="container">
		<h2>Noch unsicher welches Paket?</h2>
		<p>Schreiben Sie uns – wir helfen Ihnen, das Richtige zu finden. Kostenlos.</p>
		<a href="/kontakt" class="btn btn-green btn-lg">Kostenlos beraten lassen</a>
	</div>
</section>

<style>
	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		align-items: start;
		margin-bottom: 2rem;
	}
	.plan {
		background: #fff;
		border: 1.5px solid #e2e8f0;
		border-radius: 18px;
		padding: 2.25rem;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition: box-shadow 0.22s;
	}
	.plan:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
	.plan.featured {
		border-color: #059669;
		box-shadow: 0 8px 32px rgba(5,150,105,0.15);
	}
	.popular {
		position: absolute;
		top: -13px;
		left: 50%;
		transform: translateX(-50%);
		background: #059669;
		color: #fff;
		font-size: 0.72rem;
		font-weight: 700;
		padding: 0.3rem 1rem;
		border-radius: 99px;
		white-space: nowrap;
		letter-spacing: 0.04em;
	}
	.plan-head h2 { font-size: 1.25rem; font-weight: 800; margin-bottom: 0.4rem; }
	.plan-head p { font-size: 0.85rem; color: #64748b; line-height: 1.55; }
	.plan-price {
		display: flex;
		align-items: baseline;
		gap: 0.35rem;
		padding: 1.25rem 0;
		border-top: 1px solid #e2e8f0;
		border-bottom: 1px solid #e2e8f0;
	}
	.from { font-size: 0.825rem; color: #94a3b8; }
	.amount { font-size: 2rem; font-weight: 900; letter-spacing: -0.03em; color: #111827; }
	.plan-features {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		flex: 1;
	}
	.plan-features li {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.875rem;
		color: #374151;
	}
	.check {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 20px;
		height: 20px;
		background: #d1fae5;
		color: #059669;
		border-radius: 50%;
		font-size: 0.6rem;
		font-weight: 800;
	}
	.pricing-note {
		text-align: center;
		font-size: 0.82rem;
		color: #94a3b8;
		margin-top: 1rem;
	}

	/* FAQ */
	.faq-container { max-width: 700px; margin: 0 auto; }
	.faq-container .section-title { margin-bottom: 2.5rem; }
	.faq-list { display: flex; flex-direction: column; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; }
	.faq-item { border-bottom: 1px solid #e2e8f0; }
	.faq-item:last-child { border-bottom: none; }
	.faq-item button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.25rem 1.5rem;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		font-size: 0.95rem;
		font-weight: 600;
		color: #111827;
		gap: 1rem;
		transition: background 0.15s;
	}
	.faq-item button:hover { background: #f8fafc; }
	.faq-item.open button { background: #f8fafc; color: #059669; }
	.faq-icon { font-size: 1.25rem; color: #94a3b8; flex-shrink: 0; line-height: 1; }
	.faq-answer { padding: 0 1.5rem 1.25rem; background: #f8fafc; }
	.faq-answer p { font-size: 0.9rem; color: #475569; line-height: 1.75; }

	@media (max-width: 900px) {
		.pricing-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto 2rem; }
	}
</style>
