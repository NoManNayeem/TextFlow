import Link from 'next/link';
import TextFlowLogo from '@/components/TextFlowLogo';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2">
            <TextFlowLogo showText={true} />
          </Link>
          <p className="text-xs text-muted-foreground text-center md:text-left">
            Transform Your Words, Amplify Your Voice • 100% Free • Privacy‑First
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/NoManNayeem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" /> Star on GitHub
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-muted-foreground">© {currentYear} TextFlow</div>
      </div>
    </footer>
  );
}