import Box from '@mui/material/Box';

// Glassy card with a gradient border that lights up on hover.
export default function GlowCard({ children, sx, hover = true, ...rest }) {
  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        height: '100%',
        minWidth: 0,
        borderRadius: 4,
        p: { xs: 2.5, sm: 3 },
        bgcolor: theme.palette.custom.surface,
        border: `1px solid ${theme.palette.custom.border}`,
        backdropFilter: 'blur(10px)',
        transition: 'transform .35s ease, border-color .35s ease, box-shadow .35s ease, background-color .35s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: -1,
          borderRadius: 'inherit',
          padding: '1px',
          background: theme.palette.custom.gradient,
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 0,
          transition: 'opacity .35s ease',
          pointerEvents: 'none',
        },
        ...(hover && {
          '@media (hover: hover)': {
            '&:hover': {
              transform: 'translateY(-4px)',
              bgcolor: theme.palette.custom.surfaceHover,
              boxShadow: `0 20px 50px -24px ${theme.palette.custom.glow}`,
            },
            '&:hover::before': { opacity: 1 },
          },
        }),
        ...(typeof sx === 'function' ? sx(theme) : sx),
      })}
      {...rest}
    >
      {children}
    </Box>
  );
}
