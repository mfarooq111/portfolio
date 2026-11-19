import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GlowCard from '../../components/common/GlowCard';

export default function CredentialCard({ icon: Icon, kind, title, subtitle, meta }) {
  return (
    <GlowCard sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
      <Box
        sx={(t) => ({
          width: 46,
          height: 46,
          flexShrink: 0,
          borderRadius: 3,
          display: 'grid',
          placeItems: 'center',
          color: 'primary.main',
          bgcolor: t.palette.custom.chipBg,
          border: `1px solid ${t.palette.custom.chipBorder}`,
        })}
      >
        <Icon />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography variant="overline" component="p" sx={{ color: 'custom.eyebrow', lineHeight: 1.5 }}>
          {kind}
        </Typography>
        <Typography variant="h4" component="h3" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {subtitle}
        </Typography>
        <Typography sx={{ fontSize: '0.86rem', fontWeight: 600, color: 'text.secondary', mt: 1 }}>{meta}</Typography>
      </Box>
    </GlowCard>
  );
}
