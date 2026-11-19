import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GlowCard from '../../components/common/GlowCard';
import { ChipRow } from '../../components/common/TechChip';

export default function ProjectCard({ number, category, title, role, description, metrics, tech, link, compact }) {
  return (
    <GlowCard sx={{ display: 'flex', flexDirection: 'column', p: { xs: 2.5, sm: compact ? 3 : 3.5 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 2 }}>
        <Typography variant="overline" component="p" sx={{ color: 'custom.eyebrow', lineHeight: 1.4 }}>
          {category}
        </Typography>
        <Typography
          aria-hidden
          sx={(t) => ({
            fontSize: compact ? '1.6rem' : '2rem',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'transparent',
            WebkitTextStroke: `1px ${t.palette.custom.borderStrong}`,
          })}
        >
          {String(number).padStart(2, '0')}
        </Typography>
      </Box>

      <Typography variant="h3" component="h4" sx={{ mb: 0.75, fontSize: compact ? '1.15rem' : undefined }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: '0.88rem', fontWeight: 600, color: 'primary.main', mb: 1.75 }}>{role}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.25 }}>
        {description}
      </Typography>

      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 2.5, display: 'flex', flexWrap: 'wrap', gap: 1.25, rowGap: 1 }}>
        {metrics.map((m) => (
          <Box component="li" key={m} sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.88rem', fontWeight: 600 }}>
            <CheckCircleRoundedIcon sx={{ fontSize: 17, color: 'secondary.main' }} />
            {m}
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 'auto' }}>
        <ChipRow items={tech} size="sm" />
        {link && (
          <Box
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={(t) => ({
              mt: 2.5,
              pt: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderTop: `1px solid ${t.palette.custom.border}`,
              color: 'text.primary',
              fontWeight: 650,
              fontSize: '0.92rem',
              textDecoration: 'none',
              overflowWrap: 'anywhere',
              '& svg': { transition: 'transform .25s ease' },
              '&:hover': { color: 'primary.main' },
              '&:hover svg': { transform: 'translate(2px, -2px)' },
            })}
          >
            View live · {link.label}
            <OpenInNewRoundedIcon sx={{ fontSize: 17 }} />
          </Box>
        )}
      </Box>
    </GlowCard>
  );
}
