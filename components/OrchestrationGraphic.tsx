'use client';

import { useEffect, useState } from 'react';

export function OrchestrationGraphic() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[600px] w-full" />;

  return (
    <div className="relative h-[600px] w-full [perspective:2000px] flex items-start justify-center pointer-events-none -mt-32 overflow-visible">
      <svg
        viewBox="0 0 800 500"
        className="h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: 'rotateY(-40deg) rotateX(0deg) scale(1.4) translateX(0%)',
          transformStyle: 'preserve-3d',
        }}
      >
        <defs>
          <linearGradient id="verticalLineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="20%" stopColor="white" stopOpacity="0.05" />
            <stop offset="80%" stopColor="white" stopOpacity="0.05" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Horizontal Musical Staff Lines */}
        {[140, 155, 170, 185, 200, 260, 275, 290, 305, 320, 380, 395, 410, 425, 440].map((y, i) => (
          <line
            key={i}
            x1="0"
            y1={y}
            x2="800"
            y2={y}
            stroke="white"
            strokeOpacity={i % 5 === 0 || i % 5 === 4 ? "0.1" : "0.04"}
            strokeWidth="1"
          />
        ))}

        {/* Vertical Connecting Lines - extended and fading at ends */}
        <line x1="300" y1="50" x2="300" y2="480" stroke="url(#verticalLineGradient)" strokeWidth="1" />
        <line x1="550" y1="50" x2="550" y2="480" stroke="url(#verticalLineGradient)" strokeWidth="1" />

        {/* Labels and Matching Glowing Nodes */}
        <g>
          {[
            { label: 'ERP', x: 320, y: 140 },
            { label: 'Liquidity Swaps', x: 420, y: 170 },
            { label: 'On & Off-ramps', x: 600, y: 200 },
            { label: 'CEXs', x: 500, y: 275 },
            { label: 'Bridges', x: 280, y: 305 },
            { label: 'Tax Integration', x: 580, y: 395 },
            { label: 'KYC/KYB', x: 480, y: 425 },
            { label: 'DEXs', x: 680, y: 440 },
          ].map((item, i) => {
            const totalDuration = 24; // Slowed down from 10s to 24s
            const seqEnd = 0.8; // Sequence ends at 80% of total time
            
            // Sequential glow timing
            const startSeq = (i * (seqEnd / 8));
            const peakSeq = startSeq + (seqEnd / 16);
            const endSeq = startSeq + (seqEnd / 8);
            
            // Collective glow timing (the last 20% of the duration)
            const startColl = seqEnd;
            const peakColl = seqEnd + 0.1;
            const endColl = 1;

            const keyTimes = `0;${startSeq};${peakSeq};${endSeq};${startColl};${peakColl};${endColl}`;
            const opacityValues = `0.3;0.3;1;0.3;0.3;1;0.3`;
            const radiusValues = `3;3;6;3;3;6;3`;
            const colorValues = `#B7ACFF;#B7ACFF;#FF86C8;#B7ACFF;#B7ACFF;#B7ACFF;#B7ACFF`;

            return (
              <g key={i}>
                {/* The Glowing Node */}
                <circle cx={item.x - 12} cy={item.y} r="3" fill="#B7ACFF">
                  <animate 
                    attributeName="fill"
                    values={colorValues}
                    keyTimes={keyTimes}
                    dur={`${totalDuration}s`}
                    repeatCount="indefinite"
                  />
                  <animate 
                    attributeName="opacity" 
                    values={opacityValues} 
                    keyTimes={keyTimes} 
                    dur={`${totalDuration}s`} 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="r" 
                    values={radiusValues} 
                    keyTimes={keyTimes} 
                    dur={`${totalDuration}s`} 
                    repeatCount="indefinite" 
                  />
                  {/* Subtle outer glow effect for the peak moments */}
                  <animate 
                    attributeName="fill-opacity" 
                    values="0.5;0.5;1;0.5;0.5;1;0.5" 
                    keyTimes={keyTimes} 
                    dur={`${totalDuration}s`} 
                    repeatCount="indefinite" 
                  />
                </circle>
                {/* The Label */}
                <text
                  x={item.x}
                  y={item.y + 4}
                  className="text-[13px] font-medium tracking-wide"
                  fill="white"
                >
                  <animate 
                    attributeName="fill-opacity" 
                    values="0;0;1;0;0;1;0" 
                    keyTimes={keyTimes} 
                    dur={`${totalDuration}s`} 
                    repeatCount="indefinite" 
                  />
                  {item.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* Moving Pulse Nodes along lines */}
        {[155, 290, 410].map((y, i) => (
          <circle key={i} r="2.5" fill="white" fillOpacity="0.8">
            <animateMotion
              path={`M 0 ${y} L 800 ${y}`}
              dur={`${12 + i * 4}s`}
              repeatCount="indefinite"
              begin={`${i * 3}s`}
            />
            <animate attributeName="opacity" values="0;1;0" dur={`${12 + i * 4}s`} repeatCount="indefinite" begin={`${i * 3}s`} />
          </circle>
        ))}
      </svg>
    </div>
  );
}

