# ShadCN/UI Integration

This project now includes ShadCN/UI components with the following setup:

## Dependencies Added

### Core Dependencies
- `class-variance-authority` - For creating type-safe variants
- `clsx` - For conditional className utility
- `tailwind-merge` - For merging Tailwind CSS classes
- `lucide-react` - Icon library used by ShadCN/UI
- `@radix-ui/react-slot` & `@radix-ui/react-separator` - Radix UI primitives

### Dev Dependencies
- `shadcn` - CLI tool for adding components
- `@types/node` - Node.js type definitions
- `tw-animate-css` - Animation utilities for Tailwind CSS

## Available Components

The following ShadCN/UI components have been added to `src/components/ui/`:

- **Button** (`button.tsx`) - Styled button component with variants
- **Input** (`input.tsx`) - Form input component
- **Card** (`card.tsx`) - Card layout components (Card, CardHeader, CardTitle, CardDescription, CardContent)
- **Badge** (`badge.tsx`) - Badge/tag component
- **Separator** (`separator.tsx`) - Visual separator component

## Configuration

### File Structure
- `components.json` - ShadCN/UI configuration file
- `src/lib/utils.ts` - Utility functions (includes `cn` for className merging)
- `src/index.css` - Global styles with CSS variables for theming
- `vite.config.ts` - Updated with Tailwind CSS plugin and path aliases
- `tsconfig.json` - Updated with path mappings for `@/*` imports

### Theme
- **Base Color**: Neutral
- **Style**: New York style
- **CSS Variables**: Enabled for easy theming
- **Icon Library**: Lucide React

## Usage

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Use components in your JSX
<Button variant="default">Click me</Button>
<Input placeholder="Enter text..." />
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

## Adding More Components

To add additional ShadCN/UI components:

```bash
yarn shadcn add [component-name]
```

For example:
```bash
yarn shadcn add dialog
yarn shadcn add dropdown-menu
yarn shadcn add toast
```

## Development

The app now runs with ShadCN/UI integration:

```bash
yarn dev  # Start development server
yarn build  # Build for production
```

The example App.tsx has been updated to demonstrate the ShadCN/UI components in action.
