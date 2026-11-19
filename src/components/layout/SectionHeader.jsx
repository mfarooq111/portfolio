import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Reveal from '../common/Reveal';
import GradientText from '../common/GradientText';

// Eyebrow + title (optional accent line) + optional subtitle.
export default function SectionHeader({ eyebrow, title, accent, subtitle, align = 'left', mb = { xs: 4, md: 5 } }) {
  const centered = align === 'center';
  return (
    <Reveal sx={{ mb, textAlign: align, mx: centered ? 'auto' : 0, maxWidth: centered ? 760 : 820 }}>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1.25,
          mb: 1.5,
          justifyContent: centered ? 'center' : 'flex-start',
        }}
      >
        <Box sx={(t) => ({ width: 28, height: 2, borderRadius: 1, background: t.palette.custom.gradient })} />
        <Typography variant="overline" component="p" sx={{ color: 'custom.eyebrow' }}>
          {eyebrow}
        </Typography>
      </Box>
      <Typography variant="h2" component="h2">
        {title}
        {accent && (
          <>
            {' '}
            <GradientText>{accent}</GradientText>
          </>
        )}
      </Typography>
      {subtitle && (
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2, maxWidth: 680, mx: centered ? 'auto' : 0 }}>
          {subtitle}
        </Typography>
      )}
    </Reveal>
  );
}
