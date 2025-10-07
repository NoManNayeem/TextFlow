// 'use client';

// import { useState, useEffect } from 'react';
// import { Moon, Sun, Copy, RotateCcw, Check } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import { Toggle } from '@/components/ui/toggle';

// export default function TextFlow() {
//   const [text, setText] = useState('');
//   const [formattedText, setFormattedText] = useState('');
//   const [theme, setTheme] = useState('light');
//   const [copied, setCopied] = useState(false);
//   const [activeFormats, setActiveFormats] = useState({
//     bold: false,
//     italic: false,
//     underline: false,
//     strikethrough: false,
//     uppercase: false,
//     lowercase: false,
//     titlecase: false,
//     bullets: false,
//     numbers: false,
//   });

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   const applyFormat = (formatType) => {
//     const newActiveFormats = { ...activeFormats };
    
//     // Handle mutually exclusive formats
//     if (['uppercase', 'lowercase', 'titlecase'].includes(formatType)) {
//       newActiveFormats.uppercase = false;
//       newActiveFormats.lowercase = false;
//       newActiveFormats.titlecase = false;
//     }
    
//     if (['bullets', 'numbers'].includes(formatType)) {
//       newActiveFormats.bullets = false;
//       newActiveFormats.numbers = false;
//     }

//     newActiveFormats[formatType] = !activeFormats[formatType];
//     setActiveFormats(newActiveFormats);
    
//     updateFormattedText(text, newActiveFormats);
//   };

//   const updateFormattedText = (inputText, formats) => {
//     if (!inputText) {
//       setFormattedText('');
//       return;
//     }

//     let result = inputText;

//     // Apply case transformations
//     if (formats.uppercase) {
//       result = result.toUpperCase();
//     } else if (formats.lowercase) {
//       result = result.toLowerCase();
//     } else if (formats.titlecase) {
//       result = result.replace(/\w\S*/g, (txt) => {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//       });
//     }

//     // Apply bold using Unicode bold characters
//     if (formats.bold) {
//       result = convertToBold(result);
//     }

//     // Apply italic using Unicode italic characters
//     if (formats.italic) {
//       result = convertToItalic(result);
//     }

//     // Apply underline using combining underline character
//     if (formats.underline) {
//       result = result.split('').map(char => char + '\u0332').join('');
//     }

//     // Apply strikethrough using combining strikethrough character
//     if (formats.strikethrough) {
//       result = result.split('').map(char => char + '\u0336').join('');
//     }

//     // Apply list formatting
//     if (formats.bullets) {
//       result = result.split('\n').map(line => line.trim() ? `• ${line}` : line).join('\n');
//     } else if (formats.numbers) {
//       let counter = 1;
//       result = result.split('\n').map(line => {
//         if (line.trim()) {
//           return `${counter++}. ${line}`;
//         }
//         return line;
//       }).join('\n');
//     }

//     setFormattedText(result);
//   };

//   const convertToBold = (text) => {
//     const boldMap = {
//       'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝',
//       'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧',
//       'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
//       'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
//       'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
//       'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
//       '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
//     };
//     return text.split('').map(char => boldMap[char] || char).join('');
//   };

//   const convertToItalic = (text) => {
//     const italicMap = {
//       'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑',
//       'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛',
//       'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
//       'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫',
//       'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵',
//       'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻'
//     };
//     return text.split('').map(char => italicMap[char] || char).join('');
//   };

//   const handleTextChange = (e) => {
//     const newText = e.target.value;
//     setText(newText);
//     updateFormattedText(newText, activeFormats);
//   };

//   const copyToClipboard = async () => {
//     if (formattedText) {
//       await navigator.clipboard.writeText(formattedText);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   const resetAll = () => {
//     setText('');
//     setFormattedText('');
//     setActiveFormats({
//       bold: false,
//       italic: false,
//       underline: false,
//       strikethrough: false,
//       uppercase: false,
//       lowercase: false,
//       titlecase: false,
//       bullets: false,
//       numbers: false,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
//       <div className="container mx-auto px-4 py-8 max-w-7xl">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               TextFlow
//             </h1>
//             <p className="text-gray-600 dark:text-gray-400 mt-1">
//               Professional LinkedIn Text Formatter
//             </p>
//           </div>
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={toggleTheme}
//               className="rounded-full"
//             >
//               {theme === 'light' ? (
//                 <Moon className="h-5 w-5" />
//               ) : (
//                 <Sun className="h-5 w-5" />
//               )}
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={resetAll}
//               className="rounded-full"
//             >
//               <RotateCcw className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>

//         {/* Formatting Options */}
//         <Card className="mb-6">
//           <CardHeader>
//             <CardTitle>Formatting Options</CardTitle>
//             <CardDescription>
//               Select formatting styles to apply to your text
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {/* Text Style */}
//               <div>
//                 <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
//                   Text Style
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Toggle
//                     pressed={activeFormats.bold}
//                     onPressedChange={() => applyFormat('bold')}
//                     className="font-bold"
//                   >
//                     Bold
//                   </Toggle>
//                   <Toggle
//                     pressed={activeFormats.italic}
//                     onPressedChange={() => applyFormat('italic')}
//                     className="italic"
//                   >
//                     Italic
//                   </Toggle>
//                   <Toggle
//                     pressed={activeFormats.underline}
//                     onPressedChange={() => applyFormat('underline')}
//                     className="underline"
//                   >
//                     Underline
//                   </Toggle>
//                   <Toggle
//                     pressed={activeFormats.strikethrough}
//                     onPressedChange={() => applyFormat('strikethrough')}
//                     className="line-through"
//                   >
//                     Strikethrough
//                   </Toggle>
//                 </div>
//               </div>

//               <Separator />

//               {/* Text Case */}
//               <div>
//                 <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
//                   Text Case
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Toggle
//                     pressed={activeFormats.uppercase}
//                     onPressedChange={() => applyFormat('uppercase')}
//                   >
//                     UPPERCASE
//                   </Toggle>
//                   <Toggle
//                     pressed={activeFormats.lowercase}
//                     onPressedChange={() => applyFormat('lowercase')}
//                   >
//                     lowercase
//                   </Toggle>
//                   <Toggle
//                     pressed={activeFormats.titlecase}
//                     onPressedChange={() => applyFormat('titlecase')}
//                   >
//                     Title Case
//                   </Toggle>
//                 </div>
//               </div>

//               <Separator />

//               {/* Lists */}
//               <div>
//                 <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
//                   Lists
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   <Toggle
//                     pressed={activeFormats.bullets}
//                     onPressedChange={() => applyFormat('bullets')}
//                   >
//                     • Bullet List
//                   </Toggle>
//                   <Toggle
//                     pressed={activeFormats.numbers}
//                     onPressedChange={() => applyFormat('numbers')}
//                   >
//                     1. Numbered List
//                   </Toggle>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Input and Preview */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Input Section */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Input Text</CardTitle>
//               <CardDescription>
//                 Type or paste your text here
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Textarea
//                 placeholder="Enter your LinkedIn post text here..."
//                 value={text}
//                 onChange={handleTextChange}
//                 className="min-h-[400px] resize-none font-sans"
//               />
//             </CardContent>
//           </Card>

//           {/* Preview Section */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <CardTitle>Live Preview</CardTitle>
//                   <CardDescription>
//                     See your formatted text in real-time
//                   </CardDescription>
//                 </div>
//                 <Button
//                   onClick={copyToClipboard}
//                   disabled={!formattedText}
//                   size="sm"
//                   className="gap-2"
//                 >
//                   {copied ? (
//                     <>
//                       <Check className="h-4 w-4" />
//                       Copied!
//                     </>
//                   ) : (
//                     <>
//                       <Copy className="h-4 w-4" />
//                       Copy
//                     </>
//                   )}
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="min-h-[400px] p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 whitespace-pre-wrap break-words font-sans">
//                 {formattedText || (
//                   <span className="text-gray-400 dark:text-gray-600">
//                     Your formatted text will appear here...
//                   </span>
//                 )}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Tips Section */}
//         <Card className="mt-6">
//           <CardHeader>
//             <CardTitle>💡 Tips for LinkedIn Posts</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
//               <li>• Use bold text to emphasize key points and make them stand out</li>
//               <li>• Break long posts into paragraphs for better readability</li>
//               <li>• Use bullet points or numbered lists for key takeaways</li>
//               <li>• Mix formatting styles sparingly to maintain professionalism</li>
//               <li>• Copy the formatted text and paste it directly into LinkedIn</li>
//             </ul>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }