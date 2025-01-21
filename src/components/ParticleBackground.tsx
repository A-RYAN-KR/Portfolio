import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";

const ParticleBackground = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: theme === "dark" ? "#4FD1C5" : "#0891B2",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: theme === "dark" ? 0.8 : 0.6,
        random: false,
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 3,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: theme === "dark" ? "#4FD1C5" : "#0891B2",
        opacity: theme === "dark" ? 0.5 : 0.3,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble", // Changed to bubble for better interaction with custom cursor
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 12,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
    background: {
      color: "transparent",
    },
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;
