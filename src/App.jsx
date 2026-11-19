import Box from '@mui/material/Box';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundGrid from './components/common/BackgroundGrid';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Approach from './sections/Approach';
import Reviews from './sections/Reviews';
import Credentials from './sections/Credentials';

export default function App() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflowX: 'clip' }}>
      <BackgroundGrid />
      <Navbar />
      <Box component="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Approach />
        <Reviews />
        <Credentials />
      </Box>
      <Footer />
    </Box>
  );
}
