export const metadata = {
  title: 'Accessibility | TextFlow',
  description: 'WCAG 2.1 AA intent, screen reader support, keyboard navigation, and contact for accessibility issues.',
};
export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>We aim to meet WCAG 2.1 AA where possible. The app supports keyboard navigation and screen readers via semantic HTML and ARIA in UI components.</p>
        <h2>Known Limitations</h2>
        <ul>
          <li>Some icons may lack alternate text — we are improving coverage.</li>
          <li>Color contrast is tested against dark and light themes.</li>
        </ul>
        <h2>Feedback</h2>
        <p>If you encounter accessibility barriers, please open an issue on GitHub.</p>
      </div>
    </div>
  );
}


