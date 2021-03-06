import React from "react";
import PropTypes from 'prop-types';

const CloudySleet2 = ({ className, size, stroke, colorCloud, colorRain, colorHail }) => {
    return (
        <div className={className}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 446.8"
                preserveAspectRatio='xMinYMin slice'
                width={size}
                height={size * 0.8936}>

            {/* rain body and outline  */}
                <rect
                    width="36.93"
                    height="129.26"
                    x="383.28"
                    y="348.01"
                    fill={colorRain}
                    rx="18.47"
                    transform="rotate(35 436.83 401.586)"
                ></rect>
                <path 
                    stroke={stroke}
                    d="M428.24 337.92a14.77 14.77 0 0112.08 23.25l-52.95 75.63a14.78 14.78 0 01-20.58 3.63 14.77 14.77 0 01-3.62-20.56l52.95-75.63a14.85 14.85 0 0112.12-6.31m0-3.69a18.44 18.44 0 00-15.14 7.88l-53 75.63a18.47 18.47 0 004.53 25.72 18.46 18.46 0 0025.72-4.54l53-75.63a18.47 18.47 0 00-4.53-25.72 18.46 18.46 0 00-10.58-3.34z"
                ></path>
            
            {/* hail body, shadow and outline */}
                <circle cx="320.42" cy="399.1" r="26.88" fill={colorHail}></circle>
                <path
                    fill="#999"
                    d="M338.09 405.79l-5.09 5.18a14.23 14.23 0 01-1.52 1.38 17.93 17.93 0 005.46-8.19l2.23-6.89c2-6.06-1.63-14.52-6.26-19.61a18.15 18.15 0 00-5.17-3.91l-1.84-1a27 27 0 0112.39 6.25l2.91 5.58a18.21 18.21 0 01-3.11 21.21z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#999"
                    d="M347.31 399.15a26.87 26.87 0 01-14.21 23.72 27.12 27.12 0 01-20.71 1.94 26.89 26.89 0 01-15.05-11.94 26.83 26.83 0 01-1.12-25.34l-.73 4.83a18.23 18.23 0 009.94 19l6.48 3.22a18.19 18.19 0 0018.54-1.41 17.77 17.77 0 002.55-2.2l5.08-5.18a18.21 18.21 0 003.12-21.17l-2.91-5.58a26.3 26.3 0 015.75 7.27 26.57 26.57 0 013.14 10.28c.09.85.13 1.71.13 2.56z"
                    opacity="0.5"
                ></path>
                <path 
                    stroke={stroke}
                    d="M320.42 426.8a27.7 27.7 0 1127.7-27.7 27.73 27.73 0 01-27.7 27.7zm0-53.77a26.07 26.07 0 1026.07 26.07 26.1 26.1 0 00-26.07-26.07z"
                ></path>

            {/* rain body and outline */}
                <rect
                    width="36.93"
                    height="129.26"
                    x="231.13"
                    y="348.01"
                    fill={colorRain}
                    rx="18.47"
                    transform="rotate(35 284.678 401.58)"
                ></rect>
                <path 
                    stroke={stroke}
                    d="M276.1 337.92a14.77 14.77 0 0112.08 23.25l-53 75.63A14.77 14.77 0 01211 419.87l53-75.63a14.82 14.82 0 0112.12-6.31m0-3.69a18.44 18.44 0 00-15.12 7.87l-53 75.63a18.46 18.46 0 004.54 25.72 18.46 18.46 0 0025.72-4.54l52.95-75.63a18.47 18.47 0 00-4.53-25.72 18.43 18.43 0 00-10.58-3.34z"
                ></path>
            

            {/* hail body, shadow and outline */}
                <circle cx="168.28" cy="399.1" r="26.88" fill={colorHail}></circle>
                <path
                    fill="#999"
                    d="M185.94 405.79l-5.07 5.18a15.26 15.26 0 01-1.52 1.38 17.91 17.91 0 005.45-8.19l2.2-6.89c2-6.06-1.64-14.52-6.26-19.61a18.15 18.15 0 00-5.17-3.91l-1.85-1a26.94 26.94 0 0112.39 6.25l2.91 5.58a18.19 18.19 0 01-3.08 21.21z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#999"
                    d="M195.16 399.15A26.82 26.82 0 01181 422.87a27.1 27.1 0 01-20.7 1.94 27 27 0 01-15.11-11.94 26.86 26.86 0 01-2.66-21.35 26.79 26.79 0 011.55-4l-.74 4.83a18.24 18.24 0 009.94 19l6.48 3.22a18.23 18.23 0 0021.11-3.59l5.07-5.18a18.19 18.19 0 003.12-21.17l-2.91-5.58a27 27 0 018.85 17.54c.12.85.16 1.71.16 2.56z"
                    opacity="0.5"
                ></path>
                <path 
                    stroke={stroke}
                    d="M168.28 426.8a27.7 27.7 0 1127.7-27.7 27.74 27.74 0 01-27.7 27.7zm0-53.77a26.07 26.07 0 1026.06 26.07 26.1 26.1 0 00-26.06-26.07z"
                ></path>

            {/* rain body and outline */}        
                <rect
                    width="36.93"
                    height="129.26"
                    x="78.99"
                    y="348.01"
                    fill={colorRain}
                    rx="18.47"
                    transform="rotate(35 132.547 401.584)"
                ></rect>
                <path 
                    stroke={stroke}
                    d="M124 337.92a14.77 14.77 0 0112 23.25L83 436.8a14.77 14.77 0 01-24.13-16.93l53-75.63a14.82 14.82 0 0112.13-6.32m0-3.69a18.44 18.44 0 00-15.14 7.88l-53 75.63a18.46 18.46 0 1030.24 21.18l53-75.63a18.46 18.46 0 00-4.54-25.72 18.4 18.4 0 00-10.56-3.34z"
                ></path>
            
            {/* cloud body, shading and outline */}
                <path
                    fill={colorCloud}
                    d="M498.07 188.43c0 44.78-36 81.08-80.43 81.08H398c.37-.7.78-1.43 1.11-2.17a84.24 84.24 0 008.93-37.65 84.49 84.49 0 00-51.79-77.77 79.25 79.25 0 00-8.77-3.11 83.61 83.61 0 00-20.86-3.49h-3.36c-2.29 0-4.58.08-6.84.29-1.35.08-2.7.25-4 .45a64.54 64.54 0 00-6.56 1.11c-.37.08-.78.12-1.15.24h-.2a108.82 108.82 0 00-4.75-14 113 113 0 00-44.87-52.73l-.29-.16c-1.27-.78-2.54-1.52-3.85-2.26-.73-.41-1.47-.82-2.25-1.23-.33-.16-.62-.32-.94-.49a114 114 0 00-95.92-4.1 90.09 90.09 0 01176.8 6.6 39.75 39.75 0 0113.31-2.29c21.76 0 39.42 17.45 39.42 39v.49a79.32 79.32 0 0136.5-8.85c44.39-.01 80.4 36.29 80.4 81.04z"
                ></path>
                <path
                    fill={colorCloud}
                    d="M409.12 229.31c0 46.61-38 84.39-84.81 84.39H74.17c-39 0-70.67-31.51-70.67-70.32a70.5 70.5 0 0170.67-70.32 67.43 67.43 0 019 .59c1.24-61.07 51.37-110.21 113.05-110.21a113 113 0 01109.3 83.6 84.24 84.24 0 0118.77-2.11c46.84 0 84.83 37.78 84.83 84.38z"
                ></path>
                <path
                    fill="#666666"
                    d="M498.07 188.08c0 44.78-36 81.08-80.43 81.08h-18.19-.05a84.76 84.76 0 01-74.73 44.5H74.53c84.53 0 172.46-169.63 173-237.48v-.7a.14.14 0 00.08 0 101.64 101.64 0 019.22 5.29c3-.29 20.73-38 20.73-70a90.45 90.45 0 0150.81 67.85 39.48 39.48 0 0152.73 36.67v.58a79.36 79.36 0 0136.51-8.85c44.44.01 80.46 36.31 80.46 81.06z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#333333"
                    d="M498.07 188.43c0 44.78-36 81.08-80.43 81.08h-18.76a1 1 0 01-.16.25 84.8 84.8 0 01-74.41 43.92H158c26.59-.9 263.17-18.85 241.29-103.25-15.2-58.55-72.81-61.66-93.75-56.75a38.79 38.79 0 00-17.54 9.75c0-3.32 12.45-14.09 16.67-16.06s13.29-2.8 19.73-2.8a84.81 84.81 0 0184.71 84.75 80.31 80.31 0 01-.74 11c12.75-3.93 97.11-31.1 77.16-76.17-28.19-63.63-86.25-50-104.36-43.39-7.46 2.71-14 8.77-14 8.77.2-3.24 13-13.32 13.93-13.32a79.32 79.32 0 0136.5-8.85c44.46.02 80.47 36.32 80.47 81.07z"
                    opacity="0.5"
                ></path>
                <path 
                    stroke={stroke}
                    d="M417.28 104.72a82.14 82.14 0 00-34.28 7.53 41.8 41.8 0 00-53.09-36.54 92.35 92.35 0 00-180.67-4.79c-39.35 17.14-67.62 55.59-69.43 100.44-2.32-.23-4.68-.35-7-.35C32.62 171.01 0 203.47 0 243.38s32.62 72.36 72.73 72.36h250.13a87 87 0 0075.78-44.3h18.64c45.61 0 82.72-37.41 82.72-83.38s-37.11-83.34-82.72-83.34zm-94.42 206.93H72.73c-37.85 0-68.63-30.63-68.63-68.27s30.78-68.27 68.63-68.27a66.59 66.59 0 018.74.57 2 2 0 002.32-2c.91-44.52 28.87-82.83 67.92-99.41a2.7 2.7 0 00.41 0A111.17 111.17 0 01297.24 134a105.32 105.32 0 014.65 13.67 2.3 2.3 0 002.75 1.65c2.41-.58 15.82-2.07 18.24-2.07a82.18 82.18 0 0123.58 3.43 77.16 77.16 0 018.51 3l.23.08a82 82 0 0150.19 75.57 80.34 80.34 0 01-8.73 36.72c-.25.55-1.17 2.52-1.21 2.77a82.9 82.9 0 01-72.59 42.83zm94.42-44.78h-15.9a84.75 84.75 0 008.6-37.53 86.62 86.62 0 00-53.19-79.88l-.24-.09a80.84 80.84 0 00-8.8-3.11 86.7 86.7 0 00-24.87-3.62c-2.56 0-15.22 1.32-17.14 1.71a111.81 111.81 0 00-4.26-12.13 115.82 115.82 0 00-146.9-63.87A87.36 87.36 0 01239 4.58c42.9 0 80.22 32 86.81 74.48a2.34 2.34 0 001.09 1.62 2.38 2.38 0 001.95.19 37.08 37.08 0 0112.54-2.17c20.47 0 37.13 16.45 37.13 36.67v.5a2.29 2.29 0 003.34 2 76.55 76.55 0 0135.46-8.59c43.08 0 78.13 35.32 78.13 78.75s-35.09 78.84-78.17 78.84z"
                ></path>
            </svg>
        </div>
    );
};

CloudySleet2.propTypes = {
    size: PropTypes.number,
    stroke: PropTypes.string,
    colorCloud: PropTypes.string,
    colorRain: PropTypes.string,
    colorHail: PropTypes.string
};

CloudySleet2.defaultProps = {
    size: 100,
    stroke: '#121212',
    colorCloud: '#e6e6e6',
    colorRain: '#29abe2',
    colorHail: '#adfffa'
};

export default CloudySleet2;