import './globals.css';
import MainLayout from '@/components/MainLayout';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://text-flow-two.vercel.app'),
  title: 'TextFlow - Transform Your Words, Amplify Your Voice | Free Text Formatter',
  description:
    'Transform plain text into beautifully formatted content for LinkedIn, Facebook, and social media. Bold, italic, underline, and more - 100% free, privacy-first, no sign-up required.',
  keywords: [
    'text formatter',
    'LinkedIn text formatter',
    'Facebook text formatter',
    'social media text formatter',
    'bold text generator',
    'italic text generator',
    'unicode text formatter',
    'free text formatting tool',
    'LinkedIn formatting tool',
    'social media formatting tool',
    'TextFlow formatter',
    'professional text styling',
    'content formatting tool',
  ],
  authors: [{ name: 'Nayeem Islam', url: 'https://github.com/NoManNayeem' }],
  creator: 'NoManNayeem',
  publisher: 'TextFlow',
  openGraph: {
    title: 'TextFlow - Where Plain Text Becomes Powerful',
    description:
      'Free, instant text formatting for LinkedIn & social media. Transform your posts with bold, italic, and styled text. No sign-up, 100% privacy.',
    url: 'https://text-flow-two.vercel.app',
    siteName: 'TextFlow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-textflow.png',
        width: 1200,
        height: 630,
        alt: 'TextFlow - Transform Your Words, Amplify Your Voice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TextFlow - Free Text Formatter for Social Media',
    description:
      'Transform plain text into eye-catching posts. Bold, italic, underline & more. 100% free & private.',
    creator: '@nomannayeem',
    images: ['/twitter-textflow.png'],
  },
  alternates: {
    canonical: 'https://text-flow-two.vercel.app',
    languages: {
      'en-US': 'https://text-flow-two.vercel.app',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}