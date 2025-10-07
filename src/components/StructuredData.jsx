'use client';

export function TextFormatterStructuredData({ platform = 'general', tool = 'text-formatter' }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${platform} Text Formatter`,
    description: `Professional text formatting tool for ${platform} posts and content`,
    url: `https://textflow.app/${tool}`,
    applicationCategory: 'Utility',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Bold text generation',
      'Italic text formatting',
      'Professional text styling',
      'Social media optimization',
      'Free online tool',
    ],
    keywords: ['text formatter', `${platform} text formatter`, 'social media formatting', 'text styling tool'],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}


