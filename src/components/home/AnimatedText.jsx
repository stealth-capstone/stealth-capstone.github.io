import { useEffect, useRef, useState } from 'react';
import './PageComponents.css';

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
        <div ref={ref} className="morphing-container">
            <h1>Traditional medical casts are <span className={`cast-description ${animClass}`}>{castDescs[castDescIdx]}</span></h1>
        {props.showFullPage && (
            <p className='extra-text fade-in'>
                We're working on a way to build them better, faster, and more comfortable.
            </p>
        )}
        </div>
    );
}

export default AnimatedText;
