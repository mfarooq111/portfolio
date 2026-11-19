import Box from '@mui/material/Box';
import navigation from '../../../data/navigation';

// Desktop links (lg and up). Active link gets a gradient underline.
export default function NavLinks({ active }) {
  return (
    <Box component="nav" aria-label="Primary" sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
      {navigation.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <Box
            key={id}
            component="a"
            href={`#${id}`}
            aria-current={isActive ? 'true' : undefined}
            sx={(t) => ({
              position: 'relative',
              px: 1.5,
              py: 1,
              borderRadius: 2,
              fontSize: '0.94rem',
              fontWeight: 550,
              textDecoration: 'none',
              color: isActive ? 'text.primary' : 'text.secondary',
              transition: 'color .2s ease, background-color .2s ease',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 12,
                right: 12,
                bottom: 2,
                height: 2,
                borderRadius: 1,
                background: t.palette.custom.gradient,
                transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform .3s ease',
              },
              '&:hover': { color: 'text.primary', bgcolor: t.palette.custom.chipBg },
              '&:hover::after': { transform: 'scaleX(1)' },
            })}
          >
            {label}
          </Box>
        );
      })}
    </Box>
  );
}
