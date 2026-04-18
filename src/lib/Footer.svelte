<footer>
	<div class="container footer-grid">
		<div class="brand">
			<a href="/" class="logo">Web<span>Pro</span></a>
			<p>Professionelle Webseiten für Schweizer Unternehmen. Persönlich, pünktlich, zum Festpreis.</p>
		</div>
		<div class="col">
			<h4>Leistungen</h4>
			<a href="/leistungen">Website-Erstellung</a>
			<a href="/leistungen">Website-Überarbeitung</a>
			<a href="/leistungen">Wartung & Pflege</a>
		</div>
		<div class="col">
			<h4>Unternehmen</h4>
			<a href="/ablauf">Unser Ablauf</a>
			<a href="/referenzen">Referenzen</a>
			<a href="/preise">Preise</a>
			<a href="/kontakt">Kontakt</a>
		</div>
		<div class="col">
			<h4>Kontakt</h4>
			<a href="mailto:hallo@webpro.ch">hallo@webpro.ch</a>
			<a href="tel:+41441234567">+41 44 123 45 67</a>
			<span>Schweiz</span>
		</div>
	</div>
	<div class="bottom">
		<div class="container bottom-inner">
			<span>© 2026 WebPro · Alle Rechte vorbehalten</span>
			<div class="legal">
				<a href="#">Datenschutz</a>
				<a href="#">Impressum</a>
				<a href="#">AGB</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer { background: #0c0c0e; color: #64748b; }

	.footer-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: 3rem;
		padding: 4rem 0 3rem;
	}

	.brand .logo {
		display: block;
		font-size: 1.3rem;
		font-weight: 900;
		color: #fff;
		letter-spacing: -0.035em;
		margin-bottom: 1rem;
	}
	.brand .logo span { color: #059669; }
	.brand p { font-size: 0.875rem; color: #475569; line-height: 1.7; max-width: 220px; }

	.col { display: flex; flex-direction: column; gap: 0.6rem; }
	.col h4 {
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #94a3b8;
		margin-bottom: 0.375rem;
	}
	.col a, .col span { font-size: 0.875rem; color: #475569; transition: color 0.15s; }
	.col a:hover { color: #e2e8f0; }

	.bottom { border-top: 1px solid #1e293b; }
	.bottom-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 0;
		font-size: 0.8rem;
		color: #334155;
	}
	.legal { display: flex; gap: 1.25rem; }
	.legal a { color: #334155; transition: color 0.15s; }
	.legal a:hover { color: #94a3b8; }

	@media (max-width: 768px) {
		.footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
		.brand { grid-column: 1 / -1; }
		.brand p { max-width: none; }
		.bottom-inner { flex-direction: column; gap: 0.75rem; text-align: center; }
	}
	@media (max-width: 480px) {
		.footer-grid { grid-template-columns: 1fr; }
	}
</style>
