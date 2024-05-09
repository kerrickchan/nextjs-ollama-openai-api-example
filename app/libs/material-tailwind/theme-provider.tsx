'use client'

import { ThemeProvider } from "@material-tailwind/react";

export function MaterialTailwindThemeProvider({
  children,
}: {
  children: any;
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
