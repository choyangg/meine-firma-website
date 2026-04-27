<script>
	import { reveal } from '$lib/actions.js';

	const projects = [
		{ cat: 'Restaurant',    title: 'Trattoria Napoli',       desc: 'Elegante Website mit Speisekarte, Galerie und Online-Reservierungsformular.',   pages: '6 Seiten' },
		{ cat: 'Handwerk',      title: 'Schreinerei Huber',      desc: 'Professioneller Auftritt mit Referenzgalerie, Leistungen und Anfrage-Formular.', pages: '5 Seiten' },
		{ cat: 'Kosmetik',      title: 'Beauty Studio Lena',     desc: 'Elegante Website mit Behandlungsübersicht, Preisliste und Terminformular.',       pages: '4 Seiten' },
		{ cat: 'Praxis',        title: 'Physiotherapie Weber',   desc: 'Vertrauensvoller Auftritt mit Leistungen, Team-Vorstellung und Kontakt.',         pages: '5 Seiten' },
		{ cat: 'Bäckerei',      title: 'Bäckerei Berger',        desc: 'Herzliche Website mit Produktübersicht, Öffnungszeiten und Standort-Karte.',       pages: '4 Seiten' },
		{ cat: 'Dienstleistung',title: 'Reinigung Cristal',      desc: 'Übersichtliche Website mit Leistungspaketen, Kundenstimmen und Kontaktformular.',  pages: '5 Seiten' }
	];

	const testimonials = [
		{ name: 'Klaus Berger',    role: 'Bäckerei Berger, Zürich',      text: '„Seit wir unsere neue Website haben, melden sich viel mehr Kunden. Unkompliziert, schnell, und das Ergebnis übertrifft unsere Erwartungen."' },
		{ name: 'Sandra Hoffmann', role: 'Beauty Studio Lena, Bern',     text: '„Persönliche Betreuung von Anfang bis Ende. Immer jemand erreichbar, der erklärt was passiert. Klare Empfehlung."' },
		{ name: 'Markus Huber',    role: 'Schreinerei Huber, Basel',     text: '„Professionell, pünktlich und preiswert. Die Website sieht genau so aus, wie ich es mir vorgestellt habe."' }
	];
</script>

<svelte:head>
	<title>Referenzen – Aura</title>
</svelte:head>

<div class="page-hero">
	<div class="container">
		<span class="eyebrow">Unsere Arbeiten</span>
		<h1>Referenzen</h1>
		<p>Websites, die wir für Schweizer Unternehmen realisiert haben.</p>
	</div>
</div>

<section class="section section-black">
	<div class="container">
		<div class="proj-grid">
			{#each projects as p, i}
				<div class="proj-card" use:reveal={{ delay: (i % 3) * 60 }}>
					<div class="proj-mockup">
						<div class="mock-bar">
							<span></span><span></span><span></span>
						</div>
						<div class="mock-screen">
							<div class="mock-hero-line"></div>
							<div class="mock-line long"></div>
							<div class="mock-line medium"></div>
							<div class="mock-btn"></div>
							<div class="mock-line short"></div>
						</div>
					</div>
					<div class="proj-info">
						<div class="proj-meta">
							<span class="proj-cat">{p.cat}</span>
							<span class="proj-pages">{p.pages}</span>
						</div>
						<h3>{p.title}</h3>
						<p>{p.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="img-strip">
	<img
		src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop"
		alt="Modernes Büro"
		loading="lazy"
	/>
	<div class="img-strip-overlay"></div>
</div>

<section class="section section-dark">
	<div class="container">
		<div class="t-header" use:reveal>
			<span class="eyebrow">Kundenstimmen</span>
			<h2 class="display t-title">Was unsere Kunden sagen</h2>
		</div>
		<div class="t-grid">
			{#each testimonials as t, i}
				<div class="t-card" use:reveal={{ delay: i * 80 }}>
					<p class="t-text">{t.text}</p>
					<footer>
						<span class="t-name">{t.name}</span>
						<span class="t-role">{t.role}</span>
					</footer>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="cta-block">
	<div class="container" use:reveal>
		<span class="eyebrow">Nächstes Projekt</span>
		<h2>Ihr Unternehmen<br /><em>fehlt noch hier.</em></h2>
		<p>Lassen Sie uns gemeinsam etwas aufbauen, das Ihre Kunden begeistert.</p>
		<div class="cta-actions">
			<a href="/kontakt" class="btn-border">Projekt besprechen</a>
		</div>
	</div>
</div>

<style>
	/* Projects */
	.proj-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: rgba(255,255,255,0.05);
		border: 1px solid rgba(255,255,255,0.05);
	}
	.proj-card {
		background: var(--black);
		transition: background 0.3s;
		display: flex;
		flex-direction: column;
	}
	.proj-card:hover { background: #0e0e14; }

	/* Browser mockup */
	.proj-mockup {
		background: #0e0e14;
		padding: 1.25rem;
		border-bottom: 1px solid rgba(255,255,255,0.05);
	}
	.mock-bar { display: flex; gap: 5px; margin-bottom: 0.75rem; }
	.mock-bar span { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.1); }
	.mock-screen {
		background: #06060a;
		border: 1px solid rgba(255,255,255,0.07);
		padding: 0.875rem;
		display: flex; flex-direction: column; gap: 0.5rem;
		min-height: 80px;
	}
	.mock-hero-line { height: 18px; background: rgba(201,169,110,0.15); border-radius: 2px; width: 70%; }
	.mock-line { height: 6px; background: rgba(255,255,255,0.06); border-radius: 2px; }
	.mock-line.long { width: 85%; }
	.mock-line.medium { width: 60%; }
	.mock-line.short { width: 40%; }
	.mock-btn { height: 10px; width: 30%; background: rgba(201,169,110,0.2); border-radius: 2px; }

	.proj-info { padding: 1.5rem; flex: 1; }
	.proj-meta { display: flex; justify-content: space-between; margin-bottom: 0.875rem; }
	.proj-cat { font-size: 0.65rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #c9a96e; }
	.proj-pages { font-size: 0.72rem; color: rgba(255,255,255,0.45); }
	.proj-info h3 { font-size: 1rem; font-weight: 500; color: rgba(255,255,255,0.9); margin-bottom: 0.5rem; }
	.proj-info p { font-size: 0.83rem; color: rgba(195,212,228,0.82); line-height: 1.65; }

	/* Testimonials */
	.t-header { margin-bottom: 3rem; }
	.t-title { font-size: clamp(2rem, 4vw, 3rem); color: #fff; margin-top: 0.25rem; }
	.t-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.05); }
	.t-card { background: var(--dark); padding: 2.5rem 2rem; display: flex; flex-direction: column; justify-content: space-between; gap: 2rem; }
	.t-text { font-size: 0.9rem; color: rgba(195,212,228,0.82); line-height: 1.8; font-style: italic; }
	.t-card footer { display: flex; flex-direction: column; gap: 0.3rem; }
	.t-name { font-size: 0.85rem; font-weight: 500; color: rgba(255,255,255,0.85); }
	.t-role { font-size: 0.75rem; color: rgba(255,255,255,0.5); }

	@media (max-width: 900px) {
		.proj-grid { grid-template-columns: 1fr 1fr; }
		.t-grid { grid-template-columns: 1fr; }
	}
	@media (max-width: 600px) {
		.proj-grid { grid-template-columns: 1fr; }
	}
</style>
