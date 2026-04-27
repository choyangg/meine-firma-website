<script>
	import { reveal } from '$lib/actions.js';

	let sent = $state(false);

	function submit(e) {
		e.preventDefault();
		sent = true;
	}
</script>

<svelte:head>
	<title>Kontakt – Aura</title>
</svelte:head>

<div class="page-hero">
	<div class="container">
		<span class="eyebrow">Sprechen wir</span>
		<h1>Kontakt aufnehmen</h1>
		<p>Erste Beratung kostenlos. Wir melden uns innerhalb von 24 Stunden.</p>
	</div>
</div>

<section class="section section-black">
	<div class="container contact-grid">

		<div class="contact-info" use:reveal>
			<h2 class="display info-title">Wir freuen uns<br /><em>von Ihnen zu hören.</em></h2>
			<p class="info-sub">
				Erzählen Sie uns von Ihrem Unternehmen und was Sie sich vorstellen.
				Wir schauen es uns an und melden uns mit einer kostenlosen Einschätzung.
			</p>
			<div class="info-list">
				<div class="info-row">
					<span class="info-label">E-Mail</span>
					<a href="mailto:information.auramarketing@gmail.com">information.auramarketing@gmail.com</a>
				</div>
				<div class="info-row">
					<span class="info-label">Telefon</span>
					<a href="tel:+41767020406">+41 76 702 04 06</a>
				</div>
				<div class="info-row">
					<span class="info-label">Erreichbarkeit</span>
					<span>Mo–Fr, 9:00–18:00 Uhr</span>
				</div>
				<div class="info-row">
					<span class="info-label">Standort</span>
					<span>Schweiz</span>
				</div>
			</div>
			<div class="promise">
				<p>Kein Verkaufsdruck. Keine Verpflichtung. Wir hören zuerst zu – und machen erst dann ein Angebot, wenn wir verstehen, was Sie wirklich brauchen.</p>
			</div>
		</div>

		<div class="form-side" use:reveal={{ delay: 140 }}>
			{#if sent}
				<div class="success">
					<div class="success-mark">✓</div>
					<h3>Nachricht gesendet.</h3>
					<p>Wir melden uns innerhalb von 24 Stunden.</p>
				</div>
			{:else}
				<form onsubmit={submit}>
					<div class="row-2">
						<div class="field">
							<label for="name">Name *</label>
							<input id="name" type="text" placeholder="Max Mustermann" required />
						</div>
						<div class="field">
							<label for="firma">Unternehmen</label>
							<input id="firma" type="text" placeholder="Muster GmbH" />
						</div>
					</div>
					<div class="field">
						<label for="email">E-Mail *</label>
						<input id="email" type="email" placeholder="max@muster.ch" required />
					</div>
					<div class="field">
						<label for="tel">Telefon</label>
						<input id="tel" type="tel" placeholder="+41 44 123 45 67" />
					</div>
					<div class="field">
						<label for="need">Was benötigen Sie?</label>
						<select id="need">
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
						<textarea id="msg" rows="4" placeholder="Kurze Beschreibung Ihres Projekts..."></textarea>
					</div>
					<button type="submit" class="submit-btn">Anfrage senden ↗</button>
					<p class="form-note">* Pflichtfelder · Ihre Daten werden vertraulich behandelt.</p>
				</form>
			{/if}
		</div>

	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1.35fr;
		gap: 7rem;
		align-items: start;
	}

	.info-title {
		font-size: clamp(1.75rem, 3.5vw, 2.75rem);
		font-weight: 600;
		color: #fff;
		margin-bottom: 1.25rem;
		line-height: 1.15;
	}
	.info-title em { font-style: italic; color: rgba(255,255,255,0.88); }
	.info-sub { font-size: 0.9rem; color: rgba(195,210,225,0.82); line-height: 1.85; margin-bottom: 2.5rem; }

	.info-list { display: flex; flex-direction: column; border-top: 1px solid rgba(255,255,255,0.06); margin-bottom: 2.5rem; }
	.info-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.1rem 0;
		border-bottom: 1px solid rgba(255,255,255,0.06);
		gap: 1rem;
	}
	.info-label { font-size: 0.65rem; letter-spacing: 0.16em; text-transform: uppercase; color: #c9a96e; flex-shrink: 0; }
	.info-row a, .info-row span { font-size: 0.875rem; color: rgba(255,255,255,0.78); transition: color 0.2s; }
	.info-row a:hover { color: #fff; }

	.promise {
		background: rgba(201,169,110,0.05);
		border: 1px solid rgba(201,169,110,0.15);
		padding: 1.5rem;
	}
	.promise p { font-size: 0.85rem; color: rgba(195,210,225,0.75); line-height: 1.8; font-style: italic; }

	/* Form */
	.form-side {
		background: #0e0e14;
		border: 1px solid rgba(255,255,255,0.06);
		padding: 3rem;
	}
	form { display: flex; flex-direction: column; gap: 1.25rem; }
	.row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
	.field { display: flex; flex-direction: column; gap: 0.5rem; }
	label {
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #ffffff;
	}
	input, select, textarea {
		padding: 0.875rem 1rem;
		background: rgba(255,255,255,0.06);
		border: 1px solid rgba(255,255,255,0.28);
		color: #ffffff;
		font-size: 0.875rem;
		font-weight: 300;
		width: 100%;
		transition: border-color 0.2s;
	}
	input:focus, select:focus, textarea:focus {
		outline: none;
		border-color: rgba(201,169,110,0.7);
	}
	input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.4); }
	textarea { resize: vertical; line-height: 1.6; }
	select { appearance: none; cursor: pointer; color: rgba(255,255,255,0.75); }
	select option { background: #0e0e14; color: #fff; }

	.submit-btn {
		background: none;
		border: 1px solid rgba(255,255,255,0.25);
		color: #fff;
		padding: 1rem 2rem;
		font-size: 0.72rem;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.3s;
		align-self: flex-start;
	}
	.submit-btn:hover { background: #fff; color: #06060a; border-color: #fff; }
	.form-note { font-size: 0.75rem; color: rgba(255,255,255,0.55); }

	/* Success */
	.success {
		text-align: center;
		padding: 4rem 2rem;
		display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
	}
	.success-mark {
		width: 56px; height: 56px;
		border: 1px solid rgba(201,169,110,0.4);
		color: #c9a96e;
		border-radius: 50%;
		display: flex; align-items: center; justify-content: center;
		font-size: 1.25rem;
	}
	.success h3 { font-family: 'Playfair Display', Georgia, serif; font-size: 1.5rem; color: #fff; }
	.success p { font-size: 0.875rem; color: #4a4845; }

	@media (max-width: 900px) {
		.contact-grid { grid-template-columns: 1fr; gap: 4rem; }
		.row-2 { grid-template-columns: 1fr; }
		.form-side { padding: 2rem; }
	}
</style>
