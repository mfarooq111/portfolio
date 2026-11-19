import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Shared section wrapper: consistent (tighter) vertical rhythm + anchor offset for the fixed navbar.
export default function Section({ id, children, sx, containerSx, maxWidth = 'lg' }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: 'relative',
        zIndex: 1,
        py: { xs: 7, md: 9 },
        scrollMarginTop: { xs: 56, md: 64 },
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth} sx={containerSx}>
        {children}
      </Container>
    </Box>
  );
}
