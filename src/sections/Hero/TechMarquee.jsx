import Box from '@mui/material/Box';
import { marquee } from '../../styles/keyframes';

const tech = [
  'Python', 'FastAPI', 'LangChain', 'LangGraph', 'OpenAI', 'LiveKit', 'Telnyx', 'Deepgram',
  'Groq', 'PostgreSQL', 'pgvector', 'Docker', 'AWS', 'React', 'Next.js', 'Node.js', 'TensorFlow', 'YOLO',
];

// Infinite CSS marquee; list is doubled so the -50% translate loops seamlessly.
export default function TechMarquee() {
  const items = [...tech, ...tech];
  return (
    <Box
      aria-hidden
      sx={(t) => ({
        position: 'relative',
        overflow: 'hidden',
        py: 2,
        borderTop: `1px solid ${t.palette.custom.border}`,
        borderBottom: `1px solid ${t.palette.custom.border}`,
        maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
      })}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `${marquee} 45s linear infinite`,
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((name, i) => (
          <Box
            key={`${name}-${i}`}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: { xs: 2.5, md: 4 },
              pr: { xs: 2.5, md: 4 },
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              fontWeight: 600,
              color: 'text.secondary',
              whiteSpace: 'nowrap',
            }}
          >
            {name}
            <Box component="span" sx={(t) => ({ width: 6, height: 6, borderRadius: '50%', background: t.palette.custom.gradient })} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
