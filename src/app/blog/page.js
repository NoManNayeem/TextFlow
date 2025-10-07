export const metadata = {
  title: 'Blog & Resources | TextFlow',
  description: 'SEO-focused articles and guides on formatting, accessibility, and platform best practices.',
};
import Link from 'next/link';

const posts = [
  {
    slug: 'make-linkedin-posts-stand-out-2025',
    title: 'How to Make Your LinkedIn Posts Stand Out in 2025',
    excerpt: 'Actionable writing and formatting tactics that increase engagement on LinkedIn today.',
  },
  {
    slug: 'psychology-of-formatted-text',
    title: 'The Psychology of Formatted Text in Social Media',
    excerpt: 'Why bold and italicized phrases work — and how to use them responsibly.',
  },
  {
    slug: 'linkedin-character-limits-guide',
    title: 'LinkedIn Character Limits: Complete Guide',
    excerpt: 'Up‑to‑date limits and best practices for long vs short posts across platforms.',
  },
  {
    slug: 'accessible-unicode-formatting',
    title: 'Creating Accessible Posts with Unicode Formatting',
    excerpt: 'Practical tips to keep screen‑reader and contrast needs in mind when styling text.',
  },
  {
    slug: 'when-to-use-bold-vs-italic',
    title: 'Bold vs Italic: When to Use Each Format',
    excerpt: 'A simple decision framework with examples for headings, emphasis and citations.',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Resources & Articles</h1>
      <p className="text-muted-foreground mb-8">SEO‑focused guides to help you write better posts and get more engagement.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}


