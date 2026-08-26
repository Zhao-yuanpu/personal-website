import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { HeroSection } from './sections/HeroSection.jsx';
import { GrowthSection } from './sections/GrowthSection.jsx';
import { InterestsSection } from './sections/InterestsSection.jsx';
import { ContactSection } from './sections/ContactSection.jsx';
import { MotionDirector } from './motion/MotionDirector.jsx';

export function App() {
  const [currentSection, setCurrentSection] = useState('home');
  return (
    <MotionDirector onSectionChange={setCurrentSection}>
      <Header currentSection={currentSection} />
      <main>
        <HeroSection />
        <GrowthSection />
        <InterestsSection />
        <ContactSection />
      </main>
    </MotionDirector>
  );
}
