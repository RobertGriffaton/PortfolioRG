import "@fontsource/poppins";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ProjectsSection from "./ProjectsSection";

import {
  FaArrowRight,
  FaBars,
  FaChessKnight,
  FaChevronDown,
  FaChevronUp,
  FaCss3Alt,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJava,
  FaLaptopCode,
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
  SiVuedotjs,
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
      "Développer des applications web et logicielles adaptées aux besoins des utilisateurs.",
    exemple:
      "Projet ATM Chat : création d'une application de messagerie collaborative fullstack (PHP/JS/MySQL/WebSockets) lors des SAE S3 et S4.",
  },
  {
    titre: "Optimiser des applications informatiques",
    description:
      "Analyser et améliorer la performance, la sécurité et la qualité des applications.",
    exemple:
      "Sur le projet Calculatrice Java, j’ai retravaillé l’architecture pour la rendre plus modulaire et plus rapide lors du calcul de grandes opérations.",
  },
  {
    titre: "Administrer des systèmes informatiques communicants complexes",
    description:
      "Configurer, sécuriser et maintenir des systèmes réseaux ou des bases de données complexes.",
    exemple:
      "Réalisation d’une simulation réseau en Python, pour comprendre le fonctionnement des protocoles et la sécurité des communications.",
  },
  {
    titre: "Gérer des données de l'information",
    description:
      "Modéliser, organiser, exploiter et sécuriser des données avec différents outils et SGBD.",
    exemple:
      "Création d’un dashboard de gestion d’étudiants, stockage cloud sur Firebase avec CRUD, authentification et accès multi-utilisateurs.",
  },
  {
    titre: "Conduire un projet",
    description:
      "Planifier, organiser et piloter des projets informatiques, seul ou en équipe.",
    exemple:
      "Stage Ramsay Santé : autonomie totale sur la gestion et le développement d’un intranet, du recueil des besoins à la présentation finale.",
  },
  {
    titre: "Travailler dans une équipe informatique",
    description:
      "Collaborer efficacement, communiquer et s’intégrer dans une équipe de développement.",
    exemple:
      "Sur le projet ATM Chat, travail d’équipe (5 personnes) : gestion de Git, organisation de réunions, aide et entraide régulière.",
  },
];

// Composant individuel de compétence
function ButCompetenceCard({ titre, description, exemple }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-neutral-900/80 rounded-xl p-6 shadow flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300 group">
      <h3 className="text-lg font-bold text-blue-300">{titre}</h3>
      <p className="text-neutral-300">{description}</p>
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 hover:from-sky-700 hover:to-blue-500 text-white font-semibold text-sm shadow-lg transition-all duration-300 focus:outline-none"
        aria-expanded={open}
      >
        {open ? <FaChevronUp /> : <FaChevronDown />}
        Voir un exemple
      </button>
      {open && (
        <div className="mt-2 bg-blue-950/70 rounded-lg p-4 text-blue-100 text-sm border-l-4 border-blue-400 animate-fade-in">
          {exemple}
        </div>
      )}
    </div>
  );
}

