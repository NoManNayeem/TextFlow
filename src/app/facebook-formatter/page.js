export const metadata = {
  title: 'Facebook Text Formatter | TextFlow',
  description: 'Readable emphasis and unicode styles for Facebook posts. Long‑form examples and mobile‑first tips.',
};
export default function FacebookFormatterLanding() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Facebook Text Formatter</h1>
      <p className="text-muted-foreground mb-6">Format Facebook posts with readable emphasis using unicode styles that survive copy/paste.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Before</h2>
          <pre className="bg-muted p-3 rounded text-sm whitespace-pre-wrap">Long paragraph that’s hard to read on mobile and gets skipped.</pre>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">After</h2>
          <pre className="bg-muted p-3 rounded text-sm whitespace-pre-wrap">𝗦𝘂𝗶𝘁𝗮𝗯𝗹𝗲 𝗯𝗼𝗹𝗱 𝗵𝗼𝗼𝗸\n\n• Short lines\n• White space\n• Clear CTA with link</pre>
        </div>
      </div>
      <div className="mt-6 text-sm text-muted-foreground">Character limit: 63,206 • Keep paragraphs short • Add 1 call‑to‑action</div>
    </div>
  );
}


