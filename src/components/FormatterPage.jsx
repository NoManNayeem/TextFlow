'use client';

import { useState, useRef } from 'react';
import { Sparkles, Info, Keyboard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import FormattingToolbar from '@/components/FormattingToolbar';
import TextEditor from '@/components/TextEditor';
import PlatformSelector from '@/components/PlatformSelector';
import EditorActions from '@/components/EditorActions';
import { formatText } from '@/lib/formatUtils';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

export default function FormatterPage() {
  const [text, setText] = useState('');
  const [platform, setPlatform] = useState('linkedin');
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const textareaRef = useRef(null);

  const handleFormat = (formatType) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);

    if (!selectedText) {
      // Show selection message
      const message = document.getElementById('format-message');
      if (message) {
        message.classList.remove('opacity-0');
        setTimeout(() => {
          message.classList.add('opacity-0');
        }, 2000);
      }
      return;
    }

    const formattedText = formatText(selectedText, formatType);
    const newText = text.substring(0, start) + formattedText + text.substring(end);
    setText(newText);

    // Show keyboard shortcut hint on first use
    if (!showShortcutHint && ['bold', 'italic', 'underline'].includes(formatType)) {
      setShowShortcutHint(true);
      setTimeout(() => {
        setShowShortcutHint(false);
      }, 5000);
    }

    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, start + formattedText.length);
    }, 0);
  };

  // Enable keyboard shortcuts
  useKeyboardShortcuts(handleFormat);

  const handleReset = () => {
    setText('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Professional Text Formatting
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Format Your Social Media Posts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select any text and apply professional formatting. Works exactly like the real platform!
          </p>
        </div>

        {/* Keyboard Shortcut Hint */}
        {showShortcutHint && (
          <Alert className="mb-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <Keyboard className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-900 dark:text-blue-100">
              💡 <strong>Pro tip:</strong> Use keyboard shortcuts! Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+U (Underline)
            </AlertDescription>
          </Alert>
        )}

        {/* Selection Alert Message */}
        <Alert id="format-message" className="mb-6 opacity-0 transition-opacity duration-300">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Please select some text before applying formatting
          </AlertDescription>
        </Alert>

        {/* Controls Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                  Formatting Tools
                </CardTitle>
                <CardDescription>
                  Select text, then click any button or use keyboard shortcuts
                </CardDescription>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <PlatformSelector 
                  selectedPlatform={platform}
                  onPlatformChange={setPlatform}
                />
                <EditorActions 
                  text={text}
                  onReset={handleReset}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <FormattingToolbar onFormat={handleFormat} />
          </CardContent>
        </Card>

        {/* Editor Section with Platform UI */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              {platform === 'linkedin' && '💼 LinkedIn Post Editor'}
              {platform === 'facebook' && '👥 Facebook Post Editor'}
              {platform === 'other' && '✍️ General Text Editor'}
            </h2>
            <span className="text-sm text-muted-foreground">
              Real {platform === 'other' ? 'editor' : platform} UI
            </span>
          </div>
          <TextEditor
            ref={textareaRef}
            text={text}
            onChange={handleTextChange}
            platform={platform}
          />
        </div>

        {/* Keyboard Shortcuts Reference */}
        <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Keyboard className="w-5 h-5" />
              Keyboard Shortcuts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                <span className="font-medium">Bold</span>
                <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Ctrl+B</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                <span className="font-medium">Italic</span>
                <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Ctrl+I</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                <span className="font-medium">Underline</span>
                <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Ctrl+U</kbd>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              * Use Cmd instead of Ctrl on Mac
            </p>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💡 Pro Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Authentic Platform UI</p>
                  <p className="text-muted-foreground">
                    The editor mimics the real platform interface for accurate preview
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Use Keyboard Shortcuts</p>
                  <p className="text-muted-foreground">
                    Speed up your workflow with Ctrl+B, Ctrl+I, Ctrl+U
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Check Character Limits</p>
                  <p className="text-muted-foreground">
                    See real-time warnings when exceeding platform limits
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Mix Multiple Formats</p>
                  <p className="text-muted-foreground">
                    Apply different styles to different parts of your text
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}