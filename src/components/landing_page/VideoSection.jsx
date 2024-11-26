import React from 'react';
import './VideoSection.css'; // Importa el archivo de estilos para esta sección
import playbutton from '../../assets/playbutton.jpg';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-content">
        <p className="video-description">
          'a lil video section that is yet to be made'
        </p>
      <img className="video-button" src ={playbutton}></img>

      </div>
    </section>
  );
};

export default VideoSection;
