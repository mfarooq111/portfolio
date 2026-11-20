import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Reveal from '../../components/common/Reveal';
import ProjectCard from './ProjectCard';

export default function ProjectGroup({ label, count, projects, columns, offset = 0, compact = false }) {
  const lgCols = `repeat(${columns}, minmax(0, 1fr))`;
  return (
    <Box sx={{ mt: offset > 0 ? { xs: 5, md: 6 } : 0 }}>
      <Reveal sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
        <Typography variant="h3" component="h3" sx={{ whiteSpace: { sm: 'nowrap' } }}>
          {label}
        </Typography>
        <Box sx={(t) => ({ flexGrow: 1, height: 1, bgcolor: t.palette.custom.border, display: { xs: 'none', sm: 'block' } })} />
        <Typography sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
          {count} featured
        </Typography>
      </Reveal>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'minmax(0, 1fr)',
            sm: columns === 3 ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)',
            md: columns === 3 ? 'repeat(3, minmax(0, 1fr))' : lgCols,
          },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % columns) * 90}>
            <ProjectCard {...project} number={offset + i + 1} compact={compact} />
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}
