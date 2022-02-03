import React from "react";
import PropTypes from 'prop-types';

const CloudyThunderstorm = ({ className, size, stroke, colorCloud, colorRain, colorBolt }) => {
    return ( 
        <div className={className}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 472.33"
                preserveAspectRatio='xMinYMin slice'
                width={size}
                height={size * 0.94466}>
            
            {/* heavy rain body */}
                <rect
                    width="34.51"
                    height="120.79"
                    x="128.7"
                    y="339.28"
                    fill={colorRain}
                    rx="17.26"
                    transform="rotate(35 167.909 392.753)"
                ></rect>
                <rect
                    width="34.51"
                    height="120.79"
                    x="181.96"
                    y="339.28"
                    fill={colorRain}
                    rx="17.26"
                    transform="rotate(35 221.154 392.754)"
                ></rect>
                <rect
                    width="34.51"
                    height="120.79"
                    x="235.22"
                    y="339.28"
                    fill={colorRain}
                    rx="17.26"
                    transform="rotate(35 274.415 392.75)"
                ></rect>
                <rect
                    width="34.51"
                    height="120.79"
                    x="288.48"
                    y="339.28"
                    fill={colorRain}
                    rx="17.26"
                    transform="rotate(35 327.676 392.747)"
                ></rect>
                <rect
                    width="34.51"
                    height="120.79"
                    x="341.74"
                    y="339.28"
                    fill={colorRain}
                    rx="17.26"
                    transform="rotate(35 380.938 392.743)"
                ></rect>

            {/* heavy rain outline  */}
                <path 
                    fill={stroke} 
                    d="M170.72 336.69A13.8 13.8 0 01182 358.41l-49.49 70.67a13.82 13.82 0 01-11.32 5.89 13.81 13.81 0 01-11.29-21.72l49.49-70.68a13.83 13.83 0 0111.32-5.88m0-3.45a17.23 17.23 0 00-14.15 7.35l-49.49 70.68a17.254 17.254 0 1028.27 19.79l49.49-70.67a17.25 17.25 0 00-4.24-24 17.15 17.15 0 00-9.88-3.12zM224 336.69a13.81 13.81 0 0111.29 21.72l-49.49 70.67a13.82 13.82 0 01-11.32 5.89 13.8 13.8 0 01-11.29-21.72l49.48-70.68a13.85 13.85 0 0111.33-5.88m0-3.45a17.23 17.23 0 00-14.15 7.35l-49.49 70.68a17.25 17.25 0 004.24 24 17.25 17.25 0 0024-4.24l49.49-70.67a17.26 17.26 0 00-4.24-24 17.17 17.17 0 00-9.88-3.12zM277.23 336.69a13.81 13.81 0 0111.3 21.72L239 429.08a13.804 13.804 0 01-22.62-15.83l49.49-70.68a13.85 13.85 0 0111.32-5.88m0-3.45a17.24 17.24 0 00-14.15 7.35l-49.44 70.68a17.25 17.25 0 004.24 24 17.25 17.25 0 0024-4.24l49.48-70.67a17.25 17.25 0 00-4.23-24 17.2 17.2 0 00-9.89-3.12zM330.49 336.69a13.8 13.8 0 0111.29 21.72l-49.48 70.67a13.83 13.83 0 01-11.3 5.89 13.81 13.81 0 01-11.29-21.72l49.49-70.68a13.83 13.83 0 0111.32-5.88m0-3.45a17.24 17.24 0 00-14.15 7.35l-49.48 70.68a17.25 17.25 0 1028.26 19.79l49.49-70.67a17.25 17.25 0 00-4.24-24 17.15 17.15 0 00-9.88-3.12zM383.75 336.69A13.8 13.8 0 01395 358.41l-49.48 70.67a13.85 13.85 0 01-11.33 5.89 13.8 13.8 0 01-11.29-21.72l49.49-70.68a13.83 13.83 0 0111.32-5.88m0-3.45a17.24 17.24 0 00-14.15 7.35l-49.49 70.68a17.26 17.26 0 004.24 24 17.25 17.25 0 0024-4.24l49.49-70.67a17.25 17.25 0 00-4.24-24 17.15 17.15 0 00-9.88-3.12z"
                ></path>
            
            {/* cloud body */}  
                <path
                    fill={colorCloud}
                    d="M497.52 202.89c0 56.29-45.89 101.93-102.47 101.93H92.82c-47.13 0-85.39-38-85.39-85s38.26-85 85.39-85a89.06 89.06 0 0110.89.69C105.2 61.85 165.79 2.49 240.3 2.49a136.67 136.67 0 01132.08 101 101.19 101.19 0 0122.67-2.57c56.58-.01 102.47 45.63 102.47 101.97z"
                ></path>

            {/* shading */}
                <path
                    fill="#666666"
                    d="M497.52 202.89c0 56.29-45.89 101.93-102.47 101.93H92.82c102.43 0 209-206.19 209-287.67v-.1a136.36 136.36 0 0170.55 86.43 101.19 101.19 0 0122.67-2.57c56.59 0 102.48 45.64 102.48 101.98z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#333333"
                    d="M497.52 202.89c0 56.29-45.89 101.93-102.47 101.93h-201c32.13-1.09 318-22.82 291.53-124.75-18.35-70.76-87.95-74.55-113.26-68.57a46.46 46.46 0 00-21.14 11.79c0-4.36 17.62-19.21 21.19-19.81a101.19 101.19 0 0122.67-2.57c56.59 0 102.48 45.64 102.48 101.98z"
                    opacity="0.5"
                ></path>

            {/* cloud outline */}
                <path 
                    fill={stroke}
                    d="M395.05 307.32H92.82C44.37 307.32 5 268.09 5 219.88s39.42-87.44 87.87-87.44c2.85 0 5.7.14 8.5.42C104.37 59.35 166.12 0 240.37 0c62.26 0 117 41.23 133.82 100.57a104.28 104.28 0 0120.92-2.12c57.87 0 105 46.85 105 104.43s-47.19 104.44-105.06 104.44zM92.82 137.39c-45.72 0-82.92 37-82.92 82.49s37.2 82.49 82.92 82.49h302.23c55.14 0 100-44.63 100-99.49s-44.86-99.48-100-99.48a99.84 99.84 0 00-22.13 2.49 2.49 2.49 0 01-2.92-1.73C354.46 45.78 301.14 5 240.33 5c-72.48 0-132.65 58.64-134.12 130.73a2.49 2.49 0 01-.86 1.83 2.54 2.54 0 01-1.94.57 80.31 80.31 0 00-10.59-.74z"
                ></path>
            
            {/* bolt body */}
                <path
                    fill={colorBolt}
                    d="M37.5 460.05L60.56 326.92 4.57 326.92 111.02 156.6 87.96 289.72 143.95 289.72 37.5 460.05z"
                ></path>

            {/* bolt outline */}
                <path
                    fill={stroke} 
                    d="M32.81 472.32l24.74-142.88H0l115.71-185.13L91 287.16h57.55zM9.13 324.38h54.43L42.19 447.76l97.2-155.51H85l21.37-123.38z"
                ></path>
            </svg>
        </div>
    );
};

CloudyThunderstorm.propTypes = {
    size: PropTypes.number,
    stroke: PropTypes.string,
    colorCloud: PropTypes.string, 
    colorRain: PropTypes.string,
    colorBolt: PropTypes.string
};

CloudyThunderstorm.defaultProps = {
    size: 100,
    stroke: '#121212',
    colorCloud: '#e6e6e6',
    colorRain: '#29abe2',
    colorBolt: '#fcee21'
};

export default CloudyThunderstorm;