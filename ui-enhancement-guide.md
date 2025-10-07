# TextFlow - UI Enhancement Guidelines

## 🎨 Design System Overview

### Color Palette

#### Primary Colors
```
Blue Primary:    #0A66C2 (LinkedIn Blue)
Indigo:          #4F46E5
Purple:          #7C3AED
Pink:            #EC4899
```

#### Semantic Colors
```
Success:         #10B981 (Green)
Warning:         #F59E0B (Amber)
Error:           #EF4444 (Red)
Info:            #3B82F6 (Blue)
```

#### Neutral Colors (Light Mode)
```
Background:      #FFFFFF
Surface:         #F9FAFB
Border:          #E5E7EB
Text Primary:    #111827
Text Secondary:  #6B7280
Text Muted:      #9CA3AF
```

#### Neutral Colors (Dark Mode)
```
Background:      #0F172A
Surface:         #1E293B
Border:          #334155
Text Primary:    #F1F5F9
Text Secondary:  #CBD5E1
Text Muted:      #64748B
```

### Typography

#### Font Family
```css
Primary: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif
Monospace: 'SF Mono', Monaco, 'Cascadia Code', monospace
```

#### Font Sizes
```css
xs:   0.75rem  (12px)
sm:   0.875rem (14px)
base: 1rem     (16px)
lg:   1.125rem (18px)
xl:   1.25rem  (20px)
2xl:  1.5rem   (24px)
3xl:  1.875rem (30px)
4xl:  2.25rem  (36px)
5xl:  3rem     (48px)
```

#### Font Weights
```css
Normal:    400
Medium:    500
Semibold:  600
Bold:      700
```

### Spacing System
```css
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
20:  80px
```

### Border Radius
```css
sm:   0.125rem (2px)
md:   0.375rem (6px)
lg:   0.5rem   (8px)
xl:   0.75rem  (12px)
2xl:  1rem     (16px)
full: 9999px   (circle)
```

### Shadows
```css
sm:   0 1px 2px 0 rgb(0 0 0 / 0.05)
md:   0 4px 6px -1px rgb(0 0 0 / 0.1)
lg:   0 10px 15px -3px rgb(0 0 0 / 0.1)
xl:   0 20px 25px -5px rgb(0 0 0 / 0.1)
2xl:  0 25px 50px -12px rgb(0 0 0 / 0.25)
```

---

## 📐 Component-by-Component UI Specifications

### 1. Navbar Component

#### Position & Layout
```
- Position: Sticky top-0
- Height: 64px (h-16)
- Z-index: 50
- Width: Full width
- Container: max-w-7xl mx-auto px-4
```

#### Styling
```css
Background: bg-background/95 backdrop-blur
Border: border-b border-border/40
Shadow: None (relies on border)
```

#### Logo Section
```
Position: Left side, flex items-center gap-2
Icon Box:
  - Size: 40px (w-10 h-10)
  - Background: gradient from-blue-600 to-indigo-600
  - Radius: rounded-lg (8px)
  - Text: White, bold, text-xl
Logo Text:
  - Font: text-xl font-bold
  - Gradient: from-blue-600 to-indigo-600
  - Effect: bg-clip-text text-transparent
```

#### Navigation Links (Desktop)
```
Layout: hidden md:flex items-center space-x-1
Each Link:
  - Padding: px-4 py-2
  - Radius: rounded-md
  - Font: text-sm font-medium
  - Transition: transition-colors
  
Active State:
  - Background: bg-secondary
  - Text: text-foreground
  
Inactive State:
  - Text: text-muted-foreground
  - Hover: hover:text-foreground hover:bg-secondary/50
```

#### Theme Toggle Button
```
Size: size-icon (w-10 h-10)
Variant: ghost
Radius: rounded-full
Icon: Moon (5x5) or Sun (5x5)
Hover: Subtle bg-secondary
Transition: All 200ms
```

#### Mobile Menu Button
```
Display: md:hidden
Size: size-icon
Variant: ghost
Radius: rounded-full
Icon: Menu or X (5x5)
```

#### Mobile Navigation
```
Display: Block when open, hidden when closed
Layout: Vertical stack, pb-4 space-y-1
Animation: Slide down with opacity fade
Each Link: Same as desktop but full width
```

#### Animations
```css
Backdrop blur on scroll: supports-[backdrop-filter]:bg-background/60
Mobile menu: Fade in/out with opacity transition
Link hover: 150ms ease transition on background and color
```

---

### 2. Footer Component

