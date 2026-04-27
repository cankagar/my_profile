"use client";

import { motion } from "framer-motion";
import { Mail, ChevronDown, Code2, Rocket, Palette, Globe, Briefcase, FileCode } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const sectionVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const projects = [
    { title: "E-Ticaret Platformu", desc: "Modern ve ölçeklenebilir online alışveriş deneyimi.", icon: <Rocket className="w-8 h-8 mb-4 text-blue-400" /> },
    { title: "Kişisel Portfolyo", desc: "Framer Motion ile geliştirilmiş interaktif portfolyo.", icon: <Palette className="w-8 h-8 mb-4 text-purple-400" /> },
    { title: "SaaS Dashboard", desc: "Kapsamlı analiz ve yönetim paneli.", icon: <Code2 className="w-8 h-8 mb-4 text-emerald-400" /> },
    { title: "Global Uygulama", desc: "Çoklu dil destekli global çapta uygulama.", icon: <Globe className="w-8 h-8 mb-4 text-pink-400" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen p-8 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="z-10 text-center max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-blue-300 backdrop-blur-md">
              Merhaba, ben Can Kagar 👋
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
            Geleceği Kodluyorum
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Modern web teknolojileri ile kullanıcı odaklı, etkileşimli ve estetik dijital deneyimler yaratıyorum. Her pikselde mükemmelliği hedefliyorum.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="px-8 py-4 w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1">
              İletişime Geç
            </a>
            <a href="#projects" className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/5 border border-white/10 hover:bg-white/10 font-semibold transition-all hover:-translate-y-1 backdrop-blur-md">
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
            <ChevronDown className="w-8 h-8 text-slate-500 hover:text-slate-300 transition-colors" />
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
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">Hakkımda : </h2>
              <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full" />
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Yazılım dünyasına olan tutkum, her gün yeni bir şeyler öğrenmemi ve kendimi geliştirmemi sağlıyor. Karmaşık problemleri basit ve zarif çözümlere dönüştürmeyi seviyorum.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Modern frontend framework'leri ve animasyon kütüphaneleri kullanarak sıradan siteleri akılda kalıcı deneyimlere çevirmek en büyük uzmanlık alanım. Her zaman daha iyisini üretmek için çalışıyorum.
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
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center font-medium hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-32 px-8 relative bg-white/[0.02]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Öne Çıkan Projeler</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  {project.icon}
                  <h3 className="text-xl font-semibold mb-3 text-slate-200">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="py-32 px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-8">Birlikte Çalışalım</h2>
          <p className="text-xl text-slate-400 mb-12">
            Yeni bir proje fikriniz mi var veya sadece merhaba mı demek istiyorsunuz? İletişime geçmekten çekinmeyin!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hello@example.com"
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-600 transition-all text-slate-300 hover:text-white backdrop-blur-sm"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-slate-800 hover:border-slate-800 transition-all text-slate-300 hover:text-white backdrop-blur-sm"
            >
              <FileCode className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-blue-700 hover:border-blue-700 transition-all text-slate-300 hover:text-white backdrop-blur-sm"
            >
              <Briefcase className="w-6 h-6" />
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-24 text-slate-500 text-sm"
          >
            © {new Date().getFullYear()} Can Kagar. Tüm hakları saklıdır.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
