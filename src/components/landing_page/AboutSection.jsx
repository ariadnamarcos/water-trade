import React from 'react';
import './AboutSection.css'; // Importa el archivo de estilos para esta sección
import crypto from '../../assets/crypto.jpeg'

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <hr />
                <h2 className="about-title">our mission</h2>
                <h3 className="about-description">
                    We are aiming to build an ecosystem based on water preservation through trading.
                </h3>
                <p className="about-description">

                </p>
                <div className="coin-box">
                    <h3>AquaCoin</h3>
                    <div className="coin-box-content">
                        <p className="coin-info">Our proposal aims to implement a water credit system, modeled after the existing carbon credit system, to incentivize companies to save water by offering monetary compensation. This provides a more cost-effective solution compared to penalties for exceeding water use policies.
                            To support the efficiency of our idea, we can look at the impact of carbon emissions trading systems in reducing greenhouse gas (GHG) emissions:
                            The European Union Emissions Trading System (EU ETS) has led to a 35% reduction in emissions from the power and industrial sectors between 2005 and 2019, demonstrating the effectiveness of cap-and-trade mechanisms in curbing emissions.
                            In the U.S., California's cap-and-trade system helped reduce emissions by 8.6% from 2013 to 2020, allowing the state to meet its climate targets ahead of schedule.
                            The Regional Greenhouse Gas Initiative (RGGI) in the northeastern U.S. has resulted in a 45% reduction in power sector emissions since its inception in 2009, primarily through a cap-and-trade system.
                            These examples demonstrate that market-based systems like emissions trading can be highly effective in reducing resource use and environmental impact, offering a strong precedent for the success of a water credit system.</p>
                        <img src={crypto} className='about-image'></img>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutSection;
