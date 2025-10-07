export const metadata = {
  title: 'Updates & Changelog | TextFlow',
  description: 'Transparent changelog of new features, fixes, and roadmap highlights for TextFlow.',
};
const updates = [
  { date: '2025-10-07', title: 'Branding & SEO', notes: ['Enhanced metadata', 'New logo & favicon', 'Added Templates, FAQ, Compare, Updates pages'] },
  { date: '2025-10-06', title: 'Editor UX', notes: ['Integrated platform-specific editors', 'Auto-resize textarea', 'Toolbar improvements'] },
];

export default function UpdatesPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Changelog & Updates</h1>
      <div className="space-y-4">
        {updates.map((u) => (
          <div key={u.date} className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{u.title}</h2>
              <span className="text-sm text-muted-foreground">{u.date}</span>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {u.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


