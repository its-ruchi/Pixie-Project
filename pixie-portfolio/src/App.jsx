import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PixieCanvas } from './components/PixieModel';

export default function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Header />
      <main>
        <PixieCanvas />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
