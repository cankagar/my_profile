"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mail, ChevronDown, Code2, Rocket, Palette, Globe, Briefcase, FileCode, Bot, HeartHandshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./data/projects";

const IconMap: Record<string, React.ElementType> = {
  Rocket,
  Code2,
  Palette,
  Globe,
  Briefcase,
  Bot,
  HeartHandshake
};
import dynamic from 'next/dynamic';
const Threads = dynamic(() => import('./Threads'), { ssr: false });

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Robotik ve Mühendislik Yarışmaları",
    "Araştırma ve TÜBİTAK Projeleri",
    "Teknofest ve Roket Çalışmaları",
    "Uluslararası ve Sosyal Katkı"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };



  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-loader"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-bold text-accent tracking-widest"
            >
              CK
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isImageFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageFullscreen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-overlay p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/Bir başlık ekleyin.png"
                alt="Bozdoğan Roket Takımı Fullscreen"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsImageFullscreen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-bg-primary text-text-primary font-sans ${loading ? 'overflow-hidden h-screen' : ''}`}>
        {/* 1. HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center min-h-screen p-8 overflow-hidden">
          {/* Threads Background */}
          <div className="absolute inset-0 z-0 pointer-events-auto" style={{ width: '100%', height: '100%' }}>
            {/* <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction
            /> */}
          </div>

          {/* Subtle background accent glow */}
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[150px] -z-10" />
          <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] -z-10" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="z-10 text-center max-w-3xl"
          >
            <motion.div variants={itemVariants} className="mb-6 inline-block">
              <span className="px-4 py-2 rounded-full bg-accent-light border border-accent/20 text-sm font-medium tracking-wide text-accent">
                Merhaba, ben Can Kagar 👋
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter mb-8 font-sans text-text-primary">
              Cn KGR
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              Modern web teknolojileri ile kullanıcı odaklı, etkileşimli ve estetik dijital deneyimler yaratıyorum. Her pikselde mükemmelliği hedefliyorum.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#contact" className="px-8 py-4 w-full sm:w-auto rounded-full bg-text-primary hover:bg-text-secondary text-text-inverse font-semibold transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                İletişime Geç
              </a>
              <a href="#projects" className="px-8 py-4 w-full sm:w-auto rounded-full bg-transparent border border-border hover:border-text-primary font-semibold transition-all hover:-translate-y-1 text-text-primary">
                Projeleri Gör
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 animate-bounce"
          >
            <a href="#about" aria-label="Aşağı kaydır">
              <ChevronDown className="w-8 h-8 text-text-subtle hover:text-text-primary transition-colors" />
            </a>
          </motion.div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-32 px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-text-primary">Hakkımda : </h2>
                <div className="w-20 h-1 bg-accent mb-8 rounded-full" />
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  Yazılım dünyasına olan tutkum, her gün yeni bir şeyler öğrenmemi ve kendimi geliştirmemi sağlıyor. Karmaşık problemleri basit ve zarif çözümlere dönüştürmeyi seviyorum.
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  Modern frontend framework&apos;leri ve animasyon kütüphaneleri kullanarak sıradan siteleri akılda kalıcı deneyimlere çevirmek en büyük uzmanlık alanım. Her zaman daha iyisini üretmek için çalışıyorum.
                </p>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="p-4 rounded-2xl bg-bg-secondary border border-border text-center font-medium hover:bg-bg-tertiary hover:border-border-hover transition-colors cursor-default text-text-secondary"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2.5. ROKET TAKIMI SECTION */}
        <section id="roket" className="py-32 px-8 relative bg-bg-secondary">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-text-primary">Bozdoğan Roket Takımı</h2>
                <div className="w-20 h-1 bg-accent mb-8 rounded-full" />
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  Bozdoğan Roket Takımı bünyesinde yer alarak havacılık ve uzay teknolojileri alanında önemli projelere imza attık. Takım içindeki görevim ve çalışmalarım sayesinde mühendislik pratiğimi ve takım çalışması becerilerimi geliştirdim.
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  Yüksek irtifa roket sistemleri tasarımı, aviyonik sistemler ve yazılım geliştirme süreçlerinde aktif rol alarak, vizyonumu uzaya taşıyorum.
                </p>
              </div>
              <div
                onClick={() => setIsImageFullscreen(true)}
                className="w-full md:w-1/2 relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] cursor-zoom-in group"
              >
                <Image
                  src="/Bir başlık ekleyin.png"
                  alt="Bozdoğan Roket Takımı"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-text-primary/70 text-text-inverse px-4 py-2 rounded-full backdrop-blur-md transition-opacity duration-500 pointer-events-none text-sm">
                    Büyütmek için tıkla
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="py-32 px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-text-primary">Projeler ve Yarışmalar</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </div>

            {/* TABS */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
              {tabs.map((tab, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 outline-none ${activeTab === index
                    ? "text-text-primary"
                    : "text-text-subtle hover:text-text-secondary"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <span className="relative z-10">{tab}</span>
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-accent-light rounded-full border border-accent/30"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* TAB CONTENT */}
            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full"
                >
                  {projectsData.filter(p => p.tabId === activeTab).length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {projectsData.filter(p => p.tabId === activeTab).map((project) => {
                        const IconComponent = project.icon ? IconMap[project.icon] : Briefcase;
                        return (
                          <Link href={`/projects/${project.id}`} key={project.id} className="block h-full">
                            <motion.div
                              variants={itemVariants}
                              whileHover={{ scale: 1.03 }}
                              className="group p-8 h-full rounded-3xl bg-bg-card border border-border hover:border-accent/40 transition-all duration-300 relative overflow-hidden hover:shadow-[var(--shadow-card-hover)]"
                            >
                              <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                  <IconComponent className="w-8 h-8 text-accent group-hover:text-accent-hover transition-colors" />
                                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-bg-secondary text-text-muted border border-border group-hover:border-accent/30 transition-colors">
                                    {project.year}
                                  </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-text-primary group-hover:text-accent-hover transition-colors">{project.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed flex-grow">{project.desc}</p>
                              </div>
                            </motion.div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-48 border border-dashed border-border rounded-3xl bg-bg-secondary">
                      <p className="text-text-subtle text-lg">Bu sekmenin içeriği henüz tasarlanmamıştır.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </section>

        {/* 4. CONTACT SECTION */}
        <section id="contact" className="py-32 px-8 relative overflow-hidden bg-bg-secondary">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[150px] -z-10 pointer-events-none" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="max-w-3xl mx-auto text-center relative z-10"
          >
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-text-primary">Birlikte Çalışalım</h2>
            <p className="text-xl text-text-muted mb-12">
              Yeni bir proje fikriniz mi var veya sadece merhaba mı demek istiyorsunuz? İletişime geçmekten çekinmeyin!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hello@example.com"
                className="p-4 rounded-full bg-bg-card border border-border hover:bg-accent hover:border-accent transition-all text-text-muted hover:text-text-inverse shadow-[var(--shadow-card)]"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-bg-card border border-border hover:bg-text-primary hover:border-text-primary transition-all text-text-muted hover:text-text-inverse shadow-[var(--shadow-card)]"
              >
                <FileCode className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-bg-card border border-border hover:bg-accent hover:border-accent transition-all text-text-muted hover:text-text-inverse shadow-[var(--shadow-card)]"
              >
                <Briefcase className="w-6 h-6" />
              </motion.a>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-24 text-text-subtle text-sm"
            >
              © {new Date().getFullYear()} Can Kagar. Tüm hakları saklıdır.
            </motion.p>
          </motion.div>
        </section>
      </div>
    </>
  );
}
