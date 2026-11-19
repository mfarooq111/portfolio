import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import Reveal from '../../components/common/Reveal';
import GlowCard from '../../components/common/GlowCard';
import { ChipRow } from '../../components/common/TechChip';
import research from '../../data/research';

export default function Research() {
  return (
    <Section id="research">
      <SectionHeader eyebrow="Research" title="Peer-reviewed" accent="publication" />
      <Reveal>
        <GlowCard hover={false} sx={{ p: { xs: 2.5, sm: 4, md: 5 }, overflow: 'hidden' }}>
          <Box
            aria-hidden
            sx={(t) => ({ position: 'absolute', top: -80, right: -80, width: 260, height: 260, borderRadius: '50%', background: `radial-gradient(circle, ${t.palette.custom.glow}, transparent 70%)`, pointerEvents: 'none' })}
          />
          <Box
            sx={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'auto minmax(0, 1fr)' },
              gap: { xs: 2.5, md: 4 },
              alignItems: 'start',
            }}
          >
            <Box
              sx={(t) => ({
                width: { xs: 56, md: 72 },
                height: { xs: 56, md: 72 },
                borderRadius: 4,
                display: 'grid',
                placeItems: 'center',
                color: '#fff',
                background: t.palette.custom.gradient,
                boxShadow: `0 16px 40px -16px ${t.palette.custom.glow}`,
              })}
            >
              <MenuBookRoundedIcon sx={{ fontSize: { xs: 28, md: 34 } }} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="overline" component="p" sx={{ color: 'custom.eyebrow', mb: 0.75 }}>
                {research.badge} · {research.role}
              </Typography>
              <Typography variant="h3" component="h3" sx={{ fontSize: 'clamp(1.35rem, 3vw, 1.85rem)', mb: 1 }}>
                {research.title}
              </Typography>
              <Typography sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.95rem', mb: 2 }}>{research.venue}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, maxWidth: 760 }}>
                {research.summary}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(3, minmax(0, 1fr))' },
                  gap: 1.5,
                  mb: 2.5,
                }}
              >
                {research.points.map((p) => (
                  <Box key={p} sx={(t) => ({ p: 1.75, borderRadius: 3, border: `1px solid ${t.palette.custom.border}`, fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.5 })}>
                    {p}
                  </Box>
                ))}
              </Box>
              <ChipRow items={research.tech} size="sm" variant="muted" />
            </Box>
          </Box>
        </GlowCard>
      </Reveal>
    </Section>
  );
}
