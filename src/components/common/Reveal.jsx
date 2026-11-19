import Box from '@mui/material/Box';
import useInView from '../../hooks/useInView';

// Fades + slides children in when scrolled into view (CSS transition only).
const offsets = {
  up: 'translate3d(0, 28px, 0)',
  left: 'translate3d(-28px, 0, 0)',
  right: 'translate3d(28px, 0, 0)',
  scale: 'scale(0.96)',
};

export default function Reveal({ children, delay = 0, direction = 'up', sx, ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : offsets[direction],
        transition: `opacity .7s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .7s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: 'opacity, transform',
        minWidth: 0,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
