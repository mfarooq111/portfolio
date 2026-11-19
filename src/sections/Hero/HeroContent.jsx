import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import GradientText from '../../components/common/GradientText';
import { fadeUp, pulseDot } from '../../styles/keyframes';
import profile from '../../data/profile';

// Staggered entrance via CSS animation delays.
const enter = (delay) => ({ opacity: 0, animation: `${fadeUp} .8s cubic-bezier(.2,.7,.2,1) ${delay}ms forwards` });

export default function HeroContent() {
  return (
    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
      <Box
        sx={(t) => ({
          ...enter(0),
          display: 'inline-flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1.25,
          px: 1.75,
          py: 0.75,
          mb: { xs: 2.5, md: 3 },
          borderRadius: 999,
          border: `1px solid ${t.palette.custom.chipBorder}`,
          bgcolor: t.palette.custom.chipBg,
          fontSize: '0.88rem',
          fontWeight: 600,
          color: 'text.primary',
        })}
      >
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22C55E', animation: `${pulseDot} 2s infinite` }} />
        {profile.location}
        <Box component="span" sx={{ color: 'text.secondary', fontWeight: 500, display: { xs: 'none', sm: 'inline' } }}>
          · {profile.availability}
        </Box>
      </Box>

      <Typography variant="h1" component="h1" sx={{ ...enter(120), mb: { xs: 2, md: 2.5 } }}>
        <Box component="span" sx={{ display: 'block' }}>{profile.firstName}</Box>
        <Box component="span" sx={{ display: 'block' }}>
          <GradientText>{profile.lastName}</GradientText>
          <Box component="span" sx={{ color: 'primary.main' }}>.</Box>
        </Box>
      </Typography>

      <Box sx={{ ...enter(240), mb: { xs: 2, md: 2.5 } }}>
        <Typography variant="subtitle1" component="p" sx={{ fontWeight: 700, color: 'text.primary' }}>
          {profile.title}
          <Box component="span" sx={{ color: 'text.secondary', fontWeight: 550 }}>
            {' '}| {profile.specialties.join(' · ')}
          </Box>
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{ ...enter(360), color: 'text.secondary', maxWidth: 560, mx: { xs: 'auto', md: 0 }, mb: { xs: 3.5, md: 4 } }}
      >
        {profile.pitch}
      </Typography>

      <Box
        sx={{
          ...enter(480),
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 1.5,
          justifyContent: { xs: 'center', md: 'flex-start' },
          alignItems: 'stretch',
          maxWidth: { xs: 360, sm: 'none' },
          mx: { xs: 'auto', md: 0 },
        }}
      >
        <Button variant="contained" size="large" href="#projects" endIcon={<ArrowForwardRoundedIcon />}>
          View Projects
        </Button>
        <Button variant="outlined" size="large" href="#reviews" startIcon={<FormatQuoteRoundedIcon />}>
          Client Review
        </Button>
      </Box>
    </Box>
  );
}
