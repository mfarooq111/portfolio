import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export default function QualityBadges({ items }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="overline" component="p" sx={{ color: 'text.secondary', mb: 1.5 }}>
        Recognized by clients for
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.25 }}>
        {items.map((q) => (
          <Box
            key={q}
            sx={(t) => ({
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              px: 1.75,
              py: 0.9,
              borderRadius: 999,
              fontSize: '0.9rem',
              fontWeight: 600,
              border: `1px solid ${t.palette.custom.border}`,
              bgcolor: t.palette.custom.surface,
            })}
          >
            <CheckRoundedIcon sx={{ fontSize: 17, color: 'secondary.main' }} />
            {q}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
