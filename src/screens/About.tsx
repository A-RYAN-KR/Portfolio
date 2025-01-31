import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import Typewriter from "../components/Typewriter";

interface Props {
  scrollToSection: (section: string) => void;
}


const About = ({ scrollToSection }: Props) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-yellow-50 via-green-50 to-pink-100 dark:from-gray-900 dark:via-[rgb(17,24,39)] dark:to-[rgb(17,24,39)]">
      <div className="relative min-h-screen pt-16 bg-gradient-to-r from-yellow-50 via-green-50 to-pink-100 dark:from-gray-900 dark:via-[rgb(17,24,39)] dark:to-[rgb(17,24,39)] ">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="text-sm font-semibold text-cyan-500 dark:text-cyan-400 uppercase tracking-wide">
                  Welcome to my portfolio
                </div>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                  Hi, I'm Aryan Jha
                  <div>
                    <Typewriter
                      phrases={[
                        "Full Stack Developer",
                        "React Specialist",
                        "UI/UX Enthusiast",
                      ]}
                      typingSpeed={100}
                      delayBetweenPhrases={1500}
                    />
                  </div>
                </h1>
                <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
                  I craft exceptional digital experiences with clean code and
                  user-centered design. Specialized in building modern web
                  applications that make an impact.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-cyan-500 dark:border-cyan-400 text-base font-medium rounded-lg text-cyan-500 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => scrollToSection("contacts")}>
                  <Send className="w-5 h-5 mr-2" />
                  Contact Me
                </button>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://img.freepik.com/free-vector/smiling-young-man-hoodie_1308-176157.jpg?t=st=1736780911~exp=1736784511~hmac=4b5cef7bcbfffa148a5474c6eea29c45807b631cf57443b6a9b7e7af49fe45fc&w=740"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl dark:shadow-cyan-600 animate-wave"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                5+
              </div>
              <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                100+
              </div>
              <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                50+
              </div>
              <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                20+
              </div>
              <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Awards Won
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
