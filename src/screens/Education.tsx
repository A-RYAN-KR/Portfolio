import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Education = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const timelineData = [
        {
            year: '2023 - Present',
            title: 'Bachelor of Technology',
            institution: 'Vishwakarma Institute of Technology, Pune',
            description: 'Currently pursuing B.Tech while developing web development skills through practical projects and coursework.',
            current: true
        },
        {
            year: '2023 - Present',
            title: 'Web Development',
            institution: 'Self-Learning & Projects',
            description: 'Actively learning and implementing modern web technologies including React, Node.js, and full-stack development.',
            current: true
        },
        {
            year: '2021 - 2022',
            title: 'Higher Secondary (12th Grade)',
            institution: 'Barnes School and Junior College',
            description: 'Achieved excellent academic results with 94.4% and GPA of 9.06',
            stats: [
                { label: 'Percentage', value: '94.4%' },
                { label: 'GPA', value: '9.06' }
            ]
        }
    ];

    return (
        <div ref={containerRef} className="relative mx-auto max-w-3xl py-16 px-4 ">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Education
            </h2>

            {/* Timeline line */}
            <div className="absolute left-1/2 w-0.5 -translate-x-1/2 bg-gray-200"
                style={{ top: '7rem', height: 'calc(100% - 7rem)' }} />

            {/* Animated beam */}
            <motion.div
                className="absolute left-1/2 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
                style={{
                    height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
                    top: '7rem',
                }}
            />

            {/* Timeline items */}
            <div className="relative ">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                            }`}
                    >
                        <div className="w-6/12">
                            <div className={`p-4 rounded-lg bg-gradient-to-r from-yellow-50 via-green-50 to-pink-100 shadow-lg dark:from-gray-700 dark:via-[rgb(31,40,60)] dark:to-[rgb(17,24,39)] dark:shadow-white ${index % 2 === 0 ? 'text-right mr-8' : 'text-left ml-8'
                                }`}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-sm font-semibold text-blue-600 ${index % 2 === 0 ? 'order-2' : 'order-1'
                                        }`}>
                                        {item.year}
                                    </span>
                                    {item.current && (
                                        <span className="px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-cyan-500">
                                    {item.title}
                                </h3>
                                <div className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    {item.institution}
                                </div>
                                <p className="text-sm text-gray-500 dark:text-white">
                                    {item.description}
                                </p>
                                {item.stats && (
                                    <div className="mt-3 pt-3 border-t border-gray-200 ">
                                        {item.stats.map((stat, statIndex) => (
                                            <div key={statIndex} className="flex justify-between items-center mt-1 ">
                                                <span className="text-sm text-gray-600 dark:text-white">{stat.label}:</span>
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Timeline dot */}
                        <div className="absolute left-1/2 -translate-x-1/2">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="h-4 w-4 rounded-full border-2 border-blue-500 bg-white"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;