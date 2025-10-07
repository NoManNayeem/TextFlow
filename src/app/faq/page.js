export const metadata = {
  title: 'FAQ | TextFlow',
  description: 'Answers to common questions about TextFlow usage, compatibility, and privacy.',
};
const faqs = [
  {
    category: 'General',
    items: [
      {
        q: 'Is TextFlow really free?',
        a: 'Yes. TextFlow is 100% free to use. No paywalls and no feature locks.',
      },
      {
        q: 'Do I need to create an account?',
        a: 'No account is needed. Everything runs locally in your browser.',
      },
      {
        q: 'Does TextFlow work on mobile devices?',
        a: 'Yes. The editor and formatting tools are mobile friendly and touch‑optimized.',
      },
      {
        q: 'Which browsers are supported?',
        a: 'Modern Chromium, Firefox, and Safari browsers. Latest versions recommended.',
      },
    ],
  },
  {
    category: 'Technical',
    items: [
      {
        q: 'How does Unicode formatting work?',
        a: 'We map your selected text to look‑alike Unicode glyphs (e.g., bold/italic alphabets). The output is plain text you can paste anywhere.',
      },
      {
        q: 'Will formatted text work on all platforms?',
        a: 'Nearly all modern platforms display these characters correctly. Some legacy apps may fall back to regular characters.',
      },
      {
        q: 'Can I undo formatting?',
        a: 'Yes. Use Ctrl+Z / Ctrl+Shift+Z or the in‑app undo/redo controls.',
      },
      {
        q: "Why doesn't my formatting show in some apps?",
        a: 'A few apps sanitize or replace certain Unicode characters. In those cases, try a simpler style or paste as plain text and reformat.',
      },
    ],
  },
  {
    category: 'Privacy',
    items: [
      {
        q: 'Is my text stored anywhere?',
        a: 'No. Formatting happens client‑side only. We do not transmit your content to any server.',
      },
      {
        q: 'Do you track what I write?',
        a: 'No content tracking. Optional anonymous analytics may track basic usage patterns, not text.',
      },
      {
        q: 'Is TextFlow GDPR compliant?',
        a: 'We follow data minimization. Since we don’t store text or personal data, GDPR impact is minimal.',
      },
      {
        q: 'Can my employer see what I format?',
        a: 'Not through TextFlow. Everything stays in your browser unless you share it.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {faqs.map((group) => (
          <div key={group.category} className="rounded-xl border bg-card p-5 shadow-sm animate-slide-up">
            <h2 className="text-xl font-semibold mb-3">{group.category}</h2>
            <ul className="space-y-3 text-sm">
              {group.items.map((item) => (
                <li key={item.q}>
                  <p className="font-medium text-foreground">{item.q}</p>
                  <p className="text-muted-foreground mt-1">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


