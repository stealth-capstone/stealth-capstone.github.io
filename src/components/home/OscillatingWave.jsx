import { useEffect, useState } from 'react';

import './PageComponents.css'

const OscillatingWave = () => {
    const [waveOffset, setWaveOffset] = useState(0);

    const windowHeight = window.innerHeight;
    const waveMaxHeight = windowHeight*0.05;
    const windowWidth = window.innerWidth;

    useEffect(() => {
      const interval = setInterval(() => {
        setWaveOffset((prevOffset) => (prevOffset + 0.02) % (2 * Math.PI));
      }, 50);
  
      return () => clearInterval(interval);
    }, []);
  
    const wavePath = () => {
        const amplitude = windowHeight * 0.05;
        const offset = waveOffset;
    
        const path = `
            M 0,${waveMaxHeight - amplitude * Math.sin(offset)} 
            Q ${windowWidth/4},${waveMaxHeight - amplitude * Math.sin(offset)} 
              ${windowWidth/2},${waveMaxHeight}
            T ${windowWidth},${waveMaxHeight + amplitude * Math.sin(offset)} 
            L ${windowWidth},${0}
            L 0,${0}
            Z
        `;
        return path;
    };
  
    return (
        <div className="wave">
            <svg
                viewBox={`0 0 ${windowWidth} ${waveMaxHeight*2}`}
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            >
                <path d={wavePath()} fill="#1e1e1e" stroke="#1e1e1e" strokeWidth="1" />
            </svg>
        </div>
    );
};

export default OscillatingWave;
