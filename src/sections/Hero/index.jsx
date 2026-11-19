import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeroContent from './HeroContent';
import HeroPortrait from './HeroPortrait';
import TechMarquee from './TechMarquee';

export default function Hero() {
  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: 'relative',
        zIndex: 1,
        overflowX: 'clip',
        pt: { xs: 11, sm: 13, md: 15 },
        pb: { xs: 5, md: 7 },
        minHeight: { lg: '100svh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 1.15fr) minmax(0, 0.85fr)' },
            alignItems: 'center',
            gap: { xs: 5, md: 6, lg: 8 },
          }}
        >
          <Box sx={{ order: { xs: 2, md: 1 }, minWidth: 0 }}>
            <HeroContent />
          </Box>
          <Box sx={{ order: { xs: 1, md: 2 }, minWidth: 0 }}>
            <HeroPortrait />
          </Box>
        </Box>
      </Container>
      <Box sx={{ mt: { xs: 6, md: 8 } }}>
        <TechMarquee />
      </Box>
    </Box>
  );
}
