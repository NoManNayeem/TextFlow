'use client';

const faqs = [
  {
    category: 'General',
    questions: [
      'Is TextFlow really free?',
      'Do I need to create an account?',
      'Does TextFlow work on mobile devices?',
      'Which browsers are supported?',
    ],
  },
  {
    category: 'Technical',
    questions: [
      'How does Unicode formatting work?',
      'Will formatted text work on all platforms?',
      'Can I undo formatting?',
      "Why doesn't my formatting show in some apps?",
    ],
  },
  {
    category: 'Privacy',
    questions: [
      'Is my text stored anywhere?',
      'Do you track what I write?',
      'Is TextFlow GDPR compliant?',
      'Can my employer see what I format?',
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {faqs.map((group) => (
          <div key={group.category} className="rounded-xl border bg-card p-5 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">{group.category}</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {group.questions.map((q) => (
                <li key={q}>• {q}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


