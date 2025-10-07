'use client';

import { forwardRef, useEffect } from 'react';
import Image from 'next/image';
// Auto-resize helper for textareas
function autoResize(el) {
  if (!el) return;
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight}px`;
}
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  ImageIcon, 
  Video, 
  Calendar, 
  FileText, 
  Smile, 
  MapPin,
  MoreHorizontal,
  Globe,
  Copy,
  Download,
  RotateCcw
} from 'lucide-react';
import EditorActions from '@/components/EditorActions';

const LinkedInEditor = forwardRef(({ text, onChange, onSelect, stats, platform, onReset }, ref) => {
  useEffect(() => {
    autoResize(ref?.current);
  }, [text]);
  return (
    <div className="bg-white dark:bg-[#1B1F23] rounded-lg border border-[#E0E0E0] dark:border-[#38434F] overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 flex items-start gap-3">
        {/* Profile Picture */}
        <a href="/developer" className="relative w-12 h-12 shrink-0" aria-label="Go to developer page">
          <Image
            src="https://avatars.githubusercontent.com/u/60138887?v=4"
            alt="Profile avatar"
            fill
            sizes="48px"
            className="rounded-full object-cover border border-border"
            priority
          />
        </a>
        
        <div className="flex-1">
          {/* User Info */}
          <div className="mb-2">
            <a href="/developer" className="font-semibold text-sm text-gray-900 dark:text-white hover:underline">Nayeem Islam</a>
            <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Globe className="w-3 h-3" />
              <span>Anyone</span>
            </div>
          </div>
          
          {/* Editor Actions */}
          <div className="flex items-center justify-end mb-3">
            <EditorActions 
              text={text}
              onReset={onReset}
            />
          </div>
          
          {/* LinkedIn-style Text Area */}
          <div className="relative rounded-xl border border-gray-200 dark:border-[#38434F] bg-white/60 dark:bg-transparent px-3 py-2 transition-colors focus-within:border-[#0A66C2] focus-within:ring-2 focus-within:ring-[#0A66C2]/20">
            <Textarea
              ref={ref}
              placeholder="What do you want to talk about?"
              value={text}
              onChange={onChange}
              onSelect={onSelect}
              onInput={(e) => autoResize(e.target)}
              className="min-h-[140px] resize-none overflow-hidden border-none p-0 text-base text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent leading-relaxed caret-[#0A66C2] selection:bg-blue-200/60 dark:selection:bg-blue-900/40"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: '16px',
                lineHeight: '1.5'
              }}
              spellCheck
              autoCorrect="on"
              autoCapitalize="sentences"
              maxLength={3000}
            />
            {/* LinkedIn-style character counter */}
            {text.length > 0 && (
              <div className="pointer-events-none absolute -bottom-5 right-2 text-xs text-gray-500 dark:text-gray-400">
                {text.length}/3000
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Emoji Button */}
      <div className="px-4 pb-3">
        <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
          <Smile className="w-4 h-4 mr-2" />
          Add emoji
        </Button>
      </div>

      <Separator />

      {/* LinkedIn-style Bottom Actions */}
      <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              Photo
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              <Video className="w-5 h-5 mr-2" />
              Video
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Event
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              <FileText className="w-5 h-5 mr-2" />
              Write article
            </Button>
          </div>
          
          <Button 
            className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold px-6 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            disabled={!text.trim()}
            style={{
              backgroundColor: text.trim() ? '#0A66C2' : '#E0E0E0',
              color: text.trim() ? 'white' : '#666666'
            }}
          >
            Post
          </Button>
        </div>
      </div>

      <Separator />

      {/* LinkedIn-style Engagement Stats */}
      <div className="px-4 py-3 bg-gray-50 dark:bg-[#1B1F23] border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-2">
          <div className="flex items-center gap-4">
            <span><strong>{stats.chars}</strong> characters</span>
            <span><strong>{stats.words}</strong> words</span>
            <span><strong>{stats.sentences}</strong> sentences</span>
          </div>
          {stats.chars > 3000 ? (
            <span className="text-red-600 font-medium">Exceeds 3,000 limit</span>
          ) : (
            <span className="text-green-600 font-medium">{3000 - stats.chars} remaining</span>
          )}
        </div>
        
        {/* Simulated LinkedIn Engagement */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-blue-500 rounded-full border border-white flex items-center justify-center text-white text-xs">👍</div>
                <div className="w-4 h-4 bg-green-500 rounded-full border border-white flex items-center justify-center text-white text-xs">❤️</div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full border border-white flex items-center justify-center text-white text-xs">👏</div>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">247</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">23 comments</span>
            <span className="text-xs text-gray-600 dark:text-gray-400">12 shares</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500">
            Preview engagement
          </div>
        </div>
        
        {/* Sample Comments Preview */}
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-start gap-2 text-xs">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
              N
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 dark:text-white">Nayeem Islam</div>
              <div className="text-gray-600 dark:text-gray-400">Sample preview comment to demonstrate layout only.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

LinkedInEditor.displayName = 'LinkedInEditor';

const FacebookEditor = forwardRef(({ text, onChange, onSelect, stats, platform, onReset }, ref) => {
  useEffect(() => {
    autoResize(ref?.current);
  }, [text]);
  return (
    <div className="bg-white dark:bg-[#242526] rounded-lg border border-[#CED0D4] dark:border-[#3E4042] overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 pb-3 flex items-center gap-3">
        {/* Profile Picture */}
        <a href="/developer" className="relative w-10 h-10 shrink-0" aria-label="Go to developer page">
          <Image
            src="https://avatars.githubusercontent.com/u/60138887?v=4"
            alt="Profile avatar"
            fill
            sizes="40px"
            className="rounded-full object-cover border border-border"
            priority
          />
        </a>
        
        <div className="flex-1">
          <a href="/developer" className="font-semibold text-sm text-gray-900 dark:text-[#E4E6EB] hover:underline">Nayeem Islam</a>
          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-gray-600 dark:text-[#B0B3B8] hover:bg-transparent">
            <Globe className="w-3 h-3 mr-1" />
            Public
          </Button>
          
              {/* Editor Actions */}
              <div className="flex items-center justify-end mt-3">
                <EditorActions
                  text={text}
                  onReset={onReset}
                />
              </div>
        </div>
      </div>

          {/* Facebook-style Text Area */}
          <div className="px-4 pb-3">
            <div className="relative rounded-xl border border-[#E5E7EB] dark:border-[#3E4042] bg-white/70 dark:bg-transparent px-3 py-2 transition-colors focus-within:border-[#1877F2] focus-within:ring-2 focus-within:ring-[#1877F2]/20">
              <Textarea
            ref={ref}
            placeholder="What's on your mind?"
            value={text}
            onChange={onChange}
            onSelect={onSelect}
                onInput={(e) => autoResize(e.target)}
                className="min-h-[140px] resize-none overflow-hidden border-none p-0 text-lg text-gray-900 dark:text-[#E4E6EB] placeholder:text-gray-500 dark:placeholder:text-[#B0B3B8] focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent leading-relaxed caret-[#1877F2] selection:bg-blue-200/60 dark:selection:bg-blue-900/40"
            style={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: '18px',
              lineHeight: '1.5'
            }}
                spellCheck
                autoCorrect="on"
                autoCapitalize="sentences"
                maxLength={63206}
          />
          {/* Facebook-style character counter */}
              {text.length > 0 && (
                <div className="pointer-events-none absolute -bottom-5 right-2 text-xs text-gray-500 dark:text-gray-400">
              {text.length}/63206
            </div>
          )}
        </div>
      </div>

      {/* Color/Background Selector (Visual Only) */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 p-2 border border-gray-200 dark:border-[#3E4042] rounded-lg">
          <Smile className="w-5 h-5 text-gray-600 dark:text-[#B0B3B8]" />
          <span className="text-sm text-gray-600 dark:text-[#B0B3B8]">Add emoji</span>
        </div>
      </div>

      <Separator className="dark:bg-[#3E4042]" />

      {/* Facebook-style Bottom Actions */}
      <div className="px-4 py-3 border-t border-gray-200 dark:border-[#3E4042]">
        <div className="mb-3 text-sm font-semibold text-gray-700 dark:text-[#E4E6EB] px-2">
          Add to your post
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 dark:text-[#B0B3B8] hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg p-2"
              title="Photo/Video"
            >
              <ImageIcon className="w-6 h-6 text-green-500" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 dark:text-[#B0B3B8] hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg p-2"
              title="Feeling/Activity"
            >
              <Smile className="w-6 h-6 text-yellow-500" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 dark:text-[#B0B3B8] hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg p-2"
              title="Check in"
            >
              <MapPin className="w-6 h-6 text-red-600" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 dark:text-[#B0B3B8] hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg p-2"
              title="More"
            >
              <MoreHorizontal className="w-6 h-6 text-gray-500" />
            </Button>
          </div>
          
          <Button 
            className="bg-[#1877F2] hover:bg-[#1568D8] text-white font-semibold px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            disabled={!text.trim()}
            style={{
              backgroundColor: text.trim() ? '#1877F2' : '#E0E0E0',
              color: text.trim() ? 'white' : '#666666'
            }}
          >
            Post
          </Button>
        </div>
      </div>

      <Separator className="dark:bg-[#3E4042]" />

      {/* Facebook-style Engagement Stats */}
      <div className="px-4 py-3 bg-gray-50 dark:bg-[#3A3B3C] border-t border-gray-200 dark:border-[#3E4042]">
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-[#B0B3B8] mb-2">
          <div className="flex items-center gap-4">
            <span><strong>{stats.chars}</strong> characters</span>
            <span><strong>{stats.words}</strong> words</span>
            <span><strong>{stats.sentences}</strong> sentences</span>
          </div>
          {stats.chars > 63206 && (
            <span className="text-red-600 font-medium">Exceeds limit</span>
          )}
        </div>
        
        {/* Simulated Facebook Engagement */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-blue-500 rounded-full border border-white flex items-center justify-center text-white text-xs">👍</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border border-white flex items-center justify-center text-white text-xs">❤️</div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full border border-white flex items-center justify-center text-white text-xs">😂</div>
                <div className="w-4 h-4 bg-purple-500 rounded-full border border-white flex items-center justify-center text-white text-xs">😮</div>
                <div className="w-4 h-4 bg-orange-500 rounded-full border border-white flex items-center justify-center text-white text-xs">😢</div>
                <div className="w-4 h-4 bg-red-600 rounded-full border border-white flex items-center justify-center text-white text-xs">😡</div>
              </div>
              <span className="text-xs text-gray-600 dark:text-[#B0B3B8]">1.2K</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-[#B0B3B8]">89 comments</span>
            <span className="text-xs text-gray-600 dark:text-[#B0B3B8]">34 shares</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500">
            Preview engagement
          </div>
        </div>
        
        {/* Sample Comments Preview */}
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-[#3E4042]">
          <div className="flex items-start gap-2 text-xs">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
              N
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 dark:text-[#E4E6EB]">Nayeem Islam</div>
              <div className="text-gray-600 dark:text-[#B0B3B8]">Sample preview comment to demonstrate layout only.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

FacebookEditor.displayName = 'FacebookEditor';

const GenericEditor = forwardRef(({ text, onChange, onSelect, stats, platform, onReset }, ref) => {
  useEffect(() => {
    autoResize(ref?.current);
  }, [text]);
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border-b border-gray-300 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-md overflow-hidden">
                  <Image
                    src="https://avatars.githubusercontent.com/u/60138887?v=4"
                    alt="Profile avatar"
                    fill
                    sizes="32px"
                    className="object-cover"
                    priority
                  />
                </div>
            <div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">Text Editor</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">General Purpose</div>
            </div>
          </div>
          
              {/* Editor Actions */}
              <div className="flex items-center gap-3">
                <EditorActions
                  text={text}
                  onReset={onReset}
                />
              </div>
        </div>
      </div>

          {/* Professional Text Area */}
          <div className="p-4">
            <div className="relative rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-transparent px-3 py-2 transition-colors focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
              <Textarea
            ref={ref}
            placeholder="Start writing your content here..."
            value={text}
            onChange={onChange}
            onSelect={onSelect}
                onInput={(e) => autoResize(e.target)}
                className="min-h-[300px] resize-none overflow-hidden border-none p-0 text-base text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent leading-relaxed caret-blue-600 selection:bg-blue-200/60 dark:selection:bg-blue-900/40"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: '16px',
              lineHeight: '1.6'
            }}
                spellCheck
                autoCorrect="on"
                autoCapitalize="sentences"
          />
          {/* Character counter */}
              {text.length > 0 && (
                <div className="pointer-events-none absolute -bottom-5 right-2 text-xs text-gray-500 dark:text-gray-400">
              {text.length} characters
            </div>
          )}
        </div>
      </div>

      <Separator />

      {/* Professional Engagement Stats */}
      <div className="px-4 py-3 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-2">
          <div className="flex items-center gap-4">
            <span><strong>{stats.chars}</strong> characters</span>
            <span><strong>{stats.words}</strong> words</span>
            <span><strong>{stats.sentences}</strong> sentences</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">No character limit</span>
        </div>
        
        {/* Simulated Professional Engagement */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-blue-500 rounded-full border border-white flex items-center justify-center text-white text-xs">👍</div>
                <div className="w-4 h-4 bg-green-500 rounded-full border border-white flex items-center justify-center text-white text-xs">❤️</div>
                <div className="w-4 h-4 bg-purple-500 rounded-full border border-white flex items-center justify-center text-white text-xs">💡</div>
                <div className="w-4 h-4 bg-orange-500 rounded-full border border-white flex items-center justify-center text-white text-xs">🔥</div>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">156</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">12 comments</span>
            <span className="text-xs text-gray-600 dark:text-gray-400">8 shares</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500">
            Preview engagement
          </div>
        </div>
        
        {/* Sample Comments Preview */}
        <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-start gap-2 text-xs">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
              N
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 dark:text-white">Nayeem Islam</div>
              <div className="text-gray-600 dark:text-gray-400">Sample preview comment to demonstrate layout only.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

GenericEditor.displayName = 'GenericEditor';

const TextEditor = forwardRef(({ text, onChange, onSelect, platform = 'linkedin', onReset }, ref) => {
  // Calculate statistics
  const stats = {
    chars: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0,
  };

  switch (platform) {
    case 'linkedin':
      return <LinkedInEditor ref={ref} text={text} onChange={onChange} onSelect={onSelect} stats={stats} platform={platform} onReset={onReset} />;
    case 'facebook':
      return <FacebookEditor ref={ref} text={text} onChange={onChange} onSelect={onSelect} stats={stats} platform={platform} onReset={onReset} />;
    case 'other':
      return <GenericEditor ref={ref} text={text} onChange={onChange} onSelect={onSelect} stats={stats} platform={platform} onReset={onReset} />;
    default:
      return <LinkedInEditor ref={ref} text={text} onChange={onChange} onSelect={onSelect} stats={stats} platform={platform} onReset={onReset} />;
  }
});

TextEditor.displayName = 'TextEditor';

export default TextEditor;