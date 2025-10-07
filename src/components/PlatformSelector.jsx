'use client';

import { FaLinkedin, FaFacebook, FaGlobe } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function PlatformSelector({ selectedPlatform, onPlatformChange }) {
  const platforms = [
    { 
      id: 'linkedin', 
      name: 'LinkedIn', 
      icon: FaLinkedin,
      color: 'text-blue-600'
    },
    { 
      id: 'facebook', 
      name: 'Facebook', 
      icon: FaFacebook,
      color: 'text-blue-500'
    },
    { 
      id: 'other', 
      name: 'Other', 
      icon: FaGlobe,
      color: 'text-gray-600'
    },
  ];

  const currentPlatform = platforms.find(p => p.id === selectedPlatform);

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-muted-foreground">
        Platform:
      </label>
      <Select value={selectedPlatform} onValueChange={onPlatformChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue>
            <div className="flex items-center gap-2">
              {currentPlatform && (
                <>
                  <currentPlatform.icon className={`h-4 w-4 ${currentPlatform.color}`} />
                  <span>{currentPlatform.name}</span>
                </>
              )}
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {platforms.map((platform) => (
            <SelectItem key={platform.id} value={platform.id}>
              <div className="flex items-center gap-2">
                <platform.icon className={`h-4 w-4 ${platform.color}`} />
                <span>{platform.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}