import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GlowCard from '../../components/common/GlowCard';
import Reveal from '../../components/common/Reveal';
import { ChipRow } from '../../components/common/TechChip';
import { pulseDot } from '../../styles/keyframes';

export default function TimelineItem({ company, role, period, current, summary, highlights, tech, index }) {
  return (
    <Reveal delay={index * 100} sx={{ position: 'relative', pl: { xs: 4.5, md: 6 } }}>
      {/* rail node */}
      <Box
        aria-hidden
        sx={(t) => ({
          position: 'absolute',
          left: { xs: 2, md: 4 },
          top: { xs: 26, md: 30 },
          width: 16,
          height: 16,
          borderRadius: '50%',
          bgcolor: t.palette.background.default,
          border: `3px solid ${t.palette.primary.main}`,
          animation: current ? `${pulseDot} 2.2s infinite` : 'none',
        })}
      />
      <GlowCard>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: { xs: 1.5, sm: 2 }, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.75, minWidth: 0 }}>
            <Box
              sx={(t) => ({
                width: 46,
                height: 46,
                flexShrink: 0,
                borderRadius: 3,
                display: 'grid',
                placeItems: 'center',
                fontWeight: 800,
                fontSize: '1.1rem',
                color: 'primary.main',
                bgcolor: t.palette.custom.chipBg,
                border: `1px solid ${t.palette.custom.chipBorder}`,
              })}
            >
              {company.charAt(0)}
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                <Typography variant="h3" component="h3" sx={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)' }}>
                  {company}
                </Typography>
                {current && (
                  <Box component="span" sx={(t) => ({ px: 1, py: 0.25, borderRadius: 1.5, fontSize: '0.74rem', fontWeight: 700, color: t.palette.custom.chipText, bgcolor: t.palette.custom.chipBg, border: `1px solid ${t.palette.custom.chipBorder}` })}>
                    Current
                  </Box>
                )}
              </Box>
              <Typography sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.98rem' }}>{role}</Typography>
            </Box>
          </Box>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem', fontWeight: 550 }}>{period}</Typography>
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          {summary}
        </Typography>

        <Typography variant="overline" component="p" sx={{ color: 'custom.eyebrow', mb: 1 }}>
          Key highlights
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 2.5, display: 'grid', gap: 1.25 }}>
          {highlights.map((item) => (
            <Box
              component="li"
              key={item}
              sx={(t) => ({ pl: 2, borderLeft: `2px solid ${t.palette.custom.chipBorder}`, fontSize: '0.95rem', lineHeight: 1.65, color: 'text.primary' })}
            >
              {item}
            </Box>
          ))}
        </Box>
        <ChipRow items={tech} size="sm" variant="muted" />
      </GlowCard>
    </Reveal>
  );
}
