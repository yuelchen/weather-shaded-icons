import React from "react";
import PropTypes from 'prop-types';

const CloudyHeavyRain = ({ className, size, stroke, colorCloud, colorRain }) => {
    return (
        <div className={className}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 442.81"
                preserveAspectRatio='xMinYMin slice'
                width={size}
                height={size * 0.88562}>

            {/* heavy rain body */}
                <rect
                    width="34.86"
                    height="121.99"
                    x="124.99"
                    y="357.29"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 187.772 403.995)"
                ></rect>
                <rect
                    width="34.86"
                    height="121.99"
                    x="178.78"
                    y="357.29"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 241.554 403.984)"
                ></rect>
                <rect
                    width="34.86"
                    height="121.99"
                    x="232.57"
                    y="357.29"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 295.34 403.988)"
                ></rect>
                <rect
                    width="34.86"
                    height="121.99"
                    x="286.36"
                    y="357.29"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 349.143 403.988)"
                ></rect>
                <rect
                    width="34.86"
                    height="121.99"
                    x="340.15"
                    y="357.29"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 402.93 403.993)"
                ></rect>

            {/* heavy rain outline  */}
                <path
                    fill={stroke} 
                    d="M167.43 340.05a13.94 13.94 0 0111.4 21.94l-50 71.38A13.94 13.94 0 11106 417.4l50-71.38a14 14 0 0111.44-6m0-3.48a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.433 17.433 0 0028.56 20l50-71.38a17.43 17.43 0 00-4.28-24.27 17.37 17.37 0 00-10-3.15zM221.22 340.05a13.94 13.94 0 0111.4 21.94l-50 71.38a13.943 13.943 0 11-22.84-16l50-71.38a14 14 0 0111.44-6m0-3.48a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.43 17.43 0 004.28 24.27 17.44 17.44 0 0024.3-4.19l50-71.38a17.43 17.43 0 00-4.28-24.27 17.37 17.37 0 00-10-3.15zM275 340.05a13.94 13.94 0 0111.4 21.94l-50 71.38a13.943 13.943 0 11-22.84-16l50-71.38a14 14 0 0111.44-6m0-3.48a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.43 17.43 0 004.3 24.33 17.44 17.44 0 0024.29-4.25l50-71.38a17.43 17.43 0 00-4.29-24.3 17.37 17.37 0 00-10-3.15zM328.8 340.05a13.94 13.94 0 0111.4 21.94l-50 71.38a13.943 13.943 0 11-22.84-16l50-71.38a14 14 0 0111.44-6m0-3.48a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.433 17.433 0 0028.56 20l50-71.38a17.43 17.43 0 00-4.28-24.27 17.37 17.37 0 00-10-3.15zM382.59 340.05A13.94 13.94 0 01394 361.99l-50 71.41a13.943 13.943 0 11-22.84-16l50-71.38a14 14 0 0111.44-6m0-3.48a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.43 17.43 0 004.28 24.27 17.44 17.44 0 0024.29-4.22l50-71.38a17.43 17.43 0 00-4.28-24.27 17.37 17.37 0 00-10-3.15z"
                ></path>

            {/* cloud body */}  
                <path
                    fill={colorCloud}
                    d="M497.5 204.92c0 56.85-46.35 103-103.5 103H88.75c-47.6 0-86.25-38.4-86.25-85.8s38.65-85.8 86.25-85.8a89 89 0 0111 .7c1.5-74.5 62.7-134.45 138-134.45a138 138 0 01133.4 102 102.08 102.08 0 0122.9-2.6c57.1-.05 103.45 46.05 103.45 102.95z"
                ></path>

            {/* shading */}
                <path
                    fill="#666"
                    d="M497.5 204.92c0 56.85-46.35 103-103.5 103H88.75c103.45 0 211.1-208.25 211.1-290.55v-.1a137.72 137.72 0 0171.25 87.3 102.08 102.08 0 0122.9-2.6c57.15-.05 103.5 46.05 103.5 102.95z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#333"
                    d="M497.5 204.92c0 56.85-46.35 103-103.5 103H191c32.45-1.1 321.16-23.05 294.45-126-18.54-71.47-88.83-75.3-114.4-69.25a47 47 0 00-21.35 11.9c0-4.4 17.8-19.4 21.4-20a102.08 102.08 0 0122.9-2.6c57.15-.05 103.5 46.05 103.5 102.95z"
                    opacity="0.5"
                ></path>

            {/* cloud outline */}
                <path 
                    fill={stroke}
                    d="M394 310.4H88.75C39.81 310.4 0 270.77 0 222.08s39.81-88.32 88.75-88.32c2.88 0 5.75.14 8.59.42C100.34 59.94 162.73 0 237.72 0c62.88 0 118.11 41.64 135.16 101.57A105.46 105.46 0 01394 99.4c58.45 0 106 47.31 106 105.47S452.45 310.4 394 310.4zM88.75 138.76C42.57 138.76 5 176.14 5 222.08s37.57 83.32 83.75 83.32H394c55.69 0 101-45.08 101-100.48S449.69 104.4 394 104.4a100.63 100.63 0 00-22.35 2.51 2.51 2.51 0 01-3-1.8C353 46.18 299.13 5 237.72 5c-73.22 0-134 59.23-135.47 132a2.5 2.5 0 01-2.83 2.43 81.83 81.83 0 00-10.67-.67z"
                ></path>
            </svg>
        </div>
    );
};

CloudyHeavyRain.propTypes = {
    size: PropTypes.number,
    stroke: PropTypes.string,
    colorCloud: PropTypes.string, 
    colorRain: PropTypes.string
};

CloudyHeavyRain.defaultProps = {
    size: 100,
    stroke: '#121212',
    colorCloud: '#e6e6e6',
    colorRain: '#29abe2'
};

export default CloudyHeavyRain;
