import React from "react";
import PropTypes from 'prop-types';

const CloudyDrizzle2 = ({ className, size, stroke, colorCloud, colorRain }) => {
    return (
        <div className={className}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 423.49"
                preserveAspectRatio='xMinYMin slice'
                width={size}
                height={size * 0.84698}>

            {/* drizzle body */}
                <rect
                    width="48.57"
                    height="97.15"
                    x="113.93"
                    y="368.99"
                    fill={colorRain}
                    rx="24.29"
                    transform="rotate(35 198.885 398.433)"
                ></rect>
                <rect
                    width="48.57"
                    height="97.15"
                    x="225.71"
                    y="368.99"
                    fill={colorRain}
                    rx="24.29"
                    transform="rotate(35 310.66 398.443)"
                ></rect>
                <rect
                    width="48.57"
                    height="97.15"
                    x="337.49"
                    y="368.99"
                    fill={colorRain}
                    rx="24.29"
                    transform="rotate(35 422.447 398.432)"
                ></rect>

            {/* drizzle outline  */}
                <path 
                    fill={stroke}
                    d="M152.17 339.98a19.43 19.43 0 0115.9 30.58l-27.86 39.79a19.433 19.433 0 11-31.84-22.29l27.87-39.79a19.46 19.46 0 0115.93-8.29m0-4.85a24.25 24.25 0 00-19.91 10.36l-27.87 39.79a24.29 24.29 0 1039.79 27.86l27.87-39.79a24.3 24.3 0 00-6-33.83 24.17 24.17 0 00-13.91-4.39zM264 339.98a19.43 19.43 0 0115.9 30.58L252 410.35a19.433 19.433 0 11-31.84-22.29L248 348.27a19.49 19.49 0 0116-8.29m0-4.85a24.25 24.25 0 00-20 10.36l-27.87 39.79a24.28 24.28 0 006 33.82 24.26 24.26 0 0033.82-6l27.87-39.79a24.3 24.3 0 00-6-33.83 24.17 24.17 0 00-13.82-4.35zM375.73 339.98a19.43 19.43 0 0115.9 30.58l-27.87 39.79a19.43 19.43 0 11-31.83-22.29l27.86-39.79a19.49 19.49 0 0115.94-8.29m0-4.85a24.25 24.25 0 00-19.91 10.36L328 385.28a24.29 24.29 0 1039.79 27.86l27.87-39.79a24.3 24.3 0 00-6-33.83 24.17 24.17 0 00-13.91-4.39z"
                ></path>

            {/* cloud body */}      
                <path
                    fill={colorCloud}
                    d="M498.07 188.44c0 44.78-36 81.08-80.43 81.08H398c.37-.7.78-1.43 1.11-2.17a82.93 82.93 0 007.21-20.82 82 82 0 001.72-16.84 84.49 84.49 0 00-51.79-77.76 81.4 81.4 0 00-8.77-3.12 84.06 84.06 0 00-20.86-3.48h-3.36c-2.29 0-4.58.08-6.84.29-1.35.08-2.7.24-4 .45a64.54 64.54 0 00-6.56 1.11c-.37.08-.78.12-1.15.24h-.2a108.82 108.82 0 00-4.75-14 113 113 0 00-44.9-52.67 2.06 2.06 0 01-.29-.17c-1.27-.77-2.54-1.51-3.85-2.25-.73-.41-1.47-.82-2.25-1.23-.33-.16-.62-.33-.94-.49a114 114 0 00-95.92-4.1 90.09 90.09 0 01176.8 6.6 39.5 39.5 0 0113.31-2.36c21.76 0 39.42 17.45 39.42 39v.49a79.32 79.32 0 0136.5-8.85c44.42 0 80.43 36.3 80.43 81.05z"
                ></path>
                <path
                    fill={colorCloud}
                    d="M409.12 229.32c0 46.61-38 84.39-84.81 84.39H74.17c-39 0-70.67-31.51-70.67-70.32a70.5 70.5 0 0170.67-70.32 67.43 67.43 0 019 .59c1.24-61.07 51.37-110.21 113.05-110.21a113 113 0 01109.3 83.6 84.24 84.24 0 0118.77-2.11c46.84 0 84.83 37.81 84.83 84.38z"
                ></path>

            {/* shading */}
                <path
                    fill="#666666"
                    d="M498.07 188.08c0 44.79-36 81.09-80.43 81.09h-18.19-.05a84.76 84.76 0 01-74.73 44.58H74.53c84.53 0 172.46-169.63 173-237.48v-.7a.14.14 0 00.08 0 101.64 101.64 0 019.22 5.29c3-.29 20.73-38 20.73-70a90.43 90.43 0 0150.84 67.89 39.46 39.46 0 0152.73 36.67v.49a79.36 79.36 0 0136.51-8.85c44.41-.02 80.43 36.28 80.43 81.02z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#333333"
                    d="M498.07 188.44c0 44.78-36 81.08-80.43 81.08h-18.76a1 1 0 01-.16.25 84.8 84.8 0 01-74.41 43.92H158c26.59-.9 263.17-18.85 241.29-103.25-15.2-58.55-72.81-61.67-93.75-56.75a38.79 38.79 0 00-17.54 9.75c0-3.32 12.45-14.09 16.67-16.06s13.29-2.8 19.73-2.8a84.81 84.81 0 0184.71 84.75 80.41 80.41 0 01-.74 11c12.75-3.94 97.11-31.1 77.16-76.17-28.19-63.63-86.25-50-104.36-43.39-7.46 2.7-14 8.77-14 8.77.2-3.24 13-13.32 13.93-13.32a79.32 79.32 0 0136.5-8.85c44.46.02 80.47 36.32 80.47 81.07z"
                    opacity="0.5"
                ></path>

            {/* cloud outline */}
                <path 
                    fill={stroke}
                    d="M417.28 104.75a82.14 82.14 0 00-34.28 7.51 41.8 41.8 0 00-53.14-36.51 92.35 92.35 0 00-180.67-4.79c-39.35 17.13-67.62 55.59-69.43 100.44a68.51 68.51 0 00-7-.35C32.62 171.02 0 203.48 0 243.39s32.62 72.36 72.73 72.36h250.13a87 87 0 0075.78-44.3h18.64c45.61 0 82.72-37.41 82.72-83.38s-37.11-83.32-82.72-83.32zm-94.42 206.91H72.73c-37.85 0-68.63-30.63-68.63-68.27s30.78-68.28 68.63-68.28a66.59 66.59 0 018.74.58 2.08 2.08 0 001.61-.48 2 2 0 00.71-1.51c.91-44.52 28.87-82.83 67.92-99.42h.41a111.2 111.2 0 01145.12 59.74 105.32 105.32 0 014.65 13.67 2.28 2.28 0 002.75 1.64c2.41-.57 15.82-2.06 18.24-2.06a82.18 82.18 0 0123.58 3.43 79.16 79.16 0 018.51 3 1.57 1.57 0 00.23.09 82 82 0 0150.19 75.57 80.37 80.37 0 01-8.73 36.72c-.25.55-1.17 2.52-1.21 2.77a82.9 82.9 0 01-72.59 42.81zm94.42-44.8h-15.9a84.75 84.75 0 008.6-37.53 86.64 86.64 0 00-53.19-79.89l-.24-.08a80.84 80.84 0 00-8.8-3.11 86.7 86.7 0 00-24.87-3.62c-2.56 0-15.22 1.32-17.14 1.71a112.73 112.73 0 00-4.26-12.14 115.79 115.79 0 00-146.9-63.86A87.34 87.34 0 01239 4.59c42.9 0 80.22 32 86.81 74.47a2.29 2.29 0 003 1.81 37.32 37.32 0 0112.54-2.12c20.47 0 37.13 16.45 37.13 36.67v.49a2.29 2.29 0 003.34 2 76.55 76.55 0 0135.46-8.59c43.08 0 78.13 35.32 78.13 78.75s-35.05 78.79-78.13 78.79z"
                ></path>
            </svg>
        </div>
    );
};

CloudyDrizzle2.propTypes = {
    size: PropTypes.number,
    stroke: PropTypes.string,
    colorCloud: PropTypes.string, 
    colorRain: PropTypes.string
};

CloudyDrizzle2.defaultProps = {
    size: 100,
    stroke: '#121212',
    colorCloud: '#e6e6e6',
    colorRain: '#29abe2'
};

export default CloudyDrizzle2;
