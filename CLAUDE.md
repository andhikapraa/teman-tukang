# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TemanTukang is a handyman booking platform UI built with React, TypeScript, and Vite. The project was generated from a Figma design and serves as a frontend prototype for connecting users with professional handymen in Indonesia.

## Commands

```bash
# Install dependencies
npm i

# Start development server (runs on port 3000)
npm run dev

# Build for production (outputs to /build)
npm run build
```

## Architecture

### Tech Stack
- **React 18** with TypeScript
- **Vite** (with SWC plugin) for build tooling
- **Tailwind CSS v4** for styling (pre-compiled in `index.css`)
- **Radix UI** primitives for accessible components
- **Poppins** font family

### Project Structure
- `src/App.tsx` - Main app with simple state-based routing between pages
- `src/main.tsx` - Entry point
- `src/components/ui/` - Reusable UI components (shadcn/ui pattern with `cva` for variants)
- `src/components/figma/` - Figma-specific components like `ImageWithFallback`
- `src/imports/` - Auto-generated SVG/image imports from Figma
- `src/assets/` - Static assets (images)

### Pages
- `LandingPage.tsx` - Marketing landing page with features, testimonials, CTA
- `DesktopLogin.tsx` - Welcome/entry screen with login/signup options
- `LoginForm.tsx` - User login form
- `SignUpForm.tsx` - User registration form

### Styling Conventions
- Primary colors: `#002A45` (dark blue), `#FFB915` (yellow/gold), `#FCFDDD` (cream)
- Use Tailwind utility classes directly in JSX
- The `cn()` utility from `src/components/ui/utils.ts` merges Tailwind classes (combines `clsx` + `tailwind-merge`)
- Responsive design uses Tailwind breakpoints: `sm:`, `md:`, `lg:`

### Figma Asset Imports
The project uses special import aliases for Figma assets defined in `vite.config.ts`:
```tsx
import logoImage from 'figma:asset/f516109695caed1ff7070be1e517868d921ccfa2.png';
```
These resolve to files in `src/assets/`.

### UI Components
UI components follow the shadcn/ui pattern:
- Use `cva` (class-variance-authority) for component variants
- Accept `className` prop for composition
- Built on Radix UI primitives where applicable
