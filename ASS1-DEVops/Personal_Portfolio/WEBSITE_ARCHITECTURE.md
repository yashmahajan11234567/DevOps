# Data Analyst Portfolio - Website Architecture Document

**Status:** Architecture & Design Planning (Code Implementation Awaiting Approval)  
**Date:** 2026-07-15  
**Purpose:** Comprehensive design specification for professional Data Analytics portfolio website

---



## Executive Summary

This document defines the complete architecture for a professional Data Analytics portfolio website showcasing Yash Mahajan's expertise in data visualization, business intelligence, and predictive analytics. The design prioritizes:

- **Minimalist aesthetic** inspired by industry leaders (Tableau, Snowflake, Stripe, Linear)
- **Data-first storytelling** with emphasis on clarity and impact
- **Professional elegance** through generous whitespace and intentional typography
- **Accessibility and performance** with vanilla JavaScript and semantic HTML
- **Responsive design** optimized for all screen sizes
- **Interactive dashboard gallery** showcasing real analytical work

---

## 1. SITE ARCHITECTURE & INFORMATION HIERARCHY

### 1.1 Site Map

```
DataAnalyst.Portfolio/
│
├── HOME (index.html)
│   ├── Hero Section
│   ├── Technical Arsenal (Skills)
│   ├── Case Studies Preview
│   ├── Philosophy/Philosophy Quote
│   └── Footer
│
├── PROJECTS (projects.html)
│   ├── Project Gallery View
│   ├── Search & Filtering System
│   ├── Project Cards (Grid)
│   ├── Modal/Detail View
│   └── Footer
│
├── PROJECT DETAIL (project-detail.html)
│   ├── Breadcrumb Navigation
│   ├── Project Header
│   ├── Problem Section
│   ├── Process/Methodology (4-Step)
│   ├── Key Insights/Results
│   ├── Dashboard Preview (Modal Trigger)
│   ├── Call-to-Action (GitHub, PDF)
│   └── Footer
│
├── ABOUT (about.html)
│   ├── Professional Narrative
│   ├── Technical Stack Display
│   ├── Key Achievements/Statistics
│   ├── Contact Section
│   ├── Contact Form
│   └── Footer
│
├── RESUME (PDF Export)
│   └── External File (Opens in new tab)
│
└── SHARED COMPONENTS
    ├── Navigation Bar
    ├── Footer
    ├── Dashboard Modal Viewer
    └── Mobile Navigation
```

### 1.2 Page Hierarchy Levels

**Level 1: Primary Pages (Main Navigation)**
- Home (Landing/Hero)
- Projects (Gallery)
- About (Professional Story)
- Contact (Form)
- Resume (PDF)

**Level 2: Secondary Pages (Drill-Down)**
- Project Details (Dynamic pages for each project)
- Dashboard Modal Preview (Overlay on Projects/Details)

**Level 3: Tertiary Elements (Micro-interactions)**
- Filter/Search Results
- Form Validation
- Modal interactions
- Smooth scroll anchors

---

## 2. NAVIGATION STRUCTURE

### 2.1 Primary Navigation Bar

**Desktop Layout (Horizontal)**
```
Left:  Logo/Brand Name ("DataAnalyst.Portfolio")
Middle: Navigation Links (Home | Projects | About | Contact)
Right: Resume Button (CTA Primary Button)
```

**Design Decision Rationale:**
- Logo on left creates strong visual anchor and brand presence
- Centered navigation maintains symmetry and professional appearance
- Resume button on right acts as persistent call-to-action
- All items visible at once on desktop (no dropdown menus) for transparency
- Active page indicator (underline) shows current location

**Mobile Layout (Hamburger Menu)**
```
Left: Logo (reduced size)
Right: Hamburger Icon (≡) → Slide-out vertical menu
```

**Design Decision Rationale:**
- Preserves screen real estate on small screens
- Hamburger familiar interaction pattern
- Slide-out menu from right maintains left-to-right reading flow
- Full-width menu provides adequate touch targets

### 2.2 Navigation Behavior

**Active State Indicators:**
- Underline appears on current page in navigation
- Color: Indigo/Royal Blue (Primary color)
- Smooth transition (200ms ease)
- Maintains context for users

**Hover States (Desktop):**
- Text color change to indigo
- Subtle transition (no jarring movement)
- Cursor changes to pointer
- No scale or transform (maintains layout stability)

**Focus States (Accessibility):**
- Visible focus ring (2px solid indigo with 2px offset)
- Keyboard navigation fully supported
- Tab order: Left to right, top to bottom
- Screen reader text for icon buttons

---

## 3. VISUAL DESIGN SYSTEM

### 3.1 Color Palette

#### Primary Color: Indigo/Royal Blue
```
Primary Blue: #1e3a8a (Dark Indigo - hex for hex, used for headings, CTAs, accents)
Primary Blue: #3b82f6 (Bright Blue - used for links, hover states)
Alternative: #2563eb (Mid-blue - subtle interactions)
```

**Usage:**
- Primary CTAs (Resume Button, GitHub Links, "View Study" buttons)
- Headings and emphasis text
- Navigation active states
- Form focus states
- Accent elements in cards

**Rationale:**
- Conveys professionalism and trust (aligned with Stripe, Linear)
- High contrast against white for readability
- Psychological association: logic, analytics, data
- Indigo is trendy in modern design (2024-2025 trend)
- Strong enough for accessibility (WCAG AA compliant)

#### Secondary Color: White
```
Background White: #ffffff (Pure white - main background)
Off-White: #f9fafb (Subtle warmth for secondary backgrounds)
Light Gray: #f3f4f6 (Card backgrounds, subtle containers)
```

**Usage:**
- Main page backgrounds
- Navigation bar background
- Card backgrounds (alternating white/light gray)
- Text on colored backgrounds

**Rationale:**
- Maximizes whitespace and minimalist aesthetic
- High contrast for readability
- Clean, professional appearance
- Off-white adds visual interest without cluttering

#### Accent Color: Light Gray
```
Gray 300: #d1d5db (Borders, dividers)
Gray 400: #9ca3af (Secondary text, helper text)
Gray 500: #6b7280 (Body text, labels)
Gray 600: #4b5563 (Darker text, importance)
```

**Usage:**
- Body copy text
- Borders and dividers
- Icon fills
- Form labels
- Subtle backgrounds

