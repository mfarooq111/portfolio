import Box from '@mui/material/Box';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import Reveal from '../../components/common/Reveal';
import ServiceCard from './ServiceCard';
import services from '../../data/services';

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title="What I"
        accent="build"
        subtitle="Six areas where I turn AI capability into working software, from a single automation to a complete AI product."
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 90}>
            <ServiceCard {...service} index={i} />
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
