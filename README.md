# علی اصغر ابراهیمی - وب‌سایت شخصی

> **Premium Responsive Portfolio Website for Civil Engineer Ali Asghar Ebrahimi**

A modern, fully responsive, RTL-compatible personal portfolio website for Ali Asghar Ebrahimi, a civil engineer specializing in project management, construction supervision, and engineering operations.

## 🎯 Features

✅ **Fully RTL-Supported Persian Website**
- Complete right-to-left (RTL) layout support
- Persian typography with Vazirmatn font
- All content in Persian

✅ **Premium Design**
- Dark charcoal theme with construction-inspired accent color (#d4854f)
- Modern minimalist aesthetic
- Professional corporate branding
- Engineering-inspired visual elements

✅ **Comprehensive Sections**
- **Navbar** - Sticky navigation with mobile menu
- **Hero** - Eye-catching introduction with CTAs
- **Stats** - Professional achievements showcase
- **About** - Professional biography and expertise areas
- **Experience** - Interactive timeline with 6 career positions
- **Projects** - Portfolio section (ready for project data)
- **Skills** - 11 professional and technical skills
- **Software** - Microsoft Office and specialized software proficiency
- **Education** - University degree information
- **Contact** - Contact information with clickable links
- **Footer** - Professional footer with navigation

✅ **Technical Excellence**
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for smooth animations
- Lucide React for icons
- Vite for fast development and building
- Fully responsive (mobile, tablet, desktop)
- Semantic HTML and accessibility best practices
- SEO optimized with meta tags

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Website will be available at `http://localhost:5174`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section
│   ├── Stats.tsx        # Statistics section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Career timeline
│   ├── Projects.tsx     # Portfolio
│   ├── Skills.tsx       # Professional skills
│   ├── Software.tsx     # Software proficiency
│   ├── Education.tsx    # Education section
│   ├── Contact.tsx      # Contact section
│   ├── Footer.tsx       # Footer
│   └── index.ts         # Component exports
├── data/                # Content data
│   ├── experience.ts    # Career history
│   ├── skills.ts        # Skills list
│   ├── software.ts      # Software proficiency
│   └── projects.ts      # Portfolio projects (empty, ready to populate)
├── App.tsx              # Main app component
├── index.css            # Global styles with Tailwind
└── main.tsx             # React entry point
```

## 📊 Content Information

### Career Experience
- 6 positions documented with dates, locations, and responsibilities
- Timeline-based visual representation
- Includes roles at گسترش صنعت ایران, فروشگاه وستور, and شرکت احداث پژوهان

### Professional Skills
- 11 skills across professional and technical categories
- Organized by category (حرفه‌ای, تخصصی)

### Software Proficiency
- Microsoft Office suite (Excel, Word, PowerPoint, Outlook, OneNote)
- نرم‌افزار هلو (Specialized software)
- Skill levels: پیشرفته, متوسط, مقدماتی

### Education
- Degree: کارشناسی مهندسی عمران (Bachelor of Civil Engineering)
- University: دانشگاه آزاد اسلامی، واحد یادگار امام خمینی
- Period: ۱۳۹۸ — ۱۴۰۳

### Projects
- Structure ready for portfolio projects
- Template includes: project name, location, type, role, description, year, image, category

## 🎨 Design System

### Colors
- **Primary Background**: #0f0f0f (Dark BG)
- **Secondary Background**: #1a1a1a (Charcoal)
- **Accent**: #d4854f (Construction Orange)
- **Accent Light**: #e8a877
- **Text**: #e8e8e8
- **Text Muted**: #a0a0a0

### Typography
- **Font Family**: Vazirmatn (Persian-optimized)
- **Heading 1**: 4xl-6xl, Bold, Tracking Tight
- **Heading 2**: 2xl-4xl, Bold
- **Heading 3**: xl-2xl, Semibold
- **Body**: base-lg, Regular

### Spacing & Layout
- Max width: 7xl (80rem)
- Section padding: py-20 md:py-28
- Grid-based responsive design
- Proper RTL alignment throughout

## 🔄 Responsive Breakpoints

- **Mobile**: 375px - 390px
- **Mobile L**: 425px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Desktop L**: 1440px
- **4K**: 1920px

## ✨ Features & Animations

- Smooth scroll behavior
- Fade-in animations on page load
- Scroll-triggered reveal animations
- Hover effects on interactive elements
- Smooth navbar transition on scroll
- Mobile navigation drawer
- Respects `prefers-reduced-motion` for accessibility

## 🔗 Contact Information

- **Phone**: 09212622676 (clickable tel: link)
- **Email**: alirodabiyan@gmail.com (clickable mailto: link)
- **Location**: تهران

## 🚀 Future Enhancements

1. **Add Real Projects**
   - Edit `src/data/projects.ts`
   - Add project details, images, and descriptions

2. **Add Real Project Images**
   - Place images in `public/` directory
   - Reference in project data

3. **Connect Contact Form**
   - Integrate email service or form backend
   - Add form validation

4. **Add Blog Section**
   - Create blog component
   - Add blog posts data

5. **Add Certifications**
   - Create certifications section
   - Add professional certifications

## 🛠 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Vazirmatn)
- **Linting**: Oxlint

## 📝 Notes

- All content is in Persian (فارسی)
- Full RTL support with proper text direction
- No personal information is stored (completely static)
- All data is hardcoded in component files for easy updates
- Ready for deployment to any static hosting service

## 📄 License

Personal Portfolio Website - All Rights Reserved © 2026

---

**Built with ❤️ for Ali Asghar Ebrahimi**
