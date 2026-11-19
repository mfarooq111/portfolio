import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GlowCard from '../../components/common/GlowCard';
import { ChipRow } from '../../components/common/TechChip';

export default function SkillGroup({ title, items }) {
  return (
    <GlowCard>
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, mb: 2 }}>
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
        <Typography sx={{ fontSize: '0.82rem', fontWeight: 600, color: 'text.secondary', whiteSpace: 'nowrap' }}>
          {items.length} skills
        </Typography>
      </Box>
      <ChipRow items={items} />
    </GlowCard>
  );
}
