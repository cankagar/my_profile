import { projectsData } from "@/app/data/projects";
import Link from "next/link";
import { ArrowLeft, Calendar, Code, Trophy, User, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Gallery from "@/app/components/Gallery";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 scroll-smooth">
      {/* Background gradient effects (matching home page) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <div className="max-w-5xl mx-auto px-8 py-8">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Geri Dön</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-8 py-12 animate-[fadeIn_1s_ease-out]">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-2xl">
            
            {/* Logo Area (if exists) */}
            {project.logo && (
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <div className="group w-48 h-48 md:w-64 md:h-64 relative bg-white/5 rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out">
                  {/* Logonun taşmaması ve kenarlardan nefes payı kalması için inset-4 kullandık */}
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
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg font-medium tracking-wide">{project.year}</span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm border border-blue-500/20">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl">
                {project.desc}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content (Text) */}
        <section className="max-w-4xl mx-auto px-8 py-12">
          {project.longDesc ? (
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              {project.longDesc.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-white">Detaylı Açıklama</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
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
        </section>

        {/* Dynamic Image Gallery or Placeholders */}
        <section className="max-w-5xl mx-auto px-8 py-12 pb-32">
          {project.gallery ? (
            <>
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Yarışmadan Kareler</h2>
              <Gallery images={project.gallery} />
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                 <div className="w-full aspect-video bg-white/5 border border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center text-slate-500 backdrop-blur-sm">
                  <p className="text-lg mb-2">Proje Görseli Gelecek</p>
                  <p className="text-sm">Önerilen boyut: 1920x1080</p>
                </div>
              </div>

              <div className="col-span-1 space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-emerald-400">
                    <Code className="w-6 h-6" />
                    <h3 className="text-lg font-semibold text-white">Teknolojiler</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Kullanılan teknolojiler eklenecek.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-yellow-400">
                    <Trophy className="w-6 h-6" />
                    <h3 className="text-lg font-semibold text-white">Ödüller</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Kazanılan ödüller eklenecek.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-purple-400">
                    <User className="w-6 h-6" />
                    <h3 className="text-lg font-semibold text-white">Takım Rolü</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Takım içerisindeki göreviniz eklenecek.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Custom Fade-in Animation Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
      </div>
    </div>
  );
}
