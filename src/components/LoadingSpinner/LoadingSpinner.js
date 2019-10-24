import React from 'react'
import img from "../../loader.jpg";

const LoadingSpinner = () => {
    return(
        <div>
            <img className={"loader"} src={img} alt="https://www.youtube.com/watch?v=S-6iGkDYEPMerror"/>
        </div>
    )
};
export default LoadingSpinner