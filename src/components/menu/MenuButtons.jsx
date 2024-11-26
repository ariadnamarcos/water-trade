import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuButtons.css';

const MenuButtons = () => {
    const navigate = useNavigate();

    return (
            <div className="menu-buttons">
                <button className="primary-btn" onClick={() => navigate('/simulation')}>
                    Explore the simulation
                </button>
                <button className="secondary-btn" onClick={() => navigate('/more-info')}>
                    More Information
                </button>
                <button className="third-btn" onClick={() => navigate('/contact')}>
                    Contact Form
                </button>
            </div>
    );
};

export default MenuButtons;
