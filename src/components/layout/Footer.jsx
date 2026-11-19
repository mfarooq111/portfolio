import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import profile from '../../data/profile';

// Name + copyright only. No contact details (Upwork policy).
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={(t) => ({ position: 'relative', zIndex: 1, borderTop: `1px solid ${t.palette.custom.border}`, py: 4 })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 700 }}>
            {profile.firstName} {profile.lastName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {profile.title} · {profile.specialties.join(' · ')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {year} {profile.firstName} {profile.lastName}
          </Typography>
          <IconButton
            component="a"
            href="#top"
            aria-label="Back to top"
            sx={(t) => ({ border: `1px solid ${t.palette.custom.border}`, color: 'text.primary' })}
          >
            <ArrowUpwardRoundedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
