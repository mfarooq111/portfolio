import Box from '@mui/material/Box';
import { float } from '../../styles/keyframes';
import profile from '../../data/profile';

// Positions are relative to the portrait box. Bottom badges hide on the
// smallest screens so nothing crowds or overflows the viewport.
const positions = {
  topLeft: { top: '10%', left: { xs: '-6%', sm: '-8%' }, delay: 0, mobile: true },
  topRight: { top: '22%', right: { xs: '-6%', sm: '-10%' }, delay: 1.2, mobile: true },
  bottomLeft: { bottom: '18%', left: { xs: '-6%', sm: '-12%' }, delay: 0.6, mobile: false },
  bottomRight: { bottom: '6%', right: { xs: '-2%', sm: '-4%' }, delay: 1.8, mobile: false },
};

export default function FloatingBadges() {
  return profile.heroBadges.map(({ label, position }) => {
    const { delay, mobile, ...place } = positions[position];
    return (
      <Box
        key={label}
        sx={(t) => ({
          position: 'absolute',
          ...place,
          display: { xs: mobile ? 'inline-flex' : 'none', sm: 'inline-flex' },
          alignItems: 'center',
          gap: 1,
          px: { xs: 1.25, sm: 1.75 },
          py: { xs: 0.6, sm: 0.9 },
          borderRadius: 3,
          fontSize: { xs: '0.76rem', sm: '0.86rem' },
          fontWeight: 650,
          whiteSpace: 'nowrap',
          color: 'text.primary',
          bgcolor: t.palette.custom.navBg,
          border: `1px solid ${t.palette.custom.border}`,
          backdropFilter: 'blur(12px)',
          boxShadow: `0 12px 30px -14px ${t.palette.custom.glow}`,
          animation: `${float} 6s ease-in-out ${delay}s infinite`,
          zIndex: 2,
        })}
      >
        <Box sx={(t) => ({ width: 7, height: 7, borderRadius: '50%', background: t.palette.custom.gradient })} />
        {label}
      </Box>
    );
  });
}