#### Position & Layout
```
- Position: Bottom of page
- Padding: py-8
- Border: border-t border-border/40
- Background: bg-background/95
```

#### Grid Layout
```
Desktop: 4 columns (md:grid-cols-4)
Mobile: 1 column
Gap: gap-8
Container: max-w-7xl mx-auto px-4
```

#### Brand Section (Column 1)
```
Logo:
  - Same as navbar (w-8 h-8)
  - Flex items-center space-x-2
  - Margin bottom: mb-3
Description:
  - Font: text-sm
  - Color: text-muted-foreground
  - Line height: relaxed
```

#### Link Sections (Columns 2-4)
```
Heading:
  - Font: font-semibold mb-3
  - Color: text-foreground
Links:
  - Font: text-sm
  - Color: text-muted-foreground
  - Hover: hover:text-foreground
  - Transition: transition-colors
  - Spacing: space-y-2
```

#### Social Icons
```
Container: flex space-x-3
Each Icon:
  - Size: w-10 h-10
  - Shape: rounded-full
  - Background: bg-secondary
  - Hover: hover:bg-secondary/80
  - Icon Size: w-5 h-5
  - Transition: All 200ms
```

#### Copyright Bar
```
Position: Bottom, mt-8 pt-8
Border: border-t border-border/40
Text: text-center text-sm text-muted-foreground
```

---

### 3. Hero Section (Home Page)

#### Container
```
Layout: text-center mb-12
Max Width: max-w-2xl mx-auto
Padding: px-4
```

#### Badge
```
Display: inline-flex items-center gap-2
Padding: px-4 py-2
Background: bg-blue-100 dark:bg-blue-900/30
Radius: rounded-full
Margin: mb-4
Icon:
  - Size: w-4 h-4
  - Color: text-blue-600 dark:text-blue-400
Text:
  - Font: text-sm font-medium
  - Color: text-blue-700 dark:text-blue-300
```

#### Main Heading
```
Font Size: text-5xl
Font Weight: font-bold
Margin: mb-4
Gradient:
  - from-blue-600 via-indigo-600 to-purple-600
  - bg-clip-text text-transparent
Line Height: leading-tight
```

#### Subheading
```
Font Size: text-lg
Color: text-muted-foreground
Max Width: max-w-2xl mx-auto
Line Height: leading-relaxed
```

#### Animation
```
Initial: opacity-0 translate-y-4
Animate: opacity-100 translate-y-0
Duration: 600ms
Stagger: Children animate 100ms apart
```

---

### 4. Formatting Toolbar

#### Container
```
Border: border border-border rounded-lg
Padding: p-2
Background: bg-background/50 backdrop-blur-sm
Display: flex items-center gap-1 flex-wrap
```

#### Tool Buttons
```
Size: h-9 w-9
Variant: ghost
Radius: rounded-md
Hover: hover:bg-secondary
Active: bg-secondary/80
Transition: All 150ms
```

#### Icons
```
Size: h-4 w-4
Color: Inherits from parent
Stroke Width: 2
```

#### Separators
```
Orientation: vertical
Height: h-6
Margin: mx-1
Color: border-border
```

#### Tooltip
```
Background: bg-popover
Border: border border-border
Shadow: shadow-md
Padding: px-3 py-1.5
Radius: rounded-md
Font: text-sm
Animation: Fade in 200ms, slide up 4px
Delay: 300ms
```

#### Keyboard Shortcut Badge (in tooltip)
```
Font: text-xs font-mono
Color: text-muted-foreground
Padding: ml-2
Background: bg-secondary/50
Border Radius: rounded
Padding: px-1
```

---

### 5. Platform Selector

#### Container
```
Display: flex items-center gap-3
```

#### Label
```
Font: text-sm font-medium
Color: text-muted-foreground
```

#### Select Trigger
```
Width: w-[180px]
Height: h-10
Padding: px-3
Border: border border-border
Radius: rounded-md
Background: bg-background
Hover: hover:bg-secondary/50
Focus: ring-2 ring-ring ring-offset-2
Transition: All 150ms
```

#### Select Content
```
Background: bg-popover
Border: border border-border
Shadow: shadow-lg
Radius: rounded-md
Animation: Zoom in from 95% to 100%, fade in
Duration: 200ms
Max Height: 300px
Overflow: auto
```

#### Select Items
```
Padding: px-3 py-2
Hover: bg-secondary
Focus: bg-secondary
Transition: background 100ms
Cursor: pointer
```

#### Platform Icons (in selector)
```
Size: h-4 w-4
LinkedIn: text-blue-600
Facebook: text-blue-500
Other: text-gray-600
Margin Right: mr-2
```

