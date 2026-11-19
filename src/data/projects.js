// Two groups: AI engineering products and deep learning work.
// `link` is optional: a live product URL (not contact info).

export const aiProjects = [
  {
    category: 'Voice AI · Healthcare',
    title: 'AI Inbound Voice Agent for Dental Clinics',
    role: 'Senior AI Engineer',
    description:
      'A virtual receptionist that answers patient calls and books, reschedules and cancels appointments through natural conversation, built on Microsoft’s Agentic Framework.',
    metrics: ['< 2,000 ms latency', 'HIPAA-compliant workflows', 'Auto call summaries'],
    tech: ['Python', 'AWS Cognito', 'Docker', 'Conversational AI', 'AWS'],
    link: { label: 'app.dentva.ai', url: 'https://app.dentva.ai' },
  },
  {
    category: 'Enterprise RAG · Healthcare',
    title: 'OnixMend: AI Healthcare Policy Assistant',
    role: 'Senior AI Engineer',
    description:
      'Clinic teams query internal policy documents and get accurate, source-backed answers. Semantic vector search, cosine similarity and reranking keep retrieval precise.',
    metrics: ['Multi-tenant isolation', 'Role-based access', 'Citation-backed answers'],
    tech: ['FastAPI', 'LangChain', 'Groq', 'PostgreSQL', 'Docker', 'AWS'],
    link: { label: 'onixmend.careonix.io', url: 'https://onixmend.careonix.io' },
  },
  {
    category: 'AI Product · RAG',
    title: 'Embeddable AI Chatbot',
    role: 'Senior AI Engineer · AI Product Developer',
    description:
      'Businesses turn their internal documentation into an interactive website assistant, dropped in with a lightweight embeddable widget and customized to their brand.',
    metrics: ['Tenant-isolated knowledge bases', 'Automated ingestion', 'Custom branding'],
    tech: ['Python', 'FastAPI', 'LangChain', 'Groq', 'Vector Search'],
  },
  {
    category: 'Voice AI · Logistics',
    title: 'AI Outbound Calling System for Freight Dispatch',
    role: 'AI Engineer',
    description:
      'Sources, qualifies and calls trucking carriers automatically. Lead pipelines enrich public transportation records and an AI decision layer prioritizes who to call.',
    metrics: ['Voicemail detection', 'Compliance safeguards', 'Campaign dashboard'],
    tech: ['LiveKit', 'Telnyx', 'Deepgram', 'OpenAI', 'Python'],
  },
];

export const mlProjects = [
  {
    category: 'Cybersecurity · CV',
    title: 'DDoS Attack Detection with ResNet50',
    role: 'Computer Vision & Deep Learning Engineer',
    description:
      'Network traffic transformed into images and classified with a fine-tuned ResNet50 to separate DDoS attacks from benign traffic.',
    metrics: ['99% accuracy'],
    tech: ['ResNet50', 'TensorFlow', 'Python'],
  },
  {
    category: 'Medical Imaging',
    title: 'Musculoskeletal X-Ray Classifier',
    role: 'Deep Learning Engineer',
    description:
      'Transfer learning on pretrained CNNs flags abnormalities in upper-extremity X-rays, serving as a second-opinion tool for orthopedic assessment.',
    metrics: ['Precision · Recall · F1'],
    tech: ['TensorFlow', 'CNNs', 'Transfer Learning'],
  },
  {
    category: 'Audio Classification',
    title: 'Music Genre Classification',
    role: 'Deep Learning Engineer',
    description:
      'Audio converted to Mel-spectrograms and classified across 10 genres, comparing ResNet50 and VGG16 with an optimized inference pipeline.',
    metrics: ['10 genres'],
    tech: ['ResNet50', 'VGG16', 'TensorFlow'],
  },
];
