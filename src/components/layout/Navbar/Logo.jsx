import Box from '@mui/material/Box';
import profile from '../../../data/profile';
import logo from '../../../assets/images/Muhammad_Farooq_MF_logo.ico';

export default function Logo({ onClick }) {
  return (
    <Box
      component="a"
      href="#top"
      onClick={onClick}
      aria-label="Back to top"
      sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, textDecoration: 'none', color: 'text.primary', minWidth: 0 }}
    >
      <Box
        component="img"
        src={logo}
        alt=""
        width={38}
        height={38}
        sx={(t) => ({
          width: 38,
          height: 38,
          flexShrink: 0,
          borderRadius: 2.5,
          objectFit: 'contain',
          filter: `drop-shadow(0 6px 14px ${t.palette.custom.glow})`,
        })}
      />
      <Box component="span" sx={{ fontWeight: 750, fontSize: '1.12rem', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
        {profile.shortName}
        <Box component="span" sx={{ color: 'primary.main' }}>.</Box>
      </Box>
    </Box>
  );
}
