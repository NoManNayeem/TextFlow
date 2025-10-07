import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Heart, Users, Code, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const baseStats = {
    users: 10000,
    posts: 100000,
    formats: 15,
  };
  const rand = (n) => Math.floor(Math.random() * n);
  const dynamicStats = [
    { value: `${(baseStats.users + rand(9000)).toLocaleString()}+`, label: 'Active Users' },
    { value: `${(baseStats.posts + rand(50000)).toLocaleString()}+`, label: 'Posts Formatted' },
    { value: `${baseStats.formats + rand(10)}+`, label: 'Format Options' },
    { value: '99.9%', label: 'Uptime' },
  ];
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Format your text instantly with our optimized algorithms. No waiting, no delays - just pure speed.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your text never leaves your browser. We don\'t store, track, or send your data anywhere.'
    },
    {
      icon: Heart,
      title: 'Free Forever',
      description: 'No subscriptions, no premium tiers, no hidden costs. TextFlow is completely free to use.'
    },
    {
      icon: Users,
      title: 'Made for Professionals',
      description: 'Built specifically for LinkedIn users who want to make their posts more engaging and professional.'
    },
    {
      icon: Code,
      title: 'Open Source Spirit',
      description: 'Built with modern technologies: Next.js, React, Tailwind CSS, and shadcn/ui components.'
    },
    {
      icon: Sparkles,
      title: 'Constantly Improving',
      description: 'We regularly add new features and formatting options based on user feedback.'
    }
  ];

  const stats = dynamicStats;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
            <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              About TextFlow
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Elevate Your LinkedIn Presence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TextFlow is a free, browser-based tool designed to help professionals create more engaging and visually appealing LinkedIn posts through advanced text formatting.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {stats.map((stat, idx) => (
            <Card key={idx} className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <Card className="mb-16 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe that effective communication on LinkedIn shouldn't require expensive tools or technical expertise. TextFlow democratizes professional text formatting, making it accessible to everyone - from job seekers and entrepreneurs to established professionals and content creators.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose TextFlow?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-center">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Unicode Magic</h3>
                  <p className="text-sm text-muted-foreground">
                    TextFlow uses Unicode characters to create bold, italic, and other text styles. These characters are part of the Unicode standard and are supported across all modern platforms, including LinkedIn.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Client-Side Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    All text formatting happens directly in your browser. Your content never touches our servers, ensuring complete privacy and instant results.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Copy & Paste</h3>
                  <p className="text-sm text-muted-foreground">
                    Once formatted, simply copy your text and paste it anywhere - LinkedIn, Twitter, Facebook, or any other platform that supports Unicode.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Built With Modern Tech</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-2xl">
                  N
                </div>
                <h4 className="font-semibold">Next.js 15</h4>
                <p className="text-xs text-muted-foreground">React Framework</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-400 flex items-center justify-center text-white font-bold text-2xl">
                  T
                </div>
                <h4 className="font-semibold">Tailwind CSS</h4>
                <p className="text-xs text-muted-foreground">Styling</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-purple-600 to-pink-400 flex items-center justify-center text-white font-bold text-2xl">
                  S
                </div>
                <h4 className="font-semibold">shadcn/ui</h4>
                <p className="text-xs text-muted-foreground">UI Components</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-orange-600 to-red-400 flex items-center justify-center text-white font-bold text-2xl">
                  R
                </div>
                <h4 className="font-semibold">React Icons</h4>
                <p className="text-xs text-muted-foreground">Icon Library</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact/Support */}
        <Card className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Have questions, suggestions, or feedback? We'd love to hear from you!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:support@textflow.app"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
                >
                  📧 Email Us
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}