import Box from '@mui/material/Box';

// Lightweight pill used for tech tags (plain Box keeps it tiny and wrap-friendly).
export default function TechChip({ label, size = 'md', variant = 'accent' }) {
  const small = size === 'sm';
  return (
    <Box
      component="span"
      sx={(theme) => ({
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: '100%',
        px: small ? 1.1 : 1.5,
        py: small ? 0.4 : 0.6,
        borderRadius: 2,
        fontSize: small ? '0.78rem' : '0.86rem',
        fontWeight: 550,
        lineHeight: 1.4,
        whiteSpace: 'normal',
        overflowWrap: 'anywhere',
        transition: 'border-color .25s ease, transform .25s ease',
        ...(variant === 'accent'
          ? {
              color: theme.palette.custom.chipText,
              bgcolor: theme.palette.custom.chipBg,
              border: `1px solid ${theme.palette.custom.chipBorder}`,
            }
          : {
              color: theme.palette.text.secondary,
              bgcolor: 'transparent',
              border: `1px solid ${theme.palette.custom.border}`,
            }),
        '@media (hover: hover)': {
          '&:hover': { borderColor: theme.palette.custom.borderStrong, transform: 'translateY(-1px)' },
        },
      })}
    >
      {label}
    </Box>
  );
}

export function ChipRow({ items, size, variant, sx }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, ...sx }}>
      {items.map((item) => (
        <TechChip key={item} label={item} size={size} variant={variant} />
      ))}
    </Box>
  );
}
