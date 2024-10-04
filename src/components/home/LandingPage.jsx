import React, { useState, useRef, useEffect } from 'react';
import "./LandingPage.css"
import bkgVideo from  "../../assets/BreatheCastVideo.mp4";

const OscillatingWave = () => {
    const [waveOffset, setWaveOffset] = useState(0);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        console.log(position);
        setScrollPosition(position);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setWaveOffset((prevOffset) => (prevOffset + 0.02) % (2 * Math.PI)); // Update wave offset over time
      }, 50); // Update interval for smooth animation
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    const windowHeight = window.innerHeight;
    const waveWidth = window.innerWidth;
    const wavePath = () => {
        const waveMaxHeight = windowHeight*0.15 - 1.1*scrollPosition;
        const amplitude = windowHeight * 0.075 + scrollPosition*0.05;
        const waveBase = windowHeight - 1.1*scrollPosition;
        const frequency = 100;
        const offset = waveOffset; // Offset to create the oscillating effect
        const midpoint = waveBase - waveMaxHeight/2;
    
        // Create a path from a set of control points for a smooth wave curve
        const path = `
            M 0,${midpoint + amplitude * Math.sin(frequency + offset)} 
            Q ${waveWidth/4},${midpoint + amplitude * Math.sin(frequency + offset)} 
            ${waveWidth/2},${midpoint}
            T ${waveWidth},${midpoint - amplitude * Math.sin(frequency * 2 + offset)} 
            L ${waveWidth},${windowHeight}
            L 0,${windowHeight}
            Z
        `;
        return path;
    };
  
    return (
        <div className="wave">
            <svg
                viewBox={"0 0 " + {waveWidth} + " " + {windowHeight}}
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            >
                <path
                d={wavePath()}
                fill="#1e1e1e"
                stroke="#1e1e1e"
                strokeWidth="5"
                />
            </svg>
        </div>
    );
};
  

function LandingPage() {
    const videoRef = useRef(null);

    return (
        <div style={{height: '300vh'}}>
            <div className="landing-video">
                <video
                    src={bkgVideo}
                    autoPlay
                    muted
                    ref={videoRef}
                    onTimeUpdate={handleTimeUpdate}
                />
            </div>
            <div className="title-text">
                <h1>Gradient</h1>
                <p>Fitting casts around your life, not the other way around.</p>
            </div>
            <div className="morphing-container">
                {/* <div className="triangle"></div>
                <div className="triangle-2"></div> */}
                <OscillatingWave />
            </div>
        </div>
    );
};

export default LandingPage; 