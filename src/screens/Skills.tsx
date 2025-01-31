import { motion } from 'framer-motion';


const Skills = () => {

    const categories = [
        { name: 'Frontend', percentage: 95 },
        { name: 'Backend', percentage: 90 },
        { name: 'Mobile Development', percentage: 85 },
        { name: 'Machine Learning', percentage: 90 },
        { name: 'Database', percentage: 75 },
        { name: 'System Design', percentage: 85 }
    ];

    return (
        <div id='skills' className="w-full py-16 bg-gradient-to-r from-yellow-50 via-green-50 to-pink-100 dark:from-gray-900 dark:via-[rgb(17,24,39)] dark:to-[rgb(17,24,39)] text-gray-900 dark:text-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title and other content remains the same */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 bg-clip-text text-transparent"
                >
                    My Skills
                </motion.h2>



                {/* Categories Section with Fixed Centering */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-gray-700/30 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 + index * 0.2 }}
                                    className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
                                >
                                    {category.percentage}%
                                </motion.div>
                                <svg className="w-32 h-32 transform -rotate-90">
                                    <circle
                                        className="text-gray-300 dark:text-gray-600"
                                        strokeWidth="4"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="60"
                                        cx="64"
                                        cy="64"
                                    />
                                    <motion.circle
                                        className="text-green-500 dark:text-green-400"
                                        strokeWidth="4"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="60"
                                        cx="64"
                                        cy="64"
                                        initial={{ strokeDasharray: "377 377", strokeDashoffset: 377 }}
                                        animate={{ strokeDashoffset: 377 - (377 * category.percentage) / 100 }}
                                        transition={{ duration: 1.5, delay: 0.7 + index * 0.2 }}
                                    />
                                </svg>
                            </div>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 + index * 0.2 }}
                                className="font-semibold text-lg mt-4 text-gray-800 dark:text-gray-200"
                            >
                                {category.name}
                            </motion.h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;