---

### 6. Text Editor (Platform-Specific)

#### LinkedIn Editor

**Container**
```
Background: bg-white dark:bg-[#1B1F23]
Border: border border-[#E0E0E0] dark:border-[#38434F]
Radius: rounded-lg
Shadow: shadow-sm
Overflow: hidden
Transition: All 300ms
```

**Profile Section**
```
Padding: p-4
Layout: flex items-start gap-3
Profile Picture:
  - Size: w-12 h-12
  - Shape: rounded-full
  - Background: gradient from-blue-600 to-blue-700
  - Text: White, font-semibold, text-lg
  - Flex: shrink-0
```

**User Info**
```
Name: font-semibold text-sm text-gray-900 dark:text-white
Visibility:
  - Display: flex items-center gap-1
  - Font: text-xs
  - Color: text-gray-600 dark:text-gray-400
  - Icon: w-3 h-3
```

**Textarea**
```
Min Height: min-h-[400px]
Resize: resize-none
Border: none
Padding: p-0
Font: text-base leading-relaxed
Color: text-gray-900 dark:text-white
Placeholder: text-gray-500 dark:text-gray-400
Focus: No ring (ring-0, ring-offset-0)
Background: transparent
```

**Action Buttons (Bottom)**
```
Layout: flex items-center justify-between
Padding: p-3
Border Top: border-t border-border
Gap: gap-1
Button Style:
  - Variant: ghost
  - Size: sm
  - Color: text-gray-600 dark:text-gray-400
  - Hover: hover:bg-gray-100 dark:hover:bg-gray-800
  - Icon Size: w-5 h-5
```

**Post Button**
```
Background: bg-[#0A66C2] hover:bg-[#004182]
Text: White, font-semibold
Padding: px-6
Radius: rounded-full
Transition: Background 200ms
Disabled: opacity-50, cursor-not-allowed
```

**Stats Footer**
```
Padding: px-4 py-3
Background: bg-gray-50 dark:bg-[#1B1F23]
Border Top: border-t border-gray-100 dark:border-gray-800
Font: text-xs
Display: flex items-center justify-between
```

#### Facebook Editor

**Container**
```
Background: bg-white dark:bg-[#242526]
Border: border border-[#CED0D4] dark:border-[#3E4042]
Radius: rounded-lg
Shadow: shadow-sm
Overflow: hidden
```

**Profile Section**
```
Padding: p-4 pb-3
Layout: flex items-center gap-3
Profile Picture:
  - Size: w-10 h-10
  - Shape: rounded-full
  - Background: gradient from-blue-500 to-blue-600
```

**Textarea**
```
Padding: px-4 pb-3
Min Height: min-h-[400px]
Font: text-lg
Color: text-gray-900 dark:text-[#E4E6EB]
Placeholder: text-gray-500 dark:text-[#B0B3B8]
```

**Add to Post Section**
```
Padding: p-3
Border Top: border-t border-gray-200 dark:border-[#3E4042]
Heading:
  - Font: text-sm font-semibold
  - Color: text-gray-700 dark:text-[#E4E6EB]
  - Margin: mb-3 px-2
```

**Action Icons**
```
Layout: flex items-center gap-1
Icon Buttons:
  - Size: w-6 h-6
  - Hover: bg-gray-100 dark:bg-[#3A3B3C]
  - Radius: rounded-lg
Colors:
  - Photo: text-green-500
  - Video: text-red-500
  - Emoji: text-yellow-500
  - Location: text-red-600
  - More: text-gray-500
```

**Post Button**
```
Width: w-full
Background: bg-[#1877F2] hover:bg-[#1568D8]
Text: White, font-semibold
Radius: rounded-md
Height: h-10
Transition: Background 200ms
```

#### Generic Editor

**Container**
```
Background: bg-white dark:bg-gray-900
Border: border border-gray-300 dark:border-gray-700
Radius: rounded-lg
Shadow: shadow-sm
```

**Header**
```
Padding: p-4
Background: gradient from-gray-100 to-gray-200 
            dark:from-gray-800 dark:to-gray-700
Border Bottom: border-b border-gray-300 dark:border-gray-600
Layout: flex items-center gap-2
```

**Icon Badge**
```
Size: w-8 h-8
Shape: rounded-md
Background: gradient from-gray-600 to-gray-700
Text: White, font-semibold
```

---

### 7. Editor Actions (Copy, Download, Reset)

#### Container
```
Display: flex items-center gap-2
```

