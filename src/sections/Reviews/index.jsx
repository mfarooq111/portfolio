import Box from '@mui/material/Box';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import Reveal from '../../components/common/Reveal';
import ReviewCard from './ReviewCard';
import QualityBadges from './QualityBadges';
import { reviews, qualities } from '../../data/reviews';

export default function Reviews() {
  return (
    <Section id="reviews">
      <SectionHeader
        eyebrow="Client Feedback"
        title="What clients"
        accent="say"
        align="center"
        subtitle="Feedback from completed work on Upwork."
      />
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        {reviews.map((review) => (
          <Reveal key={review.project} direction="scale">
            <ReviewCard {...review} />
          </Reveal>
        ))}
        <Reveal delay={150} sx={{ mt: { xs: 3, md: 4 } }}>
          <QualityBadges items={qualities} />
        </Reveal>
      </Box>
    </Section>
  );
}
