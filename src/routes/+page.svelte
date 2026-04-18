<script>
	import { reveal } from '$lib/actions.js';
</script>

<svelte:head>
	<title>WebPro – Professionelle Webseiten für Ihr Unternehmen</title>
	<meta name="description" content="Wir erstellen professionelle Webseiten für kleine und mittlere Unternehmen in der Schweiz – modern, mobil und zum Festpreis." />
</svelte:head>

<!-- HERO -->
<section class="hero">
	<div class="glow"></div>
	<div class="container hero-body">
		<span class="hero-badge">Webdesign Agentur · Schweiz</span>
		<h1>Webseiten die<br />Kunden begeistern.</h1>
		<p>Wir gestalten professionelle Webseiten für kleine und mittlere Unternehmen –
		modern, schnell und mit persönlicher Betreuung.</p>
		<div class="hero-actions">
			<a href="/kontakt" class="btn btn-green btn-lg">Kostenlose Beratung</a>
			<a href="/referenzen" class="btn btn-ghost-white btn-lg">Unsere Arbeiten</a>
		</div>
	</div>
	<div class="stats-bar">
		<div class="container stats-grid">
			<div class="stat">
				<span class="num">50+</span>
				<span class="label">Projekte</span>
			</div>
			<div class="stat">
				<span class="num">ab CHF 890</span>
				<span class="label">Einstiegspreis</span>
			</div>
			<div class="stat">
				<span class="num">4–6</span>
				<span class="label">Wochen Lieferzeit</span>
			</div>
			<div class="stat">
				<span class="num">100%</span>
				<span class="label">Festpreis</span>
			</div>
		</div>
	</div>
</section>

<!-- LEISTUNGEN VORSCHAU -->
<section class="section section-soft">
	<div class="container">
		<div class="section-header" use:reveal>
			<span class="section-badge">Was wir tun</span>
			<h2 class="section-title">Alles aus einer Hand</h2>
			<p class="section-sub">Von der ersten Idee bis zur fertigen Website – und danach bleiben wir an Ihrer Seite.</p>
		</div>
		<div class="cards-grid">
			<a href="/leistungen" class="card" use:reveal={{ delay: 0 }}>
				<span class="card-num">01</span>
				<h3>Website-Erstellung</h3>
				<p>Neue, professionelle Website von Grund auf – individuell auf Ihr Unternehmen abgestimmt.</p>
				<span class="card-link">Mehr erfahren →</span>
			</a>
			<a href="/leistungen" class="card" use:reveal={{ delay: 100 }}>
				<span class="card-num">02</span>
				<h3>Website-Überarbeitung</h3>
				<p>Ihre bestehende Website wirkt veraltet? Wir modernisieren sie und machen sie fit für heute.</p>
				<span class="card-link">Mehr erfahren →</span>
			</a>
			<a href="/leistungen" class="card" use:reveal={{ delay: 200 }}>
				<span class="card-num">03</span>
				<h3>Wartung & Pflege</h3>
				<p>Laufende Betreuung: Updates, Texte, Bilder und technischer Support – alles inklusive.</p>
				<span class="card-link">Mehr erfahren →</span>
			</a>
		</div>
	</div>
</section>

<!-- WARUM WIR -->
<section class="section">
	<div class="container usp-inner">
		<div class="usp-text" use:reveal>
			<span class="section-badge">Warum WebPro?</span>
			<h2 class="section-title">Persönlich.<br />Professionell.<br />Pünktlich.</h2>
			<p class="section-sub">Kein Callcenter, kein Template von der Stange. Sie arbeiten direkt mit uns – und das merken Sie.</p>
			<a href="/ablauf" class="btn btn-outline" style="margin-top:1.75rem">So arbeiten wir →</a>
		</div>
		<div class="usp-list" use:reveal={{ delay: 120 }}>
			<div class="usp-item">
				<div class="check">✓</div>
				<div>
					<strong>Fester Ansprechpartner</strong>
					<p>Immer dieselbe Person als Kontakt – kein Durchreichen im Support.</p>
				</div>
			</div>
			<div class="usp-item">
				<div class="check">✓</div>
				<div>
					<strong>Transparente Festpreise</strong>
					<p>Kein Stundenlohn, keine bösen Überraschungen. Preis bleibt, was vereinbart wurde.</p>
				</div>
			</div>
			<div class="usp-item">
				<div class="check">✓</div>
				<div>
					<strong>In 4–6 Wochen fertig</strong>
					<p>Wir liefern pünktlich. Ihre neue Website ist schnell online.</p>
				</div>
			</div>
			<div class="usp-item">
				<div class="check">✓</div>
				<div>
					<strong>Made in der Schweiz</strong>
					<p>Wir kennen den Schweizer Markt und die Erwartungen Ihrer Kunden.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- TESTIMONIAL -->
<section class="section section-soft">
	<div class="container" use:reveal>
		<blockquote class="big-quote">
			<p>„Seit wir unsere neue Website haben, melden sich viel mehr Kunden. Die Zusammenarbeit war unkompliziert – das Ergebnis übertrifft unsere Erwartungen."</p>
			<footer>
				<span class="name">Klaus Berger</span>
				<span class="role">Inhaber, Bäckerei Berger, Zürich</span>
			</footer>
		</blockquote>
	</div>
