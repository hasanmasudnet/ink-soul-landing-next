# Type Customizations Documentation

## Table of Contents
1. [Component Types](#component-types)
2. [UI Component Customizations](#ui-component-customizations)
3. [Common Type Extensions](#common-type-extensions)
4. [Utility Types](#utility-types)

## Component Types

### Navigation Types
```typescript
// components/main-nav.tsx
interface NavItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
```

### Section Types
```typescript
// components/sections/portfolio.tsx
interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

// components/sections/services.tsx
interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}
```

## UI Component Customizations

### Sheet Component
```typescript
// components/ui/sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-sheet";

interface SheetProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root> {
  children: React.ReactNode;
}

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  className?: string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}
```

### Button Component
```typescript
// components/ui/button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  asChild?: boolean;
}
```

## Common Type Extensions

### Next.js Link Props
```typescript
// types/next.d.ts
import type { LinkProps as NextLinkProps } from 'next/link';

interface ExtendedLinkProps extends NextLinkProps {
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}
```

### Image Props
```typescript
// types/image.d.ts
import type { ImageProps as NextImageProps } from 'next/image';

interface ExtendedImageProps extends NextImageProps {
  className?: string;
  priority?: boolean;
}
```

## Utility Types

### Style Utilities
```typescript
// lib/utils.ts
import { type ClassValue } from "clsx";

// For combining class names
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Animation Types
```typescript
// types/animation.d.ts
interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

interface MotionVariants {
  initial: object;
  animate: object;
  exit: object;
}
```

## Best Practices

1. **Type Extensions**
   - Always extend existing types instead of redefining them
   - Use utility types like `Pick`, `Omit`, `Partial` when needed

```typescript
// Good
type CustomButtonProps = Omit<ButtonProps, 'size'> & {
  customSize?: 'xs' | 'xl';
};

// Avoid
interface CustomButtonProps {
  // Redefining all props
}
```

2. **Component Props**
   - Use interface for component props
   - Extend React's built-in types when appropriate

```typescript
interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  customProp?: string;
}
```

3. **Type Guards**
   - Use type guards for runtime type checking

```typescript
function isPortfolioItem(item: unknown): item is PortfolioItem {
  return (
    typeof item === 'object' &&
    item !== null &&
    'title' in item &&
    'category' in item &&
    'image' in item
  );
}
```

4. **Generic Types**
   - Use generics for reusable type patterns

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

## Adding New Types

When adding new types to the project:

1. For component-specific types:
   - Add them in the component file
   - Export if needed by other components

2. For shared types:
   - Add them to appropriate files in `types/` directory
   - Export from `types/index.ts`

3. For utility types:
   - Add them to `lib/utils.ts`
   - Or create specific utility type files in `types/utils/`

## Type Checking

Run type checking:
```bash
npm run type-check  # Runs tsc --noEmit
```

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Next.js TypeScript Guide](https://nextjs.org/docs/basic-features/typescript)
