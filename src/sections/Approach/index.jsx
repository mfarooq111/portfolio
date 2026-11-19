import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import Reveal from '../../components/common/Reveal';
import PrincipleCard from './PrincipleCard';
import approach, { approachIntro, audience } from '../../data/approach';

export default function Approach() {
  return (
    <Section id="approach">
      <SectionHeader eyebrow="Approach" title="How I" accent="work" subtitle={approachIntro} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {approach.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 90}>
            <PrincipleCard {...item} number={i + 1} />
          </Reveal>
        ))}
      </Box>
      <Reveal sx={{ mt: { xs: 3, md: 4 } }}>
        <Box
          sx={(t) => ({
            p: { xs: 2.5, sm: 3.5 },
            borderRadius: 4,
            border: `1px solid ${t.palette.custom.chipBorder}`,
            background: `linear-gradient(120deg, ${t.palette.custom.chipBg}, transparent 70%)`,
          })}
        >
          <Typography variant="overline" component="p" sx={{ color: 'custom.eyebrow', mb: 0.75 }}>
            Who I work with
          </Typography>
          <Typography sx={{ fontSize: 'clamp(1.02rem, 2vw, 1.2rem)', fontWeight: 550, lineHeight: 1.6 }}>{audience}</Typography>
        </Box>
      </Reveal>
    </Section>
  );
}
