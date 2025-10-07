'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Info, Keyboard, ChevronDown, ChevronUp, Copy, RotateCcw, Undo, Redo, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import FormattingToolbar from '@/components/FormattingToolbar';
import TextEditor from '@/components/TextEditor';
import PlatformSelector from '@/components/PlatformSelector';
import EditorActions from '@/components/EditorActions';
import { formatText } from '@/lib/formatUtils';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { toast } from 'sonner';
import { Skeleton, SkeletonCard } from '@/components/ui/skeleton';

export default function FormatterPage() {
  const [text, setText] = useState('');
  const [platform, setPlatform] = useState('linkedin');
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const [showExtras, setShowExtras] = useState(false);
  const [heroCollapsed, setHeroCollapsed] = useState(true);
  const [hasUsedFormatter, setHasUsedFormatter] = useState(false);
  const [toolbarSticky, setToolbarSticky] = useState(false);
  const [selectionLength, setSelectionLength] = useState(0);
  const [textHistory, setTextHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showShortcutTutorial, setShowShortcutTutorial] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);
  const textareaRef = useRef(null);

  const handleFormat = async (formatType) => {
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

    setIsFormatting(true);
    
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 150));

    const formattedText = formatText(selectedText, formatType);
    const newText = text.substring(0, start) + formattedText + text.substring(end);
    setText(newText);
    addToHistory(newText);

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
      setIsFormatting(false);
    }, 0);
  };

  // Enable keyboard shortcuts
  useKeyboardShortcuts(handleFormat);

  // Undo/Redo keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [historyIndex, textHistory]);

  // Auto-collapse hero after user interaction
  useEffect(() => {
    if (text.length > 0 && !hasUsedFormatter) {
      setHasUsedFormatter(true);
      setTimeout(() => setHeroCollapsed(true), 2000);
    }
  }, [text, hasUsedFormatter]);

  // Sticky toolbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setToolbarSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-save draft
  useEffect(() => {
    if (!text) return;
    const timer = setTimeout(() => {
      localStorage.setItem('textflow-draft', text);
    }, 2000);
    return () => clearTimeout(timer);
  }, [text]);

  // Load draft on mount
  useEffect(() => {
    const draft = localStorage.getItem('textflow-draft');
    if (draft && draft.length > 0) {
      setText(draft);
    }
  }, []);

  // Show keyboard shortcut tutorial for first-time users
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenShortcutTutorial');
    if (!hasSeenTutorial && text.length > 0) {
      setTimeout(() => setShowShortcutTutorial(true), 3000);
    }
  }, [text]);

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    setSelectionLength(selection.toString().length);
  };

  const handleReset = () => {
    setText('');
    localStorage.removeItem('textflow-draft');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePlatformChange = (newPlatform) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setPlatform(newPlatform);
      setIsTransitioning(false);
    }, 150);
  };

  // Floating Action Button functions
  const copyToClipboard = async () => {
    if (text) {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!', {
        description: 'Your formatted text is ready to paste',
        duration: 3000,
      });
    }
  };

  // Undo/Redo functionality
  const addToHistory = (newText) => {
    const newHistory = textHistory.slice(0, historyIndex + 1);
    newHistory.push(newText);
    setTextHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setText(textHistory[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < textHistory.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setText(textHistory[historyIndex + 1]);
    }
  };

  // Progressive character limit warnings
  const getCharacterWarning = (count, limit) => {
    const percentage = (count / limit) * 100;
    
    if (percentage < 70) return null;
    if (percentage < 85) return { 
      level: 'info', 
      message: `${limit - count} characters remaining` 
    };
    if (percentage < 100) return { 
      level: 'warning', 
      message: `Only ${limit - count} characters left!` 
    };
    return { 
      level: 'error', 
      message: `Exceeded limit by ${count - limit} characters` 
    };
  };

  const getPlatformLimit = () => {
    switch (platform) {
      case 'linkedin': return 3000;
      case 'facebook': return 63206;
      default: return null;
    }
  };

  const platformLimit = getPlatformLimit();
  const warning = platformLimit ? getCharacterWarning(text.length, platformLimit) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-7xl">
        {/* Hero Section - Shown only when expanded from toolbar */}
        {!heroCollapsed && (
          <div className="transition-all duration-500 overflow-hidden animate-fade-in max-h-80 sm:max-h-96 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  100% Free • No Sign‑up • Privacy First
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--muted-foreground)] to-[var(--ring)] bg-clip-text text-transparent">
                  Transform Your Words
                </span>
                <br />
                <span className="text-foreground">Amplify Your Voice</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-5">
                Create scroll‑stopping LinkedIn & Facebook posts with professional text formatting.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Button
                  onClick={() => textareaRef.current?.focus()}
                  className="px-5"
                >
                  Start Formatting — It’s Free
                </Button>
                <Button
                  variant="outline"
                  className="gap-2"
                  asChild
                >
                  <a href="https://github.com/NoManNayeem" target="_blank" rel="noopener noreferrer">
                    Star on GitHub
                  </a>
                </Button>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                ✓ Works Everywhere ✓ Unicode‑safe ✓ No Tracking
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setHeroCollapsed(true)}
                className="mt-4 flex items-center gap-2 interactive hover-glow"
              >
                <ChevronUp className="w-4 h-4" />
                Hide Info
              </Button>
            </div>
          </div>
        )}

        {/* Keyboard Shortcut Hint */}
        {showExtras && showShortcutHint && (
          <Alert className="mb-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <Keyboard className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-900 dark:text-blue-100">
              💡 <strong>Pro tip:</strong> Use keyboard shortcuts! Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+U (Underline)
            </AlertDescription>
          </Alert>
        )}

        {/* Selection Alert Message */}
        {showExtras && (
          <Alert id="format-message" className="mb-6 opacity-0 transition-opacity duration-300">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Please select some text before applying formatting
            </AlertDescription>
          </Alert>
        )}

        {/* Character Limit Warning */}
        {showExtras && warning && (
          <Alert className={`mb-6 ${
            warning.level === 'info' ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800' :
            warning.level === 'warning' ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800' :
            'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
          }`}>
            <Info className={`h-4 w-4 ${
              warning.level === 'info' ? 'text-blue-600' :
              warning.level === 'warning' ? 'text-amber-600' :
              'text-red-600'
            }`} />
            <AlertDescription className={
              warning.level === 'info' ? 'text-blue-900 dark:text-blue-100' :
              warning.level === 'warning' ? 'text-amber-900 dark:text-amber-100' :
              'text-red-900 dark:text-red-100'
            }>
              {warning.message}
            </AlertDescription>
          </Alert>
        )}


            

        {/* Selection Helper */}
        {selectionLength > 0 && (
          <div 
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 z-50"
            role="status"
            aria-live="polite"
            aria-label={`${selectionLength} characters selected. Choose format above.`}
          >
            <span>{selectionLength} characters selected</span>
            <ChevronUp className="w-4 h-4 animate-bounce" aria-hidden="true" />
            <span>Choose format above</span>
          </div>
        )}

        {/* Editor Section with Platform UI - full screen focus */}
        <div className="mb-8 min-h-[calc(100vh-4rem)] flex flex-col">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              {platform === 'linkedin' && '💼 LinkedIn Post Editor'}
              {platform === 'facebook' && '👥 Facebook Post Editor'}
              {platform === 'other' && '✍️ General Text Editor'}
            </h2>
            <div className="flex items-center gap-3">
              <PlatformSelector
                selectedPlatform={platform}
                onPlatformChange={handlePlatformChange}
              />
            </div>
          </div>
          
          {/* Editor fills available vertical space */}
          <div className={`flex-1 transition-all duration-300 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            {/* Sticky compact toolbar */}
            <div className="sticky top-20 z-30 mb-4">
              <div className="rounded-lg border bg-card p-2 sm:p-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <FormattingToolbar onFormat={handleFormat} />
                  <div className="ml-auto flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setHeroCollapsed((v) => !v)}
                      aria-label={heroCollapsed ? 'Show info' : 'Hide info'}
                    >
                      {heroCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                    </Button>
                    <TooltipProvider delayDuration={300}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            aria-label="Formatting help"
                          >
                            <Info className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Select text, then click a button or use shortcuts: Ctrl+B, Ctrl+I, Ctrl+U</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </div>
            <TextEditor
              ref={textareaRef}
              text={text}
              onChange={handleTextChange}
              onSelect={handleSelectionChange}
              platform={platform}
              onReset={handleReset}
            />
          </div>

          {/* Extras toggle */}
          <div className="mt-4">
            <Button
              variant="outline"
              className="interactive focus-ring"
              onClick={() => setShowExtras((v) => !v)}
              aria-expanded={showExtras}
            >
              {showExtras ? 'Hide details' : 'Show details'}
            </Button>
          </div>
        </div>

        {/* Keyboard Shortcuts Reference */}
        {showExtras && (
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
        )}

        {/* Tips Section */}
        {showExtras && (
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
        )}

        {/* Floating Action Buttons */}
        {text && (
          <div 
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-2 sm:gap-3 animate-scale-in"
            role="toolbar"
            aria-label="Text formatting actions"
          >
            <Button
              size="icon"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 interactive hover-glow focus-ring"
              onClick={copyToClipboard}
              title="Copy All"
              aria-label="Copy all text to clipboard"
            >
              <Copy className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </Button>

            <div className="flex gap-1 sm:gap-2" role="group" aria-label="Undo and redo actions">
              <Button
                size="icon"
                variant="outline"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 interactive focus-ring"
                onClick={undo}
                disabled={historyIndex <= 0}
                title="Undo (Ctrl+Z)"
                aria-label="Undo last action"
              >
                <Undo className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              </Button>

              <Button
                size="icon"
                variant="outline"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 interactive focus-ring"
                onClick={redo}
                disabled={historyIndex >= textHistory.length - 1}
                title="Redo (Ctrl+Shift+Z)"
                aria-label="Redo last undone action"
              >
                <Redo className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              </Button>
            </div>

            <Button
              size="icon"
              variant="outline"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 interactive focus-ring"
              onClick={handleReset}
              title="Reset"
              aria-label="Reset all text and clear editor"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </Button>
          </div>
        )}

        {/* Keyboard Shortcut Tutorial Overlay */}
        {showShortcutTutorial && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tutorial-title"
            aria-describedby="tutorial-description"
          >
            <Card className="w-full max-w-sm sm:max-w-md animate-scale-in glass">
              <CardHeader className="pb-3">
                <CardTitle 
                  id="tutorial-title"
                  className="flex items-center gap-2 text-gradient-blue text-lg sm:text-xl"
                >
                  <Keyboard className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" aria-hidden="true" />
                  ⌨️ Pro Tip: Use Keyboard Shortcuts!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <p id="tutorial-description" className="text-sm sm:text-base text-muted-foreground">
                  Speed up your workflow with these shortcuts:
                </p>
                <div className="space-y-1 sm:space-y-2" role="list" aria-label="Keyboard shortcuts">
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-secondary/50 transition-colors focus-ring" role="listitem" tabIndex="0">
                    <span className="font-medium text-sm sm:text-base">Bold</span>
                    <kbd className="px-2 py-1 sm:px-3 sm:py-1 bg-secondary rounded font-mono text-xs sm:text-sm" aria-label="Control B">Ctrl+B</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-secondary/50 transition-colors focus-ring" role="listitem" tabIndex="0">
                    <span className="font-medium text-sm sm:text-base">Italic</span>
                    <kbd className="px-2 py-1 sm:px-3 sm:py-1 bg-secondary rounded font-mono text-xs sm:text-sm" aria-label="Control I">Ctrl+I</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-secondary/50 transition-colors focus-ring" role="listitem" tabIndex="0">
                    <span className="font-medium text-sm sm:text-base">Underline</span>
                    <kbd className="px-2 py-1 sm:px-3 sm:py-1 bg-secondary rounded font-mono text-xs sm:text-sm" aria-label="Control U">Ctrl+U</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-secondary/50 transition-colors focus-ring" role="listitem" tabIndex="0">
                    <span className="font-medium text-sm sm:text-base">Undo</span>
                    <kbd className="px-2 py-1 sm:px-3 sm:py-1 bg-secondary rounded font-mono text-xs sm:text-sm" aria-label="Control Z">Ctrl+Z</kbd>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-secondary/50 transition-colors focus-ring" role="listitem" tabIndex="0">
                    <span className="font-medium text-sm sm:text-base">Redo</span>
                    <kbd className="px-2 py-1 sm:px-3 sm:py-1 bg-secondary rounded font-mono text-xs sm:text-sm" aria-label="Control Shift Z">Ctrl+Shift+Z</kbd>
                  </div>
                </div>
                <Button
                  className="w-full interactive hover-glow text-sm sm:text-base focus-ring"
                  onClick={() => {
                    setShowShortcutTutorial(false);
                    localStorage.setItem('hasSeenShortcutTutorial', 'true');
                  }}
                  aria-label="Close keyboard shortcuts tutorial"
                >
                  Got it!
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}