#### Reset Button
```
Variant: outline
Size: sm
Gap: gap-2
Icon: RotateCcw (h-4 w-4)
Text: Hidden on mobile (hidden sm:inline)
Hover: hover:bg-secondary/80
Border: border border-border
```

#### Download Button
```
Variant: outline
Size: sm
Gap: gap-2
Icon: Download (h-4 w-4)
Disabled: opacity-50 when no text
Hover: hover:bg-secondary/80
```

#### Copy Button
```
Variant: default (primary)
Size: sm
Gap: gap-2
Icon: Copy or Check (h-4 w-4)
Background: bg-primary hover:bg-primary/90
Text: White
Success State:
  - Icon: Check
  - Text: "Copied!"
  - Duration: 2000ms
```

---

### 8. Cards (General)

#### Base Card
```
Background: bg-card
Border: border border-border
Radius: rounded-lg
Shadow: shadow-md
Overflow: hidden
Transition: All 200ms
Hover: hover:shadow-lg (on interactive cards)
```

#### Card Header
```
Padding: p-6 (desktop) p-4 (mobile)
Border Bottom: Optional, border-b border-border
```

#### Card Title
```
Font: text-2xl font-bold (varies by context)
Color: text-foreground
Margin: mb-2 (if has description)
Line Height: leading-tight
```

#### Card Description
```
Font: text-sm
Color: text-muted-foreground
Line Height: leading-relaxed
```

#### Card Content
```
Padding: p-6 (desktop) p-4 (mobile)
```

---

### 9. Alerts & Messages

#### Alert Container
```
Padding: p-4
Border: border border-border
Radius: rounded-lg
Display: flex items-start gap-3
Transition: opacity 300ms
```

#### Alert Variants

**Info**
```
Background: bg-blue-50 dark:bg-blue-950/20
Border: border-blue-200 dark:border-blue-800
Icon Color: text-blue-600 dark:text-blue-400
Text Color: text-blue-900 dark:text-blue-100
```

**Success**
```
Background: bg-green-50 dark:bg-green-950/20
Border: border-green-200 dark:border-green-800
Icon Color: text-green-600 dark:text-green-400
Text Color: text-green-900 dark:text-green-100
```

**Warning**
```
Background: bg-amber-50 dark:bg-amber-950/20
Border: border-amber-200 dark:border-amber-800
Icon Color: text-amber-600 dark:text-amber-400
Text Color: text-amber-900 dark:text-amber-100
```

**Error**
```
Background: bg-red-50 dark:bg-red-950/20
Border: border-red-200 dark:border-red-800
Icon Color: text-red-600 dark:text-red-400
Text Color: text-red-900 dark:text-red-100
```

---

### 10. Buttons (General)

#### Primary Button
```
Background: bg-primary
Hover: hover:bg-primary/90
Text: text-primary-foreground
Shadow: shadow-sm
Height: h-10 (default)
Padding: px-4 py-2
Radius: rounded-md
Font: font-medium
Transition: All 150ms
Active: active:scale-95
```

#### Secondary Button
```
Background: bg-secondary
Hover: hover:bg-secondary/80
Text: text-secondary-foreground
```

#### Outline Button
```
Background: transparent
Border: border border-border
Hover: hover:bg-secondary/50
Text: text-foreground
```

#### Ghost Button
```
Background: transparent
Hover: hover:bg-secondary
Text: text-foreground
```

#### Disabled State (All Buttons)
```
Opacity: opacity-50
Cursor: cursor-not-allowed
Pointer Events: pointer-events-none
```

---

### 11. Input Fields & Textareas

#### Base Input
```
Height: h-10
Padding: px-3 py-2
Border: border border-border
Radius: rounded-md
Background: bg-background
Font: text-sm
Transition: All 150ms
```

#### Focus State
```
Ring: ring-2 ring-ring ring-offset-2
Border: border-ring
Outline: outline-none
```

#### Error State
```
Border: border-destructive
Ring: ring-destructive/20 (on focus)
```

#### Disabled State
```
Background: bg-muted
Cursor: cursor-not-allowed
Opacity: opacity-60
```

---

### 12. Gradients

#### Background Gradients

**Home Page**
```
bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
```

**Tutorial Page**
```
bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50
dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900
```

**About Page**
```
bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50
dark:from-gray-900 dark:via-emerald-900/20 dark:to-gray-900
```

#### Text Gradients
```
Blue to Indigo: from-blue-600 via-indigo-600 to-purple-600
Purple to Pink: from-purple-600 via-pink-600 to-orange-600
Green to Teal: from-green-600 via-emerald-600 to-teal-600
```

