import Box from '@mui/material/Box';
import FloatingBadges from './FloatingBadges';
import { spin, spinReverse, glowPulse, fadeUp } from '../../styles/keyframes';
import profile from '../../data/profile';

// Picks up src/assets/images/me.(png|jpg|jpeg|webp) if present; falls back to initials.
const found = import.meta.glob('../../assets/images/me.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const photo = Object.values(found)[0];

const layer = { position: 'absolute', borderRadius: '50%' };

export default function HeroPortrait() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: 'min(76vw, 300px)', sm: 340, md: '100%' },
        maxWidth: 460,
        aspectRatio: '1 / 1',
        mx: 'auto',
        opacity: 0,
        animation: `${fadeUp} 1s cubic-bezier(.2,.7,.2,1) 200ms forwards`,
      }}
    >
      {/* soft glow */}
      <Box sx={(t) => ({ ...layer, inset: '6%', background: `radial-gradient(circle, ${t.palette.custom.glow} 0%, transparent 68%)`, filter: 'blur(24px)', animation: `${glowPulse} 6s ease-in-out infinite` })} />

      {/* outer dashed orbit with a travelling dot */}
      <Box
        sx={(t) => ({
          ...layer,
          inset: 0,
          border: `1px dashed ${t.palette.custom.borderStrong}`,
          opacity: 0.6,
          animation: `${spin} 40s linear infinite`,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: -5,
            width: 10,
            height: 10,
            borderRadius: '50%',
            bgcolor: 'secondary.main',
            boxShadow: '0 0 14px 2px rgba(34,211,238,.7)',
          },
        })}
      />

      {/* gradient arc ring */}
      <Box
        sx={{
          ...layer,
          inset: '6.5%',
          padding: '2px',
          background: 'conic-gradient(from 0deg, transparent 0deg, #3B82F6 90deg, #22D3EE 180deg, transparent 260deg)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: `${spinReverse} 12s linear infinite`,
        }}
      />

      {/* photo disc */}
      <Box
        sx={(t) => ({
          ...layer,
          inset: '12%',
          overflow: 'hidden',
          border: `1px solid ${t.palette.custom.border}`,
          background: t.palette.mode === 'dark'
            ? 'radial-gradient(circle at 50% 30%, #1E3A8A 0%, #0F172A 70%)'
            : 'radial-gradient(circle at 50% 30%, #BFDBFE 0%, #E2E8F0 75%)',
          boxShadow: `0 30px 80px -30px ${t.palette.custom.glow}`,
          display: 'grid',
          placeItems: 'center',
        })}
      >
        {photo ? (
          <Box
            component="img"
            src={photo}
            alt={`${profile.firstName} ${profile.lastName}`}
            sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        ) : (
          <Box sx={(t) => ({ fontSize: 'clamp(3rem, 12vw, 6rem)', fontWeight: 800, letterSpacing: '-0.04em', backgroundImage: t.palette.custom.gradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' })}>
            {profile.initials}
          </Box>
        )}
      </Box>

      <FloatingBadges />
    </Box>
  );
}