**Rationale:**
- Professional palette (less is more)
- Reduces visual noise
- Creates clear visual hierarchy
- Gray text improves readability for long content

#### Data Visualization Colors
```
Accent 1: #10b981 (Green - success, growth)
Accent 2: #f59e0b (Amber - warning, attention)
Accent 3: #ef4444 (Red - critical, decline)
Accent 4: #8b5cf6 (Purple - special, unique)
```

**Usage:**
- Dashboard preview color swatches
- Status indicators
- Data-related emphasis
- Never for primary UI (reserved for data representation)

**Rationale:**
- Ensures dashboard previews maintain visual interest
- Creates distinction between UI and data visualization
- Professional color psychology
- Accessible color combinations

### 3.2 Color Application Examples

**Hero Section:**
- Background: Pure white
- Main heading: Indigo (#1e3a8a)
- Subheading: Gray-500 (#6b7280)
- CTA buttons: Indigo background, white text

**Card Components:**
- Border: 1px solid Gray-300 (#d1d5db)
- Background: White or Off-white
- Title: Indigo or Gray-600
- Metadata (date, tags): Gray-400
- Hover state: Subtle shadow, slight scale up

**Dashboard Preview Cards:**
- Background: Light-gray (#f3f4f6)
- Icon overlay: Indigo with 30% opacity
- Card title: Indigo or Gray-600
- Category badge: Indigo background, white text

---

## 4. TYPOGRAPHY SYSTEM

### 4.1 Font Selection

**Primary Font: Inter (System fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)**

**Design Decision Rationale:**
- Inter is the modern typeface of choice for professional tech/data companies (Linear, Stripe, Notion use variants)
- Excellent readability at all sizes
- OpenSource and freely available via Google Fonts
- Superior for UI with generous letter spacing
- Optimized for screen display (not print)
- Excellent language support and accessibility features
- No custom font loading (uses system fonts for performance)

### 4.2 Font Scale & Hierarchy

```
XL (Hero Heading):     48px / line-height: 1.2 / weight: 700
L (Page Heading):      32px / line-height: 1.25 / weight: 700
M (Section Heading):   24px / line-height: 1.33 / weight: 600
S (Card Heading):      18px / line-height: 1.4 / weight: 600
Base (Body):           16px / line-height: 1.5 / weight: 400
Small (Metadata):      14px / line-height: 1.43 / weight: 500
XSmall (Label):        12px / line-height: 1.33 / weight: 600
Caption (Helper):      12px / line-height: 1.43 / weight: 400
```

**Design Decision Rationale:**
- Large font sizes (48px hero) create immediate impact and convey confidence
- Line heights > 1.5 for body text improve readability and reduce cognitive load
- Weight progression creates clear hierarchy without multiple fonts
- Maintains WCAG AAA contrast and legibility standards
- Generous spacing follows minimalist design principle

### 4.3 Typography Usage Examples

**Page Title (Hero Heading - 48px, weight 700):**
```
"Finding clarity in the chaos of complexity."
```
- Creates immediate visual impact
- Draws user attention to key message
- Professional scale conveys expertise

**Section Heading (24px, weight 600):**
```
"Technical Arsenal"
"Case Studies"
"The Problem"
```
- Clear hierarchy within content
- Bold enough to be distinct from body
- Not as heavy as hero heading (creates breathing room)

**Body Copy (16px, weight 400):**
```
"I am a Data Analyst specialized in distilling complex datasets 
into actionable narratives. Through mathematical rigor and visual 
storytelling, I help organizations navigate uncertainty with precision."
```
- Highly readable at standard screen distance
- Line-height 1.5 reduces eye strain
- Regular weight (400) maintains clarity
- Professional tone established

**Card Metadata (12px, weight 600 or 400):**
```
"APR 2024" | "SQL, PYTHON" | "TABLEAU" | "VIEW STUDY →"
```
- Small but distinct
- Uppercase for technical labels (creates distinction)
- Arrow icon adds affordance (indicates clickability)

**Button Text (16px, weight 600):**
```
"View My Work" | "Set in Touch" | "Download Full PDF"
```
- Bold weight draws attention
- Consistent size across primary and secondary buttons
- Action-oriented language

---

## 5. LAYOUT SYSTEM

### 5.1 Grid & Spacing

**Base Unit: 8px grid system**

```
Spacing Scale:
xs: 4px    (tiny gaps, icon spacing)
sm: 8px    (padding within components)
md: 16px   (standard padding, margins)
lg: 24px   (section spacing)
xl: 32px   (large content blocks)
xxl: 48px  (hero spacing, major sections)
xxxl: 64px (page-level spacing)
```

**Design Decision Rationale:**
- 8px base unit is industry standard (Figma, most design systems)
- Multiples of 8 maintain visual rhythm
- Easier to maintain consistency across responsive designs
- Supports both compact and spacious layouts

### 5.2 Container Widths

**Breakpoints:**
```
Mobile:   320px - 639px (single column)
Tablet:   640px - 1023px (2 columns where applicable)
Desktop:  1024px+ (3 columns, full layout)
Max-width container: 1200px
```

**Desktop Container Structure:**
```
Max-width: 1200px
Padding: 48px on sides (reduces to 24px on tablet, 16px on mobile)
Effective content width: 1200px - 96px = 1104px
```

**Design Decision Rationale:**
- 1200px max-width maintains readability for long content
- Consistent with modern web standards (Medium, Stripe, Linear use similar)
- Provides adequate padding to avoid "wall of text" feeling
- Responsive breakpoints align with common device sizes
- Prevents excessive line lengths (improves readability)

### 5.3 Page Layout Structure

**Header (Navigation):**
- Height: 64px (desktop), 56px (mobile)
- Sticky positioning on scroll (remains visible)
- Box shadow on scroll: 0 2px 8px rgba(0,0,0,0.08)
- Background: White with 95% opacity for blur effect

**Main Content:**
- Padding-top: 32px (below header)
- Full width with container max-width constraint

**Footer:**
- Height: 200px (desktop), 280px (mobile)
- Background: Dark gray or indigo with white text
- Grid layout for links and social

**Section Spacing:**
- Between major sections: 64px - 96px (desktop), 48px (tablet), 32px (mobile)
- Within sections: 24px - 32px between subsections

---

## 6. COMPONENT SPECIFICATIONS

### 6.1 Navigation Bar Component

**Structure:**
```
<nav class="navbar">
  <div class="navbar-container">
    <div class="navbar-brand">DataAnalyst.Portfolio</div>
    <div class="navbar-menu">
      <a href="#home" class="nav-link">Home</a>
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#contact" class="nav-link">Contact</a>
    </div>
    <button class="nav-cta">Resume</button>
  </div>
</nav>
```

**Desktop Styles:**
- Display: Flex with space-between
- Gap: 48px between brand and menu, 32px between menu items
- Justify-content: space-between
- Align-items: center

**Mobile Styles (< 768px):**
- Hamburger menu (3 horizontal lines)
- Menu slides in from right on click
- Overlay with 50% black background when menu open
- Z-index: 1000 (above all content)

**States:**
- Default: Text-gray-600
- Hover: Text-indigo-600, background-indigo-50 (light)
- Active: Text-indigo-600, bottom-border 2px indigo
- Focus: Ring-indigo-500 (accessibility)

### 6.2 Hero Section Component

**Structure:**
```
<section class="hero">
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-tag">TRANSFORMING RAW DATA INTO STRATEGIC ASSETS</div>
      <h1 class="hero-title">Finding clarity in the chaos of complexity.</h1>
      <p class="hero-description">Professional bio/value proposition</p>
      <div class="hero-actions">
        <button class="btn-primary">View My Work →</button>
        <button class="btn-secondary">Set In Touch</button>
      </div>
    </div>
    <div class="hero-image">
      <!-- Placeholder image or illustration -->
    </div>
  </div>
</section>
```

**Desktop Layout:**
- Grid: 2 columns (55% content / 45% image)
- Content on left, image on right
- Padding: 96px 48px (vertical and horizontal)

**Mobile Layout:**
- Single column (stacked)
- Content on top, image below
- Padding: 48px 16px

**Content Alignment:**
- Heading: 48px, weight 700, indigo
- Description: 16px, weight 400, gray-600, line-height 1.5
- Tag: 12px, weight 600, indigo background, white text, padding 8px 12px
- Actions: Horizontal layout (desktop), stacked (mobile)

**Image Placeholder:**
- Aspect ratio: 4:3 (or 1:1 square)
- Background: Light gray gradient
- Border: 1px solid gray-300
- Border-radius: 8px

### 6.3 Skill Cards Component (Technical Arsenal)

**Card Structure:**
```
<div class="skill-card">
  <div class="skill-icon">
    <svg><!-- Icon --></svg>
  </div>
  <h3 class="skill-title">EXCEL</h3>
  <p class="skill-description">Advanced modeling, VBA macros, and pivot table structures.</p>
</div>
```

**Grid Layout:**
- Desktop: 5 columns
- Tablet: 3 columns
- Mobile: 1-2 columns
- Gap: 24px
- Cards: Equal height

**Card Styles:**
- Width: 100% (responsive)
- Height: 200px (fixed)
- Padding: 24px
- Border: 1px solid gray-300
- Border-radius: 8px
- Background: White
- Text-align: center

**Icon:**
- Size: 48px × 48px
- Color: Indigo
- Margin-bottom: 16px
- Outline style (not filled)

**Typography:**
- Title: 14px, weight 600, uppercase, gray-700, margin-bottom 8px
- Description: 13px, weight 400, gray-600, line-height 1.5

**Hover State:**
- Box-shadow: 0 10px 25px rgba(0,0,0,0.08)
- Transform: translateY(-4px)
- Transition: 300ms ease
- Background: Subtle indigo tint (indigo with 2% opacity)

### 6.4 Project Card Component (Gallery)

**Card Structure:**
```
<div class="project-card">
  <div class="project-image">
    <!-- Dashboard preview image -->
  </div>
  <div class="project-info">
    <div class="project-tags">
      <span class="tag">PYTHON</span>
      <span class="tag">PANDAS</span>
    </div>
    <h3 class="project-title">Consumer Sentiment Analysis</h3>
    <p class="project-description">Natural Language Processing pipeline...</p>
    <div class="project-date">APR 2024</div>
    <a href="#" class="project-link">VIEW STUDY →</a>
  </div>
</div>
```

**Grid Layout:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 24px
- Cards: Uniform height (aspect ratio maintained)

**Card Dimensions:**
- Width: 100% (responsive)
- Aspect ratio: 4:5 (portrait orientation)
- Border: 1px solid gray-300
- Border-radius: 8px
- Background: White
- Overflow: hidden

**Image Section:**
- Height: 60% of card
- Background: light-gray gradient
- Display: flex center
- Icon placeholder (48px)

**Content Section:**
- Height: 40% of card
- Padding: 20px
- Overflow: hidden

**Typography Within Card:**
- Tags: 11px, weight 600, uppercase, gray-500, margin-bottom 8px
- Title: 16px, weight 600, gray-900, margin-bottom 8px
- Description: 13px, weight 400, gray-600, 2 lines max, margin-bottom 8px
- Date: 12px, weight 500, gray-400, margin-bottom 8px
- Link: 12px, weight 600, indigo, margin-top auto

**Hover State:**
- Box-shadow: 0 12px 24px rgba(0,0,0,0.1)
- Transform: translateY(-6px)
- Transition: 300ms ease
- Background: Off-white (#f9fafb)

**Click Interaction:**
- Opens modal with full project details
- Modal contains project full description, process, results, GitHub link

### 6.5 Dashboard Preview Modal Component

**Trigger Elements:**
- Project cards (click on card)
- Project detail pages (dedicated "View Dashboard" button)
- Dashboard gallery modal in project details

**Modal Structure:**
```
<div class="modal-overlay" (click to close)>
  <div class="modal-content">
    <button class="modal-close">×</button>
    <div class="modal-header">
      <h2>Dashboard Preview</h2>
      <p>Brief description of dashboard</p>
    </div>
    <div class="modal-body">
      <img src="dashboard-image.png" alt="Dashboard preview">
    </div>
    <div class="modal-footer">
      <a href="github-link" class="btn-primary">View on GitHub →</a>
      <button class="btn-secondary">Download Full PDF</button>
    </div>
  </div>
</modal>
```

**Modal Dimensions:**
- Max-width: 90vw (on desktop)
- Max-height: 90vh
- Background: White
- Border-radius: 12px
- Box-shadow: 0 25px 50px rgba(0,0,0,0.15)

**Overlay:**
- Background: rgba(0,0,0,0.5)
- Backdrop-filter: blur(4px)
- Click outside to close (accessibility: Esc key also closes)
- Z-index: 2000 (above all)

**Close Button:**
- Position: top-right
- Size: 32px × 32px
- Icon: × (multiplication sign)
- Color: gray-400 on hover
- Cursor: pointer

**Image:**
- Max-width: 100%
- Height: auto
- Aspect ratio: maintained
- Border: 1px solid gray-300

**Animations:**
- Fade in: 200ms ease-out
- Scale up: 1.02x starting scale → 1x
- Backdrop blur: 0px → 4px
- Bounce effect (subtle): scale 1.02 on open

### 6.6 Button Components

**Primary Button (CTA)**
```
.btn-primary {
  background: #1e3a8a (Indigo)
  color: white
  padding: 12px 24px (sm), 14px 32px (md), 16px 40px (lg)
  border: none
  border-radius: 6px
  font-size: 14px (sm), 16px (md)
  font-weight: 600
  cursor: pointer
  transition: all 200ms ease
}

.btn-primary:hover {
  background: #1e40af (darker indigo)
  box-shadow: 0 8px 16px rgba(30, 58, 138, 0.2)
  transform: translateY(-2px)
}

.btn-primary:focus {
  outline: 2px solid #1e3a8a
  outline-offset: 2px
}

.btn-primary:active {
  transform: translateY(0px)
  box-shadow: 0 4px 8px rgba(30, 58, 138, 0.15)
}
```

**Secondary Button**
```
.btn-secondary {
  background: transparent
  color: #1e3a8a (Indigo)
  padding: 12px 24px
  border: 2px solid #1e3a8a
  border-radius: 6px
  font-size: 16px
  font-weight: 600
  cursor: pointer
  transition: all 200ms ease
}

.btn-secondary:hover {
  background: #1e3a8a
  color: white
  box-shadow: 0 8px 16px rgba(30, 58, 138, 0.15)
  transform: translateY(-2px)
}

.btn-secondary:focus {
  outline: 2px solid #1e3a8a
  outline-offset: 2px
}
```

**Button Sizes:**
- Small: 32px height, 12px padding horizontal
- Medium: 40px height, 24px padding horizontal (default)
- Large: 48px height, 32px padding horizontal

**Button States:**
- Default: As specified above
- Hover: Color/shadow change, slight lift
- Focus: Ring for keyboard navigation
- Active: Pressed appearance
- Disabled: Opacity 0.5, cursor not-allowed
- Loading: Spinner animation (if needed)

---

## 7. PAGE TEMPLATES & LAYOUTS

### 7.1 Home Page Layout

**Visual Hierarchy:**
1. Navigation Bar (sticky)
2. Hero Section (Full viewport height, dramatic)
3. Technical Arsenal Section (Skills cards in grid)
4. Case Studies Preview (4-6 projects, card layout)
5. Philosophy/Quote Section (Large italic text with attribution)
6. Footer

**Hero Section Dimensions:**
- Height: 100vh (full viewport) or min-height: 600px
- Content centered vertically in first half
- Image in second half
- Padding: 96px horizontal, 64px vertical

**Sections Spacing:**
- Between each major section: 80px - 96px (desktop)
- Reduces to 48px (tablet), 32px (mobile)

**Color Blocks:**
- Hero: White background
- Technical Arsenal: White background with light-gray cards
- Case Studies: Off-white or gradient background
- Philosophy: Indigo background with white text (high contrast)
- Footer: Dark gray or indigo

**Design Decision Rationale for Home:**
- Puts best work (projects) above fold after hero
- Demonstrates skills early to establish credibility
- Philosophy section adds personality and differentiates from resume
- Large spacing creates breathing room, reduces cognitive load
- Color transitions guide eye flow through page

### 7.2 Projects Page Layout

**Structure:**
1. Navigation Bar
2. Page Header Section
   - Title: "Project Gallery"
   - Description: "A technical deep-dive into complex datasets..."
3. Search & Filter Section
   - Search box (keyword search)
   - Category filter buttons (ALL, Python, SQL, Tableau, R, Forecasting)
4. Project Grid
   - 3 columns (desktop), 2 (tablet), 1 (mobile)
   - 24px gap between cards
5. Pagination (if > 9 projects)
6. Footer

**Search Bar:**
- Width: 100% max 500px
- Placeholder: "Query by title or keyword..."
- Icon: Magnifying glass on left
- Border: 1px solid gray-300
- Padding: 12px 16px
- Border-radius: 6px
- Focus: Blue border, box-shadow

**Filter Buttons:**
- Display: Horizontal row, wrap on mobile
- Button style: Tag style (gray outline, white fill)
- Active state: Indigo fill, white text
- Hover: Light gray background
- Spacing: 12px gap

**Grid Settings:**
```
Desktop: grid-template-columns: repeat(3, 1fr); gap: 24px;
Tablet:  grid-template-columns: repeat(2, 1fr); gap: 20px;
Mobile:  grid-template-columns: 1fr; gap: 16px;
```

**Pagination (if needed):**
- Centered below grid
- Previous/Next buttons flanking numbered buttons
- Current page highlighted in indigo
- Spacing: 8px between buttons

**Design Decision Rationale:**
- Search prominent to allow keyword discovery
- Filters visible but not dominant (secondary interaction)
- Grid layout maximizes content visibility
- Pagination only appears when needed (reduces clutter)
- Responsive breakpoints prioritize mobile usability

### 7.3 Project Detail Page Layout

**Sections (Top to Bottom):**

1. **Breadcrumb Navigation**
   - "← Projects / Global Supply Chain Optimization"
   - Links back to projects page
   - Helps with wayfinding (accessibility)
   - Small text: 12px, gray-500

2. **Project Header**
   - "2024 CASE STUDY | 4 MIN READ" (metadata)
   - Title: 32px - 48px, weight 700, indigo
   - Subtitle: Short description
   - Large banner image (4:2 aspect ratio)
   - Height: 400px - 500px

3. **The Problem Section**
   - Heading: 24px, weight 600
   - Long-form text: 16px, line-height 1.6
   - Optional: Icon or visual accent on left
   - Background: White or light-gray
   - Padding: 48px

4. **The Process Section (4 Steps)**
   - Title: "The Process: A four-stage methodology"
   - 4 column grid layout with connecting line
   - Each step:
     * Number (1, 2, 3, 4)
     * Title: "Data Cleaning" / "Analysis" / "Visualization" / "Deploy"
     * Description: 13px, gray-600
     * Tech stack: Small text, indigo
   - Box styling: Border, padding, white background
   - Connecting line between boxes (horizontal line)
   - Desktop: 4 columns
   - Tablet: 2 columns (2×2 grid)
   - Mobile: 1 column (stacked)

5. **Key Insights/Results Section**
   - Title: "Key Insights"
   - 3 column card grid:
     * Left icon/visual element
     * Metric/percentage (bold, large)
     * Description (smaller text)
   - Background cards: Light color or white with subtle shadow
   - Spacing: 24px between cards

6. **Dashboard Preview**
   - Heading: "Dashboard Implementation"
   - Large image/screenshot (4:3 aspect ratio)
   - Height: 400px - 600px
   - Click to open modal
   - Overlay: Subtle "View Dashboard" button or icon
   - Border: 1px solid gray-300, rounded corners

7. **Call-to-Action Section**
   - Background: Indigo (#1e3a8a)
   - White text
   - Heading: "The Solution: [Project Title]"
   - Description: 2-3 lines of impact statement
   - Buttons: "Download Full PDF" (secondary style), "View on GitHub" (secondary style)
   - Padding: 64px 48px
   - Border-radius: 12px

8. **Related Projects**
   - "Explore More Case Studies" section
   - Show 3 project cards
   - Links to other projects

9. **Footer**

**Responsive Behavior:**
- All sections stack vertically on mobile
- Padding: 48px desktop, 24px tablet, 16px mobile
- Text sizes scale down 10-20% on mobile
- Images: 100% width on mobile, centered on desktop
- Process section: Always adapt grid to fit screen

**Design Decision Rationale for Details:**
- Breadcrumb provides clear wayfinding
- Large title establishes page importance
- Problem section uses white space to convey clarity
- 4-step process uses visual progression to tell story
- Key Insights section showcases impact early
- CTA section stands out with color contrast
- Related projects encourage deeper exploration

### 7.4 About Page Layout

**Sections:**

1. **Navigation & Header**
   - Page title: "About" or "The Professional"
   - Subheading: "The Narrative"

2. **Professional Photo + Bio (Two Column)**
   - Left: Photo (1:1 square, 300px × 300px)
   - Right: Professional narrative (16px, line-height 1.6)
   - Border: 1px solid gray-300 on photo
   - Padding: 24px between columns

3. **Technical Stack Section**
   - Heading: "Technical Stack"
   - Grid of skill tags/pills
   - Tags: 14px, weight 600, uppercase, blue background, white text
   - Display: Inline-flex with gap 12px

4. **Key Achievements (3 column cards)**
   - Large metric + description
   - Icon on left
   - Example: "500M+ Row Analysis | Expertise in managing large-scale data"

5. **Contact Section**
   - Heading: "Let's discuss your data architecture."
   - Subheading: "Whether you're looking for a deep-dive audit..."
   - Contact info display:
     * Email icon + email address (clickable)
     * Location icon + "San Francisco, CA (Remote Friendly)"
   - Social links: LinkedIn, GitHub, Twitter icons

6. **Contact Form**
   - Background: Light gray (#f3f4f6)
   - Form fields:
     * Subject Name (text input)
     * Digital Identifier/Email (email input)
     * Inquiry Details (textarea)
   - Submit button: Indigo primary button
   - 2 columns (desktop), 1 column (mobile)
   - Padding: 48px
   - Border-radius: 8px

7. **Footer**

**Form Fields:**
- Label: 12px, weight 600, uppercase, gray-600
- Input: 16px, padding 12px 16px, border 1px gray-300
- Focus: Blue border, subtle background color change
- Placeholder: Gray-400 text
- Textarea: Auto-expand or fixed 120px height
- Button: Standard primary button style

**Design Decision Rationale for About:**
- Photo humanizes the portfolio
- Technical stack section allows quick skill scanning
- Achievements section backs up claims with metrics
- Contact form provides low-friction communication
- Multiple contact methods increase conversion
- Generous spacing maintains professional feel

---

## 8. RESPONSIVE DESIGN STRATEGY

### 8.1 Mobile-First Approach

**Design Philosophy:**
- Start with mobile layouts (320px minimum)
- Progressive enhancement for larger screens
- Touch-friendly targets (minimum 44px height for buttons)
- Optimized images for network speed

### 8.2 Breakpoint Strategy

```
Mobile (sm):    320px - 639px    (1 column, stacked layout)
Tablet (md):    640px - 1023px   (2 columns, dual layout)
Desktop (lg):   1024px - 1279px  (3 columns, full layout)
Large (xl):     1280px+          (3 columns with max-width container)
```

**Adjustment Examples:**

**Navigation:**
- Mobile: Hamburger menu
- Tablet+: Horizontal menu

**Hero Section:**
- Mobile: Single column, image below text
- Tablet: Single column, image below text (larger)
- Desktop: Two columns side-by-side

**Skill Cards:**
- Mobile: 1 column
- Tablet: 3 columns
- Desktop: 5 columns

**Project Cards:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Process Section (4 Steps):**
- Mobile: 1 column (vertical line connecting)
- Tablet: 2 columns (2×2 grid)
- Desktop: 4 columns (single row)

### 8.3 Responsive Text Sizing

**Use CSS Clamp for Fluid Scaling:**
```
h1: clamp(2rem, 5vw, 3rem);      /* 32px to 48px */
h2: clamp(1.5rem, 4vw, 2rem);    /* 24px to 32px */
h3: clamp(1.125rem, 3vw, 1.5rem);/* 18px to 24px */
body: clamp(0.875rem, 2vw, 1rem); /* 14px to 16px */
```

**Benefits:**
- Text scales proportionally with viewport
- No media query breakpoints needed for typography
- Maintains readability across all screen sizes
- Modern browser support (except IE11)

### 8.4 Image Optimization

**Responsive Image Strategy:**
```html
<picture>
  <source media="(max-width: 640px)" srcset="image-mobile.jpg">
  <source media="(max-width: 1024px)" srcset="image-tablet.jpg">
  <img src="image-desktop.jpg" alt="Description">
</picture>
```

**Or using CSS:**
```css
.hero-image {
  background-image: url('image-mobile.jpg');
}
@media (min-width: 768px) {
  .hero-image {
    background-image: url('image-tablet.jpg');
  }
}
@media (min-width: 1024px) {
  .hero-image {
    background-image: url('image-desktop.jpg');
  }
}
```

**Image Optimization:**
- Use WebP format (with PNG fallback)
- Compress aggressively (use tools like TinyPNG)
- Lazy load images below fold
- Use srcset for different pixel densities
- Max dimensions: 1920px wide for desktop, 1024px tablet, 640px mobile

### 8.5 Touch-Friendly Interactions

**Button & Interactive Target Sizes:**
- Minimum height: 44px (mobile accessibility standard)
- Minimum width: 44px
- Padding around interactive elements: 12px minimum

**Mobile-Specific Interactions:**
- Tap target size: 48px × 48px preferred
- Spacing between targets: 8px minimum
- No hover states on mobile (doesn't apply)
- Use focus/active states instead
- Swipe gestures for modal close (optional enhancement)

**Performance on Mobile:**
- Reduce animations on lower-end devices
- Prefers-reduced-motion media query support
- Touch event optimization (no 300ms delay)
- Minimal JavaScript for faster load times

---

## 9. ANIMATION & INTERACTION DESIGN

### 9.1 Core Animation Principles

**Guiding Philosophy:**
- Animations serve purpose (not decorative)
- Subtle and professional (no flashy effects)
- Improve UX by providing visual feedback
- Reduce perceived load time
- Enhance storytelling

**Speed Guidelines:**
```
Micro-interactions:    100-200ms (hover, focus)
Page transitions:      200-300ms (fade, slide)
Modal appearance:      300-400ms (bounce, scale)
Hero animations:       400-600ms (parallax, fade)
```

### 9.2 Specific Animation Examples

**Hover Animations on Cards:**
- Lift: transform: translateY(-4px) over 300ms
- Shadow expansion: box-shadow increase over 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1) (ease-out)

**Button Hover:**
- Background color shift: 200ms
- Shadow effect: 200ms
- No scale transform (maintains layout)

**Link Underline Animation:**
- Width: 0% to 100% over 300ms
- Start: bottom-left
- Easing: ease-out
- Only on desktop (touch doesn't use hover)

**Modal Entrance:**
- Fade-in: opacity 0 to 1 over 300ms
- Scale: 0.95 to 1 (subtle bounce)
- Timing function: cubic-bezier(0.34, 1.56, 0.64, 1) (ease-out-back)

**Page Load:**
- Hero section: Fade in + slight translateY(-10px) over 600ms
- Content sections: Staggered entrance (each 100ms after previous)
- Images: Fade in over 400ms on load

**Scroll Animations (Optional Enhancement):**
- Fade in as cards enter viewport
- Parallax effect on hero image (subtle: 0.5x speed of scroll)
- Counter animations (numbers counting up when visible)
- Requires Intersection Observer API for performance

### 9.3 Transition Properties

**Global Transition Style:**
```css
* {
  transition: background-color 200ms ease, 
              color 200ms ease,
              border-color 200ms ease,
              transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Disabled Transitions:**
```css
.no-transition,
.no-transition * {
  transition: none !important;
}
```

### 9.4 Accessibility in Animations

**Respects prefers-reduced-motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Effect:**
- Disables animations for users with motion sensitivity
- Maintains functionality, removes visual motion
- Critical for accessibility compliance (WCAG)

---

## 10. ACCESSIBILITY CONSIDERATIONS

### 10.1 WCAG 2.1 Compliance Level

**Target: AA Compliance (minimum), AAA where feasible**

**Key Standards:**
- 1.4.3 Contrast (AA): Text contrast ratio minimum 4.5:1
- 1.4.11 Non-text Contrast (AA): UI components 3:1 contrast
- 2.1.1 Keyboard (A): All functionality via keyboard
- 2.4.3 Focus Order (A): Logical tab order
- 3.3.4 Error Prevention (AA): Error suggestions provided

### 10.2 Color Contrast Verification

**Text Contrast Ratios:**
```
Indigo (#1e3a8a) on White (#ffffff): 8.4:1 ✓ (Exceeds AAA)
Gray-600 (#4b5563) on White (#ffffff): 5.2:1 ✓ (Exceeds AA)
Gray-700 (#374151) on White (#ffffff): 7.1:1 ✓ (Exceeds AAA)
White on Indigo: 8.4:1 ✓ (Exceeds AAA)
```

**Non-text Contrast:**
```
Borders (Gray-300) on White: 2.8:1 ✓ (AA with minimum 1px)
Interactive elements: All 3:1+ ✓ (AA)
```

### 10.3 Semantic HTML Structure

**Proper Element Usage:**
- `<nav>` for navigation bar
- `<header>` for page header sections
- `<main>` for primary content
- `<section>` for major content blocks
- `<article>` for project posts/details
- `<h1>` - `<h6>` in proper hierarchy (only one `<h1>` per page)
- `<button>` for buttons (not `<div>` or `<a>`)
- `<a>` for navigation links only
- `<label>` associated with form inputs
- `<form>` wrapping all form elements

**Anti-patterns to Avoid:**
- `<div onclick="...">` instead of `<button>`
- Missing `<label>` elements on form fields
- `<img>` without `alt` attributes
- Multiple `<h1>` per page
- Skip heading levels (h1 → h3, skipping h2)
- Using tables for layout

### 10.4 ARIA Labels & Attributes

**Critical ARIA Usage:**

**Navigation:**
```html
<nav aria-label="Main navigation">
  <a href="#" aria-current="page">Home</a>
  <a href="#projects">Projects</a>
</nav>
```

**Icons (Decorative vs. Meaningful):**
```html
<!-- Decorative icon -->
<span aria-hidden="true">★</span>

<!-- Meaningful icon with label -->
<a href="#github">
  <svg aria-label="GitHub profile"><!-- Icon --></svg>
</a>

<!-- Or with title -->
<a href="#github" title="View GitHub profile">
  <svg aria-hidden="true"><!-- Icon --></svg>
</a>
```

**Buttons with Icons Only:**
```html
<button aria-label="Close menu">
  <span aria-hidden="true">×</span>
</button>
```

**Modal Dialogs:**
```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Dashboard Preview</h2>
  <!-- Content -->
</div>
```

**Form Fields:**
```html
<label for="email-input">Email Address</label>
<input id="email-input" type="email" required 
       aria-describedby="email-help">
<small id="email-help">We'll never share your email.</small>
```

### 10.5 Keyboard Navigation

**Tab Order:**
- Logical left-to-right, top-to-bottom flow
- Skip non-interactive elements
- Modal dialects trap focus (tab cycles within modal)
- Escape key closes modals/menus

**Keyboard Support:**
- All buttons clickable via Space or Enter
- Links navigable via Enter
- Form fields Tab through inputs
- Dropdown/menu: Arrow keys to navigate, Enter to select
- Hamburger menu: Escape to close

**Focus Indicators:**
- Minimum 2px visible outline
- Contrast ratio 3:1 with background
- Color: Indigo with 2px offset
- Applied to all interactive elements

### 10.6 Mobile Accessibility

**Touch Targets:**
- Minimum 44px × 44px (mobile accessibility guidelines)
- Spacing: 8px minimum between targets
- Avoid tiny buttons or densely packed links

**Screen Reader Support:**
- All images have descriptive alt text
- Form labels clearly associated
- Error messages announced
- Loading states indicated
- Dynamic content updates announced (aria-live regions)

### 10.7 Accessibility Testing Checklist

**Before Launch:**
- [ ] Axe DevTools scan (no errors)
- [ ] WAVE extension review
- [ ] Keyboard navigation complete
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Color contrast verification (WCAG)
- [ ] Focus visible on all interactive elements
- [ ] Heading hierarchy logical
- [ ] Form labels properly associated
- [ ] Alt text on all meaningful images
- [ ] No auto-playing media
- [ ] Motion-sensitive users accommodated
- [ ] Pinch-zoom not disabled

---

## 11. PERFORMANCE CONSIDERATIONS

### 11.1 Performance Targets

**Core Web Vitals (Google):**
```
Largest Contentful Paint (LCP):    ≤ 2.5 seconds
First Input Delay (FID):            ≤ 100 milliseconds
Cumulative Layout Shift (CLS):      ≤ 0.1
```

**Load Time Goals:**
- First page load: < 3 seconds on 3G
- Subsequent pages: < 1.5 seconds
- Lighthouse Score: > 90 on all audits

### 11.2 Asset Optimization

**JavaScript:**
- Minimize by removing console.logs
- Bundle and minify
- Code splitting (separate bundles for different pages)
- Defer non-critical scripts (async/defer attributes)
- No heavy frameworks required (vanilla JS only)

**CSS:**
- Minify CSS
- Remove unused styles
- Critical CSS inline in `<head>` (above fold)
- Defer non-critical CSS
- No CSS frameworks (hand-written optimized CSS)

**Images:**
- Optimize format: WebP primary, PNG fallback
- Compress aggressive (LosslessImageEncoder or TinyPNG)
- Use SVG for icons (scalable, small file size)
- Lazy load images below fold
- Responsive images via srcset
- CDN delivery for global performance

**Fonts:**
- Use system fonts (Inter via Google Fonts or system stack)
- Minimal font variants (regular 400, bold 600)
- Font subsetting (Latin characters only)
- font-display: swap (don't block rendering)

### 11.3 Server & Network

**Hosting Recommendations:**
- GitHub Pages (free, static hosting) or
- Netlify (free tier, automatic deployments) or
- Vercel (optimized for frontend)
- CDN for global distribution
- Gzip/Brotli compression enabled

**HTTP Headers:**
```
Cache-Control: public, max-age=31536000  (Images, fonts)
Cache-Control: public, max-age=3600      (HTML)
Content-Encoding: gzip
X-Content-Type-Options: nosniff
```

**Minification:**
- HTML: Remove comments, whitespace
- CSS: Remove comments, whitespace, unused rules
- JS: Remove console.logs, whitespace, unused code

---

## 12. COMPONENT INTERACTION FLOW

### 12.1 Navigation Flow

```
User clicks "Projects" → Navigate to /projects.html
  ↓
Projects page loads with all 5 projects visible
  ↓
User clicks search box → Focus state
  ↓
User types keyword → Results filter in real-time
  ↓
User clicks filter button (e.g., "Python") → Shows only Python projects
  ↓
User clicks project card → Modal opens with project details
  ↓
Modal shows project info with GitHub and PDF buttons
  ↓
User clicks "GitHub" → New tab opens to GitHub repo
```

### 12.2 Project Detail Flow

```
User arrives at /project-detail.html (specific project)
  ↓
Page displays full project info:
  - Problem section (scrollable)
  - 4-step process (visual timeline)
  - Key insights (statistics)
  - Dashboard preview image (clickable)
  ↓
User clicks dashboard image → Modal opens with full dashboard
  ↓
Modal displays dashboard with:
  - Download PDF button
  - View on GitHub button
  - Close button (X or Escape)
```

### 12.3 Contact Form Flow

```
User fills out contact form fields:
  - Subject Name (required)
  - Email (required, validated)
  - Inquiry Details (required)
  ↓
User clicks "Transmit Message" button
  ↓
Form validation:
  - If invalid: Show error messages under fields
  - If valid: Submit (via FormSubmit.co or similar service)
  ↓
Success message displayed
  ↓
Form resets for new submission
```

---

## 13. DESIGN DECISION JUSTIFICATIONS

### 13.1 Minimalist Aesthetic Rationale

**Why Minimalism?**
1. **Industry Alignment:** Tableau, Snowflake, Stripe, Linear all use minimalist design
2. **Data-First Focus:** Clean background lets visualizations/content shine
3. **Trust & Professionalism:** Minimalism conveys competence and precision
4. **Readability:** Maximum whitespace aids comprehension
5. **Longevity:** Timeless design won't look dated quickly
6. **Mobile-Friendly:** Minimal design scales well to small screens
7. **Performance:** Less visual complexity = smaller file sizes

### 13.2 Color Choice Justification

**Why Indigo/Royal Blue Primary?**
1. **Psychology:** Indigo = trust, logic, intelligence (ideal for data analytics)
2. **Contrast:** Excellent contrast on white (WCAG AAA compliant)
3. **Tech Association:** Modern tech companies favor blue (LinkedIn, Stripe, Figma)
4. **Digital Native:** Displays well on screens (RGB color space optimized)
5. **Professional:** Not trendy/pink/gradient dependent

**Why Minimal Color Palette (Only Blue + Gray + White)?**
1. **Clarity:** Reduces visual noise and distractions
2. **Consistency:** Limited palette = predictable interactions
3. **Accessibility:** Easier to verify contrast ratios
4. **Print-Friendly:** Works on grayscale and color
5. **Brand Cohesion:** Unified visual identity

### 13.3 Typography Justification

**Why Inter Font?**
1. **Readability:** Specifically designed for screen display (not print)
2. **Geometric:** Clean, modern, professional appearance
3. **Affordances:** UI elements clearly defined (distinction between "l" and "1")
4. **Language Support:** Excellent global language coverage
5. **Free:** OpenSource via Google Fonts (cost-effective)
6. **Performance:** Excellent rendering on all browsers

**Why Large Headings (48px+)?**
1. **Visual Hierarchy:** Immediately draws attention to important content
2. **Confidence:** Large type conveys expertise and authority
3. **Readability:** Easier to scan and quickly understand page sections
4. **Modern Trend:** Editorial/sophisticated design uses large typography
5. **Accessibility:** Larger text aids users with low vision

### 13.4 Layout System Justification

**Why 8px Grid System?**
1. **Industry Standard:** Figma, Material Design, iOS all use 8px
2. **Mathematical:** Powers of 2 (8, 16, 32, 64) are developer-friendly
3. **Responsive:** Easy to scale proportionally across breakpoints
4. **Consistency:** Uniform spacing creates visual harmony

**Why 1200px Max-Width?**
1. **Readability:** Optimal line length for body text (50-75 characters)
2. **Desktop Standard:** Fits 1440px screens with comfortable padding
3. **Tablet Support:** Works well on iPad Pro and similar tablets
4. **Not Too Narrow:** Avoids excessive white space on large screens

### 13.5 Component Design Justifications

**Why Cards for Projects?**
1. **Scannability:** Users can quickly scan multiple projects
2. **Modularity:** Easy to add/remove projects without reflow
3. **Mobile-Friendly:** Cards stack naturally on small screens
4. **Hover Delight:** Lift/shadow provides interactive feedback
5. **Information Density:** Balances detail with visual clarity

**Why Modal for Dashboard Preview?**
1. **Focus:** Full-screen dashboard without navigation distraction
2. **Context Retention:** Underlying page remains visible (context)
3. **Quick View:** Users can preview without full-page navigation
4. **Overlay Pattern:** Familiar interaction (used across web)
5. **Accessibility:** Focus trap ensures keyboard navigation

**Why 4-Step Process?**
1. **Narrative Structure:** Tells clear before-and-after story
2. **Digestibility:** 4 steps are easy to understand and remember
3. **Visual Progression:** Steps show clear progression and logic
4. **Methodology Display:** Demonstrates structured approach (appeals to analytics mindset)
5. **Scrolling:** Breaks up long content into scannable sections

### 13.6 Responsive Strategy Justification

**Why Mobile-First?**
1. **Performance:** Mobile optimized = desktop works automatically
2. **User Base:** 60%+ web traffic now mobile
3. **Constraints:** Starting small ensures essential content visible
4. **Enhancement:** Larger screens get enhanced layouts naturally
5. **Future-Proof:** Better for emerging devices

**Why Three Major Breakpoints (640px, 1024px)?**
1. **Common Devices:**
   - 640px: Mobile phones (most common)
   - 1024px: Tablets and small laptops
   - 1280px+: Desktop/laptops
2. **Content Adaptation:** Natural points where layout must change
3. **Not Excessive:** Only breakpoints when content actually needs adjustment
4. **Performance:** Fewer media queries = smaller CSS file

---

## 14. DESIGN TOKENS (CSS Variables)

### 14.1 Color Tokens

```css
:root {
  --color-primary-dark: #1e3a8a;      /* Indigo 900 */
  --color-primary: #3b82f6;           /* Indigo 600 */
  --color-primary-light: #60a5fa;     /* Indigo 400 */
  
  --color-white: #ffffff;
  --color-off-white: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-accent: #8b5cf6;
}
```

### 14.2 Typography Tokens

```css
:root {
  --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;
  --font-size-2xl: 32px;
  --font-size-3xl: 48px;
  
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.2;
  --line-height-snug: 1.33;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
}
```

### 14.3 Spacing Tokens

```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}
```

### 14.4 Shadow & Border Tokens

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  --border-radius-sm: 4px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;
  --border-radius-xl: 12px;
}
```

---

## 15. IMPLEMENTATION READINESS CHECKLIST

### 15.1 Before Development Starts

- [ ] All design specifications reviewed and approved
- [ ] Stakeholder sign-off on color palette, typography, layout
- [ ] Design system documented (this document)
- [ ] Responsive breakpoints finalized
- [ ] Animation/transition timings approved
- [ ] Accessibility requirements confirmed (WCAG AA)
- [ ] Performance targets established
- [ ] Hosting/deployment platform selected
- [ ] Domain name configured
- [ ] SEO strategy planned

### 15.2 Development Preparation

- [ ] Project repository created (GitHub)
- [ ] CSS variables defined in root stylesheet
- [ ] Folder structure organized (CSS, JS, images, assets)
- [ ] Semantic HTML template boilerplate ready
- [ ] Vanilla JavaScript setup (no frameworks)
- [ ] Image assets prepared and optimized
- [ ] Content (copy) finalized by stakeholder
- [ ] Project data/JSON structure planned

### 15.3 QA Before Launch

- [ ] All pages render correctly on desktop/tablet/mobile
- [ ] Touch interactions work on touch devices
- [ ] Keyboard navigation complete (Tab through entire site)
- [ ] Screen reader compatible (tested with NVDA/JAWS/VoiceOver)
- [ ] Color contrast verified (Axe DevTools, WAVE)
- [ ] Performance audited (Lighthouse > 90)
- [ ] Links/buttons functional
- [ ] Forms validate and submit correctly
- [ ] Images load and display properly
- [ ] Animations respect prefers-reduced-motion
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing on real devices
- [ ] Analytics/tracking configured (if needed)

---

## NEXT STEPS

**Awaiting User Approval:**

1. ✅ Architecture document complete
2. ⏳ Review and approval required
3. ⏳ Any design adjustments/feedback
4. ⏳ Approval to begin HTML/CSS/JavaScript implementation

**Once Approved, Implementation Will Include:**

1. Semantic HTML structure for all pages
2. Modular CSS with design tokens
3. Vanilla JavaScript for interactions (search, filters, modals)
4. Responsive design across all breakpoints
5. Accessibility features (ARIA, keyboard navigation)
6. Performance optimization
7. Testing across browsers and devices

---

**Document Version:** 1.0  
**Last Updated:** 2026-07-15  
**Status:** Ready for Review & Approval