const projects = [
  {
    title: "ATM Chat",
    image: "/atmchat_projet.png",
    description:
      "Application de chat avec annotation réalisée en équipe lors de la SAE S3. Fullstack PHP, WebSockets, MySQL, front moderne et gestion utilisateurs.",
    tech: [
      { icon: <SiPhp className="text-purple-300" />, name: "PHP" },
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript",
      },
      { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
      {
        icon: <SiSocketdotio className="text-gray-300" />,
        name: "WebSocket/Ratchet",
      },
    ],
    github: "https://github.com/Guen0x/SAE_AppChatAnnotation",
    details:
      "Projet d’équipe sur un chat moderne : j’ai appris à gérer l’authentification, la communication en temps réel, et à travailler en fullstack. Gros challenge sur la gestion des messages annotés.",
    positifs: [
      "Superbe montée en compétence WebSocket",
      "Travail d’équipe efficace et bonne ambiance",
      "Front complet et personnalisable",
    ],
    negatifs: [
      "Planning un peu serré",
      "Documentation du code à renforcer pour l’avenir",
    ],
    perso: "Premier vrai projet complet de A à Z, grosse fierté !",
  },
  {
    title: "Calculatrice Arithmétique",
    image: "/calculatrice_projet.png",
    description:
      "Calculatrice graphique en Java développée pour la SAE S2 : gestion d’opérations de base, structure POO et interface utilisateur ergonomique.",
    tech: [{ icon: <FaJava className="text-red-400" />, name: "Java" }],
    github: "https://github.com/RobertGriffaton/CalculatriceArithmetique",
    details:
      "Développement d’une application Java pour renforcer ma compréhension de la programmation orientée objet et des interfaces graphiques.",
    positifs: [
      "Très bonne prise en main de la POO",
      "Application stable et robuste",
      "Ergonomie simple et intuitive",
    ],
    negatifs: ["Interface graphique améliorable", "Peu d’extensions prévues"],
    perso:
      "Ça m’a permis d’être plus à l’aise sur Java, surtout sur la structure du code et la rigueur.",
  },
  {
    title: "Santa Claus – Parcours du Père Noël",
    image: "/santaclaus_projet.png",
    description:
      "Optimisation d’itinéraire en Python : algorithme pour calculer les meilleurs trajets du Père Noël, découverte des structures de données. Développé en binôme lors de la SAE S1.",
    tech: [{ icon: <SiPython className="text-blue-400" />, name: "Python" }],
    github: "https://github.com/RobertGriffaton",
    details:
      "Un projet fun et technique pour comprendre l’algorithmique (parcours de graphe, optimisation). Super challenge de début d’année !",
    positifs: [
      "Gros apprentissage des structures de données",
      "Travail d’équipe efficace",
      "Projet original et motivant",
    ],
    negatifs: ["Code parfois complexe à relire", "Peu d’interface utilisateur"],
    perso:
      "Premier projet où j’ai compris l’importance des algos et de la logique pure.",
  },
  {
    title: "Puissance 4",
    image: "/puissance4_projet.png",
    description:
      "Réalisation d’un Puissance 4 digitalisé : logique de jeu, interface, personnalisation, et challenge algorithmique.",
    tech: [
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript",
      },
      { icon: <SiVuedotjs className="text-green-400" />, name: "Vue.js" },
    ],
    github: "https://github.com/RobertGriffaton",
    details:
      "J’ai décidé de coder mon jeu de société préféré : logique, détection de victoire, IA simple. Beaucoup de test sur l’UX pour que ça soit fun à jouer.",
    positifs: [
      "Projet ludique, fun à développer",
      "Personnalisation facile",
      "Permet de bien progresser sur JS/Vue",
    ],
    negatifs: [
      "Pas de vraie IA avancée pour le moment",
      "Responsive mobile à améliorer",
    ],
    perso:
      "Un kif perso parce que j’adore le Puissance 4 (et battre mes potes dessus !)",
  },
  {
    title: "Memory Card - En Cours",
    image: "./memory_projet.png",
    description:
      "Jeu de memory en ligne sur le thème du football. Développement front-end, animations, et UX ludique.",
    tech: [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS" },
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript",
      },
    ],
    github: "https://github.com/RobertGriffaton",
    details:
      "Projet perso en cours pour lier ma passion du foot et le code. Focus sur le design, la fluidité des animations et l’accessibilité.",
    positifs: [
      "Animations réussies",
      "Ambiance foot unique",
      "Facile à prendre en main",
    ],
    negatifs: [
      "Encore quelques bugs à corriger",
      "Fonctionnalités à compléter",
    ],
    perso:
      "Je le fais évoluer au fil de mes envies et des retours de mes potes fans de foot.",
  },
  {
    title: "Top Auto – En Cours",
    image: "/topauto_projet.png",
    description:
      "Conception d’un site vitrine pour un garage : présentation de l’activité, services, véhicules en stock. Projet en cours pour un proche.",
    tech: [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS" },
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript",
      },
      { icon: <FaReact className="text-sky-400" />, name: "React" },
    ],
    github: "https://github.com/RobertGriffaton",
    details:
      "Projet réel pour un proche, très concret : gestion des contenus, affichage des véhicules, contact facile. L’objectif est de proposer un site simple et pro.",
    positifs: [
      "Projet concret (utilisé en vrai !)",
      "Découverte du design orienté client",
      "Ajout de React pour les parties dynamiques",
    ],
    negatifs: [
      "Gros travail sur le SEO à prévoir",
      "Besoin de temps pour finir toutes les pages",
    ],
    perso:
      "Une super occasion de rendre service et d’apprendre la gestion de projet web client.",
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
  const text = "Robert Griffaton";
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <span
        className="mb-7 text-3xl text-blue-400 font-bold tracking-wide"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="animate-text-bounce"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <div className="w-36 h-3 bg-neutral-700 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-blue-700 animate-loader-progress"></div>
      </div>
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
      <img
        src="./costardpics.jpg"
        alt="Robert Griffaton"
        className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-xl mb-4 object-cover hover:scale-105 transition-transform duration-300"
        style={{ boxShadow: "0 4px 24px 0 #0ea5e9" }}
      />
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
      <div className="w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent mt-6 rounded-full" />
    </div>
  );
}

