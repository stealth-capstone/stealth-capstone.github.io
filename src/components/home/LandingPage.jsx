import React, { useState, useRef, useEffect } from 'react';
import "./LandingPage.css"
import bkgVideo from  "../../assets/BreatheCastVideo_Crop.mp4";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TeamPage from './TeamPage';

const OscillatingWave = () => {
    const [waveOffset, setWaveOffset] = useState(0);

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    useEffect(() => {
      const interval = setInterval(() => {
        setWaveOffset((prevOffset) => (prevOffset + 0.02) % (2 * Math.PI));
      }, 50);
  
      return () => clearInterval(interval);
    }, []);
  
    const wavePath = () => {
        const waveBase = windowHeight;

        const waveMaxHeight = windowHeight*0.05;
        const amplitude = windowHeight * 0.05;
        const midpoint = waveMaxHeight + amplitude/2;
        const offset = waveOffset;
    
        const path = `
            M 0,${midpoint + amplitude * Math.sin(offset)} 
            Q ${windowWidth/4},${midpoint + amplitude * Math.sin(offset)} 
              ${windowWidth/2},${midpoint}
            T ${windowWidth},${midpoint - amplitude * Math.sin(offset)} 
            L ${windowWidth},${waveBase}
            L 0,${waveBase}
            Z
        `;
        return path;
    };
  
    return (
        <div className="wave">
            <svg
                viewBox={"0 0 " + {windowWidth} + " " + {windowHeight}}
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



function AnimatedText(props) {
    const [castDescIdx, setCastDescIdx] = useState(0);
    const [animClass, setAnimClass] = useState('fade-in'); // Animation class
    const [isVisible, setIsVisible] = useState(false); // Track if the component is in view
    const ref = useRef(null); // Reference to the component

    const castDescs = ["unhygienic", "uncomfortable", "inconvenient", "outdated."];

    // Use Intersection Observer to detect when the component is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is in view
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return; // Don't run the interval if not visible

        const interval = setInterval(() => {
            if (castDescIdx >= castDescs.length - 1) {
                clearInterval(interval); // Stop the interval if we've reached the last description
                return;
            }

            setAnimClass('fade-out'); // Start fade-out animation
            setTimeout(() => {
                setCastDescIdx((prevIdx) => {
                    const newIdx = Math.min(prevIdx + 1, castDescs.length - 1); // Cycle through descriptions
                    if (newIdx === castDescs.length - 1) {
                        props.setShowFullPage(true);
                    }
                    return newIdx;
                });
                setAnimClass('fade-in'); // Start fade-in animation
            }, 500); // Duration of fade-out
        }, 1000);

        return () => clearInterval(interval);
    }, [isVisible, castDescIdx]);

    return (
        <div ref={ref} className="combined-text">
            <h1>Traditional medical casts are <span className={`cast-description ${animClass}`}>{castDescs[castDescIdx]}</span></h1>
        {props.showFullPage && (
            <p className='extra-text fade-in'>
                We're working on a way to make them more tolerable.
            </p>
        )}
        </div>
    );
}

function LandingPage() {
    const videoRef = useRef(null);


    const [videoFinished, setVideoFinished] = useState(false);
    const handleVideoEnd = () => {
        setVideoFinished(true);
    };

    // Function to prevent scrolling
    const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    useEffect(() => {
        if (!videoFinished) {
            // Disable all scrolling
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, { passive: false });
            window.addEventListener('keydown', (e) => {
                if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
                    preventScroll(e); // Prevent spacebar and arrow key scrolling
                }
            });
        } else {
            // Re-enable scrolling when the video finishes
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        }

        // Cleanup function to remove listeners
        return () => {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        };
    }, [videoFinished]);

    const [showFullPage, setShowFullPage] = useState(false); // State to manage visibility of the extra text
  
    return (
        <div style={{backgroundColor:"#1e1e1e"}}>
            <Parallax pages={1.55} style={{backgroundColor: "#1e1e1e"}}>
                <ParallaxLayer speed={0.5}>
                    <div className="landing-video">
                        <video
                            src={bkgVideo}
                            autoPlay
                            muted
                            ref={videoRef}
                            onEnded={handleVideoEnd}
                        />
                    </div>
                    <div className="title-text">
                        <h1>Gradient</h1>
                        <p>Fitting casts around your life, not the other way around.</p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.85} speed={1}>
                    <div className="morphing-container">
                        <OscillatingWave />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.999} speed={1}>
                    <div className="morphing-container" style={{marginTop:'30px'}}>
                        <AnimatedText showFullPage={showFullPage} setShowFullPage={setShowFullPage} />
                        {showFullPage && <TeamPage />}
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default LandingPage; 