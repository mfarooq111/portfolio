import Box from '@mui/material/Box';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import TimelineItem from './TimelineItem';
import experience from '../../data/experience';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Career"
        title="Professional"
        accent="Experience"
        subtitle="5+ years across AI products, healthcare, computer vision and production software. Here is where I worked and what I owned."
      />
      <Box sx={{ position: 'relative', maxWidth: 960 }}>
        {/* vertical rail */}
        <Box
          aria-hidden
          sx={(t) => ({
            position: 'absolute',
            top: 8,
            bottom: 8,
            left: { xs: 9, md: 11 },
            width: 2,
            borderRadius: 1,
            background: `linear-gradient(${t.palette.primary.main}, ${t.palette.custom.border})`,
          })}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 3 } }}>
          {experience.map((job, i) => (
            <TimelineItem key={job.company} {...job} index={i} />
          ))}
        </Box>
      </Box>
    </Section>
  );
}
