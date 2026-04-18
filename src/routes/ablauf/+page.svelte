<script>
	import { reveal } from '$lib/actions.js';

	const steps = [
		{
			num: '01',
			title: 'Kostenloses Erstgespräch',
			duration: 'ca. 30–60 Minuten',
			desc: 'Wir lernen Ihr Unternehmen kennen. Sie erzählen uns, was Sie sich wünschen – und wir erklären Ihnen, was möglich ist. Kein Verkaufsgespräch, sondern echte Beratung. Kostenlos und unverbindlich.'
		},
		{
			num: '02',
			title: 'Offerte & Konzept',
			duration: 'innerhalb von 3–5 Tagen',
			desc: 'Sie erhalten von uns eine klare, schriftliche Offerte mit Festpreis. Keine versteckten Kosten, keine Stunden. Zusätzlich skizzieren wir erste Ideen für das Design und die Struktur Ihrer Website.'
		},
		{
			num: '03',
			title: 'Design & Entwicklung',
			duration: '3–5 Wochen',
			desc: 'Wir bauen Ihre Website. Sie erhalten regelmässige Updates und können jederzeit Feedback geben. Am Ende der Entwicklung zeigen wir Ihnen eine Vorschau – und passen noch an, was nicht passt.'
		},
		{
			num: '04',
			title: 'Launch & Übergabe',
			duration: 'Fertig!',
			desc: 'Ihre Website geht online. Wir richten alles ein, prüfen nochmals alle Details und erklären Ihnen, wie Sie kleine Änderungen selbst vornehmen können. Danach bleiben wir 3 Monate als Ansprechpartner erreichbar.'
		}
	];

	const faqs = [
		{
			q: 'Was brauche ich, um zu starten?',
			a: 'Eigentlich nur eine Idee und Ihren Unternehmensname. Texte, Bilder und Inhalte erarbeiten wir gemeinsam mit Ihnen – Sie müssen kein Experte sein.'
		},
		{
			q: 'Was kostet mich die Beratung?',
			a: 'Das erste Gespräch ist komplett kostenlos und unverbindlich. Erst wenn Sie sich für uns entscheiden, beginnt das Projekt – und dann gilt der vereinbarte Festpreis.'
		},
		{
			q: 'Kann ich die Website später selbst bearbeiten?',
			a: 'Ja. Wir bauen Ihre Website so, dass Sie einfache Änderungen wie Texte oder Öffnungszeiten selbst anpassen können. Bei grösseren Änderungen stehen wir gerne zur Seite.'
		},
		{
			q: 'Was passiert nach der Übergabe?',
			a: 'Die ersten 3 Monate sind im Preis inbegriffen – für Fragen, kleine Anpassungen und technischen Support. Danach bieten wir optionale Wartungspakete an.'
		},
		{
			q: 'Wie läuft die Zusammenarbeit ab?',
			a: 'Per E-Mail, Telefon oder Video-Call – ganz wie Sie möchten. Wir passen uns Ihrem Alltag an. Kein Bürobesuch nötig, keine komplizierte Software.'
		}
	];

	let openFaq = $state(-1);
</script>

<svelte:head>
	<title>Unser Ablauf – WebPro</title>
	<meta name="description" content="So arbeiten wir: Vom ersten Gespräch bis zur fertigen Website in 4 einfachen Schritten." />
</svelte:head>

<div class="page-hero">
	<div class="container">
		<h1>So arbeiten wir</h1>
		<p>Klar, transparent und ohne Überraschungen – von Anfang bis Ende.</p>
	</div>
</div>

<!-- Steps -->
<section class="section">
	<div class="container">
		<div class="steps">
			{#each steps as step, i}
				<div class="step" use:reveal={{ delay: i * 80 }}>
					<div class="step-left">
						<div class="step-num">{step.num}</div>
						{#if i < steps.length - 1}
							<div class="step-line"></div>
						{/if}
					</div>
					<div class="step-body">
						<div class="step-meta">{step.duration}</div>
						<h2>{step.title}</h2>
						<p>{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="section section-soft">
	<div class="container faq-container">
		<div use:reveal>
			<span class="section-badge">Häufige Fragen</span>
			<h2 class="section-title">Ihre Fragen, unsere Antworten</h2>
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
		<h2>Bereit für den ersten Schritt?</h2>
		<p>Das Erstgespräch ist kostenlos – ohne jede Verpflichtung.</p>
		<a href="/kontakt" class="btn btn-green btn-lg">Jetzt Termin vereinbaren</a>
	</div>
</section>

<style>
	/* Steps */
	.steps { display: flex; flex-direction: column; gap: 0; max-width: 760px; margin: 0 auto; }
	.step { display: flex; gap: 2.5rem; }
	.step-left {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
	}
	.step-num {
		width: 52px;
		height: 52px;
		background: #0c0c0e;
		color: #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		flex-shrink: 0;
	}
	.step-line {
		width: 1px;
		flex: 1;
		background: #e2e8f0;
		margin: 0.75rem 0;
		min-height: 3rem;
	}
	.step-body {
		padding-bottom: 3.5rem;
		padding-top: 0.75rem;
	}
	.step-meta {
		font-size: 0.78rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #059669;
		margin-bottom: 0.625rem;
	}
	.step-body h2 {
		font-size: 1.4rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		margin-bottom: 0.875rem;
	}
	.step-body p { font-size: 0.95rem; color: #64748b; line-height: 1.75; max-width: 560px; }

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
	.faq-icon {
		font-size: 1.25rem;
		color: #94a3b8;
		flex-shrink: 0;
		line-height: 1;
	}
	.faq-answer {
		padding: 0 1.5rem 1.25rem;
		background: #f8fafc;
	}
	.faq-answer p { font-size: 0.9rem; color: #475569; line-height: 1.75; }

	@media (max-width: 600px) {
		.step { gap: 1.5rem; }
		.step-body { padding-bottom: 2.5rem; }
	}
</style>
