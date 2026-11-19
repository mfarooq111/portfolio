import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GlowCard from '../../components/common/GlowCard';

export default function QuickFacts({ facts }) {
  return (
    <GlowCard hover={false} sx={{ p: { xs: 2.5, sm: 3.5 } }}>
      <Typography variant="overline" component="p" sx={{ color: 'custom.eyebrow', mb: 1.5 }}>
        At a glance
      </Typography>
      <Box component="dl" sx={{ m: 0 }}>
        {facts.map(({ label, value }, i) => (
          <Box
            key={label}
            sx={(t) => ({
              py: 1.5,
              borderTop: i === 0 ? 'none' : `1px solid ${t.palette.custom.border}`,
            })}
          >
            <Typography component="dt" sx={{ fontSize: '0.82rem', fontWeight: 600, color: 'text.secondary', mb: 0.25 }}>
              {label}
            </Typography>
            <Typography component="dd" sx={{ m: 0, fontWeight: 650, lineHeight: 1.45 }}>
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </GlowCard>
  );
}
