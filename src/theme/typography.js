// Fluid type scale: every size uses clamp() so text scales smoothly
// from 320px phones to wide desktops without breakpoint jumps.

const fontFamily = '"Geist Variable", "Geist", system-ui, -apple-system, "Segoe UI", sans-serif';

const typography = {
  fontFamily,
  h1: {
    fontSize: 'clamp(2.9rem, 10.5vw, 6rem)',
    fontWeight: 800,
    lineHeight: 1.0,
    letterSpacing: '-0.04em',
  },
  h2: {
    fontSize: 'clamp(1.9rem, 4.8vw, 3rem)',
    fontWeight: 750,
    lineHeight: 1.12,
    letterSpacing: '-0.03em',
  },
  h3: {
    fontSize: 'clamp(1.25rem, 2.4vw, 1.5rem)',
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontSize: 'clamp(1.1rem, 2vw, 1.2rem)',
    fontWeight: 650,
    lineHeight: 1.35,
    letterSpacing: '-0.01em',
  },
  subtitle1: {
    fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)',
    fontWeight: 550,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: 'clamp(0.98rem, 1.4vw, 1.06rem)',
    lineHeight: 1.75,
    fontWeight: 420,
  },
  body2: {
    fontSize: '0.95rem',
    lineHeight: 1.7,
    fontWeight: 420,
  },
  overline: {
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.16em',
    lineHeight: 1.6,
  },
  button: {
    textTransform: 'none',
    fontWeight: 650,
    letterSpacing: 0,
  },
};

export default typography;
