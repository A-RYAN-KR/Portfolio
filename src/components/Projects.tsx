

type Props = {}

function Projects({}: Props) {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-yellow-50 via-green-50 to-pink-100 dark:from-gray-900 dark:via-[rgb(17,24,39)] dark:to-[rgb(17,24,39)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Featured Projects
          </h2>
          <div className="mt-4 text-xl text-gray-500 dark:text-gray-400">Some of my best work</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
                alt="E-commerce Platform"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-semibold">
                  E-commerce Platform
                </h3>
                <p className="text-gray-200 mt-2">React, Node.js, MongoDB</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=500"
                alt="Health & Fitness App"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-semibold">
                  Health & Fitness App
                </h3>
                <p className="text-gray-200 mt-2">Vue.js, Firebase</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800&h=500"
                alt="Task Management Dashboard"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-semibold">
                  Task Management Dashboard
                </h3>
                <p className="text-gray-200 mt-2">
                  Next.js, TypeScript, Prisma
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects