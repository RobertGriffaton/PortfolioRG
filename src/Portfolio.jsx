import "@fontsource/poppins";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaChessKnight,
  FaCss3Alt,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaMusic,
  FaNodeJs,
  FaReact,
  FaRegCircle,
  FaRegFileAlt,
  FaRunning,
  FaSchool,
  FaStar,
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

const navLinks = [
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "parcours", label: "Parcours" },
  { id: "interets", label: "Centres d’intérêts" },
  { id: "but-competences", label: "Compétences BUT" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

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

const butCompetences = [
  {
    titre: "Réaliser un développement d'application",
    description:
      "Développer des applications web et logicielles adaptées aux besoins utilisateurs.",
    niveau: 4,
  },
  {
    titre: "Optimiser des applications informatiques",
    description:
      "Analyser et améliorer les performances et la qualité des applications.",
    niveau: 4,
  },
  {
    titre: "Administrer des systèmes informatiques communicants complexes",
    description:
      "Configurer, sécuriser et maintenir des systèmes réseaux avancés.",
    niveau: 2,
  },
  {
    titre: "Gérer des données de l'information",
    description: "Modéliser, organiser et exploiter efficacement les données.",
    niveau: 3,
  },
  {
    titre: "Conduire un projet",
    description:
      "Planifier, organiser et piloter des projets informatiques en équipe.",
    niveau: 4,
  },
  {
    titre: "Travailler dans une équipe informatique",
    description:
      "Collaborer efficacement, communiquer et s’intégrer dans une équipe de développement.",
    niveau: 5,
  },
];

const projects = [
  {
    title: "Intranet MOA – Ramsay Santé",
    image: "/images/intranet.png",
    description:
      "Développement d’un intranet collaboratif lors de mon stage au service MOA (Cergy) : recueil de besoins, conception, gestion des accès, communication interne et autonomie sur le projet.",
    tech: [
      { icon: <FaReact className="text-sky-400" />, name: "React" },
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript",
      },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    ],
    github: "https://github.com/RobertGriffaton",
  },
  {
    title: "Application de Chat Annotée",
    image: "/images/chat-app.png",
    description:
      "Projet d’équipe (BUT) : application de messagerie avec fonctionnalités avancées (annotation, gestion d’utilisateurs, temps réel avec sockets).",
    tech: [
      { icon: <FaReact className="text-sky-400" />, name: "React" },
      { icon: <SiSocketdotio className="text-gray-300" />, name: "Socket.io" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    ],
    github: "https://github.com/RobertGriffaton",
  },
  {
    title: "Calculatrice Java & POO",
    image: "/images/java-calc.png",
    description:
      "Application de calculatrice arithmétique réalisée en Java : modularité, interface graphique, structuration orientée objet et robustesse du code.",
    tech: [{ icon: <FaJava className="text-red-400" />, name: "Java" }],
    github: "https://github.com/RobertGriffaton",
  },
  {
    title: "Gestion d’étudiants Firebase",
    image: "/images/gestion-etudiants.png",
    description:
      "Dashboard pour gérer une base d’étudiants : CRUD, authentification, sauvegarde cloud sur Firebase, design épuré.",
    tech: [
      { icon: <FaReact className="text-sky-400" />, name: "React" },
      { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    ],
    github: "https://github.com/RobertGriffaton",
  },
  {
    title: "Simulation réseau Python",
    image: "/images/simulation-reseau.png",
    description:
      "Simulation de communication entre machines pour comprendre les protocoles réseau et les bases de la cybersécurité.",
    tech: [
      { icon: <SiPython className="text-blue-400" />, name: "Python" },
      { icon: <SiSocketdotio className="text-gray-300" />, name: "Sockets" },
    ],
    github: "https://github.com/RobertGriffaton",
  },
];

// -------- INTERESTS -----------
const interests = [
  {
    icon: (
      <FaMusic className="text-pink-400 text-5xl transition-transform group-hover:rotate-12" />
    ),
    title: "Musique",
    description:
      "Pianiste et diplômé de solfège (Conservatoire de Sarcelles). La musique nourrit ma créativité, ma discipline et ma concentration.",
  },
  {
    icon: (
      <FaChessKnight className="text-yellow-400 text-5xl transition-transform group-hover:-rotate-6" />
    ),
    title: "Échecs",
    description:
      "Joueur régulier, les échecs m’apprennent la logique, la mémoire, l’anticipation et la gestion de stress..",
  },
  {
    icon: (
      <FaRunning className="text-emerald-400 text-5xl transition-transform group-hover:scale-110" />
    ),
    title: "Sport",
    description:
      "Les sports collectifs et le running. L’esprit d’équipe et le goût de l’effort sont des valeurs importantes pour moi.",
  },
];

function Loader() {
  return (
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
}

function NiveauBar({ niveau }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= niveau ? (
          <FaStar key={i} className="text-blue-400" />
        ) : (
          <FaRegCircle key={i} className="text-neutral-600" />
        )
      )}
      <span className="ml-2 text-xs text-neutral-400">
        {
          ["Débutant", "Basique", "Intermédiaire", "Bon niveau", "Expert"][
            niveau - 1
          ]
        }
      </span>
    </div>
  );
}

