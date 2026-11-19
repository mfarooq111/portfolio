import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import GlowCard from '../../components/common/GlowCard';

export default function ReviewCard({ quote, author, project, rating }) {
  return (
    <GlowCard hover={false} sx={{ p: { xs: 3, sm: 4.5, md: 6 }, textAlign: 'center', overflow: 'hidden' }}>
      <FormatQuoteRoundedIcon
        aria-hidden
        sx={(t) => ({
          position: 'absolute',
          top: { xs: 4, md: 12 },
          left: { xs: 8, md: 20 },
          fontSize: { xs: 72, md: 110 },
          color: t.palette.custom.chipBorder,
          transform: 'scaleX(-1)',
        })}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.25, mb: 2.5, position: 'relative' }} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <StarRoundedIcon key={i} sx={{ color: '#FBBF24', fontSize: { xs: 24, md: 28 } }} />
        ))}
      </Box>
      <Typography
        component="blockquote"
        sx={{
          position: 'relative',
          m: 0,
          fontSize: 'clamp(1.08rem, 2.4vw, 1.42rem)',
          fontWeight: 550,
          lineHeight: 1.6,
          letterSpacing: '-0.01em',
          color: 'text.primary',
        }}
      >
        “{quote}”
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mt: 3.5 }}>
        <Box sx={(t) => ({ width: 44, height: 44, borderRadius: '50%', display: 'grid', placeItems: 'center', background: t.palette.custom.gradient, color: '#fff' })}>
          <VerifiedRoundedIcon />
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Typography sx={{ fontWeight: 700 }}>{author}</Typography>
          <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>{project}</Typography>
        </Box>
      </Box>
    </GlowCard>
  );
}
