'use client';

export default function LinkedInFormatterLanding() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">LinkedIn Text Formatter</h1>
      <p className="text-muted-foreground mb-6">Create professional LinkedIn posts with bold, italic, and unicode styles that work everywhere.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Before</h2>
          <pre className="bg-muted p-3 rounded text-sm whitespace-pre-wrap">Regular text that gets lost in the feed. No structure. Hard to scan.</pre>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">After</h2>
          <pre className="bg-muted p-3 rounded text-sm whitespace-pre-wrap">𝗕𝗼𝗹𝗱 𝗵𝗲𝗮𝗱𝗹𝗶𝗻𝗲 that stops scrolling\n𝘐𝘵𝘢𝘭𝘪𝘤 𝘦𝘮𝘱𝘩𝘢𝘴𝘪𝘴 for key points\n\n• Bullet points for clarity\n• Short lines for readability</pre>
        </div>
      </div>
      <div className="mt-6 text-sm text-muted-foreground">
        Character limit: 3,000 • Best time: Tue–Thu, 9–11am • Add 1–2 relevant hashtags
      </div>
    </div>
  );
}


