import React from 'react';
import "../style/homepage.css";
import Display from "../pages/display"

const homepage = () => {
    return (
        <div className='container'>
            <div className='heading'>
                <h1>Generate a <br /><span> Random Password</span></h1>
            </div>
            <Display />
        </div>
    )
}

export default homepage;
