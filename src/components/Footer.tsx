export default function Footer() {
  return (
    <footer className="bg-ink text-white/50 py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <span className="font-serif italic text-3xl text-white/80 block mb-2">Divine Juls</span>
        <p className="text-sage text-[0.62rem] tracking-[0.2em] uppercase font-medium mb-10">
          Yoga Teacher & Sound Healing · Atlanta, GA
        </p>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
          {['About', 'Offerings', 'Events', 'Connect'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[0.7rem] uppercase tracking-widest hover:text-white transition-colors font-medium">
              {item}
            </a>
          ))}
        </nav>

        <div className="pt-10 border-t border-white/10 text-[0.78rem] tracking-wider">
          <p>© 2026 Divine Juls · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
