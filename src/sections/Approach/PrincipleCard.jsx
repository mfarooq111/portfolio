import Typography from '@mui/material/Typography';
import GlowCard from '../../components/common/GlowCard';
import GradientText from '../../components/common/GradientText';

export default function PrincipleCard({ number, title, text }) {
  return (
    <GlowCard>
      <Typography sx={{ fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, mb: 2 }}>
        <GradientText>{String(number).padStart(2, '0')}</GradientText>
      </Typography>
      <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {text}
      </Typography>
    </GlowCard>
  );
}
