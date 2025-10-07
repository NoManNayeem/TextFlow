export const metadata = {
  title: 'Terms of Service | TextFlow',
  description: 'Free usage terms, acceptable use policy, and unicode compatibility disclaimer for TextFlow.',
};
export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>By using TextFlow, you agree to use the tool responsibly and acknowledge that unicode rendering may vary across apps and devices.</p>
        <h2>Free Usage</h2>
        <p>TextFlow is free to use. No warranty is provided. Use at your own discretion.</p>
        <h2>Acceptable Use</h2>
        <p>Do not use the tool for illegal, harmful, or misleading content.</p>
        <h2>Liability</h2>
        <p>We are not liable for any losses resulting from use of this tool.</p>
      </div>
    </div>
  );
}


