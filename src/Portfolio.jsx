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
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSchool,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

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
    title: "Développement d'une application complète",
    semester: "SAÉ S3",
    tech: [
      <FaReact className="inline mr-1 text-sky-400" />,
      <FaNodeJs className="inline mr-1 text-green-500" />,
      <SiMongodb className="inline mr-1 text-green-600" />,
    ],
    description:
      "Application de gestion développée en équipe, incluant une API REST, un front dynamique et une base de données MongoDB.",
    github: "#",
  },
  {
    title: "Interface de gestion d'étudiants",
    semester: "SAÉ S4",
    tech: [
      <FaReact className="inline mr-1 text-sky-400" />,
      <SiFirebase className="inline mr-1 text-yellow-500" />,
    ],
    description:
      "Interface web avec opérations CRUD sur un jeu de données. Utilisation de Firebase pour le back-end.",
    github: "#",
  },
  {
    title: "Simulation réseau Python",
    semester: "Projet personnel",
    tech: [
      <SiPython className="inline mr-1 text-blue-400" />,
      <SiSocketdotio className="inline mr-1 text-gray-300" />,
    ],
    description:
      "Programme de simulation de communication entre machines via sockets pour explorer les bases des réseaux.",
    github: "#",
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
      Chargement...
    </span>
  </div>
);

