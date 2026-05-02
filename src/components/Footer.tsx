import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'About', href: '#about', isPage: false },
    { name: 'Offerings', href: '#offerings', isPage: false },
    { name: 'Gatherings', href: '/gatherings', isPage: true },
    { name: 'Research', href: '/research', isPage: true },
    { name: 'Connect', href: '#connect', isPage: false },
  ];

  return (
    <footer className="bg-ink text-white/50 py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <span className="font-serif italic text-3xl text-white/80 block mb-2">Jules in Bloom</span>
        <p className="text-sage text-[0.62rem] tracking-[0.2em] uppercase font-medium mb-10">
          Yoga Teacher & Sound Healing · Atlanta, GA
        </p>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
          {navItems.map((item) => (
            item.isPage ? (
              <Link key={item.name} to={item.href} className="text-[0.7rem] uppercase tracking-widest hover:text-white transition-colors font-medium">
                {item.name}
              </Link>
            ) : (
              <a key={item.name} href={isHome ? item.href : `/${item.href}`} className="text-[0.7rem] uppercase tracking-widest hover:text-white transition-colors font-medium">
                {item.name}
              </a>
            )
          ))}
        </nav>

        <div className="pt-10 border-t border-white/10 text-[0.78rem] tracking-wider">
          <p>© 2026 Jules in Bloom · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
