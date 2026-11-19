import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GlowCard from '../../components/common/GlowCard';
import { ChipRow } from '../../components/common/TechChip';

export default function ServiceCard({ icon: Icon, title, description, tech, index }) {
  return (
    <GlowCard sx={{ display: 'flex', flexDirection: 'column', '&:hover .svc-icon': { transform: 'scale(1.08) rotate(-4deg)' } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
        <Box
          className="svc-icon"
          sx={(t) => ({
            width: 48,
            height: 48,
            borderRadius: 3,
            display: 'grid',
            placeItems: 'center',
            color: 'primary.main',
            bgcolor: t.palette.custom.chipBg,
            border: `1px solid ${t.palette.custom.chipBorder}`,
            transition: 'transform .35s ease',
          })}
        >
          <Icon />
        </Box>
        <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.disabled' }}>
          {String(index + 1).padStart(2, '0')}
        </Typography>
      </Box>
      <Typography variant="h4" component="h3" sx={{ mb: 1.25 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, flexGrow: 1 }}>
        {description}
      </Typography>
      <ChipRow items={tech} size="sm" />
    </GlowCard>
  );
}
