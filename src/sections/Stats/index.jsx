import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import StatItem from './StatItem';
import useInView from '../../hooks/useInView';
import stats from '../../data/stats';

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <Box component="section" aria-label="Highlights" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 5 } }}>
      <Container>
        <Box
          ref={ref}
          sx={(t) => ({
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
            borderRadius: 5,
            border: `1px solid ${t.palette.custom.border}`,
            bgcolor: t.palette.custom.surface,
            backdropFilter: 'blur(10px)',
            overflow: 'hidden',
          })}
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} start={inView} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
