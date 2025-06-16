// CORRECTIF: Scroll fluide, offset pour la navbar, et correspondance des ids dans la nav.
// Utilise la version suivante pour un scroll précis et une navigation qui fonctionne vraiment sur chaque section !

import "@fontsource/poppins";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaCss3Alt,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaRegFileAlt,
  FaSchool,
} from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVscodium,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-200" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
];

const projects = [
  {
    title: "Gestion d'une application complète",
    image: "/images/gestion-app.png",
    description:
      "Application web pour gérer des utilisateurs et des tâches, avec authentification, back office et interface responsive.",
    tech: [
      { icon: <FaReact className="text-sky-400" />, name: "React" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      {
        icon: <SiTailwindcss className="text-sky-300" />,
        name: "Tailwind CSS",
      },
    ],
    github: "https://github.com/griffatonr/gestion-app",
  },
  {
    title: "Interface de gestion d’étudiants",
    image: "/images/gestion-etudiants.png",
    description:
      "Dashboard permettant de créer, modifier et supprimer des étudiants, stockage Firebase, design moderne.",
    tech: [
      { icon: <FaReact className="text-sky-400" />, name: "React" },
      { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    ],
    github: "https://github.com/griffatonr/etudiants",
  },
  {
    title: "Simulation réseau Python",
    image: "/images/simulation-reseau.png",
    description:
      "Projet de simulation de communication entre machines pour apprendre le fonctionnement des sockets réseau.",
    tech: [
      { icon: <SiPython className="text-blue-400" />, name: "Python" },
      { icon: <SiSocketdotio className="text-gray-300" />, name: "Sockets" },
    ],
    github: "https://github.com/griffatonr/simulation-reseau",
  },
];

// NOUVEL ORDRE navLinks pour matcher l'ordre d'apparition sur la page !
const navLinks = [
  { id: "about", label: "À propos" },
  { id: "parcours", label: "Parcours" },
  { id: "goals", label: "Objectifs" },
  { id: "skills", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

const Loader = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full border-t-4 border-blue-500 border-b-4 border-gray-800 h-16 w-16 mb-4"></div>
    <span
      className="ml-4 text-xl text-blue-400 font-bold tracking-wide"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      Griffy...
    </span>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:scale-[1.03] transition-transform duration-300 group">
    <div className="h-44 w-full overflow-hidden">
      <img
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
      <p className="text-neutral-300 mb-3 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="bg-blue-800/80 text-xs px-2 py-1 rounded-full flex items-center gap-1"
          >
            {t.icon}
            {t.name}
          </span>
        ))}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors mt-auto"
      >
        <FaGithub /> Voir sur GitHub
      </a>
    </div>
  </div>
);

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fonction pour scroll smooth avec offset pour la navbar
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // ajuste si ta navbar est plus grande
      const y =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    setTimeout(() => setLoading(false), 1500);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let found = false;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(id);
          found = true;
          break;
        }
      }
      if (!found) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      className="relative font-sans scroll-smooth"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div
        className="fixed inset-0 -z-10 animate-bg-gradient"
        style={{
          background:
            "linear-gradient(120deg, #18181b 0%, #23272f 60%, #0f172a 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 min-h-screen text-white">
        {/* Navbar */}
        <nav
          className={`fixed w-full top-0 z-50 transition-all ${
            scrolled
              ? "bg-black/90 backdrop-blur border-b border-neutral-800"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <span className="font-bold text-lg flex items-center gap-2">
              <FaReact className="text-sky-400 text-2xl" /> Robert Griffaton
            </span>
            {/* Desktop nav */}
            <ul className="hidden md:flex space-x-6 text-sm items-center">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`hover:text-blue-400 transition-colors bg-transparent border-none outline-none cursor-pointer ${
                      activeSection === id ? "text-blue-400 font-semibold" : ""
                    }`}
                    style={{ background: "none", padding: 0 }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            {/* Burger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
              >
                <FaBars className="w-7 h-7 text-white" />
              </button>
            </div>
          </div>
          {/* Mobile nav */}
          {menuOpen && (
            <div className="md:hidden px-6 pb-4">
              <ul className="space-y-2 text-sm">
                {navLinks.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => handleNavClick(id)}
                      className={`block py-2 hover:text-blue-400 transition-colors bg-transparent border-none outline-none cursor-pointer w-full text-left ${
                        activeSection === id
                          ? "text-blue-400 font-semibold"
                          : ""
                      }`}
                      style={{ background: "none", padding: 0 }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        <div
          className="fixed inset-0 -z-10"
          style={{
            background:
              "linear-gradient(120deg, #0f172a 0%, #22223b 50%, #1a202c 100%)",
            animation: "gradientMove 15s ease-in-out infinite alternate",
          }}
        />

        {/* Hero section */}
        <header
          className="h-[100vh] flex flex-col justify-center items-center text-center px-4"
          data-aos="fade-down"
        >
          <img
            src="/PortfolioRG/profile.jpg"
            alt="Portrait de Robert Griffaton"
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4 shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-2">Robert Griffaton</h1>
          <p className="text-md text-neutral-400 max-w-xl mb-2">
            Étudiant en BUT Informatique passionné par le développement web et
            logiciel. Curieux, rigoureux et orienté solution.
          </p>
          <ul className="flex justify-center gap-6 mt-4 text-xl">
            <li>
              <a
                href="mailto:griffatonr@gmail.com"
                className="hover:text-blue-400"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/griffatonr"
                target="_blank"
                className="hover:text-blue-400"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/robertgriffaton"
                target="_blank"
                className="hover:text-blue-400"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>

          <div className="mt-6 flex justify-center">
            <a
              href="/CV_Robert_Griffaton.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow transition-all duration-300"
            >
              <FaArrowRight className="text-xl" />
              Télécharger mon CV
            </a>
          </div>
        </header>
        <section
          id="about"
          className="relative bg-gradient-to-br from-black via-neutral-900 to-neutral-950 rounded-3xl max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 mb-14 shadow-2xl"
          data-aos="fade-up"
        >
          {/* Photo à gauche */}
          <div className="shrink-0 flex flex-col items-center md:items-start">
            <img
              src="/profile.jpg"
              alt="Robert Griffaton"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4"
            />
            <span className="text-blue-400 font-bold text-xl mt-2">
              Robert Griffaton
            </span>
          </div>
          {/* Texte à propos */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              À propos de moi
            </h2>
            <p className="text-lg text-neutral-200 leading-relaxed mb-2">
              Étudiant en BUT Informatique passionné par la tech, l’innovation
              et la création. J’adore relever des défis, apprendre sans cesse et
              partager des solutions simples à des problèmes complexes.
            </p>
            <p className="text-neutral-400 mb-2">
              Je travaille sur des projets web et logiciels, avec une forte
              appétence pour le développement fullstack, l’UI moderne et la
              gestion de projet en équipe.
            </p>
            <p className="text-neutral-400">
              Actuellement à la recherche de nouvelles opportunités, mon
              objectif : rejoindre une école d’ingénieur et continuer à
              progresser.
            </p>
          </div>
        </section>
        <section
          id="skills"
          className="max-w-6xl mx-auto px-4 mb-14"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-7">Compétences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Front-End */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 shadow flex flex-col items-start">
              <h3 className="text-lg font-semibold text-sky-400 mb-3 flex items-center gap-2">
                <FaReact className="text-sky-400" /> Développement Front-End
              </h3>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-sky-900 text-sky-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaReact />
                  React
                </li>
                <li className="bg-sky-900 text-sky-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiJavascript />
                  JavaScript
                </li>
                <li className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiTypescript />
                  TypeScript
                </li>
                <li className="bg-sky-800 text-sky-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiTailwindcss />
                  Tailwind CSS
                </li>
                <li className="bg-orange-900 text-orange-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaHtml5 />
                  HTML
                </li>
                <li className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaCss3Alt />
                  CSS
                </li>
                <li className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiNextdotjs />
                  Next.js
                </li>
              </ul>
            </div>
            {/* Back-End & Bases de données */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 shadow flex flex-col items-start">
              <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                <FaNodeJs className="text-green-400" /> Back-End & Bases de
                données
              </h3>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-green-900 text-green-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiPostgresql />
                  PostgreSQL
                </li>
                <li className="bg-yellow-900 text-yellow-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiPython />
                  Python
                </li>
                <li className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiMysql />
                  MySQL
                </li>
                <li className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiPhp />
                  PHP
                </li>
                <li className="bg-red-900 text-red-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaJava />
                  Java
                </li>
              </ul>
            </div>
            {/* Outils & Méthodologie */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 shadow flex flex-col items-start">
              <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center gap-2">
                <FaGitAlt className="text-orange-400" /> Outils & Méthodologie
              </h3>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-orange-900 text-orange-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaGitAlt />
                  Git/GitHub
                </li>
                <li className="bg-pink-900 text-pink-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiFigma />
                  Figma
                </li>
                <li className="bg-blue-800 text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <SiVscodium />
                  VSCode
                </li>
                <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaRegFileAlt />
                  Microsoft 365
                </li>
                {/* Ajoute ici d'autres outils si besoin */}
              </ul>
            </div>
          </div>
        </section>

        {/* Bloc 2 : Parcours scolaire & Objectifs */}
        {/* Parcours scolaire */}
        <section
          id="parcours-objectifs"
          className="max-w-6xl mx-auto my-12 px-4 py-8 bg-neutral-900/80 rounded-3xl shadow-xl"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-10 text-center tracking-tight">
            Mon Parcours & Mes Objectifs
          </h2>

          {/* Timeline horizontale sur desktop, verticale sur mobile */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 relative">
            {/* Etape collège */}
            <div className="flex-1 flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-600 shadow-lg flex items-center justify-center mb-4">
                <FaSchool className="text-green-300 text-3xl" />
              </div>
              <div className="bg-black/70 rounded-xl p-5 shadow-md w-full text-center">
                <div className="font-bold text-blue-200 text-lg mb-1">
                  Collège Victor Hugo
                </div>
                <div className="text-sm text-blue-400 mb-2">2016 – 2020</div>
                <div className="text-neutral-300 text-sm mb-1">
                  Brevet mention Très Bien
                </div>
                <div className="text-xs text-neutral-400">Sarcelles</div>
              </div>
              {/* Ligne de liaison */}
              <div className="hidden md:block absolute right-[-16px] top-[48px] w-8 h-2 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full z-0"></div>
            </div>
            {/* Etape lycée */}
            <div className="flex-1 flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-700 to-yellow-400 shadow-lg flex items-center justify-center mb-4">
                <FaGraduationCap className="text-yellow-100 text-3xl" />
              </div>
              <div className="bg-black/70 rounded-xl p-5 shadow-md w-full text-center">
                <div className="font-bold text-yellow-300 text-lg mb-1">
                  Lycée Jean Jacques Rousseau
                </div>
                <div className="text-sm text-yellow-400 mb-2">2020 – 2023</div>
                <div className="text-neutral-300 text-sm mb-1">
                  Bac Général spé Maths/Physique-Chimie, Maths expertes
                </div>
                <div className="text-xs text-neutral-400">Sarcelles</div>
              </div>
              {/* Ligne de liaison */}
              <div className="hidden md:block absolute right-[-16px] top-[48px] w-8 h-2 bg-gradient-to-r from-yellow-400 to-sky-400 rounded-full z-0"></div>
            </div>
            {/* Etape BUT */}
            <div className="flex-1 flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-sky-600 shadow-lg flex items-center justify-center mb-4">
                <FaReact className="text-white text-3xl" />
              </div>
              <div className="bg-black/70 rounded-xl p-5 shadow-md w-full text-center">
                <div className="font-bold text-sky-400 text-lg mb-1">
                  BUT Informatique
                </div>
                <div className="text-sm text-sky-200 mb-2">
                  2023 – 2026 (en cours)
                </div>
                <div className="text-neutral-300 text-sm mb-1">
                  IUT Villetaneuse
                </div>
                <div className="text-xs text-neutral-400">
                  Alternance prévue en 3ème année
                </div>
              </div>
              {/* Ligne de liaison */}
              <div className="hidden md:block absolute right-[-16px] top-[48px] w-8 h-2 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full z-0"></div>
            </div>
            {/* Objectif */}
            <div className="flex-1 flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-blue-600 shadow-lg flex items-center justify-center mb-4">
                <FaArrowRight className="text-white text-3xl" />
              </div>
              <div className="bg-black/60 rounded-xl p-5 shadow-md w-full text-center">
                <div className="font-bold text-emerald-400 text-lg mb-1">
                  Objectif
                </div>
                <div className="text-neutral-200 text-sm mb-2">
                  Poursuivre en école d’ingénieur (après le BUT) pour me
                  spécialiser en développement logiciel / fullstack.
                  <br />
                  <span className="text-xs text-blue-300 block mt-1">
                    Alternance recherchée dès la 3ème année de BUT.
                  </span>
                </div>
                <div className="text-xs text-neutral-400">
                  Ingénierie, projets innovants, expertise technique.
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col gap-12">
          <section
            id="experience"
            data-aos="fade-up"
            className="bg-neutral-900/80 rounded-2xl p-8 shadow max-w-4xl mx-auto my-12"
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <FaNodeJs className="text-green-400" /> Expérience professionnelle
            </h2>

            <div className="space-y-6 text-neutral-200 text-lg">
              <h3 className="font-semibold text-blue-300 mb-2">
                Découverte du monde professionnel
              </h3>
              <p>
                Ce stage chez{" "}
                <span className="font-semibold text-blue-200">
                  Ramsay Santé
                </span>{" "}
                était ma première vraie expérience en entreprise. J’ai découvert
                la réalité du travail&nbsp;: rythme, autonomie, organisation
                d’équipe et diversité des profils. L’ambiance était détendue et
                bienveillante, ce qui m’a permis de m’intégrer facilement malgré
                la nouveauté. On m’a rapidement fait confiance&nbsp;: j’ai eu
                des responsabilités comme organiser des réunions, gérer des
                données, recueillir les besoins, et surtout développer un
                intranet pour l’entreprise, qui était mon projet principal.
              </p>{" "}
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">
                  Travail en équipe et découverte de moi-même
                </h3>
                <p>
                  J’ai appris à m’intégrer, à prendre la parole en réunion et à
                  collaborer au quotidien. J’ai pu aider des collègues sur
                  certaines tâches, tout comme ils m’ont soutenu. Ce climat
                  d’entraide m’a montré l’importance de l’esprit d’équipe et m’a
                  donné confiance en mes capacités à évoluer dans un cadre
                  professionnel.
                </p>
              </div>
            </div>
          </section>

          {/* Projets */}
          <section
            id="projects"
            data-aos="fade-up"
            className="bg-neutral-900/80 rounded-2xl p-8 shadow"
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-7 flex items-center gap-2">
              <FaGithub className="text-blue-400" /> Projets
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            data-aos="fade-up"
            className="bg-neutral-900/95 rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto my-20"
          >
            <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-3 justify-center">
              <FaEnvelope className="text-blue-400" /> Me contacter
            </h2>
            <p className="text-neutral-300 text-center mb-10 text-lg">
              Disponible pour échanger sur vos projets, une opportunité ou juste
              discuter développement web !
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Email (avec copie au clic) */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText("griffatonr@gmail.com");
                  alert("Email copié dans le presse-papiers !");
                }}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-blue-700 to-sky-400 hover:from-blue-800 hover:to-sky-500 focus:ring-2 focus:ring-blue-400 text-white font-semibold text-lg shadow-xl transition-all duration-300 active:scale-95"
                title="Copier l'adresse email"
                aria-label="Copier l'adresse email"
                type="button"
              >
                <FaEnvelope className="text-2xl" />
                griffatonr@gmail.com
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/griffatonr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-neutral-800 via-gray-700 to-gray-600 hover:from-gray-800 hover:to-blue-700 focus:ring-2 focus:ring-blue-400 text-white font-semibold text-lg shadow-xl transition-all duration-300 active:scale-95"
                title="Aller sur GitHub"
                aria-label="Aller sur GitHub"
              >
                <FaGithub className="text-2xl text-sky-400" />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/robertgriffaton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-blue-700 to-sky-500 hover:from-sky-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-400 text-white font-semibold text-lg shadow-xl transition-all duration-300 active:scale-95"
                title="Voir mon LinkedIn"
                aria-label="Voir mon LinkedIn"
              >
                <FaLinkedin className="text-2xl text-blue-200" />
                LinkedIn
              </a>
            </div>

            <div className="text-center mt-8">
              <span className="inline-block text-neutral-500 text-sm opacity-70">
                Je réponds rapidement &mdash; à bientôt !
              </span>
            </div>
          </section>
        </main>

        <footer className="bg-neutral-900 text-center py-6 text-sm text-neutral-500 mt-8 rounded-t-xl shadow">
          © {new Date().getFullYear()} Robert Griffaton — Portfolio personnel
        </footer>
      </div>
    </div>
  );
}
