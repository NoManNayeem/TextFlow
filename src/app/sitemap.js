export default function sitemap() {
  const baseUrl = 'https://textflow.app';
  const keywords = [
    '',
    'linkedin-text-formatter',
    'facebook-text-formatter',
    'free-text-formatter',
    'social-media-text-formatter',
  ];

  const now = new Date();
  return keywords.map((path, index) => ({
    url: `${baseUrl}/${path}`.replace(/\/$/, '/'),
    lastModified: now,
    changeFrequency: index === 0 ? 'daily' : 'weekly',
    priority: index === 0 ? 1.0 : 0.8,
  }));
}


