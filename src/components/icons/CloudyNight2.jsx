import React from "react";
import PropTypes from 'prop-types';

const CloudyNight2 = ({ className, size, stroke, colorMoon, colorStars, colorCloud }) => {
    return (
        <div className={className}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 292.36"
                preserveAspectRatio='xMinYMin slice'
                width={size}
                height={size * 0.58472}>

            {/* moon body */}
                <path
                    fill={colorMoon}
                    d="M183.37 101.48a90.76 90.76 0 01-65 85.46 89.34 89.34 0 01-25.73 3.74 90.81 90.81 0 01-90.51-83.2c-.24-2.5-.34-5-.34-7.63a90.74 90.74 0 0160.69-85.61 88.72 88.72 0 0127.26-5.06 13.39 13.39 0 011.39 0 72.63 72.63 0 1092.24 92.37z"
                ></path>

            {/* stars body */}
                <path
                    fill={colorStars}
                    d="M125.58 29.77L128.15 14.18 130.72 29.77 146.31 32.34 130.72 34.91 128.15 50.49 125.58 34.91 110 32.34 125.58 29.77z"
                ></path>
                <path
                    fill={colorStars}
                    d="M150.61 47.16L152.15 37.81 153.69 47.16 163.04 48.7 153.69 50.24 152.15 59.6 150.61 50.24 141.25 48.7 150.61 47.16z"
                ></path>
                <path
                    fill={colorStars}
                    d="M136.79 61.09L137.82 54.86 138.85 61.09 145.08 62.12 138.85 63.15 137.82 69.38 136.79 63.15 130.56 62.12 136.79 61.09z"
                ></path>

            {/* moon shade 1 */}
                <path
                    fill="#e6e6e6"
                    d="M118.34 186.89v.05a89.34 89.34 0 01-25.73 3.74 90.81 90.81 0 01-90.48-83.2c-.24-2.5-.34-5-.34-7.63a90.74 90.74 0 0160.69-85.61 88.72 88.72 0 0127.26-5.06c-7.06.29-21.26 3-27.36 6-11.15 5.41-25.79 17.69-33.37 28-9.01 12.1-13.54 29-14.12 43.09-.89 22.55 2.11 40.15 12.64 56.7 8.32 13 23.7 30.36 51 40.85 18.52 5.81 33.47 3.6 39.81 3.07z"
                    opacity="0.2"
                ></path>

            {/* moon shade 2 */}
                <path
                    fill="#f2f2f2"
                    d="M62.48 14.24C43.72 25.71 36.84 32.08 29 41.58s-14.84 24-16.28 41.09c-1.26 15-6.78 24.81-10.55 24.81-.24-2.5-.34-5-.34-7.63a90.74 90.74 0 0160.65-85.61z"
                    opacity="0.2"
                ></path>

            {/* moon outlines  */}
                <path 
                    fill={stroke} 
                    d="M183.68 99.68h-.31a1.83 1.83 0 00-1.72 1.22 70.82 70.82 0 11-89.94-90.06 1.81 1.81 0 00-.58-3.53C40.87 8.09 0 49.62 0 99.87a92.72 92.72 0 0092.61 92.61c50.18 0 91.71-40.81 92.57-91a1.82 1.82 0 00-1.5-1.8zm-91.07 91A90.78 90.78 0 0191.12 9.13a72.63 72.63 0 1092.25 92.36 90.77 90.77 0 01-90.76 89.17z"
                ></path>
                <path 
                    fill={stroke} 
                    d="M109.7 34.18l14.3 2.36 2.36 14.3a1.81 1.81 0 003.58 0l2.36-14.3 14.3-2.36a1.81 1.81 0 000-3.58l-14.3-2.42-2.36-14.3a1.81 1.81 0 00-3.58 0L124 28.18l-14.3 2.36a1.81 1.81 0 000 3.58zm15.88-4.36l2.57-15.64 2.57 15.59 15.59 2.57-15.59 2.57-2.57 15.58-2.57-15.58L110 32.34zM139.44 48.7a1.81 1.81 0 001.52 1.79l8.07 1.33 1.33 8.07a1.81 1.81 0 003.58 0l1.33-8.07 8.07-1.33a1.81 1.81 0 000-3.58l-8.07-1.33-1.33-8.07a1.81 1.81 0 00-3.58 0L149 45.58l-8 1.33a1.81 1.81 0 00-1.56 1.79zm11.17-1.52l1.54-9.35 1.54 9.35 9.35 1.54-9.35 1.54-1.54 9.36-1.54-9.36-9.36-1.54zM140.43 59.51l-.82-5a1.81 1.81 0 00-3.58 0l-.82 5-5 .82a1.81 1.81 0 000 3.58l5 .82.82 4.95a1.81 1.81 0 003.58 0l.82-4.95 4.95-.82a1.81 1.81 0 000-3.58zm-1.58 3.67l-1 6.23-1-6.23-6.23-1 6.23-1 1-6.23 1 6.23 6.23 1z"
                ></path>
                
            {/* cloud */}
                <path
                    fill={colorCloud}
                    d="M498.22 174.47c0 41.47-33.35 75.08-74.47 75.08h-18.18c.34-.64.72-1.33 1-2a76.22 76.22 0 006.67-19.27 75 75 0 001.6-15.59 78.25 78.25 0 00-48-72 72.35 72.35 0 00-8.12-2.88 77.55 77.55 0 00-19.31-3.23H336.3c-2.13 0-4.25.07-6.34.26-1.25.08-2.5.23-3.72.42-2.08.26-4.09.57-6.07 1-.34.08-.72.12-1.06.23h-.19a98 98 0 00-4.4-12.94A104.54 104.54 0 00273 74.74l-.27-.16c-1.17-.72-2.35-1.4-3.56-2.08-.69-.38-1.37-.76-2.09-1.14l-.87-.46a105.61 105.61 0 00-88.81-3.79 83.41 83.41 0 01163.72 6.07 36.53 36.53 0 0148.82 34v.46a73.39 73.39 0 0133.81-8.2c41.12-.01 74.47 33.61 74.47 75.03z"
                ></path>
                <path
                    fill="#e6e6e6"
                    d="M415.85 212.33c0 43.16-35.18 78.13-78.53 78.13H105.71a65.11 65.11 0 110-130.22 62.29 62.29 0 018.35.55c1.16-56.54 47.57-102 104.68-102a104.63 104.63 0 01101.2 77.39 78.6 78.6 0 0117.38-2c43.35 0 78.53 35 78.53 78.15z"
                ></path>
                <path
                    fill="#666666"
                    d="M498.21 174.18c0 41.46-33.35 75.08-74.47 75.08h-16.85a78.5 78.5 0 01-69.2 41.2H106.05c78.27 0 159.68-157.06 160.17-219.88v-.65a.14.14 0 00.08 0 94 94 0 018.53 4.9c2.81-.27 19.2-35.17 19.2-64.8a83.74 83.74 0 0147 62.82 36.91 36.91 0 0112.33-2.12 36.3 36.3 0 0136.5 36.08v.45a73.46 73.46 0 0133.8-8.19c41.2.04 74.55 33.65 74.55 75.11z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#333333"
                    d="M498.22 174.47c0 41.47-33.35 75.08-74.47 75.08h-17.38a1 1 0 01-.15.23 78.52 78.52 0 01-68.9 40.67h-154c24.62-.84 243.67-17.45 223.41-95.6-14.07-54.22-67.41-57.1-86.8-52.55a35.93 35.93 0 00-16.2 9c0-3.07 11.53-13.05 15.44-14.87s12.31-2.59 18.26-2.59a78.52 78.52 0 0178.44 78.46 74.83 74.83 0 01-.68 10.21c11.8-3.64 89.91-28.79 71.44-70.53-26.1-58.91-79.86-46.28-96.63-40.17-6.9 2.5-12.94 8.12-12.94 8.12.19-3 12-12.33 12.9-12.33a73.39 73.39 0 0133.81-8.2c41.1.03 74.45 33.65 74.45 75.07z"
                    opacity="0.5"
                ></path>
                <path 
                    fill={stroke}
                    d="M423.4 96.97a76.1 76.1 0 00-31.78 7 38.71 38.71 0 00-49.16-33.83 85.5 85.5 0 00-167.28-4.44c-36.44 15.87-62.62 51.47-64.29 93a64.06 64.06 0 00-6.51-.32c-37.14 0-67.34 30.05-67.34 67s30.2 67 67.34 67H336a80.52 80.52 0 0070.16-41h17.24c42.24 0 76.6-34.64 76.6-77.21s-34.36-77.2-76.6-77.2zM336 288.57H104.38c-35 0-63.55-28.36-63.55-63.22s28.51-63.17 63.55-63.17a62.14 62.14 0 018.1.53 1.89 1.89 0 002.14-1.84c.84-41.22 26.73-76.69 62.89-92a2.32 2.32 0 00.38 0 103 103 0 01134.37 55.31 99.37 99.37 0 014.31 12.66 2.11 2.11 0 002.54 1.52c2.24-.53 14.65-1.91 16.89-1.91a76.06 76.06 0 0121.83 3.18 71.12 71.12 0 017.88 2.8l.22.07a76 76 0 0146.47 70 74.43 74.43 0 01-8.09 34c-.22.51-1.08 2.33-1.12 2.56A76.73 76.73 0 01336 288.57zm87.41-41.48h-14.72a78.57 78.57 0 008-34.76 80.2 80.2 0 00-49.25-74l-.22-.08a74.51 74.51 0 00-8.15-2.88 80.4 80.4 0 00-23-3.35c-2.37 0-14.1 1.23-15.87 1.59a101.87 101.87 0 00-3.95-11.24 107.23 107.23 0 00-136-59.14 80.88 80.88 0 0178.13-59c39.72 0 74.27 29.64 80.38 69a2.07 2.07 0 001 1.5 2.11 2.11 0 001.8.18 34.43 34.43 0 0146 32v.46a2.12 2.12 0 003.1 1.88 70.78 70.78 0 0132.82-8c39.9 0 72.35 32.71 72.35 72.91s-32.53 72.93-72.43 72.93z"
                ></path>
            </svg>
        </div>
    );
};

CloudyNight2.propTypes = {
    size: PropTypes.number,
    stroke: PropTypes.string,
    colorMoon: PropTypes.string,
    colorStars: PropTypes.string,
    colorCloud: PropTypes.string
};

CloudyNight2.defaultProps = {
    size: 100,
    stroke: '#121212',
    colorMoon: '#29abe2',
    colorStars: '#29abe2',
    colorCloud: '#e6e6e6'
};

export default CloudyNight2;
