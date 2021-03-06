import React from "react";
import PropTypes from 'prop-types';

const CloudyHail2 = ({ className, size, stroke, colorCloud, colorHail }) => {
    return (
        <div className={className}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 484.2"
                preserveAspectRatio='xMinYMin slice'
                width={size}
                height={size * 0.9684}>
            
            {/* single hail body, shading and outline */}
                <circle cx="207.68" cy="320.11" r="38.82" fill={colorHail}></circle>
                <path
                    fill="#999"
                    d="M180.75 324.52l2.61-10.14a22.13 22.13 0 01.9-2.83 26 26 0 00-.9 14.18l2.17 10.23c1.91 9 12.53 17 22 20a26.46 26.46 0 009.28 1.15l3-.12a39.06 39.06 0 01-20 1.12l-7.66-4.89a26.28 26.28 0 01-11.4-28.7z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#999"
                    d="M174 339.45a38.72 38.72 0 01-4.61-26.06 38.41 38.41 0 015.29-13.82A39 39 0 01185 288.52a39.46 39.46 0 0114.15-6.37 38.86 38.86 0 0127.4 4 38.83 38.83 0 0118.75 24.79 38.07 38.07 0 01.95 6.11l-2.54-6.53a26.32 26.32 0 00-26.12-16.54l-10.43.65a26.34 26.34 0 00-23.8 19.73l-2.61 10.16a26.28 26.28 0 0011.39 28.72l7.66 4.89a37.9 37.9 0 01-12.43-4.94A38.4 38.4 0 01176 342.57c-.7-1.05-1.37-2.05-2-3.12z"
                    opacity="0.5"
                ></path>
                <path 
                    stroke={stroke}
                    d="M187.68 285.46A40 40 0 11173 340.11a40 40 0 0114.68-54.65zm38.82 67.25a37.64 37.64 0 10-51.42-13.78 37.71 37.71 0 0051.42 13.78z"
                ></path>

            {/* single hail body, shading and outline */}
                <circle cx="249.18" cy="444.21" r="38.82" fill={colorHail}></circle>
                <path
                    fill="#999"
                    d="M253.56 471.13l-10.14-2.61a22.13 22.13 0 01-2.83-.9 26 26 0 0014.18.91l10.23-2.18c9-1.91 17-12.53 20-22a26.55 26.55 0 001.15-9.29l-.12-3a39 39 0 011.12 20l-4.89 7.67a26.29 26.29 0 01-28.7 11.4z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#999"
                    d="M268.52 477.87a38.73 38.73 0 01-50.89-11 39.51 39.51 0 01-6.37-14.16 38.86 38.86 0 014-27.4 39.19 39.19 0 0110.34-11.89 38.71 38.71 0 0114.4-6.9 38.07 38.07 0 016.11-.95l-6.57 2.57A26.32 26.32 0 00223 434.29l.65 10.43a26.23 26.23 0 0015.15 22.16 25 25 0 004.58 1.64l10.14 2.61a26.29 26.29 0 0028.72-11.38l4.89-7.67a37.9 37.9 0 01-4.9 12.44 38.4 38.4 0 01-10.59 11.36 42.23 42.23 0 01-3.12 1.99z"
                    opacity="0.5"
                ></path>
                <path 
                    stroke={stroke}
                    d="M214.53 464.21a40 40 0 1154.65 14.64 40 40 0 01-54.65-14.64zm67.25-38.83A37.64 37.64 0 10268 476.81a37.7 37.7 0 0013.78-51.43z"
                ></path>

            {/* single hail body, shading and outline */}   
                <circle cx="124.6" cy="403.16" r="38.82" fill={colorHail}></circle>
                <path
                    fill="#999"
                    d="M151.74 405.89l-5.15 9.12a21.1 21.1 0 01-1.59 2.51 26.08 26.08 0 004.54-13.47l.54-10.44c.49-9.2-7.7-19.65-16.06-25a26.8 26.8 0 00-8.67-3.52l-2.93-.65a39 39 0 0119.58 4.08l6.14 6.7a26.27 26.27 0 013.6 30.67z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#999"
                    d="M162.12 393.18a38.67 38.67 0 01-23.81 46.34 39.22 39.22 0 01-15.32 2.5 38.76 38.76 0 01-37.13-39.74 39.61 39.61 0 01.66-6.15l.78 7a26.34 26.34 0 0021 22.74l10.24 2.06a26.26 26.26 0 0025.33-8.89 25.41 25.41 0 002.76-4l5.15-9.12a26.27 26.27 0 00-3.56-30.69l-6.22-6.71a37.78 37.78 0 0110.73 8 38.56 38.56 0 018.27 13.13c.43 1.16.8 2.34 1.12 3.53z"
                    opacity="0.5"
                ></path>
                <path 
                    stroke={stroke}
                    d="M135 441.79a40 40 0 1128.29-49 40 40 0 01-28.29 49zm-20.09-75A37.64 37.64 0 10161 393.41a37.68 37.68 0 00-46.14-26.61z"
                ></path>

            {/* single hail body, shading and outline */}
                <circle cx="374.6" cy="386.16" r="38.82" fill={colorHail}></circle>
                <path
                    fill="#999"
                    d="M390.54 364.02l5.32 9a22 22 0 011.37 2.64 26 26 0 00-9.39-10.67l-8.78-5.69c-7.71-5-20.86-3.15-29.7 1.39a26.62 26.62 0 00-7.38 5.76l-2 2.21a39 39 0 0113.32-14.94l8.88-2a26.28 26.28 0 0128.36 12.3z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#999"
                    d="M384.72 348.67a38.72 38.72 0 0128.2 43.77 39.51 39.51 0 01-5.5 14.52 38.53 38.53 0 01-9.84 10.56 38.79 38.79 0 01-48.14-1.88l6.46 2.83a26.32 26.32 0 0030.17-6.78l6.91-7.84a26.25 26.25 0 005-26.38 25.63 25.63 0 00-2.08-4.4l-5.32-9a26.28 26.28 0 00-28.36-12.26l-8.88 2a38.1 38.1 0 0112.28-5.3 38.52 38.52 0 0115.53-.54c1.17.12 2.38.38 3.57.7z"
                    opacity="0.5"
                ></path>
                <path 
                    stroke={stroke}
                    d="M413.24 396.52a40 40 0 11-28.24-49 40 40 0 0128.24 49zm-75-20.1a37.64 37.64 0 1046.1-26.61 37.7 37.7 0 00-46.1 26.6z"
                ></path>

            {/* cloud body, shading and outline */}    
                <path
                    fill={colorCloud}
                    d="M498.07 188.43c0 44.78-36 81.09-80.43 81.09H398c.37-.7.78-1.44 1.11-2.18a82.86 82.86 0 007.23-20.82 82 82 0 001.72-16.84 84.51 84.51 0 00-51.79-77.77 81.35 81.35 0 00-8.77-3.11 83.14 83.14 0 00-20.86-3.48h-3.36c-2.29 0-4.58.08-6.84.28-1.35.09-2.7.25-4 .45-2.26.29-4.43.62-6.56 1.11a9.46 9.46 0 00-1.15.25h-.2a107.79 107.79 0 00-4.75-14 113 113 0 00-44.87-52.74l-.29-.16c-1.27-.78-2.54-1.52-3.85-2.25-.73-.41-1.47-.82-2.25-1.23l-.94-.49a113.94 113.94 0 00-95.97-4.02 90.1 90.1 0 0187.72-69.86 89.07 89.07 0 0138.27 8.57 90.44 90.44 0 0150.81 67.85 39.46 39.46 0 0152.73 36.67v.49a79.2 79.2 0 0136.5-8.85c44.42 0 80.43 36.3 80.43 81.04z"
                ></path>
                <path
                    fill={colorCloud}
                    d="M409.12 229.32c0 46.61-38 84.38-84.81 84.38H74.17c-39 0-70.67-31.5-70.67-70.32a70.51 70.51 0 0170.67-70.32 69.13 69.13 0 019 .59c1.24-61.06 51.37-110.2 113.05-110.2a113 113 0 01109.3 83.59 84.83 84.83 0 0118.77-2.11c46.84 0 84.83 37.78 84.83 84.39z"
                ></path>
                <path
                    fill="#666666"
                    d="M498.07 188.08c0 44.78-36 81.08-80.43 81.08h-18.19-.05a84.76 84.76 0 01-74.73 44.5H74.53c84.53 0 172.46-169.62 173-237.48v-.66a.14.14 0 00.08 0 104 104 0 019.22 5.28c3-.28 20.73-38 20.73-70a90.45 90.45 0 0150.84 67.92 39.81 39.81 0 0113.32-2.29 39.2 39.2 0 0139.41 39v.5a79.24 79.24 0 0136.51-8.85c44.41-.04 80.43 36.26 80.43 81z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#333333"
                    d="M498.07 188.43c0 44.78-36 81.09-80.43 81.09h-18.76a.84.84 0 01-.16.24 84.8 84.8 0 01-74.41 43.92H158c26.59-.9 263.17-18.84 241.29-103.25-15.2-58.55-72.81-61.66-93.75-56.74a38.79 38.79 0 00-17.54 9.75c0-3.32 12.45-14.1 16.67-16.06s13.29-2.8 19.73-2.8a84.8 84.8 0 0184.71 84.74 80.2 80.2 0 01-.74 11c12.75-3.93 97.11-31.1 77.16-76.16-28.19-63.64-86.25-50-104.36-43.39-7.46 2.7-14 8.76-14 8.76.2-3.23 13-13.31 13.93-13.31a79.2 79.2 0 0136.5-8.85c44.46.02 80.47 36.32 80.47 81.06z"
                    opacity="0.5"
                ></path>
                <path 
                    stroke={stroke}
                    d="M417.28 104.72a82.29 82.29 0 00-34.28 7.53 41.8 41.8 0 00-53.14-36.53 92.35 92.35 0 00-180.67-4.79c-39.35 17.13-67.62 55.59-69.43 100.43-2.32-.23-4.68-.35-7-.35C32.62 171.01 0 203.52 0 243.38s32.62 72.37 72.73 72.37h250.13a87 87 0 0075.78-44.31h18.64c45.61 0 82.72-37.4 82.72-83.38s-37.11-83.34-82.72-83.34zm-94.42 206.93H72.73c-37.85 0-68.63-30.62-68.63-68.27s30.78-68.27 68.63-68.27a66.59 66.59 0 018.74.57 2.08 2.08 0 001.61-.47 2.05 2.05 0 00.71-1.52c.91-44.51 28.87-82.82 67.92-99.41a2.7 2.7 0 00.41-.05 111.2 111.2 0 01145.12 59.73 106 106 0 014.65 13.68 2.29 2.29 0 002.75 1.64c2.41-.57 15.82-2.07 18.24-2.07a82.19 82.19 0 0123.58 3.44 77 77 0 018.51 3l.23.08a82 82 0 0150.19 75.57 80.41 80.41 0 01-8.73 36.73c-.25.54-1.17 2.51-1.21 2.77a82.89 82.89 0 01-72.59 42.85zm94.42-44.8h-15.9a84.69 84.69 0 008.62-37.53 86.62 86.62 0 00-53.19-79.88l-.24-.08a83.14 83.14 0 00-8.8-3.12 86.7 86.7 0 00-24.87-3.62c-2.56 0-15.22 1.33-17.14 1.72a112 112 0 00-4.26-12.14 115.82 115.82 0 00-146.9-63.87A87.35 87.35 0 01239 4.59c42.9 0 80.22 32 86.81 74.47a2.29 2.29 0 003 1.81 37.32 37.32 0 0112.54-2.16c20.47 0 37.13 16.45 37.13 36.67v.49a2.29 2.29 0 003.34 2 76.44 76.44 0 0135.46-8.6c43.08 0 78.13 35.33 78.13 78.75s-35.05 78.83-78.13 78.83z"
                ></path>
            </svg>
        </div>
    );
};

CloudyHail2.propTypes = {
    size: PropTypes.number,
    stroke: PropTypes.string,
    colorCloud: PropTypes.string,
    colorHail: PropTypes.string
};

CloudyHail2.defaultProps = {
    size: 100,
    stroke: '#121212',
    colorCloud: '#e6e6e6',
    colorHail: '#adfffa'
};

export default CloudyHail2;