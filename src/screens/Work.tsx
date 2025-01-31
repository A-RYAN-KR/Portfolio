import React, { useState } from 'react';
import {
  BriefcaseIcon,
  ExternalLinkIcon,
  CalendarIcon,
  ChevronDownIcon,
  AwardIcon,
  UserIcon,
  CodeIcon
} from 'lucide-react';

const AnimatedIcon = ({ children, delay }) => (
  <div
    className="animate-bounce-subtle"
    style={{
      animation: `iconFloat 3s ease-in-out ${delay}s infinite`
    }}
  >
    {children}
  </div>
);

const WorkCard = ({ role, company, period, description, achievements, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const achievementIcons = {
    code: CodeIcon,
    award: AwardIcon,
    user: UserIcon
  };

  return (
    <div
      className={`bg-gradient-to-r from-yellow-50 via-green-50 to-pink-100 p-6 rounded-xl shadow-sm dark:from-gray-700 dark:via-[rgb(31,40,60)] dark:to-[rgb(17,24,39)] transform transition-all duration-500 ease-in-out ${isHovered ? 'scale-105 shadow-lg' : ''
        } ${isExpanded ? 'shadow-xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: 0,
        animation: `fadeSlideIn 0.8s ease-out ${delay}s forwards`
      }}
    >
      <div
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <AnimatedIcon delay={delay}>
                <BriefcaseIcon className="w-5 h-5 text-cyan-500" />
              </AnimatedIcon>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors duration-300">
                {role}
              </h3>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-cyan-500 relative">
                {company}
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                />
              </div>
              <ExternalLinkIcon
                className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'translate-x-1 -translate-y-1 rotate-12' : ''
                  }`}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <AnimatedIcon delay={delay + 0.2}>
              <CalendarIcon className="w-4 h-4" />
            </AnimatedIcon>
            <span>{period}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 transition-all duration-300">
          {description}
        </p>
        <div className="flex justify-center mt-4">
          <ChevronDownIcon
            className={`w-5 h-5 text-cyan-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
              }`}
          />
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
      >
        <div className="border-t pt-4 mt-4 space-y-3">
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[achievement.icon];
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                style={{
                  animation: isExpanded ? `slideIn 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                  opacity: 0
                }}
              >
                <Icon className="w-4 h-4 text-cyan-500" />
                <span>{achievement.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2020 - Present",
      description: "Led development of enterprise-level web applications, mentored junior developers, and implemented CI/CD pipelines.",
      achievements: [
        { icon: 'code', text: "Architected and deployed 5 major applications" },
        { icon: 'user', text: "Mentored 10+ junior developers" },
        { icon: 'award', text: "Received 'Developer of the Year' award" }
      ]
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: "Developed responsive web applications using React and Redux, improved performance by 40%.",
      achievements: [
        { icon: 'code', text: "Optimized application performance by 40%" },
        { icon: 'user', text: "Led a team of 5 developers" },
        { icon: 'award', text: "Implemented new React architecture" }
      ]
    },
    {
      role: "Junior Developer",
      company: "StartUp Hub",
      period: "2016 - 2018",
      description: "Built and maintained client websites, collaborated with design team on UI/UX improvements.",
      achievements: [
        { icon: 'code', text: "Developed 20+ client websites" },
        { icon: 'user', text: "Collaborated with design team" },
        { icon: 'award', text: "Recognized for UI/UX innovations" }
      ]
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
      <style>
        {`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes iconFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white relative inline-block"
            style={{
              opacity: 0,
              animation: 'fadeSlideIn 0.8s ease-out forwards'
            }}
          >
            Work Experience
            <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 transform origin-left"
              style={{
                animation: 'scale-x 0.8s ease-out 0.8s forwards',
                transform: 'scaleX(0)'
              }}
            />
          </h2>
          <div
            className="mt-4 text-xl text-gray-500 dark:text-gray-400"
            style={{
              opacity: 0,
              animation: 'fadeSlideIn 0.8s ease-out 0.2s forwards'
            }}
          >
            My professional journey
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <WorkCard
              key={index}
              {...exp}
              delay={0.4 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;