import AutoModeRoundedIcon from '@mui/icons-material/AutoModeRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded';

const services = [
  {
    icon: AutoModeRoundedIcon,
    title: 'AI Automation & Workflow Integration',
    description:
      'LLM-powered workflows that cut repetitive work: intelligent task execution, document processing, automated data handling and API integrations with the tools you already use.',
    tech: ['LLMs', 'APIs', 'Python'],
  },
  {
    icon: PhoneInTalkRoundedIcon,
    title: 'Voice AI & Conversational Agents',
    description:
      'Inbound and outbound phone agents with real-time speech pipelines, telephony, interruption handling, appointment scheduling, transcription and automated call summaries.',
    tech: ['LiveKit', 'Telnyx', 'Deepgram', 'OpenAI'],
  },
  {
    icon: ManageSearchRoundedIcon,
    title: 'RAG Systems & Knowledge Assistants',
    description:
      'Document-grounded assistants with ingestion, embeddings, semantic search, reranking, source citations and multi-tenant knowledge bases.',
    tech: ['LangChain', 'FastAPI', 'Groq', 'pgvector'],
  },
  {
    icon: HubRoundedIcon,
    title: 'AI Agents & Agentic Workflows',
    description:
      'Agents that combine LLM reasoning, structured logic and tool execution to complete multi-step tasks, keep context and return structured, actionable results.',
    tech: ['LangGraph', 'Tool Calling', 'Multi-Agent'],
  },
  {
    icon: LayersRoundedIcon,
    title: 'AI SaaS & Full-Stack Development',
    description:
      'Complete AI products with secure APIs, multi-tenant architecture, authentication, document management and cloud deployment, from backend to polished frontend.',
    tech: ['FastAPI', 'Node.js', 'React', 'Next.js', 'AWS'],
  },
  {
    icon: CenterFocusStrongRoundedIcon,
    title: 'Machine Learning & Computer Vision',
    description:
      'Deep learning for image and audio classification, object detection and recognition, with transfer learning, model evaluation and inference optimization.',
    tech: ['TensorFlow', 'YOLO', 'ResNet50', 'Keras'],
  },
];

export default services;