const ProjectCard = ({ project }) => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.2}
    scale={1.02}
    transitionSpeed={400}
    className="rounded-xl"
  >
    <div
      className="bg-neutral-900 text-white rounded-xl p-6 shadow hover:shadow-xl transition-all"
      data-aos="fade-up"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center gap-2">
        <FaGithub className="text-blue-400" />
        {project.title}
      </h3>
      <p className="text-xs text-neutral-400 mb-2 italic flex items-center gap-2">
        {project.semester}
      </p>
      <p className="mb-4 leading-relaxed text-neutral-200">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-3 mb-4">
        {project.tech.map((t, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 bg-blue-800 text-xs px-3 py-1 rounded-full shadow-md"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline text-xs font-medium inline-flex items-center gap-2"
      >
        <FaGithub /> Voir sur GitHub
      </a>
    </div>
  </Tilt>
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
      <div className="absolute inset-0 z-0 bg-black">
        <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-black to-neutral-950 opacity-80"></div>
      </div>
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
        {/* Hero section */}
        <header
          className="h-[70vh] flex flex-col justify-center items-center text-center px-4"
          data-aos="fade-down"
        >
          <img
            src="/profile.jpg"
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
        </header>
        <section
          id="parcours"
          data-aos="fade-up"
          className="max-w-4xl mx-auto px-4 mb-10"
        >
          <div className="bg-neutral-900/80 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-blue-300" /> Mon parcours
              scolaire
            </h2>
            <ol className="relative border-l border-blue-600 ml-3">
              <li className="mb-8 ml-6">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full ring-4 ring-blue-800">
                  <FaSchool className="text-green-300" />
                </span>
                <h3 className="flex items-center mb-1 text-md font-semibold text-white">
                  Collège Victor Hugo (Sarcelles)
                </h3>
                <time className="block mb-1 text-xs font-normal leading-none text-blue-400">
                  2015-2019
                </time>
                <p className="mb-2 text-sm text-neutral-300">
                  Brevet mention Très Bien
                </p>
              </li>
              <li className="mb-8 ml-6">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full ring-4 ring-yellow-500">
                  <FaGraduationCap className="text-yellow-300" />
                </span>
                <h3 className="flex items-center mb-1 text-md font-semibold text-white">
                  Lycée Jean Jacques Rousseau (Sarcelles)
                </h3>
                <time className="block mb-1 text-xs font-normal leading-none text-blue-400">
                  2019-2022
                </time>
                <p className="mb-2 text-sm text-neutral-300">
                  Bac Général spé Maths/Physique-Chimie, Maths expertes
                </p>
              </li>
              <li className="mb-2 ml-6">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full ring-4 ring-blue-400">
                  <FaReact className="text-blue-400" />
                </span>
                <h3 className="flex items-center mb-1 text-md font-semibold text-white">
                  IUT de Villetaneuse
                </h3>
                <time className="block mb-1 text-xs font-normal leading-none text-blue-400">
                  2022-2025
                </time>
                <p className="mb-2 text-sm text-neutral-300">
                  BUT Informatique (2ème année)
                </p>
              </li>
            </ol>
          </div>
        </section>
        <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col gap-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bloc À propos et Objectifs côte à côte */}
            <section
              id="about"
              data-aos="fade-right"
              className="bg-neutral-900/80 rounded-2xl p-6 flex-1 shadow"
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
                <FaGithub className="text-blue-400" /> À propos
              </h2>
              <p className="text-md text-neutral-300 leading-relaxed">
                Je suis un développeur junior passionné par les technologies
                modernes et la résolution de problèmes complexes. J’aime
                travailler en équipe et apprendre en continu. Mon parcours en
                BUT Informatique m’a permis de m’immerger dans la gestion de
                projet et la pratique professionnelle lors de mon stage.
              </p>
            </section>
            <section
              id="goals"
              data-aos="fade-left"
              className="bg-neutral-900/80 rounded-2xl p-6 flex-1 shadow"
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
                <FaArrowRight className="text-blue-400" /> Objectifs
              </h2>
              <p className="text-md text-neutral-300 leading-relaxed">
                Après le BUT3, je souhaite intégrer une école d’ingénieur pour
                me spécialiser dans le développement logiciel et travailler sur
                des projets innovants dans des environnements stimulants.
              </p>
            </section>
          </div>

          <section
            id="skills"
            data-aos="fade-up"
            className="bg-neutral-900/80 rounded-2xl p-6 shadow"
          >
            <h2 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <FaReact className="text-blue-400" /> Compétences
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, idx) => (
                <span
                  key={skill.name}
                  className="bg-neutral-800 px-4 py-2 rounded-full text-sm border border-neutral-700 flex items-center gap-2"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          <section
            id="experience"
            data-aos="fade-up"
            className="bg-neutral-900/80 rounded-2xl p-6 shadow"
          >
            <h2 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <FaNodeJs className="text-green-500" /> Expérience professionnelle
            </h2>
            <p className="text-md text-neutral-300 leading-relaxed">
              Stage de 4 semaines en entreprise au S4 : participation à la
              maintenance d'une application existante, correction de bugs, et
              développement de nouvelles fonctionnalités sous supervision d’un
              développeur senior. Cette expérience m’a permis de comprendre les
              bonnes pratiques en conditions réelles.
            </p>
          </section>

          <section
            id="projects"
            data-aos="fade-up"
            className="bg-neutral-900/80 rounded-2xl p-6 shadow"
          >
            <h2 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <FaGithub className="text-blue-400" /> Projets
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          </section>

          <section
            id="contact"
            data-aos="fade-up"
            className="bg-neutral-900/80 rounded-2xl p-6 shadow"
          >
            <h2 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> Contact
            </h2>
            <div className="space-y-4 text-neutral-300 text-lg">
              <p className="flex items-center gap-2">
                <HiOutlineMail className="text-blue-400" />
                <a
                  href="mailto:griffatonr@gmail.com"
                  className="hover:underline"
                >
                  griffatonr@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaGithub className="text-blue-400" />
                <a
                  href="https://github.com/griffatonr"
                  target="_blank"
                  className="hover:underline"
                >
                  github.com/griffatonr
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaLinkedin className="text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/robertgriffaton"
                  target="_blank"
                  className="hover:underline"
                >
                  linkedin.com/in/robertgriffaton
                </a>
              </p>
              <a
                href="/CV_Robert_Griffaton.pdf"
                download
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium"
              >
                <FaArrowRight /> Télécharger mon CV
              </a>
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
