import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export const Navigation = () => {
    return (
        <div>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/Help">About</Link></button>
            <button><Link to="/How">Contact</Link></button>
            
        </div>
    )
}