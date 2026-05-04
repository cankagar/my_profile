"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Code, Trophy, User, MapPin } from "lucide-react";
import Image from "next/image";
import Carousel from "@/app/components/Carousel";

export default function ProjectContent({ project }: { project: any }) {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans scroll-smooth">
      {/* Subtle background accent glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto px-8 py-8"
        >
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors bg-bg-secondary px-4 py-2 rounded-full border border-border hover:border-border-hover"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Geri Dön</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto px-8 py-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-12 bg-bg-secondary p-8 md:p-12 rounded-[2.5rem] border border-border shadow-[var(--shadow-card)]">
            
            {/* Logo Area */}
            {project.logo && (
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <div className="group w-48 h-48 md:w-64 md:h-64 relative bg-bg-card rounded-full flex items-center justify-center border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 ease-in-out">
                  <div className="absolute inset-6 md:inset-8 transition-transform duration-300 ease-in-out group-hover:scale-105">
                    <Image 
                      src={project.logo} 
                      alt={`${project.title} Logo`} 
                      fill 
                      className="object-contain" 
                      sizes="(max-width: 768px) 192px, 256px"
                      priority
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Title & Info */}
            <div className={`w-full ${project.logo ? 'md:w-2/3' : ''} space-y-6 text-center md:text-left`}>
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-accent">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg font-medium tracking-wide">{project.year}</span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent font-medium text-sm border border-accent/20">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                )}
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight">
                {project.title}
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl">
                {project.desc}
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Main Content (Text) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-8 py-12"
        >
          {project.longDesc ? (
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              {project.longDesc.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <div className="bg-bg-secondary border border-border p-8 rounded-3xl">
              <h2 className="text-2xl font-semibold mb-6 text-text-primary">Detaylı Açıklama</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Buraya proje veya yarışma ile ilgili uzun, detaylı bir açıklama metni gelecek. 
                  Bu projenin amacı neydi, hangi problemler çözüldü, süreç nasıl ilerledi gibi bilgiler eklenebilir.
                </p>
                <p>
                  Metin içerikleri sonraki aşamalarda ayrıca güncellenecektir.
                </p>
              </div>
            </div>
          )}
        </motion.section>

        {/* Dynamic Image Gallery or Placeholders */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-8 py-12 pb-32"
        >
          {project.gallery ? (
            <>
              <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Yarışmadan Kareler</h2>
              <Carousel images={project.gallery} />
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                 <div className="w-full aspect-video bg-bg-secondary border border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-subtle">
                  <p className="text-lg mb-2">Proje Görseli Gelecek</p>
                  <p className="text-sm">Önerilen boyut: 1920x1080</p>
                </div>
              </div>

              <div className="col-span-1 space-y-6">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-bg-card border border-border p-6 rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all">
                  <div className="flex items-center gap-3 mb-4 text-accent">
                    <Code className="w-6 h-6" />
                    <h3 className="text-lg font-semibold text-text-primary">Teknolojiler</h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Kullanılan teknolojiler eklenecek.
                  </p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="bg-bg-card border border-border p-6 rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all">
                  <div className="flex items-center gap-3 mb-4 text-accent">
                    <Trophy className="w-6 h-6" />
                    <h3 className="text-lg font-semibold text-text-primary">Ödüller</h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Kazanılan ödüller eklenecek.
                  </p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="bg-bg-card border border-border p-6 rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all">
                  <div className="flex items-center gap-3 mb-4 text-accent">
                    <User className="w-6 h-6" />
                    <h3 className="text-lg font-semibold text-text-primary">Takım Rolü</h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Takım içerisindeki göreviniz eklenecek.
                  </p>
                </motion.div>
              </div>
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
}
