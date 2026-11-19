import Box from '@mui/material/Box';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import Reveal from '../../components/common/Reveal';
import CredentialCard from './CredentialCard';
import { education, certifications } from '../../data/credentials';

export default function Credentials() {
  const cards = [
    { icon: SchoolRoundedIcon, kind: 'Education', title: education.school, subtitle: education.degree, meta: education.period },
    ...certifications.map((c) => ({ icon: WorkspacePremiumRoundedIcon, kind: 'Certification', title: c.name, subtitle: c.issuer, meta: c.date })),
  ];

  return (
    <Section id="credentials" sx={{ pt: { xs: 3, md: 4 } }}>
      <SectionHeader eyebrow="Credentials" title="Education &" accent="Certifications" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 90}>
            <CredentialCard {...card} />
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
