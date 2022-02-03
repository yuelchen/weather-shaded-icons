import React from "react";
import PropTypes from 'prop-types';

const CloudySnowflake2 = ({ className, size, stroke, colorCloud, colorSnow }) => {
    return (
        <div className={className}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 434.38"
                preserveAspectRatio='xMinYMin slice'
                width={size}
                height={size * 0.86876}>

            {/* color body, shading and outline */}
                <path
                    fill={colorCloud}
                    d="M498.07 188.43c0 44.79-36 81.09-80.43 81.09H398c.37-.7.78-1.44 1.11-2.17a82.93 82.93 0 007.21-20.82 82 82 0 001.72-16.84 84.48 84.48 0 00-51.79-77.76 79.3 79.3 0 00-8.77-3.12 83.6 83.6 0 00-20.86-3.48h-3.36c-2.29 0-4.58.08-6.84.29-1.35.08-2.7.24-4 .45a64.55 64.55 0 00-6.56 1.1c-.37.08-.78.13-1.15.25h-.2a108.3 108.3 0 00-4.75-14 113 113 0 00-44.87-52.73l-.29-.17c-1.27-.78-2.54-1.51-3.85-2.25-.73-.41-1.47-.82-2.25-1.23-.33-.16-.62-.33-.94-.49a114 114 0 00-95.92-4.1 90.09 90.09 0 01176.8 6.6 39.46 39.46 0 0152.73 36.67v.49a79.32 79.32 0 0136.5-8.85c44.39.03 80.4 36.33 80.4 81.07z"
                ></path>
                <path
                    fill={colorCloud}
                    d="M409.12 229.32c0 46.61-38 84.38-84.81 84.38H74.17c-39 0-70.67-31.5-70.67-70.32a70.51 70.51 0 0170.67-70.32 69.13 69.13 0 019 .59c1.24-61.06 51.37-110.2 113.05-110.2a113 113 0 01109.3 83.6 84.24 84.24 0 0118.77-2.11c46.84 0 84.83 37.77 84.83 84.38z"
                ></path>
                <path
                    fill="#666"
                    d="M498.07 188.08c0 44.78-36 81.09-80.43 81.09h-18.19-.05a84.76 84.76 0 01-74.73 44.49H74.53c84.53 0 172.46-169.62 173-237.47v-.7a.14.14 0 00.08 0 101.64 101.64 0 019.22 5.29c3-.29 20.73-38 20.73-70a90.42 90.42 0 0150.81 67.85 39.46 39.46 0 0152.73 36.67v.49a79.24 79.24 0 0136.51-8.85c44.44.1 80.46 36.4 80.46 81.14z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#333"
                    d="M498.07 188.43c0 44.79-36 81.09-80.43 81.09h-18.76a.84.84 0 01-.16.24 84.81 84.81 0 01-74.41 43.93H158c26.59-.91 263.17-18.85 241.29-103.26-15.2-58.54-72.81-61.66-93.75-56.74a38.79 38.79 0 00-17.54 9.75c0-3.32 12.45-14.1 16.67-16.06s13.29-2.8 19.73-2.8a84.81 84.81 0 0184.71 84.74 80.2 80.2 0 01-.74 11c12.75-3.93 97.11-31.09 77.16-76.16-28.19-63.63-86.25-50-104.36-43.39-7.46 2.7-14 8.77-14 8.77.2-3.24 13-13.32 13.93-13.32a79.32 79.32 0 0136.5-8.85c44.46.02 80.47 36.32 80.47 81.06z"
                    opacity="0.5"
                ></path>
                <path 
                    fill={stroke} 
                    d="M417.28 104.72a82.29 82.29 0 00-34.28 7.53 41.8 41.8 0 00-53.09-36.53 92.35 92.35 0 00-180.67-4.79c-39.35 17.13-67.62 55.58-69.43 100.43-2.32-.23-4.68-.35-7-.35C32.62 171.01 0 203.48 0 243.38s32.62 72.37 72.73 72.37h250.13a87 87 0 0075.78-44.31h18.64c45.61 0 82.72-37.4 82.72-83.38s-37.11-83.34-82.72-83.34zm-94.42 206.93H72.73c-37.85 0-68.63-30.62-68.63-68.27s30.78-68.27 68.63-68.27a66.59 66.59 0 018.74.57 2 2 0 002.32-2c.91-44.52 28.87-82.83 67.92-99.42h.41A111.2 111.2 0 01297.24 134a105.32 105.32 0 014.65 13.67 2.28 2.28 0 002.75 1.64c2.41-.57 15.82-2.07 18.24-2.07a82.19 82.19 0 0123.58 3.44 79.16 79.16 0 018.51 3l.23.08a82 82 0 0150.19 75.57 80.41 80.41 0 01-8.73 36.73c-.25.55-1.17 2.52-1.21 2.77a82.89 82.89 0 01-72.59 42.82zm94.42-44.8h-15.9a84.69 84.69 0 008.6-37.53 86.63 86.63 0 00-53.19-79.88l-.24-.08a80.84 80.84 0 00-8.8-3.11 86.36 86.36 0 00-24.87-3.63c-2.56 0-15.22 1.33-17.14 1.72a112 112 0 00-4.26-12.15 115.82 115.82 0 00-146.9-63.87A87.35 87.35 0 01239 4.59c42.9 0 80.22 32 86.81 74.47a2.29 2.29 0 003 1.81 37.32 37.32 0 0112.54-2.16c20.47 0 37.13 16.45 37.13 36.67v.49a2.29 2.29 0 003.34 2 76.56 76.56 0 0135.46-8.6c43.08 0 78.13 35.33 78.13 78.75s-35.05 78.83-78.13 78.83z"
                ></path>
                
                {/* snowflake body, shading and outline */}
                <path
                    fill="#0ff"
                    d="M126.7 288.83a4.44 4.44 0 005.41 3.17c18.74-4.61 48-11.76 54.94-13.39 6.35 4 25.15 15.48 27.9 17.11l-17.85 8.29a6 6 0 000 10.77l18.1 8.33c-9.4 5.76-18.7 11.56-27.85 17.27l-54.7-13.59a4.5 4.5 0 00-2.54 8.63l43.39 13.77c-8.45 5.36-16.6 10.62-24.3 15.68a4.592 4.592 0 004.7 7.89c9.66-5.41 17.4-9.87 24.4-14l-10.45 46.34a4.51 4.51 0 008.7 2.34c5.5-18.86 14.7-50.12 16.8-57 6.7-3.92 25.1-14.93 27.4-16.32l-2.05 20.05a6 6 0 003 5.85 5.79 5.79 0 006.4-.5l15.25-11.9c.1 11.31.25 22.62.45 33.79-2.55 2.82-10.9 12.15-38.7 43.17a4.44 4.44 0 00.2 6.3 4.52 4.52 0 006.3-.05l32.5-32.35c.25 9.82.45 19.6.75 29.17a4.55 4.55 0 009.1.1c.4-11.56.6-21.34.6-29.13l32.95 32.5a4.51 4.51 0 006.6-6.15c-16.2-18-34.75-38.7-39-43.56 0 0 .3-26.35.15-33.84l15.6 11.95a5.8 5.8 0 006.4.5 5.92 5.92 0 003.05-5.85l-2.3-20.29q14 8.34 27.95 16.38l16.3 56.66a4.42 4.42 0 005.4 3.18 4.35 4.35 0 003.3-5.31l-10.6-46.2c8.2 4.71 16.4 9.38 24.4 13.84a4.45 4.45 0 006.15-1.48 4.52 4.52 0 00-1.35-6.21c-7.75-5.11-15.3-10-24-15.43l43.75-13.79a4.5 4.5 0 00-2.35-8.68c-18.8 4.61-48 11.75-55 13.34-1.55-.89-22.15-13.39-28.15-17l18.1-8.38a5.93 5.93 0 000-10.77l-17.9-8.26c9.25-5.75 18.5-11.51 27.6-17.26 3.85 1 16 4 54.8 13.49a4.46 4.46 0 005.5-3.07 4.55 4.55 0 00-3-5.56l-43.4-13.65c8.1-5.16 16.15-10.32 23.95-15.38a4.44 4.44 0 001.45-6.2 4.5 4.5 0 00-6-1.64c-8.8 4.86-17.4 9.78-24.2 13.8l10.4-46.5a4.41 4.41 0 00-3.25-5.36 4.52 4.52 0 00-5.45 3.08c-6.85 23.62-14.85 50.91-16.8 57.21-1.5.84-21.65 12.9-27.35 16.43l2.1-20.5a5.89 5.89 0 00-3.05-5.8 5.8 5.8 0 00-6.4.49l-15.35 12c-.1-11.36-.2-22.67-.4-33.79 2.6-2.83 11-12.21 38.75-43a4.51 4.51 0 00-6.45-6.3l-32.6 32.3c-.2-10.22-.5-20.19-.8-29.62a4.6 4.6 0 00-9.2-.1c-.25 9.38-.5 19.35-.5 29.47l-32.85-32.5a4.52 4.52 0 00-6.3-.1 4.44 4.44 0 00-.25 6.26c11.55 12.95 33.9 38 38.7 43.51-.1 8.34-.15 16.92-.2 25.55l.15 8.19-15.5-11.87a5.79 5.79 0 00-6.4-.49 6 6 0 00-3 5.85l2.3 20.48s-25.35-15.09-27.8-16.58l-8.35-29c-4.2-14.59-7.95-27.59-7.95-27.59a4.49 4.49 0 00-8.7 2.18l10.5 46.2c-8.85-5.12-17.2-9.83-24.8-14.05a4.52 4.52 0 00-6.2 1.54 4.58 4.58 0 001.41 6.3c8.69 5.66 16.69 10.77 24.29 15.48l-43.64 13.7a4.42 4.42 0 00-3.06 5.46zm139.85-10.72L265 292.9c-3.3 2-6.4 3.87-9.4 5.75v-12zm-11.2 42.32l9.65 5.76 1.55 14.29-11.05-8.43zm28.55-11l-12.8 5.95c-3.15-1.93-6.35-3.87-9.55-5.8 2.5-1.54 9.7-6.06 9.7-6.06zm-51.45 31.26l1.45-14.5 9.25-5.66c0 2.73.1 11.61.1 11.61zm10.8-42.18l-9.25-5.56-1.6-14.64 10.85 8.28s-.05 8.79 0 11.91zm-28.2 10.87l12.5-5.86s7.5 4.62 9.85 6c-3.15 1.93-6.35 3.92-9.4 5.85z"
                ></path>
                <path
                    fill="#666"
                    d="M153.9 372.73c9.66-5.41 17.4-9.87 24.4-14l-10.45 46.34a4.51 4.51 0 008.7 2.34c5.5-18.86 14.7-50.12 16.8-57 6.7-3.92 25.1-14.93 27.4-16.32l-2.05 20.05a6 6 0 003 5.85 5.79 5.79 0 006.4-.5l15.25-11.9c.1 11.31.25 22.62.45 33.79-2.55 2.82-10.9 12.15-38.7 43.17a4.44 4.44 0 00.2 6.3 4.52 4.52 0 006.3-.05l32.5-32.35c.25 9.82.45 19.6.75 29.17a4.55 4.55 0 009.1.1c.4-11.56.6-21.34.6-29.13l32.95 32.5a4.51 4.51 0 006.6-6.15c-16.2-18-34.75-38.7-39-43.56 0 0 .3-26.35.15-33.84l15.6 11.95a5.8 5.8 0 006.4.5 5.92 5.92 0 003.05-5.85l-2.3-20.26q14 8.34 27.95 16.38l16.3 56.66a4.42 4.42 0 005.4 3.18 4.35 4.35 0 003.3-5.31l-10.6-46.2c8.2 4.71 16.4 9.38 24.4 13.84a4.45 4.45 0 006.15-1.48 4.52 4.52 0 00-1.35-6.21c-7.75-5.11-15.3-10-24-15.43l43.75-13.79a4.5 4.5 0 00-2.35-8.68c-18.8 4.61-48 11.75-55 13.34-1.55-.89-22.15-13.39-28.15-17l18.1-8.38a5.93 5.93 0 000-10.77l-17.9-8.26c9.25-5.75 18.5-11.51 27.6-17.26 3.85 1 16 4 54.8 13.49a4.46 4.46 0 005.5-3.07 4.55 4.55 0 00-3-5.56l-43.4-13.65c8.1-5.16 16.15-10.32 23.95-15.38a4.44 4.44 0 001.45-6.2l-1.7 1v.05L149.51 370.1l-1.76 1a4.53 4.53 0 006.15 1.63zm80-46.54l9.25-5.66c0 2.73.1 11.61.1 11.61l-10.8 8.54zm21.45-5.76l9.65 5.76 1.55 14.29-11.05-8.43z"
                    opacity="0.25"
                ></path>
                <path 
                    fill={stroke} 
                    d="M245.3 333.09l-.15-16.18L232 325l-2 20.19zm-9.5-5.71l5.35-3.27v7l-6.3 5zm17.7 5.61l15.55 11.91-2.15-19.95-13.65-8.14zm4-2l-.1-7 5.7 3.37.95 8.68zm13.5-13.33l17.65-8.29-17.6-8.18-13.4 8.34zm8.15-8.24l-7.9 3.67-5.85-3.57 6-3.72zm-51 8.19l13.1-8.09-13.6-8.33-17.35 8.14zm-8.35-8.29l7.6-3.57s4.7 2.92 6.15 3.77c-2 1.19-3.85 2.38-5.7 3.52zm12.3-15.23l13.3 8-.15-16.48-15.35-11.77zm9.1.79l-5.3-3.18-1-9 6.3 4.82s-.05 5.48 0 7.36zm12.35 7.39l13.35-8.18 2.1-20.5-15.5 12.11zm9.55-10.61c-1.9 1.14-3.75 2.28-5.5 3.37-.05-2.48-.05-4.91-.05-7.39l6.5-5.07zm-35 25.95l13.1-8.09-13.55-8.33-17.35 8.14zm-8.35-8.29l7.6-3.57s4.7 2.92 6.15 3.77c-2 1.19-3.85 2.38-5.7 3.52zm25.6-7.24l-.15-16.48-15.3-11.76 2.2 20.25zm-4.2-7.2l-5.3-3.18-1-9 6.3 4.82s0 5.48.05 7.36zM232 325l-2 20.19 15.3-12.1-.15-16.18zm3.8 2.38l5.35-3.27v7l-6.3 5zm33.25 17.52l-2.15-19.95-13.65-8.14.25 16.18zM257.5 331l-.1-7 5.7 3.37.95 8.68zm9.4-36.91l2.1-20.5-15.5 12.11.05 16.57zm-3.8-2.43c-1.9 1.14-3.75 2.28-5.5 3.37-.05-2.48-.05-4.91-.05-7.39l6.5-5.07zm7.9 26l17.65-8.29-17.6-8.18-13.4 8.34zm8.15-8.24l-7.9 3.67-5.85-3.57 6-3.72zm-154.44-20.1a6.56 6.56 0 007.85 4.62c21.14-5.21 46.54-11.41 54.14-13.2 6 3.77 12.25 7.59 18.55 11.46l.4.25c1.7 1 3.35 2 5 3l-14.4 6.74a7.81 7.81 0 00-4.6 7.2 7.92 7.92 0 004.6 7.24l14.7 6.75c-8 5-16.1 9.93-23.95 14.84l-53.84-13.35a6.47 6.47 0 00-8 4.47 6.38 6.38 0 004.25 8l39.34 12.46c-7.14 4.56-14.09 9-20.64 13.35a6.61 6.61 0 006.74 11.36c7.85-4.47 14.5-8.24 20.4-11.71l-9.45 41.83a6.52 6.52 0 0012.6 3.32c5.2-17.76 14.1-48 16.6-56.27 6.5-3.77 22-13.09 23.25-13.84l-1.65 16.08a8 8 0 004.1 7.79 7.68 7.68 0 008.6-.7l12-9.38c.1 9.73.25 19.36.4 29-3.1 3.43-12.05 13.4-38.15 42.53a6.52 6.52 0 009.4 9l29.2-29c.15 8.24.4 16.47.6 24.46a6.58 6.58 0 0013.15.15c.35-9.33.55-17.52.6-24.41l29.5 29.12a6.45 6.45 0 009.1.15 6.34 6.34 0 00.4-9c-15.2-16.92-33.35-37.11-38.45-43l.2-12.55c.05-4.76.1-10.52.05-16.43l12.25 9.43a7.77 7.77 0 008.6.65 7.94 7.94 0 004.05-7.84l-1.85-16.18c8 4.67 15.85 9.33 23.75 13.9l8.6 29.82c3.9 13.64 5.85 20.49 7.1 24.06l-.15.05.5 1.94a6.47 6.47 0 007.9 4.61 6.38 6.38 0 004.75-7.74l-9.6-41.73q10.35 6 20.4 11.56a6.545 6.545 0 007-11.06c-6.7-4.42-13.25-8.64-20.4-13.15l39.6-12.51a6.48 6.48 0 00-3.4-12.5c-15.25 3.72-45.55 11.11-54.15 13.15-1.3-.75-19.4-11.66-24.25-14.64l14.7-6.85a7.93 7.93 0 000-14.39l-14.5-6.69c7.95-4.92 15.9-9.88 23.75-14.84 4.65 1.14 17.65 4.37 53.95 13.3a6.47 6.47 0 007.9-4.52 6.37 6.37 0 00-4.3-7.94l-39.3-12.4c6.9-4.37 13.7-8.78 20.3-13.05a6.56 6.56 0 00-6.65-11.31c-7.1 4-14.15 7.93-20.25 11.51l9.4-42a6.4 6.4 0 00-4.75-7.79 6.52 6.52 0 00-7.85 4.47c-6.4 22.22-14.25 48.83-16.6 56.37-1.25.8-2.6 1.59-4.15 2.53-1.85 1.14-3.7 2.24-5.5 3.33-4.4 2.58-8.95 5.31-13.55 8.08l1.65-16.42a7.91 7.91 0 00-4.05-7.79 7.68 7.68 0 00-8.6.7l-12.15 9.47c-.05-9.72-.2-19.4-.3-28.93 3.1-3.47 12.1-13.44 38.15-42.42a6.41 6.41 0 00-.25-9.13 6.54 6.54 0 00-9.1.05l-29.25 29c-.2-8.59-.45-16.92-.7-24.91a6.53 6.53 0 00-6.6-6.5 6.61 6.61 0 00-6.65 6.35c-.2 7.84-.4 16.18-.45 24.76l-29.4-29.08a6.51 6.51 0 00-9.55 8.84c11 12.25 32.5 36.42 38.2 42.92-.1 8.08-.15 16.42-.2 24.85l.1 4-12.15-9.32a7.75 7.75 0 00-8.6-.65 8.11 8.11 0 00-4 7.84l1.9 16.42-12.45-7.39c-4.45-2.63-8.8-5.21-11.2-6.65l-8.15-28.33c-3.5-12.31-5.55-19.4-6.9-23.62h.05l-1.05-3.87a6.51 6.51 0 00-12.65 3.08l9.5 41.78c-7.4-4.27-14.34-8.19-20.75-11.76a6.61 6.61 0 00-7 11.21c7.35 4.76 14.15 9.13 20.65 13.2l-39.44 12.4a6.44 6.44 0 00-4.5 7.94zm5.6-4.12l47.79-15s-19.2-12.16-27.95-17.81a2.57 2.57 0 01-.74-3.53 2.5 2.5 0 013.5-.84c7.59 4.22 28.79 16.32 28.79 16.32l-11.6-50.71a2.47 2.47 0 011.91-2.92 2.43 2.43 0 012.94 1.73l16.5 57.41 32 19.06-2.75-24.47a3.85 3.85 0 012-3.87 3.74 3.74 0 014.15.3l18.75 14.44v-38.6s-27.95-31.52-39.25-44.14a2.49 2.49 0 013.65-3.38l36.3 35.93v-4.82c0-10.22.25-20.19.5-29.47a2.54 2.54 0 012.6-2.43 2.5 2.5 0 012.55 2.58c.35 9.43.6 19.35.8 29.57l.1 4.72 36-35.63a2.5 2.5 0 013.55 3.52c-27.75 30.86-39.3 43.67-39.3 43.67l.4 38.6 18.6-14.54a3.66 3.66 0 014.15-.3 3.85 3.85 0 012 3.87l-2.5 24.52 31.5-19s10.3-34.93 17.05-58a2.52 2.52 0 013-1.69 2.45 2.45 0 011.8 3l-11.45 51.05s19.45-11.36 28.2-16.22a2.56 2.56 0 013.35.94v.13a2.46 2.46 0 01-.85 3.47c-7.8 5.07-27.55 17.67-27.55 17.67l47.55 15a2.493 2.493 0 01-1.45 4.77c-38.8-9.58-55.65-13.7-55.65-13.7l-31.5 19.65L301 305.8a4 4 0 010 7.14l-21.55 10 32.1 19.4s40.05-9.68 55.85-13.55a2.44 2.44 0 013 1.74 2.47 2.47 0 01-1.7 3.07l-47.9 15.14s19.85 12.55 27.7 17.71a2.47 2.47 0 01.65 3.42 2.43 2.43 0 01-3.45.85c-8-4.52-28.35-16.18-28.35-16.18L329 405.19a2.49 2.49 0 01-3.75 2.63l-.8-1.83c-1.1-2.48-3-9.28-7.8-25.76l-9-31.35-32.1-18.86 2.75 24.21a3.94 3.94 0 01-2 3.92 3.73 3.73 0 01-4.15-.34l-19-14.54-.1 38.75s23.75 26.69 39.55 44.17a2.51 2.51 0 01-3.7 3.38l-36.4-35.93s-.15 22.38-.6 34a2.53 2.53 0 01-5.05-.15c-.3-9.57-.85-33.89-.85-33.89l-35.9 35.68a2.482 2.482 0 01-3.5-3.52c27.8-31 39.2-43.72 39.2-43.72l-.5-38.65-18.45 14.44a3.73 3.73 0 01-4.15.29 3.83 3.83 0 01-2-3.87l2.45-24.16-31.5 18.86s-11.7 39.44-17.1 57.85a2.37 2.37 0 01-3 1.69 2.47 2.47 0 01-1.74-3l11.49-50.91s-18.69 11-28.44 16.43a2.44 2.44 0 01-3.35-.9v-.05a2.48 2.48 0 01.85-3.57c7.69-5.06 27.84-18 27.84-18l-47.49-15a2.5 2.5 0 011.5-4.76l55.54 13.79 31.7-19.69-21.45-9.89a4 4 0 010-7.14l21.25-9.83-31.75-19.5s-40 9.68-55.84 13.55a3 3 0 01-.65.1 2.44 2.44 0 01-2.35-1.84 2.49 2.49 0 011.65-3.09zm97.84 32.41l13.1-8.09-13.6-8.33-17.35 8.14zm-8.35-8.29l7.6-3.57s4.7 2.92 6.15 3.77c-2 1.19-3.85 2.38-5.7 3.52zm25.6-7.24l-.15-16.48-15.35-11.76 2.2 20.25zm-4.2-7.2l-5.3-3.18-1-9 6.3 4.82s-.05 5.48 0 7.36zM232 325l-2 20.19 15.3-12.1-.15-16.18zm3.8 2.38l5.35-3.27v7l-6.3 5zm33.25 17.52l-2.15-19.95-13.65-8.14.25 16.18zM257.5 331l-.1-7 5.7 3.37.95 8.68zm9.4-36.91l2.1-20.5-15.5 12.11.05 16.57zm-3.8-2.43c-1.9 1.14-3.75 2.28-5.5 3.37-.05-2.48-.05-4.91-.05-7.39l6.5-5.07zm7.9 26l17.65-8.29-17.6-8.18-13.4 8.34zm8.15-8.24l-7.9 3.67-5.85-3.57 6-3.72z"
                    ></path>
            </svg>
        </div>
    );
};

CloudySnowflake2.propTypes = {
    size: PropTypes.number,
    stroke: PropTypes.string,
    colorCloud: PropTypes.string,
    colorSnow: PropTypes.string
};

CloudySnowflake2.defaultProps = {
    size: 100,
    stroke: '#121212',
    colorCloud: '#e6e6e6',
    colorSnow: '#00ffff'
};

export default CloudySnowflake2;