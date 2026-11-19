import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import ProjectGroup from './ProjectGroup';
import { aiProjects, mlProjects } from '../../data/projects';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Featured Projects"
        title="What I've"
        accent="built"
        subtitle="Production AI systems for healthcare, logistics and SaaS, plus deep learning work in computer vision, medical imaging and audio."
      />
      <ProjectGroup label="AI Engineering" count={aiProjects.length} projects={aiProjects} columns={2} />
      <ProjectGroup label="Deep Learning & Computer Vision" count={mlProjects.length} projects={mlProjects} columns={3} offset={aiProjects.length} compact />
    </Section>
  );
}
