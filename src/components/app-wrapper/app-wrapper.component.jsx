import React from 'react';
import './app-wrapper.css'

export function AppWrapper ({ children }) {
    return (<div className="wrapper">
        <div className="card-frame">
        { children }
        </div> 
     </div>
        );
};
