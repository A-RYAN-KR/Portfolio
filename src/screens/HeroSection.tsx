import { Facebook, Dribbble, Linkedin, Twitter, Github } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";



function HeroSection() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#0a192f]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://media.istockphoto.com/id/817486028/photo/shot-from-the-back-to-hooded-hacker-breaking-into-corporate-data-servers-from-his-underground.jpg"
                    alt="Background"
                    className="w-full h-full object-cover object-center opacity-30"
                />
            </div>

            {/* Particle Background */}
            <div className="absolute inset-0 z-10">
                <ParticleBackground />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-white">
                <div className="text-center space-y-6">
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                        Hey <span className="inline-block animate-wave">👋</span> I'm Aryan Jha
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                        Full Stack Developer
                    </h2>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center">
                        <button className="px-6 py-3 bg-transparent border-2 border-red-600 text-white 
                            rounded-full hover:bg-red-600 transition-all duration-300">
                            View Work
                        </button>
                        <button className="px-6 py-3 bg-transparent border-2 border-red-600 text-white 
                            rounded-full hover:bg-red-600 transition-all duration-300">
                            Hire Me
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6 justify-center mt-8">
                        <a href="#" className="text-white hover:text-red-500 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white hover:text-red-500 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white hover:text-red-500 transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection