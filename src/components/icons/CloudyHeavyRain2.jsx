import React from "react";
import PropTypes from 'prop-types';

const CloudyHeavyRain2 = ({ className, size, stroke, colorCloud, colorRain }) => {
    return (
        <div className={className}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 438.62"
                preserveAspectRatio='xMinYMin slice'
                width={size}
                height={size * 0.87724}>

            {/* heavy rain body */}        
                <rect
                    width="34.86"
                    height="121.99"
                    x="124.99"
                    y="355.19"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 191.084 400.84)"
                ></rect>
                <rect
                    width="34.86"
                    height="121.99"
                    x="178.78"
                    y="355.19"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 244.887 400.84)"
                ></rect>
                <rect
                    width="34.86"
                    height="121.99"
                    x="232.57"
                    y="355.19"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 298.673 400.845)"
                ></rect>
                <rect
                    width="34.86"
                    height="121.99"
                    x="286.36"
                    y="355.19"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 352.46 400.85)"
                ></rect>
                <rect
                    width="34.86"
                    height="121.99"
                    x="340.15"
                    y="355.19"
                    fill={colorRain}
                    rx="17.43"
                    transform="rotate(35 406.242 400.84)"
                ></rect>

            {/* heavy rain outline  */} 
                <path 
                    fill={stroke} 
                    d="M167.43 335.87a13.94 13.94 0 0111.4 21.94l-50 71.38a13.943 13.943 0 11-22.84-16l50-71.38a14 14 0 0111.44-5.94m0-3.49a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.433 17.433 0 0028.56 20l50-71.38a17.44 17.44 0 00-4.28-24.28 17.37 17.37 0 00-10-3.15zM221.22 335.87a13.94 13.94 0 0111.4 21.94l-50 71.38a13.94 13.94 0 01-25.15-5.58 13.82 13.82 0 012.31-10.42l50-71.38a14 14 0 0111.44-5.94m0-3.49a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.43 17.43 0 004.28 24.27 17.42 17.42 0 0024.28-4.27l50-71.38a17.44 17.44 0 00-4.28-24.28 17.37 17.37 0 00-10-3.15zM275 335.87a13.94 13.94 0 0111.4 21.94l-50 71.38a13.943 13.943 0 11-22.84-16l50-71.38a14 14 0 0111.44-5.94m0-3.49a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.43 17.43 0 004.3 24.27 17.42 17.42 0 0024.28-4.27l50-71.38a17.44 17.44 0 00-4.28-24.28 17.37 17.37 0 00-10-3.15zM328.8 335.87a13.94 13.94 0 0111.4 21.94l-50 71.38a13.943 13.943 0 11-22.84-16l50-71.38a14 14 0 0111.44-5.94m0-3.49a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.433 17.433 0 0028.56 20l50-71.38a17.44 17.44 0 00-4.28-24.28 17.37 17.37 0 00-10-3.15zM382.59 335.87A13.94 13.94 0 01394 357.81l-50 71.38a13.94 13.94 0 01-25.15-5.58 13.82 13.82 0 012.31-10.42l50-71.38a14 14 0 0111.44-5.94m0-3.49a17.42 17.42 0 00-14.3 7.43l-50 71.38a17.43 17.43 0 004.28 24.27 17.42 17.42 0 0024.28-4.27l50-71.38a17.44 17.44 0 00-4.28-24.28 17.37 17.37 0 00-10-3.15z"
                ></path>

            {/* cloud body */} 
                <path
                    fill={colorCloud}
                    d="M498.07 188.43c0 44.79-36 81.09-80.43 81.09H398c.37-.7.78-1.44 1.11-2.17a82.93 82.93 0 007.21-20.82 82 82 0 001.72-16.84 84.48 84.48 0 00-51.79-77.76 79.3 79.3 0 00-8.77-3.12 84.06 84.06 0 00-20.88-3.5h-3.36c-2.29 0-4.58.08-6.84.29-1.35.08-2.7.24-4 .45a64.55 64.55 0 00-6.56 1.1c-.37.09-.78.13-1.15.25h-.2a108.82 108.82 0 00-4.75-14 113 113 0 00-44.87-52.73 2.06 2.06 0 01-.29-.17c-1.27-.78-2.54-1.51-3.85-2.25-.73-.41-1.47-.82-2.25-1.23-.33-.16-.62-.33-.94-.49a114 114 0 00-95.92-4.1 90.09 90.09 0 01176.8 6.6 39.46 39.46 0 0152.73 36.67v.49a79.32 79.32 0 0136.5-8.85c44.41.05 80.42 36.35 80.42 81.09z"
                ></path>
                <path
                    fill={colorCloud}
                    d="M409.12 229.31c0 46.61-38 84.38-84.81 84.38H74.17c-39 0-70.67-31.5-70.67-70.32a70.51 70.51 0 0170.67-70.32 67.43 67.43 0 019 .6c1.24-61.07 51.37-110.21 113.05-110.21a113 113 0 01109.3 83.6 84.24 84.24 0 0118.77-2.11c46.84.01 84.83 37.78 84.83 84.38z"
                ></path>

            {/* cloud outline */}
                <path
                    fill="#666666"
                    d="M498.07 188.08c0 44.79-36 81.09-80.43 81.09h-18.19-.05a84.76 84.76 0 01-74.73 44.49H74.53c84.53 0 172.46-169.62 173-237.47v-.7a.14.14 0 00.08 0 101.64 101.64 0 019.22 5.29c3-.29 20.73-38 20.73-70a90.42 90.42 0 0150.81 67.85 39.46 39.46 0 0152.73 36.67v.49a79.24 79.24 0 0136.51-8.85c44.44.1 80.46 36.37 80.46 81.14z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#333333"
                    d="M498.07 188.43c0 44.79-36 81.09-80.43 81.09h-18.76a.84.84 0 01-.16.24 84.79 84.79 0 01-74.41 43.93H158c26.59-.91 263.17-18.85 241.29-103.25-15.2-58.55-72.81-61.67-93.75-56.75a38.79 38.79 0 00-17.54 9.75c0-3.32 12.45-14.09 16.67-16.06s13.29-2.8 19.73-2.8a84.81 84.81 0 0184.72 84.73 80.45 80.45 0 01-.74 11c12.75-3.94 97.11-31.1 77.16-76.17-28.19-63.63-86.25-50-104.36-43.39-7.46 2.7-14 8.77-14 8.77.2-3.24 13-13.32 13.93-13.32a79.32 79.32 0 0136.5-8.85c44.45.04 80.46 36.34 80.46 81.08z"
                    opacity="0.5"
                ></path>
                
            {/* cloud outline */}
                <path 
                    fill={stroke} 
                    d="M417.28 104.73a82.28 82.28 0 00-34.28 7.52 41.8 41.8 0 00-53.09-36.53 92.35 92.35 0 00-180.67-4.79c-39.35 17.13-67.62 55.59-69.43 100.43-2.32-.23-4.68-.34-7-.34C32.62 171.02 0 203.48 0 243.38s32.62 72.37 72.73 72.37h250.13a86.94 86.94 0 0075.78-44.31h18.64c45.61 0 82.72-37.4 82.72-83.37s-37.11-83.34-82.72-83.34zm-94.42 206.92H72.73c-37.85 0-68.63-30.62-68.63-68.27s30.78-68.27 68.63-68.27a66.59 66.59 0 018.74.58 2.08 2.08 0 001.61-.48 2 2 0 00.71-1.51c.91-44.52 28.87-82.83 67.92-99.42h.41a111.2 111.2 0 01145.12 59.74 105.32 105.32 0 014.65 13.67 2.28 2.28 0 002.75 1.64c2.41-.57 15.82-2.07 18.24-2.07a82.19 82.19 0 0123.58 3.44 79.16 79.16 0 018.51 3l.23.08a82 82 0 0150.19 75.53 80.41 80.41 0 01-8.73 36.73c-.25.55-1.17 2.52-1.21 2.77a82.89 82.89 0 01-72.59 42.84zm94.42-44.79h-15.9a84.77 84.77 0 008.62-37.55 86.63 86.63 0 00-53.19-79.88l-.24-.08a80.84 80.84 0 00-8.8-3.11 86.35 86.35 0 00-24.87-3.62c-2.56 0-15.22 1.32-17.14 1.71a112 112 0 00-4.26-12.14 115.82 115.82 0 00-146.92-63.88A87.35 87.35 0 01239 4.59c42.9 0 80.22 32 86.81 74.47a2.29 2.29 0 003 1.81 37.32 37.32 0 0112.54-2.16c20.47 0 37.13 16.45 37.13 36.67v.49a2.29 2.29 0 003.34 2 76.55 76.55 0 0135.46-8.56c43.08 0 78.13 35.32 78.13 78.75s-35.05 78.8-78.13 78.8z"
                ></path>
            </svg>
        </div>
    );
};

CloudyHeavyRain2.propTypes = {
    size: PropTypes.number,
    stroke: PropTypes.string,
    colorCloud: PropTypes.string, 
    colorRain: PropTypes.string
};

CloudyHeavyRain2.defaultProps = {
    size: 100,
    stroke: '#121212',
    colorCloud: '#e6e6e6',
    colorRain: '#29abe2'
};

export default CloudyHeavyRain2;