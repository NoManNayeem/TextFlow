'use client';

export default function TextFlowLogo({ className = '', variant = 'default', showText = true }) {
  const colors = {
    default: {
      primary: 'var(--primary)',
      secondary: 'var(--muted-foreground)',
      accent: 'var(--ring)',
      text: 'var(--foreground)'
    },
    dark: {
      primary: 'oklch(0.985 0 0)',
      secondary: 'oklch(0.708 0 0)',
      accent: 'oklch(0.556 0 0)',
      text: 'oklch(0.985 0 0)'
    }
  };

  const theme = variant === 'dark' ? colors.dark : colors.default;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12 L18 12 M8 18 L18 18 M8 24 L15 24" stroke={theme.primary} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 12 Q26 12 26 18 Q26 24 18 24" stroke={theme.secondary} strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M24 15 Q30 18 24 21" stroke={theme.accent} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      </svg>
      {showText && (
        <span className="text-2xl font-bold tracking-tight">
          <span style={{ color: theme.text }}>Text</span>
          <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--muted-foreground)] to-[var(--ring)] bg-clip-text text-transparent">Flow</span>
        </span>
      )}
    </div>
  );
}


