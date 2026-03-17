import React from 'react';
import { Github, Instagram, Mail, ExternalLink, Rocket, Code, Cpu, Globe } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      title: "Warda",
      desc: "Digital party game platform for up to 12 players with spin-and-reveal mechanics.",
      link: "https://warda-kappa.vercel.app/",
      tech: ["Game Dev", "Interactive UI"]
    },
    {
      title: "AI Jozef",
      desc: "Multimedia AI engine for generation, motion, and specialized chat interactions.",
      link: "https://mr-r.vercel.app/",
      tech: ["AI Studio", "Next.js"]
    },
    {
      title: "Twin Bloom",
      desc: "Premium E-commerce store built for high-performance and speed.",
      link: "https://twin-bloom.vercel.app/",
      tech: ["Full-Stack", "E-commerce"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))] -z-10" />
      
      <header className="container mx-auto px-6 py-24 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-cyan-500/30 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium uppercase tracking-wider">
          Full-Stack AI & Game Developer
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent tracking-tighter">
          YOUSSEF DHAHRI
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
          Building high-performance interactive experiences, intelligent AI systems, and immersive digital worlds.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:youssefdh840@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-cyan-400 transition-all">
            <Mail size={18} /> Contact Me
          </a>
          <a href="https://www.instagram.com/tky_13_web_developer.tn" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
            <Instagram size={18} /> Instagram
          </a>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-cyan-500/50 transition-all">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
              <a href={p.link} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 text-cyan-400 transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">{p.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tech.map((t, ti) => (
                <span key={ti} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="border-t border-white/5 py-12 mt-20 text-center">
        <p className="text-gray-500 text-sm">© 2026 Youssef Dhahri. Built with Next.js & AI.</p>
      </footer>
    </div>
  );
}
