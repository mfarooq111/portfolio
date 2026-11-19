import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Logo from './Logo';
import navigation from '../../../data/navigation';

// Slide-in menu for screens below lg.
export default function MobileDrawer({ open, onClose, active }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: (t) => ({
            width: 'min(86vw, 340px)',
            bgcolor: t.palette.background.default,
            backgroundImage: 'none',
            borderLeft: `1px solid ${t.palette.custom.border}`,
            p: 2.5,
          }),
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Logo onClick={onClose} />
        <IconButton aria-label="Close menu" onClick={onClose} sx={(t) => ({ border: `1px solid ${t.palette.custom.border}` })}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Box component="nav" aria-label="Mobile" sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
        {navigation.map(({ id, label }, i) => {
          const isActive = active === id;
          return (
            <Box
              key={id}
              component="a"
              href={`#${id}`}
              onClick={onClose}
              sx={(t) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                px: 2,
                py: 1.5,
                borderRadius: 3,
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: isActive ? 'text.primary' : 'text.secondary',
                bgcolor: isActive ? t.palette.custom.chipBg : 'transparent',
                border: `1px solid ${isActive ? t.palette.custom.chipBorder : 'transparent'}`,
                transition: 'background-color .2s ease, color .2s ease',
                '&:hover': { bgcolor: t.palette.custom.chipBg, color: 'text.primary' },
              })}
            >
              <Typography component="span" sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'custom.eyebrow', minWidth: 22 }}>
                {String(i + 1).padStart(2, '0')}
              </Typography>
              {label}
            </Box>
          );
        })}
      </Box>
    </Drawer>
  );
}
