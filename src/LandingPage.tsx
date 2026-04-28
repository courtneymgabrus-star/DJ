import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import Offerings from './components/Offerings';
import Yoga from './components/Yoga';
import SoundHealing from './components/SoundHealing';
import Events from './components/Events';
import PastEventsCarousel from './components/PastEventsCarousel';
import Connect from './components/Connect';
import Footer from './components/Footer';
import BotanicalDivider from './components/BotanicalDivider';

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-blush/30">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <About />
        <BotanicalDivider />
        <Offerings />
        <BotanicalDivider />
        <Yoga />
        <SoundHealing />
        <Events />
        <PastEventsCarousel />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
