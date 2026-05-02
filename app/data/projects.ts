import { ReactNode } from "react";
import { Rocket, Code2, Palette, Globe, Briefcase, Bot, HeartHandshake } from "lucide-react";

export interface ProjectData {
  id: string;
  tabId: number; // 0: Robotik, 1: Araştırma, 2: Teknofest, 3: Uluslararası
  title: string;
  year: string;
  location?: string;
  desc: string;
  longDesc?: string[];
  logo?: string;
  gallery?: string[];
  icon?: string;
}

export const projectsData: ProjectData[] = [
  // 0. Robotik ve Mühendislik Yarışmaları
  {
    id: "frc-istanbul-2024",
    tabId: 0,
    title: "FRC İstanbul",
    year: "2024",
    desc: "FIRST Robotics Competition İstanbul Regional katılımı ve takım mücadelesi.",
    icon: "Bot",
  },
  {
    id: "robotex-international-2022",
    tabId: 0,
    title: "ROBOTEX International",
    year: "2022",
    location: "Estonya / Tallinn",
    desc: "Uluslararası otonom robot sistemleri ve mühendislik yarışması.",
    longDesc: [
      "2022 yılında, PayaSTEM ekibi olarak ROBOTEX International yarışmasına iki farklı kategoride katılım sağladık ve her iki kategoride de önemli başarılar elde ettik.",
      "Hızlı çizgi izleyen robot kategorisinde, “Roboline” isimli robotumuz ile öncelikle Türkiye Antalya Regional yarışmasında birincilik elde ederek ülkemizi Estonya’nın Tallinn şehrinde düzenlenen dünya finallerinde temsil etme hakkı kazandık. Uluslararası arenada sergilediğimiz 15.15 saniye ve 14.58 saniyelik dereceler ile rakiplerimizi geride bırakarak bu kategoride ödül almaya hak kazandık.",
      "Elde ettiğimiz bir diğer başarı ise küçükler kategorisi sumo robot yarışmalarında gerçekleşmiştir. Eğitim süreçlerinde birlikte çalıştığımız ilkokul öğrencilerimiz, Türkiye’de elde ettikleri derecelerle Estonya’daki dünya finallerine katılmaya hak kazanmış ve burada da üstün performans sergileyerek ödüle layık görülmüşlerdir.",
      "Uluslararası düzeyde gerçekleştirilen ve yüksek prestije sahip bu organizasyonda ülkemizi temsil etme sorumluluğunu taşımak bizim için büyük bir onur olmuştur. Yarışma sonunda ödül töreninde Türk bayrağımızla sahneye çıkarak ödülümüzü gururla teslim almak, bu sürecin en anlamlı ve unutulmaz anlarından biri olmuştur.",
      "Bu süreç, hem teknik başarılarımızı hem de farklı yaş gruplarıyla yürüttüğümüz eğitim ve mentorluk çalışmalarının uluslararası düzeyde karşılık bulduğunu göstermesi açısından büyük önem taşımaktadır."
    ],
    logo: "/Robotex_International_red.png",
    gallery: [
      "/robotex1.jpg",
      "/robotex2.jpg",
      "/robotex3.jpg",
      "/robotex4.jpg",
      "/robotex5.jpg",
      "/robotex6.jpg"
    ],
    icon: "Bot",
  },
  {
    id: "frc-houston-2021-2022",
    tabId: 0,
    title: "FRC Houston",
    year: "2021-2022",
    desc: "FIRST Robotics Competition Dünya Şampiyonası Houston macerası.",
    icon: "Bot",
  },
  {
    id: "fll-2018",
    tabId: 0,
    title: "FLL",
    year: "2018",
    desc: "FIRST LEGO League ulusal turnuvaları ve projeleri.",
    icon: "Code2",
  },

  // 1. Araştırma ve TÜBİTAK Projeleri
  {
    id: "basit-harmonik-hareket-2023",
    tabId: 1,
    title: "Basit Harmonik Hareket Projesi",
    year: "2023",
    desc: "Fiziksel simülasyonlar ve deneysel veriler ışığında basit harmonik hareket incelemesi.",
    icon: "Code2",
  },
  {
    id: "atmosferik-polen-arastirmasi-2021",
    tabId: 1,
    title: "Atmosferik Polen Araştırması",
    year: "2021",
    desc: "Bölgesel polen yoğunluğu analizleri ve sağlık etkileri üzerine bilimsel araştırma.",
    icon: "Globe",
  },

  // 2. Teknofest ve Roket Çalışmaları
  {
    id: "bozdogan-roket-takimi-2026",
    tabId: 2,
    title: "BOZDOĞAN Roket Takımı",
    year: "2026",
    desc: "Yüksek irtifa roket sistemleri tasarımı ve aviyonik çalışmaları.",
    icon: "Rocket",
  },
  {
    id: "roket-yarismasi-2023",
    tabId: 2,
    title: "Roket Yarışması",
    year: "2023",
    desc: "Teknofest orta irtifa roket yarışması teknik süreçleri.",
    icon: "Rocket",
  },
  {
    id: "roket-yarismasi-2022",
    tabId: 2,
    title: "Roket Yarışması",
    year: "2022",
    desc: "Roket aviyonik sistemleri entegrasyonu ve uçuş yazılımı.",
    icon: "Rocket",
  },
  {
    id: "ucan-araba-2019",
    tabId: 2,
    title: "Uçan Araba",
    year: "2019",
    desc: "Geleceğin hava ulaşım araçları konsept tasarımı ve mühendislik planlaması.",
    icon: "Palette",
  },

  // 3. Uluslararası ve Sosyal Katkı
  {
    id: "stream-it-up-1-2022",
    tabId: 3,
    title: "Stream It Up 1",
    year: "2022",
    desc: "İngilizce öğrenimi ve uluslararası kültür alışverişi destek programı.",
    icon: "Globe",
  },
  {
    id: "nasa-astrocamp-2025",
    tabId: 3,
    title: "NASA Astrocamp",
    year: "2025",
    desc: "Uzay bilimleri ve astronomi üzerine interaktif kamp deneyimi.",
    icon: "Globe",
  },
  {
    id: "deprem-sonrasi-sosyal-projeler-2023",
    tabId: 3,
    title: "Deprem Sonrası Sosyal Projeler",
    year: "2023",
    desc: "Afet bölgelerinde sosyal iyileştirme ve eğitim teknolojileri desteği.",
    icon: "HeartHandshake",
  },
];
