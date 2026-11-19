import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useCountUp from '../../hooks/useCountUp';

export default function StatItem({ value, suffix, label, index, start }) {
  const current = useCountUp(value, start);

  return (
    <Box
      sx={(t) => ({
        px: { xs: 2, sm: 3 },
        py: { xs: 3, md: 4 },
        textAlign: 'center',
        minWidth: 0,
        // inner dividers: right edge except last in row, bottom edge for first row on mobile
        borderRight: {
          xs: index % 2 === 0 ? `1px solid ${t.palette.custom.border}` : 'none',
          md: index < 3 ? `1px solid ${t.palette.custom.border}` : 'none',
        },
        borderBottom: { xs: index < 2 ? `1px solid ${t.palette.custom.border}` : 'none', md: 'none' },
      })}
    >
      <Typography
        component="p"
        sx={{ fontSize: 'clamp(2.1rem, 6vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1 }}
      >
        {current}
        <Box component="span" sx={{ color: 'primary.main' }}>{suffix}</Box>
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.75, lineHeight: 1.45 }}>
        {label}
      </Typography>
    </Box>
  );
}
