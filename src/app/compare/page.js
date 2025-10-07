'use client';

export default function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Why TextFlow</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">TextFlow vs Plain Text</h2>
          <p className="text-sm text-muted-foreground">Formatted text improves scanability and engagement using unicode-safe styles.</p>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">TextFlow vs LinkedIn Editor</h2>
          <p className="text-sm text-muted-foreground">LinkedIn lacks persistent bold/italic across devices. TextFlow outputs unicode text that works everywhere.</p>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">TextFlow vs Paid Tools</h2>
          <p className="text-sm text-muted-foreground">TextFlow is 100% free, privacy-first, no sign-up, with professional results.</p>
        </div>
      </div>
    </div>
  );
}


