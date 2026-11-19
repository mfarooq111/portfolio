import Box from '@mui/material/Box';
import { gradientShift } from '../../styles/keyframes';

// Animated gradient-filled text span.
export default function GradientText({ children, sx }) {
  return (
    <Box
      component="span"
      sx={(theme) => ({
        backgroundImage: theme.palette.custom.gradient,
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        animation: `${gradientShift} 8s ease infinite`,
        ...sx,
      })}
    >
      {children}
    </Box>
  );
}
