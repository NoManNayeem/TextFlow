'use client';

import { Copy, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TemplatesClient({ templates = [] }) {
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {}
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">LinkedIn Post Templates</h1>
      <p className="text-muted-foreground mb-8">Ready-to-use templates with tips and limits.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {templates.map((t) => (
          <div key={t.title} className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow animate-slide-up">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold flex items-center gap-2"><FileText className="w-5 h-5" /> {t.title}</h2>
              <Button size="sm" variant="outline" onClick={() => handleCopy(t.text)} className="gap-2 rounded-lg"><Copy className="w-4 h-4" /> Copy</Button>
            </div>
            <pre className="whitespace-pre-wrap text-sm bg-muted p-3 rounded-lg mb-3">{t.text}</pre>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Tips: {t.tips}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Best time: {t.bestTime}</span>
              <span>Limit: {t.limit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