function CompetenceCard({ comp }) {
  return (
    <div
      className="bg-neutral-900/80 rounded-xl p-6 flex flex-col shadow hover:scale-[1.02] transition-transform duration-300 group"
      data-aos="fade-up"
    >
      <h3 className="text-lg font-semibold text-blue-300 mb-2">{comp.titre}</h3>
      <p className="text-neutral-300 mb-3">{comp.description}</p>
      <NiveauBar niveau={comp.niveau} />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:scale-[1.03] transition-transform duration-300 group">
      <div className="h-44 w-full overflow-hidden">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-blue-400 mb-2">
          {project.title}
        </h3>
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
}

// --- INTEREST CARD ---
function InterestCard({ icon, title, description }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="group bg-black/70 rounded-2xl p-8 shadow-lg flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-900/70 hover:to-neutral-800/80 relative cursor-pointer"
      onClick={() => setShow((v) => !v)}
      title="Clique pour découvrir"
    >
      <div className="mb-2">{icon}</div>
      <div className="font-bold text-lg text-blue-200 group-hover:text-white transition">
        {title}
      </div>
      {show ? (
        <div className="text-neutral-300 text-sm text-center group-hover:text-blue-100 transition">
          {description}
        </div>
      ) : (
        <div className="text-xs text-blue-400 italic">
          Clique pour découvrir
        </div>
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-blue-200 to-transparent rounded-2xl pointer-events-none transition"></div>
    </div>
  );
}
function SocialSidebar() {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-8">
      {/* Photo en haut */}
      <img
        src="/profile.jpg"
        alt="Robert Griffaton"
        className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-xl mb-4 object-cover hover:scale-105 transition-transform duration-300"
        style={{ boxShadow: "0 4px 24px 0 #0ea5e9" }}
      />
      {/* Liens sociaux */}
      <a
        href="mailto:griffatonr@gmail.com"
        className="mb-2 bg-black/70 hover:bg-blue-500 p-3 rounded-full shadow-lg transition-colors duration-300"
        title="Envoyer un email"
        aria-label="Email"
      >
        <FaEnvelope className="text-2xl text-blue-400" />
      </a>
      <a
        href="https://github.com/RobertGriffaton"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 bg-black/70 hover:bg-blue-500 p-3 rounded-full shadow-lg transition-colors duration-300"
        title="GitHub"
        aria-label="GitHub"
      >
        <FaGithub className="text-2xl text-sky-400" />
      </a>
      <a
        href="https://www.linkedin.com/in/robert-griffaton-a85393255/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/70 hover:bg-blue-500 p-3 rounded-full shadow-lg transition-colors duration-300"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-2xl text-blue-200" />
      </a>
      {/* Ligne décorative */}
      <div className="w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent mt-6 rounded-full" />
    </div>
  );
}
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
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
      <SocialSidebar />
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
              ? "bg-white/10 backdrop-blur-lg border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <span className="font-bold text-lg flex items-center gap-2">
              <FaReact className="text-sky-400 text-2xl" /> Robert Griffaton
            </span>
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
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
              >
                <FaBars className="w-7 h-7 text-white" />
              </button>
            </div>
          </div>
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

        {/* Hero */}
        <header
          className="h-[100vh] flex flex-col justify-center items-center text-center px-4"
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
                href="https://github.com/RobertGriffaton"
                target="_blank"
                className="hover:text-blue-400"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/robert-griffaton-a85393255/"
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

        {/* À propos */}
        <section
          id="about"
          className="relative bg-gradient-to-br from-black via-neutral-900 to-neutral-950 rounded-3xl max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 mb-14 shadow-2xl"
          data-aos="fade-up"
        >
          <div className="shrink-0 flex flex-col items-center md:items-start">
            <img
              src="/moimicro.jpg"
              alt="Robert Griffaton"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4"
            />
            <span className="text-blue-400 font-bold text-xl mt-2">
              Robert Griffaton
            </span>
          </div>
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

        {/* Compétences */}
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
              </ul>
            </div>
          </div>
        </section>

        {/* Bloc : Parcours scolaire & Objectifs */}
        <section
          id="parcours"
          className="max-w-6xl mx-auto my-12 px-4 py-8 bg-neutral-900/80 rounded-3xl shadow-xl"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-10 text-center tracking-tight">
            Mon Parcours & Mes Objectifs
          </h2>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 relative">
            {/* Collège */}
            <div className="flex-1 flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-600 shadow-lg flex items-center justify-center mb-4">
                <FaSchool className="text-green-300 text-3xl" />
              </div>
              <div className="bg-black/70 rounded-xl p-5 shadow-md w-full text-center">
                <div className="font-extrabold text-blue-100 text-xl mb-1">
                  Brevet
                </div>
                <div className="text-blue-300 font-semibold text-sm mb-1">
                  Mention Très Bien
                </div>
                <div className="text-neutral-200 text-sm mb-1">
                  Collège Victor Hugo
                </div>
                <div className="text-xs text-blue-400">
                  2016 – 2020, Sarcelles
                </div>
              </div>
              {/* Ligne de liaison */}
              <div className="hidden md:block absolute right-[-16px] top-[48px] w-8 h-2 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full z-0"></div>
            </div>
            {/* Lycée */}
            <div className="flex-1 flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-700 to-yellow-400 shadow-lg flex items-center justify-center mb-4">
                <FaGraduationCap className="text-yellow-100 text-3xl" />
              </div>
              <div className="bg-black/70 rounded-xl p-5 shadow-md w-full text-center">
                <div className="font-extrabold text-yellow-100 text-xl mb-1">
                  Baccalauréat Général
                </div>
                <div className="text-yellow-300 font-semibold text-sm mb-1">
                  Spécialités Maths, Physique-Chimie, Maths expertes
                </div>
                <div className="text-neutral-200 text-sm mb-1">
                  Lycée Jean Jacques Rousseau
                </div>
                <div className="text-xs text-yellow-400">
                  2020 – 2023, Sarcelles
                </div>
              </div>
              {/* Ligne de liaison */}
              <div className="hidden md:block absolute right-[-16px] top-[48px] w-8 h-2 bg-gradient-to-r from-yellow-400 to-sky-400 rounded-full z-0"></div>
            </div>
            {/* BUT */}
            <div className="flex-1 flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-sky-600 shadow-lg flex items-center justify-center mb-4">
                <FaReact className="text-white text-3xl" />
              </div>
              <div className="bg-black/70 rounded-xl p-5 shadow-md w-full text-center">
                <div className="font-extrabold text-sky-200 text-xl mb-1">
                  BUT Informatique
                </div>
                <div className="text-sky-400 font-semibold text-sm mb-1">
                  Réalisation d'applications : conception, développement,
                  validation{" "}
                </div>
                <div className="text-neutral-200 text-sm mb-1">
                  IUT Villetaneuse - Sorbonne Paris Nord
                </div>
                <div className="text-xs text-sky-400">
                  2023 – 2026, Villetaneuse
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
                <div className="font-extrabold text-emerald-400 text-xl mb-1">
                  Objectif
                </div>
                <div className="text-blue-200 font-semibold text-sm mb-1">
                  École d’Ingénieur (Dév logiciel, alternance dès la 3ème année)
                </div>
                <div className="text-neutral-200 text-sm mb-1">
                  Spécialisation en développement fullstack, expertise
                  technique, projets innovants
                </div>
                <div className="text-xs text-blue-400">À partir de 2026</div>
              </div>
            </div>
          </div>
        </section>

        {/* Centres d’intérêts */}
        <section
          id="interets"
          className="max-w-4xl mx-auto mt-12 px-4 py-8 bg-neutral-900/80 rounded-3xl shadow-xl"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-10 text-center tracking-tight">
            Centres d’intérêts
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {interests.map((interest, i) => (
              <InterestCard key={i} {...interest} />
            ))}
          </div>
        </section>

        {/* Compétences BUT */}
        <section
          id="but-competences"
          className="max-w-4xl mx-auto my-16"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-8 text-center">
            Mes compétences du BUT Informatique
          </h2>
          <div className="grid md:grid-cols-2 gap-7">
            {butCompetences.map((comp, i) => (
              <CompetenceCard comp={comp} key={i} />
            ))}
          </div>
        </section>

        {/* Experience Pro */}
        <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col gap-12">
          <section
            id="experience"
            data-aos="fade-up"
            className="max-w-5xl mx-auto my-20 flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-950"
            style={{ minHeight: "420px" }}
          >
            {/* IMAGE AVEC BULLE DATE */}
            <div className="relative md:w-[40%] w-full">
              <img
                src="/public/Stage.jpg"
                alt="Stage Ramsay Santé"
                className="object-cover w-full h-full md:min-h-[420px] md:max-h-[540px] min-h-[220px] md:rounded-l-3xl"
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              />
              {/* Bulle date/lieu */}
              <div className="absolute top-4 left-4 bg-blue-700/80 text-white px-4 py-2 rounded-full text-xs shadow-xl font-semibold flex items-center gap-2 backdrop-blur-md">
                <FaNodeJs className="text-green-400" /> Stage 2025 — Ramsay
                Santé
              </div>
            </div>

            {/* TEXTE À DROITE */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-12 bg-gradient-to-br from-neutral-900/90 to-black/70">
              <h2 className="text-2xl font-bold text-blue-400 mb-5 flex items-center gap-2">
                <FaNodeJs className="text-green-400" /> Expérience
                professionnelle
              </h2>
              <div className="space-y-7 text-neutral-200 text-[1.1rem]">
                <div>
                  <h3 className="font-semibold text-blue-300 text-lg mb-2 flex items-center gap-2">
                    <FaArrowRight className="text-sky-400" /> Découverte du
                    monde professionnel
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    Mon stage chez{" "}
                    <span className="font-semibold text-blue-200">
                      Ramsay Santé
                    </span>{" "}
                    a été ma première vraie expérience en entreprise. J’ai
                    découvert la réalité du travail : rythme, autonomie, gestion
                    de projets et diversité des profils. L’ambiance était
                    détendue et bienveillante, ce qui m’a permis de m’intégrer
                    rapidement.
                  </p>
                </div>
                <div className="border-t border-neutral-700 pt-5">
                  <h3 className="font-semibold text-blue-300 text-lg mb-2 flex items-center gap-2">
                    <FaArrowRight className="text-sky-400" /> Travail en équipe
                    & responsabilités
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    J’ai été responsabilisé dès le début : organisation de
                    réunions, recueil de besoins, gestion de données et
                    développement d’un intranet. J’ai appris à prendre la parole
                    en réunion, à collaborer avec des collègues bienveillants, à
                    aider et à me faire aider dans un vrai esprit d’équipe.
                  </p>
                </div>
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
              <a
                href="https://github.com/RobertGriffaton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-neutral-800 via-gray-700 to-gray-600 hover:from-gray-800 hover:to-blue-700 focus:ring-2 focus:ring-blue-400 text-white font-semibold text-lg shadow-xl transition-all duration-300 active:scale-95"
                title="Aller sur GitHub"
                aria-label="Aller sur GitHub"
              >
                <FaGithub className="text-2xl text-sky-400" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/robert-griffaton-a85393255/"
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