---

### 13. Animations & Transitions

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
Duration: 300ms
Timing: ease-in-out
```

#### Slide Up
```css
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
Duration: 400ms
Timing: ease-out
```

#### Scale
```css
Hover: hover:scale-105
Active: active:scale-95
Duration: 150ms
Timing: ease-in-out
```

#### Color Transitions
```
All color changes: transition-colors
Duration: 200ms
```

#### Layout Transitions
```
Transform, opacity, shadow: transition-all
Duration: 300ms
Timing: ease-in-out
```

---

### 14. Responsive Breakpoints

```css
sm:  640px   - Small tablets
md:  768px   - Tablets
lg:  1024px  - Small laptops
xl:  1280px  - Desktops
2xl: 1536px  - Large desktops
```

#### Mobile-First Approach
```
Base: Mobile design (default)
sm+: Adjustments for tablets
md+: Desktop layout changes
lg+: Wide screen optimizations
```

---

### 15. Accessibility Features

#### Focus Indicators
```
Ring: ring-2 ring-ring ring-offset-2
Visible: Always visible on focus
Color: Contrasts with background
```

#### Color Contrast
```
Text on Background: Minimum 4.5:1
Large Text: Minimum 3:1
Interactive Elements: 3:1
```

#### Touch Targets
```
Minimum Size: 44x44px (iOS) / 48x48px (Android)
Spacing: Minimum 8px between targets
```

#### Keyboard Navigation
```
Tab Order: Logical flow
Skip Links: Skip to main content
Escape: Close modals/dropdowns
Enter/Space: Activate buttons
```

---

### 16. Dark Mode Implementation

#### Theme Toggle
```
Detection: Respects system preference initially
Storage: localStorage 'theme' key
Classes: 'dark' class on html element
Transition: transition-colors duration-300
```

#### Dark Mode Colors
```
See "Neutral Colors (Dark Mode)" section above
All components support dark: prefix
Automatic contrast adjustment
Reduced brightness for comfort
```

---

## 🎭 Animation Guidelines

### Micro-interactions
```
Button Hover: Scale 1.02, 150ms
Button Active: Scale 0.98, 100ms
Link Hover: Color change, 200ms
Icon Spin: Rotate 360deg, 500ms (loading states)
```

### Page Transitions
```
Route Change: Fade out/in, 300ms
Modal Open: Scale 0.95 to 1, fade in, 200ms
Modal Close: Scale 1 to 0.95, fade out, 150ms
Dropdown: Slide down 10px, fade in, 200ms
```

### Loading States
```
Skeleton: Shimmer animation, 1500ms loop
Spinner: Rotate 360deg, 1000ms linear infinite
Progress Bar: Left to right fill, duration varies
Pulse: Opacity 0.5 to 1, 1500ms infinite
```

---

## 📱 Mobile Optimization

### Touch-Friendly
```
Button Height: Minimum 44px
Tap Area: Minimum 48x48px
Spacing: 8px minimum between elements
```

### Mobile Typography
```
Reduce heading sizes by 1-2 steps
Increase line height for readability
Minimum 16px font to prevent zoom
```

### Mobile Layout
```
Single column default
Stack elements vertically
Hide non-essential elements
Show hamburger menu < 768px
```

---

## ✨ Special Effects

### Glassmorphism
```
Background: bg-background/95
Backdrop: backdrop-blur-sm (or md)
Border: border border-border/40
Shadow: Subtle, shadow-sm
```

### Neumorphism (Subtle)
```
Light Shadow: 0 2px 4px rgba(0,0,0,0.05)
Dark Shadow: 0 -2px 4px rgba(255,255,255,0.05)
Background: Slightly raised from surface
Border: 1px solid with subtle gradient
```

### Gradient Borders
```
Wrapper: position relative, padding-[1px]
Background: Linear gradient on wrapper
Inner: Solid background to hide gradient
Effect: Appears as gradient border
```

---

## 🔍 Visual Hierarchy

### Primary Elements
```
Largest size, highest contrast
Main CTAs, page titles
Bold weight, saturated colors
```

### Secondary Elements
```
Medium size, medium contrast
Supporting content, descriptions
Regular/medium weight
```

### Tertiary Elements
```
Small size, low contrast
Metadata, timestamps, labels
Light weight, muted colors
```

---

This comprehensive UI guide ensures consistent, beautiful, and accessible design across all components. Apply these specifications systematically for a cohesive user experience.
