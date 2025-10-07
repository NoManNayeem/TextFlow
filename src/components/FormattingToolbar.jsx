'use client';

import { 
  FaBold, 
  FaItalic, 
  FaUnderline, 
  FaStrikethrough,
  FaFont,
  FaListUl,
  FaListOl
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

export default function FormattingToolbar({ onFormat }) {
  const toolGroups = [
    {
      tools: [
        { icon: FaBold, action: 'bold', tooltip: 'Bold (Ctrl+B)', shortcut: '⌘B' },
        { icon: FaItalic, action: 'italic', tooltip: 'Italic (Ctrl+I)', shortcut: '⌘I' },
        { icon: FaUnderline, action: 'underline', tooltip: 'Underline (Ctrl+U)', shortcut: '⌘U' },
        { icon: FaStrikethrough, action: 'strikethrough', tooltip: 'Strikethrough', shortcut: '' },
      ]
    },
    {
      tools: [
        { icon: FaFont, action: 'uppercase', tooltip: 'UPPERCASE', label: 'A', shortcut: '' },
        { icon: FaFont, action: 'lowercase', tooltip: 'lowercase', label: 'a', shortcut: '' },
        { icon: FaFont, action: 'titlecase', tooltip: 'Title Case', label: 'Aa', shortcut: '' },
      ]
    },
    {
      tools: [
        { icon: FaListUl, action: 'bullets', tooltip: 'Bullet List', shortcut: '' },
        { icon: FaListOl, action: 'numbers', tooltip: 'Numbered List', shortcut: '' },
      ]
    }
  ];

  return (
    <div className="border border-border rounded-lg p-2 bg-background/50 backdrop-blur-sm">
      <TooltipProvider delayDuration={300}>
        <div className="flex items-center gap-1 flex-wrap">
          {toolGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-1">
              {group.tools.map((tool, toolIdx) => (
                <Tooltip key={toolIdx}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 hover:bg-secondary"
                      onClick={() => onFormat(tool.action)}
                    >
                      {tool.label ? (
                        <span className="font-semibold text-sm">{tool.label}</span>
                      ) : (
                        <tool.icon className="h-4 w-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      {tool.tooltip}
                      {tool.shortcut && (
                        <span className="ml-2 text-xs text-muted-foreground">
                          {tool.shortcut}
                        </span>
                      )}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
              {groupIdx < toolGroups.length - 1 && (
                <Separator orientation="vertical" className="h-6 mx-1" />
              )}
            </div>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}