</section>

<!-- CTA -->
<section class="cta-block" use:reveal>
	<div class="container">
		<h2>Bereit für Ihre neue Website?</h2>
		<p>Erste Beratung kostenlos und unverbindlich.</p>
		<a href="/kontakt" class="btn btn-green btn-lg">Jetzt anfragen</a>
	</div>
</section>

<style>
	/* Hero */
	.hero {
		background: #0c0c0e;
		position: relative;
		overflow: hidden;
	}
	.glow {
		position: absolute;
		width: 900px;
		height: 700px;
		background: radial-gradient(ellipse, rgba(5,150,105,0.09) 0%, transparent 65%);
		top: -120px;
		left: 50%;
		transform: translateX(-50%);
		pointer-events: none;
		animation: breathe 8s ease-in-out infinite;
	}
	@keyframes breathe {
		0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
		50% { opacity: 1; transform: translateX(-50%) scale(1.08); }
	}
	.hero-body {
		position: relative;
		z-index: 1;
		padding-top: 7rem;
		padding-bottom: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.625rem;
	}
	.hero-badge {
		display: inline-block;
		background: rgba(5,150,105,0.14);
		color: #34d399;
		border: 1px solid rgba(52,211,153,0.2);
		padding: 0.4rem 1rem;
		border-radius: 99px;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		animation: fadeUp 0.7s ease both;
	}
	.hero-body h1 {
		font-size: clamp(3rem, 6.5vw, 5rem);
		font-weight: 900;
		color: #fff;
		letter-spacing: -0.04em;
		line-height: 1.06;
		animation: fadeUp 0.7s ease 0.1s both;
	}
	.hero-body > p {
		font-size: 1.1rem;
		color: rgba(255,255,255,0.52);
		max-width: 440px;
		line-height: 1.75;
		animation: fadeUp 0.7s ease 0.2s both;
	}
	.hero-actions {
		display: flex;
		gap: 0.875rem;
		flex-wrap: wrap;
		justify-content: center;
		animation: fadeUp 0.7s ease 0.3s both;
	}
	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(28px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Stats bar */
	.stats-bar {
		position: relative;
		z-index: 1;
		border-top: 1px solid rgba(255,255,255,0.07);
		animation: fadeUp 0.7s ease 0.45s both;
	}
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
	.stat {
		padding: 1.75rem 1.25rem;
		text-align: center;
		border-right: 1px solid rgba(255,255,255,0.07);
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}
	.stat:last-child { border-right: none; }
	.stat .num { font-size: 1.45rem; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
	.stat .label { font-size: 0.78rem; color: rgba(255,255,255,0.4); }

	/* Cards */
	.section-header { margin-bottom: 3rem; }
	.cards-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		background: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 14px;
		padding: 2rem;
		transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s;
		color: inherit;
	}
	.card:hover {
		transform: translateY(-5px);
		box-shadow: 0 16px 48px rgba(0,0,0,0.09);
		border-color: #cbd5e1;
	}
	.card-num { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; color: #059669; }
	.card h3 { font-size: 1.05rem; font-weight: 700; color: #111827; }
	.card p { font-size: 0.875rem; color: #64748b; line-height: 1.65; flex: 1; }
	.card-link { font-size: 0.85rem; font-weight: 600; color: #059669; }

	/* USP */
	.usp-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6rem;
		align-items: center;
	}
	.usp-list { display: flex; flex-direction: column; gap: 1.625rem; }
	.usp-item { display: flex; gap: 1rem; align-items: flex-start; }
	.check {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 28px;
		height: 28px;
		background: #d1fae5;
		color: #059669;
		border-radius: 50%;
		font-size: 0.75rem;
		font-weight: 800;
		margin-top: 0.1rem;
	}
	.usp-item strong { display: block; font-size: 0.95rem; margin-bottom: 0.3rem; }
	.usp-item p { font-size: 0.875rem; color: #64748b; line-height: 1.65; }

	/* Testimonial */
	.big-quote {
		max-width: 760px;
		margin: 0 auto;
		text-align: center;
	}
	.big-quote p {
		font-size: clamp(1.15rem, 2.5vw, 1.4rem);
		font-weight: 500;
		color: #1e293b;
		line-height: 1.7;
		font-style: italic;
		margin-bottom: 1.625rem;
	}
	.big-quote footer { display: flex; flex-direction: column; gap: 0.3rem; align-items: center; }
	.big-quote .name { font-weight: 700; font-size: 0.95rem; }
	.big-quote .role { font-size: 0.85rem; color: #64748b; }

	@media (max-width: 768px) {
		.stats-grid { grid-template-columns: repeat(2, 1fr); }
		.stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
		.stat:nth-child(2n) { }
		.stat:last-child { border-bottom: none; }
		.cards-grid { grid-template-columns: 1fr; }
		.usp-inner { grid-template-columns: 1fr; gap: 3rem; }
	}
</style>
