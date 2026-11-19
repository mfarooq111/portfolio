import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NavLinks from './NavLinks';
import MobileDrawer from './MobileDrawer';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import navigation from '../../../data/navigation';
import useScrollSpy from '../../../hooks/useScrollSpy';

const ids = navigation.map((n) => n.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={(t) => ({
          bgcolor: scrolled ? t.palette.custom.navBg : 'transparent',
          backdropFilter: scrolled ? 'saturate(160%) blur(14px)' : 'none',
          borderBottom: `1px solid ${scrolled ? t.palette.custom.border : 'transparent'}`,
          color: 'text.primary',
          transition: 'background-color .3s ease, border-color .3s ease',
          zIndex: t.zIndex.appBar,
        })}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: { xs: 60, md: 68 }, gap: 2 }}>
            <Logo />
            <Box sx={{ flexGrow: 1 }} />
            <NavLinks active={active} />
            <ThemeToggle />
            <IconButton
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={(t) => ({
                display: { xs: 'inline-flex', lg: 'none' },
                border: `1px solid ${t.palette.custom.border}`,
                color: 'text.primary',
              })}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileDrawer open={open} onClose={() => setOpen(false)} active={active} />
    </>
  );
}
