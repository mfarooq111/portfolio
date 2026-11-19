import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import Reveal from '../../components/common/Reveal';
import QuickFacts from './QuickFacts';
import profile from '../../data/profile';

export default function About() {
  const { about } = profile;
  return (
    <Section id="about">
      <SectionHeader eyebrow={about.eyebrow} title={about.titleTop} accent={about.titleAccent} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 1.25fr) minmax(0, 0.75fr)' },
          gap: { xs: 4, md: 6 },
          alignItems: 'start',
        }}
      >
        <Box>
          {about.paragraphs.map((text, i) => (
            <Reveal key={i} delay={i * 100}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, fontSize: 'clamp(1rem, 1.6vw, 1.12rem)' }}>
                {text}
              </Typography>
            </Reveal>
          ))}
        </Box>
        <Reveal direction="right" delay={150}>
          <QuickFacts facts={about.facts} />
        </Reveal>
      </Box>
    </Section>
  );
}
