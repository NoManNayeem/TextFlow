'use client';

import { forwardRef } from 'react';
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
  Globe
} from 'lucide-react';

const LinkedInEditor = forwardRef(({ text, onChange, stats }, ref) => {
  return (
    <div className="bg-white dark:bg-[#1B1F23] rounded-lg border border-[#E0E0E0] dark:border-[#38434F] overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 flex items-start gap-3">
        {/* Profile Picture Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-semibold text-lg shrink-0">
          U
        </div>
        
        <div className="flex-1">
          {/* User Info */}
          <div className="mb-2">
            <div className="font-semibold text-sm text-gray-900 dark:text-white">Your Name</div>
            <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Globe className="w-3 h-3" />
              <span>Anyone</span>
            </div>
          </div>
          
          {/* Text Area */}
          <Textarea
            ref={ref}
            placeholder="What do you want to talk about?"
            value={text}
            onChange={onChange}
            className="min-h-[400px] resize-none border-none p-0 text-base text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
          />
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

      {/* Bottom Actions */}
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-2">
            <ImageIcon className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Photo</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-2">
            <Video className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Video</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-2">
            <Calendar className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Event</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-2">
            <FileText className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Article</span>
          </Button>
        </div>
        
        <Button 
          disabled={!text} 
          className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold px-6 rounded-full"
        >
          Post
        </Button>
      </div>

      <Separator />

      {/* Stats Footer */}
      <div className="px-4 py-3 bg-gray-50 dark:bg-[#1B1F23] flex items-center justify-between text-xs">
        <div className="flex gap-4 text-gray-600 dark:text-gray-400">
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
    </div>
  );
});

LinkedInEditor.displayName = 'LinkedInEditor';

const FacebookEditor = forwardRef(({ text, onChange, stats }, ref) => {
  return (
    <div className="bg-white dark:bg-[#242526] rounded-lg border border-[#CED0D4] dark:border-[#3E4042] overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 pb-3 flex items-center gap-3">
        {/* Profile Picture Placeholder */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold shrink-0">
          U
        </div>
        
        <div>
          <div className="font-semibold text-sm text-gray-900 dark:text-[#E4E6EB]">Your Name</div>
          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-gray-600 dark:text-[#B0B3B8] hover:bg-transparent">
            <Globe className="w-3 h-3 mr-1" />
            Public
          </Button>
        </div>
      </div>

      {/* Text Area */}
      <div className="px-4 pb-3">
        <Textarea
          ref={ref}
          placeholder="What's on your mind?"
          value={text}
          onChange={onChange}
          className="min-h-[400px] resize-none border-none p-0 text-lg text-gray-900 dark:text-[#E4E6EB] placeholder:text-gray-500 dark:placeholder:text-[#B0B3B8] focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
        />
      </div>

      {/* Color/Background Selector (Visual Only) */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 p-2 border border-gray-200 dark:border-[#3E4042] rounded-lg">
          <Smile className="w-5 h-5 text-gray-600 dark:text-[#B0B3B8]" />
          <span className="text-sm text-gray-600 dark:text-[#B0B3B8]">Add emoji</span>
        </div>
      </div>

      <Separator className="dark:bg-[#3E4042]" />

      {/* Bottom Actions */}
      <div className="p-3">
        <div className="mb-3 text-sm font-semibold text-gray-700 dark:text-[#E4E6EB] px-2">
          Add to your post
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-[#B0B3B8] hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg gap-2">
              <ImageIcon className="w-6 h-6 text-green-500" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-[#B0B3B8] hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg gap-2">
              <Video className="w-6 h-6 text-red-500" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-[#B0B3B8] hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg gap-2">
              <Smile className="w-6 h-6 text-yellow-500" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-[#B0B3B8] hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg gap-2">
              <MapPin className="w-6 h-6 text-red-600" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-[#B0B3B8] hover:bg-gray-100 dark:hover:bg-[#3A3B3C] rounded-lg gap-2">
              <MoreHorizontal className="w-6 h-6 text-gray-500" />
            </Button>
          </div>
        </div>
      </div>

      <Separator className="dark:bg-[#3E4042]" />

      {/* Post Button */}
      <div className="p-3">
        <Button 
          disabled={!text} 
          className="w-full bg-[#1877F2] hover:bg-[#1568D8] text-white font-semibold rounded-md"
        >
          Post
        </Button>
      </div>

      <Separator className="dark:bg-[#3E4042]" />

      {/* Stats Footer */}
      <div className="px-4 py-3 bg-gray-50 dark:bg-[#3A3B3C] flex items-center justify-between text-xs">
        <div className="flex gap-4 text-gray-600 dark:text-[#B0B3B8]">
          <span><strong>{stats.chars}</strong> characters</span>
          <span><strong>{stats.words}</strong> words</span>
          <span><strong>{stats.sentences}</strong> sentences</span>
        </div>
        {stats.chars > 63206 && (
          <span className="text-red-600 font-medium">Exceeds limit</span>
        )}
      </div>
    </div>
  );
});

FacebookEditor.displayName = 'FacebookEditor';

const GenericEditor = forwardRef(({ text, onChange, stats }, ref) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border-b border-gray-300 dark:border-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white font-semibold">
            ✍️
          </div>
          <div>
            <div className="font-semibold text-sm text-gray-900 dark:text-white">Text Editor</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">General Purpose</div>
          </div>
        </div>
      </div>

      {/* Text Area */}
      <div className="p-4">
        <Textarea
          ref={ref}
          placeholder="Start writing your content here..."
          value={text}
          onChange={onChange}
          className="min-h-[400px] resize-none border-none p-0 text-base text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
        />
      </div>

      <Separator />

      {/* Stats Footer */}
      <div className="px-4 py-3 bg-gray-100 dark:bg-gray-800 flex items-center justify-between text-xs">
        <div className="flex gap-4 text-gray-600 dark:text-gray-400">
          <span><strong>{stats.chars}</strong> characters</span>
          <span><strong>{stats.words}</strong> words</span>
          <span><strong>{stats.sentences}</strong> sentences</span>
        </div>
        <span className="text-gray-500 dark:text-gray-400">No character limit</span>
      </div>
    </div>
  );
});

GenericEditor.displayName = 'GenericEditor';

const TextEditor = forwardRef(({ text, onChange, platform = 'linkedin' }, ref) => {
  // Calculate statistics
  const stats = {
    chars: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0,
  };

  switch (platform) {
    case 'linkedin':
      return <LinkedInEditor ref={ref} text={text} onChange={onChange} stats={stats} />;
    case 'facebook':
      return <FacebookEditor ref={ref} text={text} onChange={onChange} stats={stats} />;
    case 'other':
      return <GenericEditor ref={ref} text={text} onChange={onChange} stats={stats} />;
    default:
      return <LinkedInEditor ref={ref} text={text} onChange={onChange} stats={stats} />;
  }
});

TextEditor.displayName = 'TextEditor';

export default TextEditor;