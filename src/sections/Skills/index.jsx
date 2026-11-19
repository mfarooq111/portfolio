import Box from '@mui/material/Box';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import Reveal from '../../components/common/Reveal';
import SkillGroup from './SkillGroup';
import skills from '../../data/skills';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Expertise" title="Skills &" accent="Technologies" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(2, minmax(0, 1fr))' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 90} sx={{ gridColumn: group.wide ? { md: '1 / -1' } : 'auto' }}>
            <SkillGroup {...group} />
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
