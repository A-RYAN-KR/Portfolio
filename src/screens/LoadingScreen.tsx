import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    const loadingTexts = [
        "Initializing System...",
        "Loading Projects...",
        "Compiling Experience...",
        "Fetching Skills...",
        "Optimizing Interface...",
        "Preparing Animations...",
        "Almost Ready...",
        "Final Touches..."
    ];

    useEffect(() => {
        const totalDuration = 5000; // Total duration for progress
        const interval = 50; // Interval for updating progress

        const progressTimer = setInterval(() => {
            console.log('Progress:', progress);
            setProgress((prev) =>
                prev < 100 ? Math.min(prev + 100 / (totalDuration / interval), 100) : 100
            );
        }, interval);

        const textTimer = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 2500);

        // End loading after totalDuration
        setTimeout(() => {
            setFadeOut(true); // Start fade-out animation
            setTimeout(() => {
                clearInterval(progressTimer);
                clearInterval(textTimer);
                onLoadingComplete(); // Notify parent
            }, 500); // Fade-out duration
        }, totalDuration);

        return () => {
            clearInterval(progressTimer);
            clearInterval(textTimer);
        };
    }, [onLoadingComplete]);

    //if (!showContent) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
            <div className="text-center px-4 relative">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Title */}
                <h1 className="text-5xl font-bold gradient-text mb-6 tracking-wider">PORTFOLIO</h1>

                {/* Loading Text */}
                <div className="h-6 mb-8">
                    <p className="text-cyan-400 text-lg font-medium" style={{ animation: 'pulse 2s infinite' }}>
                        {loadingTexts[textIndex]}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden relative mx-auto">
                    <div
                        className="h-full rounded-full duration-300"
                        style={{ width: `${progress}%`, backgroundColor: '#4ade80' }}
                    />
                </div>

                {/* Progress Percentage */}
                <div className="mt-4 text-gray-400">
                    <span className="font-mono text-lg">{Math.round(progress)}%</span>
                </div>

                {/* Loading Spinner */}
                <div className="mt-8 ml-8 flex justify-center items-center">
                    <div
                        className="w-10 h-10 border-4 border-gray-700 border-t-cyan-500 rounded-full"
                        style={{ animation: 'spin 1s linear infinite' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
