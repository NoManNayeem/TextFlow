'use client';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">Last updated: 2025-10-07</p>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>TextFlow is privacy‑first. All formatting happens in your browser. We do not store your text, and we do not require sign‑in.</p>
        <h2>Data Collection</h2>
        <p>We do not collect or store the content you type or paste. Optional analytics, if enabled, are anonymized and never tied to personal data.</p>
        <h2>Cookies</h2>
        <p>We avoid cookies where possible. Theme preference may be saved locally via localStorage.</p>
        <h2>Compliance</h2>
        <p>We aim to follow GDPR principles: data minimization and user control.</p>
        <h2>Contact</h2>
        <p>Questions? Contact us via the developer profile on GitHub.</p>
      </div>
    </div>
  );
}


