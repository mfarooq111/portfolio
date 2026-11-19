// Global MUI component overrides shared by both modes.

const components = (palette) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: palette.background.default,
        color: palette.text.primary,
      },
    },
  },
  MuiContainer: {
    defaultProps: { maxWidth: 'lg' },
    styleOverrides: {
      root: {
        paddingLeft: 16,
        paddingRight: 16,
        '@media (min-width:600px)': { paddingLeft: 24, paddingRight: 24 },
        '@media (min-width:1200px)': { paddingLeft: 32, paddingRight: 32 },
      },
    },
  },
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: '12px 26px',
        fontSize: '0.98rem',
        transition: 'transform .25s ease, box-shadow .25s ease, background-color .25s ease',
        '&:hover': { transform: 'translateY(-2px)' },
      },
      containedPrimary: {
        boxShadow: `0 10px 30px -10px ${palette.custom.glow}`,
        '&:hover': { boxShadow: `0 14px 36px -10px ${palette.custom.glow}` },
      },
      outlined: {
        borderColor: palette.custom.border,
        color: palette.text.primary,
        backgroundColor: palette.custom.surface,
        '&:hover': {
          borderColor: palette.custom.borderStrong,
          backgroundColor: palette.custom.surfaceHover,
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: { borderRadius: 12 },
    },
  },
});

export default components;
