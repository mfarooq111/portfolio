import Box from '@mui/material/Box';
import { drift } from '../../styles/keyframes';

// Fixed decorative backdrop: faint grid + two slow-drifting glow blobs.
export default function BackgroundGrid() {
  return (
    <Box
      aria-hidden
      sx={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
    >
      <Box
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${theme.palette.custom.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${theme.palette.custom.gridLine} 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 100%)',
        })}
      />
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: '-12%',
          left: '-10%',
          width: { xs: 320, md: 560 },
          height: { xs: 320, md: 560 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.custom.glow} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          opacity: 0.6,
          animation: `${drift} 18s ease-in-out infinite`,
        })}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: { xs: 280, md: 480 },
          height: { xs: 280, md: 480 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.16) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: `${drift} 22s ease-in-out infinite reverse`,
        }}
      />
    </Box>
  );
}
