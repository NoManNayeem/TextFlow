import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaListUl, FaListOl, FaFont } from 'react-icons/fa';
import { Lightbulb, Zap, Target, TrendingUp } from 'lucide-react';

export default function TutorialPage() {
  const tutorials = [
    {
      icon: FaBold,
      title: 'Bold Text',
      description: 'Make important words stand out',
      steps: [
        'Select the text you want to make bold',
        'Click the "Bold" button in the formatting panel',
        'Your text will be converted to bold Unicode characters',
        'Perfect for headlines, key points, and emphasis'
      ],
      example: {
        before: 'Important announcement',
        after: '𝗜𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁 𝗮𝗻𝗻𝗼𝘂𝗻𝗰𝗲𝗺𝗲𝗻𝘁'
      }
    },
    {
      icon: FaItalic,
      title: 'Italic Text',
      description: 'Add subtle emphasis or quotes',
      steps: [
        'Highlight the text you want to italicize',
        'Click the "Italic" button',
        'Text converts to italic Unicode style',
        'Great for quotes, thoughts, or subtle emphasis'
      ],
      example: {
        before: 'As Steve Jobs said',
        after: '𝘈𝘴 𝘚𝘵𝘦𝘷𝘦 𝘑𝘰𝘣𝘴 𝘴𝘢𝘪𝘥'
      }
    },
    {
      icon: FaListUl,
      title: 'Bullet Lists',
      description: 'Organize information clearly',
      steps: [
        'Type your list items on separate lines',
        'Select all the lines you want as bullets',
        'Click the "Bullets" button',
        'Each line gets a bullet point (•)'
      ],
      example: {
        before: 'Increased sales\\nImproved team\\nNew product',
        after: '• Increased sales\\n• Improved team\\n• New product'
      }
    },
    {
      icon: FaListOl,
      title: 'Numbered Lists',
      description: 'Create step-by-step guides',
      steps: [
        'Write your items on separate lines',
        'Select the lines to number',
        'Click the "Numbers" button',
        'Lines are automatically numbered'
      ],
      example: {
        before: 'Plan strategy\\nExecute tasks\\nMeasure results',
        after: '1. Plan strategy\\n2. Execute tasks\\n3. Measure results'
      }
    }
  ];

  const bestPractices = [
    {
      icon: Lightbulb,
      title: 'Use Bold for Headlines',
      description: 'Start your posts with bold text to grab attention in the feed'
    },
    {
      icon: Zap,
      title: 'Mix Formatting Styles',
      description: 'Combine bold, italic, and lists for a professional, scannable layout'
    },
    {
      icon: Target,
      title: 'Keep It Readable',
      description: "Don't overuse formatting - less is more for professional posts"
    },
    {
      icon: TrendingUp,
      title: 'Test on LinkedIn',
      description: 'Preview how your formatted text looks on LinkedIn before posting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            How to Use TextFlow
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the art of LinkedIn text formatting with our step-by-step tutorials
          </p>
        </div>

        {/* Quick Start */}
        <Card className="mb-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="text-2xl">🚀 Quick Start Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-3">
                  1
                </div>
                <h3 className="font-semibold mb-2">Type Your Text</h3>
                <p className="text-sm text-muted-foreground">
                  Write or paste your LinkedIn post in the text editor
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold mb-3">
                  2
                </div>
                <h3 className="font-semibold mb-2">Select & Format</h3>
                <p className="text-sm text-muted-foreground">
                  Highlight any text and click a formatting button
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-xl font-bold mb-3">
                  3
                </div>
                <h3 className="font-semibold mb-2">Copy & Post</h3>
                <p className="text-sm text-muted-foreground">
                  Copy your formatted text and paste it into LinkedIn
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formatting Tutorials */}
        <h2 className="text-3xl font-bold mb-6">Formatting Options</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tutorials.map((tutorial, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
                    <tutorial.icon className="w-5 h-5" />
                  </div>
                  {tutorial.title}
                </CardTitle>
                <CardDescription>{tutorial.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Steps:</h4>
                    <ol className="space-y-1 text-sm text-muted-foreground">
                      {tutorial.steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="flex gap-2">
                          <span className="text-purple-600 font-semibold">{stepIdx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-xs font-semibold text-muted-foreground mb-1">BEFORE:</div>
                    <div className="mb-3 text-sm">{tutorial.example.before}</div>
                    <div className="text-xs font-semibold text-purple-600 mb-1">AFTER:</div>
                    <div className="text-sm font-medium">{tutorial.example.after}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Best Practices */}
        <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bestPractices.map((practice, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                    <practice.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{practice.title}</h3>
                    <p className="text-sm text-muted-foreground">{practice.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Will this work on LinkedIn?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! TextFlow uses Unicode characters that are supported by LinkedIn and most other platforms.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I use multiple formats on the same text?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you can select different portions of your text and apply different formatting to each part.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is my text saved?</h3>
                <p className="text-sm text-muted-foreground">
                  TextFlow works entirely in your browser. Your text is not sent to any server and is not saved anywhere.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What if the formatting doesn't appear correctly?</h3>
                <p className="text-sm text-muted-foreground">
                  Unicode formatting should work across all modern platforms. If you encounter issues, try using a different browser or device.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}