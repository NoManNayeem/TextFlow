import { useEffect } from 'react';

export function useKeyboardShortcuts(onFormat) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if Ctrl (Windows/Linux) or Cmd (Mac) is pressed
      const isModifier = e.ctrlKey || e.metaKey;
      
      if (!isModifier) return;

      // Prevent default browser behavior for our shortcuts
      const shortcuts = {
        'b': 'bold',
        'i': 'italic',
        'u': 'underline',
      };

      const key = e.key.toLowerCase();
      
      if (shortcuts[key]) {
        e.preventDefault();
        onFormat(shortcuts[key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onFormat]);
}