export default function Portfolio() {
  const [showMoreAbout, setShowMoreAbout] = useState(false);

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
    setTimeout(() => setLoading(false), 1750);

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
          <div className="max-w-6xl mx-auto px-0 py-4 flex justify-between items-center">
            <span className="font-bold text-lg flex items-center gap-2 ">
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
            src="./profile.jpg"
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
              href="./CV RobertGriffaton.pdf"
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
          <div className="shrink-0 flex flex-col items-center">
            <img
              src="./picsmusee.webp"
              alt="Robert Griffaton"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4"
            />
            <span className="text-blue-400 font-bold text-xl mt-2 text-center">
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

            <button
              onClick={() => setShowMoreAbout((v) => !v)}
              className="mt-5 px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 to-sky-400 text-white font-bold text-md shadow hover:scale-105 transition-all"
            >
              {showMoreAbout ? "Fermer" : "En savoir plus"}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                showMoreAbout
                  ? "max-h-96 opacity-100 mt-5"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-neutral-900/80 rounded-xl p-5 mt-2 text-neutral-300 shadow-inner">
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <span className="font-semibold text-blue-400">
                      Goût pour l’autonomie :
                    </span>{" "}
                    J’adore démarrer un projet de zéro et le mener à bien,
                    apprendre de nouvelles techno seul ou en équipe.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400">
                      Soft skills :
                    </span>{" "}
                    rigoureux, créatif, sens du collectif, capacité à présenter
                    ou vulgariser mes travaux.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400">
                      Autres centres d’intérêt :
                    </span>
                    musique, sport, jeux de stratégie (échecs), nouvelles
                    technologies, voyages.
                  </li>
                  <li>
                    <span className="font-semibold text-blue-400">
                      Valeurs :
                    </span>{" "}
                    aider, transmettre, toujours progresser !
                  </li>
                </ul>
              </div>
            </div>
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
        <section
          id="softskills"
          className="max-w-4xl mx-auto mt-12 px-4 py-8 bg-gradient-to-br from-black/90 via-neutral-900 to-neutral-950 rounded-3xl shadow-2xl"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-10 text-center tracking-tight">
            Soft Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Communication */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 shadow flex flex-col gap-3 hover:scale-[1.03] transition-transform duration-300">
              <div className="font-bold text-lg text-blue-300 mb-1">
                Communication
              </div>
              <div className="text-neutral-200">
                <span className="text-blue-400 font-semibold">Exemple :</span>{" "}
                Lors de mon stage chez Ramsay Santé, j’ai animé des réunions
                pour recueillir les besoins utilisateurs, puis présenté mes
                avancées régulièrement à toute l’équipe. J’ai appris à rendre
                mes messages clairs pour tous, même les non-informaticiens.
              </div>
            </div>
            {/* Esprit d'équipe */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 shadow flex flex-col gap-3 hover:scale-[1.03] transition-transform duration-300">
              <div className="font-bold text-lg text-green-300 mb-1">
                Esprit d'équipe
              </div>
              <div className="text-neutral-200">
                <span className="text-green-400 font-semibold">Exemple :</span>{" "}
                Sur le projet ATM Chat (SAE S3), j’ai contribué à la réussite
                commune : entraide entre membres, répartition claire des tâches,
                résolution de conflits et code partagé sur GitHub pour avancer
                ensemble efficacement.
              </div>
            </div>
            {/* Adaptabilité */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 shadow flex flex-col gap-3 hover:scale-[1.03] transition-transform duration-300">
              <div className="font-bold text-lg text-yellow-300 mb-1">
                Adaptabilité
              </div>
              <div className="text-neutral-200">
                <span className="text-yellow-400 font-semibold">Exemple :</span>{" "}
                Première expérience professionnelle : adaptation rapide au
                rythme, aux outils inconnus et à la diversité des profils, en
                full présentiel alors que mes collègues alternaient télétravail.
              </div>
            </div>
            {/* Esprit d'initiative */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 shadow flex flex-col gap-3 hover:scale-[1.03] transition-transform duration-300">
              <div className="font-bold text-lg text-pink-300 mb-1">
                Esprit d’initiative
              </div>
              <div className="text-neutral-200">
                <span className="text-pink-400 font-semibold">Exemple :</span>{" "}
                J’ai proposé des idées d’améliorations (UX, sécurité) sur le
                projet Intranet Ramsay Santé, que j’ai ensuite mis en place
                après validation, allant au-delà du cahier des charges initial.
              </div>
            </div>
            {/* Curiosité / Apprentissage continu */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 shadow flex flex-col gap-3 hover:scale-[1.03] transition-transform duration-300">
              <div className="font-bold text-lg text-purple-300 mb-1">
                Curiosité & Apprentissage continu
              </div>
              <div className="text-neutral-200">
                <span className="text-purple-400 font-semibold">Exemple :</span>{" "}
                Passionné d’auto-formation : j’apprends régulièrement de
                nouveaux frameworks (ex : Vue, React), ce qui me permet d’être
                polyvalent sur mes projets étudiants ou perso.
              </div>
            </div>
            {/* Organisation */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 shadow flex flex-col gap-3 hover:scale-[1.03] transition-transform duration-300">
              <div className="font-bold text-lg text-emerald-300 mb-1">
                Organisation
              </div>
              <div className="text-neutral-200">
                <span className="text-emerald-400 font-semibold">
                  Exemple :
                </span>{" "}
                Gestion de projet (intranet Ramsay, site vitrine Top Auto) :
                planification, tableur comme Excel, priorisation des tâches pour
                respecter les deadlines.
              </div>
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
            Mon Parcours
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
                <FaLaptopCode className="text-white text-3xl" />
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
                  École d’Ingénieur en Informatique en me spécialisant dans un
                  domaine comme l'IA, ou le développement logiciel.
                </div>
                <div className="text-neutral-200 text-sm mb-1"></div>
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
        <section
          id="but-competences"
          className="max-w-4xl mx-auto my-16"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-8 text-center">
            Mes compétences du BUT Informatique
          </h2>
          <div className="grid md:grid-cols-2 gap-7">
            {butCompetences.map((c, i) => (
              <ButCompetenceCard key={i} {...c} />
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
                src="./Stage.jpg"
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
          <ProjectsSection projects={projects} />

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
          © {new Date().getFullYear()} Portfolio - Robert Griffaton
        </footer>
      </div>
    </div>
  );
}
