import React from "react";
import PropTypes from 'prop-types';

const Hail = ({ className, size, stroke, colorHail }) => {
    return (
        <div className={className}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 500"
                preserveAspectRatio='xMinYMin slice'
                width={size}
                height={size}>

             {/* hail body, shading and outline */}
                <circle cx="250" cy="250" r="242.64" fill={colorHail}></circle>
                <path
                    fill="#999"
                    d="M409.43 310.43l-45.81 46.7a139.13 139.13 0 01-13.7 12.52 162.44 162.44 0 0049.2-73.95l20.18-62.17c17.85-54.73-14.75-131.07-56.47-177.06-13.2-14.55-29.26-26.19-46.68-35.28l-16.64-8.69c47.91 9.59 88.65 35.11 111.84 56.5l26.22 50.38a164.29 164.29 0 01-28.14 191.05z"
                    opacity="0.25"
                ></path>
                <path
                    fill="#999"
                    d="M492.67 250.47a242.2 242.2 0 01-128.29 213.8 244.93 244.93 0 01-186.87 17.5A242.51 242.51 0 0141.65 374.52a242 242 0 01-10.08-228.79l-6.63 43.6a164.58 164.58 0 0089.72 171.18l58.48 29a164.1 164.1 0 00167.31-12.71 161.11 161.11 0 0023.17-19.67l45.81-46.7a164.29 164.29 0 0028.14-191.07L411.35 69c20.73 18 38.59 41.1 51.85 65.55a239.74 239.74 0 0128.38 92.84q1.1 11.5 1.09 23.08z"
                    opacity="0.5"
                ></path>
                <path 
                    fill={stroke} 
                    d="M250 500C112.15 500 0 387.85 0 250S112.15 0 250 0s250 112.15 250 250-112.15 250-250 250zm0-485.27C120.27 14.73 14.73 120.28 14.73 250S120.27 485.27 250 485.27 485.27 379.73 485.27 250 379.73 14.73 250 14.73z"
                ></path>
            </svg>
        </div>
    );
};

Hail.propTypes = {
    size: PropTypes.number,
    stroke: PropTypes.string,
    colorHail: PropTypes.string
};

Hail.defaultProps = {
    size: 100,
    stroke: '#121212',
    colorHail: '#adfffa'
};

export default Hail;
