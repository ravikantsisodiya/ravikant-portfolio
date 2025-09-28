import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  const links = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold dark:text-white">Ravikant</h1>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-6 px-3 py-2 rounded-lg border border-gray-400 dark:border-gray-600 
                     text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
