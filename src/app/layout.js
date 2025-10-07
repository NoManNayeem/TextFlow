import './globals.css';
import MainLayout from '@/components/MainLayout';

export const metadata = {
  title: 'TextFlow - LinkedIn Text Formatter',
  description: 'Professional text formatting tool for LinkedIn posts',
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