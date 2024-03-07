import React, { useEffect, useState } from 'react';

export const VideoBackground: React.FC = () => {
    const [text, setText] = useState<string>(''); // State to hold the text being written

    useEffect(() => {
        // Real-time text writing simulation
        const originalText = "The reason why you should work with us we are a credible organisation that offers top notch services and help in car services and automobile";
        let index = 0;
        const interval = setInterval(() => {
            setText(originalText.slice(0, index));
            index++;
            if (index > originalText.length) {
                index = 0;
            }
        }, 150);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative h-[600px]">
            {/* Video Background */}
            <video className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-70" autoPlay loop muted>
                {/* Add your video source here */}
                <source src="/videos/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white">
                <h1 className="text-4xl font-bold mb-4 text-rose-300 font-mono">GIVING YOU THE REASON TO CHOOSE US</h1>
                <div className="text-lg font-medium mb-8">{text}</div>
            </div>
        </div>
    );
};

export default VideoBackground;
