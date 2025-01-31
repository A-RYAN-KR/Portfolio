import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface Props {
  scrollToSection: (section: string) => void;
}

function Footer({scrollToSection}: Props) {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              Alex Chen
            </h3>
            <p className="text-gray-400">
              Crafting digital experiences with clean code and user-centered
              design. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("work")}
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-500" />
                <span>a.ryankr.27004@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-500" />
                <span>+91 932531245</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span>Pune , Maharashtra</span>
              </li>
            </ul>
          </div>

          {/* Latest Projects */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Latest Projects
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="group flex items-center text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  <span>E-commerce Platform</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  <span>Health & Fitness App</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  <span>Task Management Dashboard</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Alex Chen. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer