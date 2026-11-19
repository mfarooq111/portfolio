// Color tokens for both theme modes.
// `custom` holds design tokens MUI has no slot for (borders, glows, grid lines).

const brand = {
  blue: '#3B82F6',
  blueDeep: '#2563EB',
  cyan: '#22D3EE',
  violet: '#8B5CF6',
};

export const darkPalette = {
  mode: 'dark',
  primary: { main: brand.blue, light: '#60A5FA', dark: brand.blueDeep, contrastText: '#FFFFFF' },
  secondary: { main: brand.cyan, contrastText: '#04121A' },
  background: { default: '#0A0E17', paper: '#0F1523' },
  text: { primary: '#F1F5F9', secondary: '#AAB6C8', disabled: '#64748B' },
  divider: 'rgba(148, 163, 184, 0.14)',
  custom: {
    surface: 'rgba(17, 24, 39, 0.72)',
    surfaceHover: 'rgba(23, 32, 52, 0.9)',
    border: 'rgba(148, 163, 184, 0.14)',
    borderStrong: 'rgba(96, 165, 250, 0.45)',
    chipBg: 'rgba(59, 130, 246, 0.10)',
    chipBorder: 'rgba(59, 130, 246, 0.28)',
    chipText: '#93C5FD',
    glow: 'rgba(59, 130, 246, 0.35)',
    gridLine: 'rgba(148, 163, 184, 0.06)',
    navBg: 'rgba(10, 14, 23, 0.78)',
    eyebrow: '#60A5FA',
    gradient: `linear-gradient(100deg, ${brand.blue} 0%, ${brand.cyan} 55%, ${brand.violet} 100%)`,
  },
};

export const lightPalette = {
  mode: 'light',
  primary: { main: brand.blueDeep, light: brand.blue, dark: '#1D4ED8', contrastText: '#FFFFFF' },
  secondary: { main: '#0891B2', contrastText: '#FFFFFF' },
  background: { default: '#F6F8FC', paper: '#FFFFFF' },
  text: { primary: '#0B1220', secondary: '#475569', disabled: '#94A3B8' },
  divider: 'rgba(15, 23, 42, 0.10)',
  custom: {
    surface: 'rgba(255, 255, 255, 0.85)',
    surfaceHover: '#FFFFFF',
    border: 'rgba(15, 23, 42, 0.10)',
    borderStrong: 'rgba(37, 99, 235, 0.45)',
    chipBg: 'rgba(37, 99, 235, 0.07)',
    chipBorder: 'rgba(37, 99, 235, 0.22)',
    chipText: '#1D4ED8',
    glow: 'rgba(37, 99, 235, 0.18)',
    gridLine: 'rgba(15, 23, 42, 0.05)',
    navBg: 'rgba(246, 248, 252, 0.82)',
    eyebrow: '#2563EB',
    gradient: `linear-gradient(100deg, ${brand.blueDeep} 0%, #0891B2 55%, #7C3AED 100%)`,
  },
};
