'use client';

import { Copy, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const templates = [
  {
    title: 'Job Announcement',
    text: `𝗘𝘅𝗰𝗶𝘁𝗲𝗱 𝘁𝗼 𝘀𝗵𝗮𝗿𝗲: I've joined [Company] as [Role]!\n\nWhy it matters:\n• [Impact or mission]\n• [What you'll work on]\n\nGrateful for:\n• [Mentor/Team]\n• [Supporters]\n\nLooking forward to connecting with peers in [Domain].`,
    tips: 'Keep it authentic. Mention impact over title. Tag your company and team.',
    bestTime: 'Tue–Thu, 9–11am local time',
    limit: 3000,
  },
  {
    title: 'Achievement Celebration',
    text: `𝗠𝗶𝗹𝗲𝘀𝘁𝗼𝗻𝗲 𝗮𝗰𝗵𝗶𝗲𝘃𝗲𝗱: [Achievement]!\n\nHighlights:\n• [What you did]\n• [Outcome / Metric]\n• [Who helped]\n\nWhat’s next: [Next step / Call to action]`,
    tips: 'Lead with the result, then the story. Add a metric if possible.',
    bestTime: 'Mon–Wed, 10am–1pm',
    limit: 3000,
  },
  {
    title: 'Company Update',
    text: `𝗖𝗼𝗺𝗽𝗮𝗻𝘆 𝗨𝗽𝗱𝗮𝘁𝗲: [Project/Initiative]\n\nWhat we shipped:\n• [Feature 1]\n• [Feature 2]\n\nImpact:\n• [Metric / Customer Quote]\n\nThanks to the team for making this happen!`,
    tips: 'Lead with outcome, then details. Tag the team and include one visual if possible.',
    bestTime: 'Tue–Thu, 10am–12pm',
    limit: 3000,
  },
  {
    title: 'Thought Leadership',
    text: `𝗧𝗵𝗿𝗲𝗮𝗱: 3 lessons about [Topic]\n\n1) [Insight + example]\n2) [Insight + example]\n3) [Insight + example]\n\nTakeaway: [One‑line summary]\n\nCurious to hear your experience.`,
    tips: 'Use numbered structure, short lines, and a concrete example for each point.',
    bestTime: 'Wed–Fri, morning',
    limit: 3000,
  },
  {
    title: 'Event Invitation',
    text: `𝗝𝗼𝗶𝗻 𝘂𝘀 𝗮𝘁 [Event] on [Date/Time]!\n\nWhy attend:\n• [Value 1]\n• [Value 2]\n\nRegister: [Link]\nSeats are limited.`,
    tips: 'Clear value bullets and direct CTA. Keep it short and skimmable.',
    bestTime: '2–3 weeks before event, mornings',
    limit: 3000,
  },
  {
    title: 'Product Launch',
    text: `𝗟𝗮𝘂𝗻𝗰𝗵𝗶𝗻𝗴: [Product] 🚀\n\nSolves:\n• [Pain 1]\n• [Pain 2]\n\nTry it: [Link]\nSpecial for early users: [Offer]`,
    tips: 'Lead with pain → solution. Include one clear link. Avoid jargon.',
    bestTime: 'Tue–Thu, 10am–1pm',
    limit: 3000,
  },
  {
    title: 'Team Appreciation',
    text: `𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂, 𝗧𝗲𝗮𝗺!\n\nShout‑outs:\n• [Name] — [Contribution]\n• [Name] — [Contribution]\n\nProud of what we achieved together. #gratitude`,
    tips: 'Name individuals and specify contributions. Keep tone genuine.',
    bestTime: 'Fri afternoons',
    limit: 3000,
  },
  {
    title: 'Industry Insight',
    text: `𝗧𝗿𝗲𝗻𝗱: [Industry] is shifting because [Reason].\n\nWhat it means:\n• [Implication 1]\n• [Implication 2]\n\nHow to respond:\n• [Actionable tip]\n\nSaving for later? Comment “guide” and I’ll DM a summary.`,
    tips: 'Share an opinion plus an action. Invite light engagement with a simple CTA.',
    bestTime: 'Mon–Wed mornings',
    limit: 3000,
  },
];

export default function TemplatesPage() {
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">LinkedIn Post Templates</h1>
      <p className="text-muted-foreground mb-8">Ready-to-use templates with tips and limits.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {templates.map((t) => (
          <div key={t.title} className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold flex items-center gap-2"><FileText className="w-5 h-5" /> {t.title}</h2>
              <Button size="sm" variant="outline" onClick={() => handleCopy(t.text)} className="gap-2"><Copy className="w-4 h-4" /> Copy</Button>
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


