<script>
	import { reveal } from '$lib/actions.js';

	let submitted = $state(false);

	function handleSubmit(e) {
		e.preventDefault();
		submitted = true;
	}
</script>

<svelte:head>
	<title>Kontakt – WebPro</title>
	<meta name="description" content="Kostenlose Beratung anfragen – wir melden uns innerhalb von 24 Stunden." />
</svelte:head>

<div class="page-hero">
	<div class="container">
		<h1>Kontakt aufnehmen</h1>
		<p>Erste Beratung kostenlos. Wir melden uns innerhalb von 24 Stunden.</p>
	</div>
</div>

<section class="section">
	<div class="container contact-grid">

		<!-- Info -->
		<div class="contact-info" use:reveal>
			<h2>Wir freuen uns<br />von Ihnen zu hören.</h2>
			<p>Erzählen Sie uns von Ihrem Unternehmen und was Sie sich vorstellen. Wir schauen es uns an und melden uns mit einer kostenlosen Einschätzung.</p>

			<div class="info-items">
				<div class="info-item">
					<div class="info-icon">✉</div>
					<div>
						<span class="info-label">E-Mail</span>
						<a href="mailto:hallo@webpro.ch">hallo@webpro.ch</a>
					</div>
				</div>
				<div class="info-item">
					<div class="info-icon">✆</div>
					<div>
						<span class="info-label">Telefon</span>
						<a href="tel:+41441234567">+41 44 123 45 67</a>
					</div>
				</div>
				<div class="info-item">
					<div class="info-icon">◷</div>
					<div>
						<span class="info-label">Erreichbarkeit</span>
						<span>Mo–Fr, 9:00–18:00 Uhr</span>
					</div>
				</div>
				<div class="info-item">
					<div class="info-icon">◉</div>
					<div>
						<span class="info-label">Standort</span>
						<span>Schweiz</span>
					</div>
				</div>
			</div>

			<div class="promise-box">
				<strong>Unser Versprechen</strong>
				<p>Kein Verkaufsdruck. Keine Verpflichtung. Wir hören zuerst zu – und machen erst dann ein Angebot, wenn wir verstehen, was Sie wirklich brauchen.</p>
			</div>
		</div>

		<!-- Form -->
		<div class="form-wrapper" use:reveal={{ delay: 120 }}>
			{#if submitted}
				<div class="success-state">
					<div class="success-icon">✓</div>
					<h3>Nachricht gesendet!</h3>
					<p>Vielen Dank. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit}>
					<div class="form-row">
						<div class="field">
							<label for="name">Ihr Name *</label>
							<input id="name" type="text" placeholder="Max Mustermann" required />
						</div>
						<div class="field">
							<label for="firma">Unternehmen</label>
							<input id="firma" type="text" placeholder="Muster GmbH" />
						</div>
					</div>
					<div class="field">
						<label for="email">E-Mail-Adresse *</label>
						<input id="email" type="email" placeholder="max@muster.ch" required />
					</div>
					<div class="field">
						<label for="tel">Telefonnummer</label>
						<input id="tel" type="tel" placeholder="+41 44 123 45 67" />
					</div>
					<div class="field">
						<label for="leistung">Was benötigen Sie?</label>
						<select id="leistung">
							<option value="" disabled selected>Bitte auswählen...</option>
							<option>Neue Website erstellen</option>
							<option>Bestehende Website überarbeiten</option>
							<option>Wartung & Pflege</option>
							<option>Ich bin noch unsicher</option>
							<option>Anderes</option>
						</select>
					</div>
					<div class="field">
						<label for="msg">Ihr Anliegen</label>
						<textarea id="msg" rows="4" placeholder="Erzählen Sie uns kurz, worum es geht..."></textarea>
					</div>
					<button type="submit" class="btn btn-green btn-lg submit-btn">
						Anfrage absenden →
					</button>
					<p class="form-note">* Pflichtfelder · Ihre Daten werden vertraulich behandelt und nicht weitergegeben.</p>
				</form>
			{/if}
		</div>

	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1.4fr;
		gap: 6rem;
		align-items: start;
	}

	/* Info */
	.contact-info h2 {
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		font-weight: 800;
		letter-spacing: -0.025em;
		line-height: 1.2;
		margin-bottom: 1.25rem;
	}
	.contact-info > p {
		font-size: 0.95rem;
		color: #64748b;
		line-height: 1.75;
		margin-bottom: 2.5rem;
	}

	.info-items { display: flex; flex-direction: column; gap: 1.375rem; margin-bottom: 2.5rem; }
	.info-item { display: flex; gap: 1rem; align-items: flex-start; }
	.info-icon {
		width: 36px;
		height: 36px;
		min-width: 36px;
		background: #f1f5f9;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
		color: #475569;
	}
	.info-label { display: block; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; margin-bottom: 0.2rem; }
	.info-item a, .info-item span { font-size: 0.925rem; color: #1e293b; font-weight: 500; }
	.info-item a:hover { color: #059669; }

	.promise-box {
		background: #f0fdf4;
		border: 1px solid #bbf7d0;
		border-radius: 12px;
		padding: 1.375rem;
	}
	.promise-box strong { display: block; font-size: 0.875rem; color: #065f46; margin-bottom: 0.5rem; }
	.promise-box p { font-size: 0.85rem; color: #064e3b; line-height: 1.65; }

	/* Form */
	.form-wrapper {
		background: #f8fafc;
		border: 1px solid #e2e8f0;
		border-radius: 18px;
		padding: 2.5rem;
	}
	form { display: flex; flex-direction: column; gap: 1.125rem; }
	.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
	.field { display: flex; flex-direction: column; gap: 0.4rem; }
	label { font-size: 0.82rem; font-weight: 600; color: #374151; }
	input, select, textarea {
		padding: 0.8rem 1rem;
		border: 1.5px solid #e2e8f0;
		border-radius: 8px;
		font-size: 0.9rem;
		background: #fff;
		color: #111827;
		transition: border-color 0.15s, box-shadow 0.15s;
		width: 100%;
	}
	input:focus, select:focus, textarea:focus {
		outline: none;
		border-color: #059669;
		box-shadow: 0 0 0 3px rgba(5,150,105,0.1);
	}
	textarea { resize: vertical; line-height: 1.6; }
	.submit-btn { width: 100%; }
	.form-note { font-size: 0.78rem; color: #94a3b8; line-height: 1.5; }

	/* Success */
	.success-state {
		text-align: center;
		padding: 3rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.success-icon {
		width: 64px;
		height: 64px;
		background: #d1fae5;
		color: #059669;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 800;
	}
	.success-state h3 { font-size: 1.4rem; font-weight: 800; }
	.success-state p { font-size: 0.95rem; color: #64748b; line-height: 1.65; max-width: 340px; }

	@media (max-width: 900px) {
		.contact-grid { grid-template-columns: 1fr; gap: 3rem; }
		.form-row { grid-template-columns: 1fr; }
	}
</style>
