# AI Coding Agent Instructions for Data Science Portfolio

## Project Overview

This is a React-based data science portfolio website showcasing SQL projects, data analysis work, and visualizations. Built with Create React App, GSAP animations, and hosted on Vercel.

## Architecture & Key Patterns

### Component Structure

- **Single-page application** with scroll-based sections (no routing)
- Components are organized by feature: `Intro`, `About`, `Projects`, `Timeline`, `Experience`, `TechStack`, `Contact`, `Credits`
- Each component has a corresponding CSS file in `src/styles/`
- Mix of functional components (with hooks) and class components

### Animation System

- **GSAP is central to the UX** - nearly every component uses `gsap` and `ScrollTrigger`
- Consistent pattern: `useRef` for DOM references, `useEffect` with `hasRunRef.current` guards to prevent re-animation
- Example from `Intro.js`:

```javascript
const hasRunRef = useRef(false);
useEffect(() => {
  if (hasRunRef.current) return;
  hasRunRef.current = true;
  // GSAP animations here
}, []);
```

### State Management

- Simple props passing for global state (e.g., `showStars` state from App.js to NavBar/SideNavBar)
- Local useState for component-specific state
- No Redux or context - keep it simple

### Styling Conventions

- **CSS Custom Properties** defined in `src/styles/Global.css` with dark theme variables:
  - `--bg-gradient`, `--lightest-slate`, `--green-bright`, `--color-hover`, etc.
- Component-specific CSS files follow BEM-like naming
- Utility classes like `.btn-effect` for consistent hover animations
- Heavy use of gradients and glassmorphism effects

### Project Data Architecture

- **Projects are data-driven**: All project content lives in `ProjectList.js` as structured objects
- Code samples stored in `src/components/codes/` directory with switch-based loading in `code.js`
- Project structure:

```javascript
{
  name: "Project Name",
  image: "/assets/image.png",
  github: "repo-url",
  tags: ["MySQL", "Tableau"],
  files: [
    { name: "README.md", type: "info", content: "..." },
    { name: "script.sql", type: "code", content: Code("ProjectName"), language: "sql" }
  ]
}
```

## Development Workflows

### Adding New Projects

1. Add project data to `ProjectList.js` under appropriate category (SQL, Python, etc.)
2. Create code files in `src/components/codes/` and export from `code.js`
3. Add project images to `public/assets/`
4. Update category arrays if adding new project types

### Component Development

- Use functional components with hooks for new components
- Follow the GSAP animation pattern with refs and hasRun guards
- Import styles: `import "../styles/ComponentName.css"`
- Use Bootstrap components where appropriate (`react-bootstrap`)

### Styling Guidelines

- Reference CSS custom properties instead of hardcoded colors
- Use the established gradient patterns for consistency
- Follow the box shadow and transition conventions from Global.css
- Mobile-first responsive design approach

## Key Dependencies & Integration Points

### Essential Libraries

- **GSAP**: Core animation library with ScrollTrigger and Flip plugins
- **React Bootstrap**: UI components and grid system
- **React Icons**: VSCode and other icon sets (especially in Projects.js)
- **React Router DOM**: BrowserRouter wrapper (minimal routing usage)
- **React Syntax Highlighter**: Code display in project viewer

### Asset Management

- Images stored in `public/assets/` with direct `/assets/` references
- Custom font: NTR-Regular.ttf in `public/fonts/`
- Favicon and manifest files for PWA capabilities

### Build & Deployment

- Standard CRA scripts: `npm start`, `npm run build`
- Deployment via gh-pages: `npm run deploy` pushes to master branch
- Vercel hosting with domain: jessicaadzoyi.dev

## Project-Specific Conventions

### File Naming

- Components: PascalCase.js (e.g., `ProjectList.js`, `AnimatedRobot.js`)
- Styles: PascalCase.css matching component names
- Code samples: lowercase.js (e.g., `covid19.js`, `cyclistic.js`)

### Icon Usage Pattern

- Consistent icon system via `Icons.js` wrapper component
- VSCode icons for file types in project explorer UI
- React Icons for social/external links

### Performance Considerations

- GSAP animations use `hasRunRef` to prevent re-execution on re-renders
- Lazy loading pattern for code content via switch statements
- Minimal bundle optimization - relies on CRA defaults

### Accessibility Notes

- Focus management in navigation components
- ARIA labels present but could be enhanced
- High contrast theme with sufficient color ratios

## When Working on This Codebase

- **Always test animations** - small changes can break GSAP sequences
- **Maintain the data-driven approach** - don't hardcode project content in components
- **Follow the established CSS custom property system** - don't introduce arbitrary colors
- **Test mobile responsiveness** - portfolio sites are frequently viewed on mobile
- **Preserve the single-page scroll experience** - this is a key UX pattern
