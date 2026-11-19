import { createTheme } from '@mui/material/styles';
import { darkPalette, lightPalette } from './palette';
import typography from './typography';
import components from './components';

export const buildTheme = (mode = 'dark') => {
  const palette = mode === 'dark' ? darkPalette : lightPalette;
  return createTheme({
    palette,
    typography,
    shape: { borderRadius: 16 },
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
    components: components(palette),
  });
};
