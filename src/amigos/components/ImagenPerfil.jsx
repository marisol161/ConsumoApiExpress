import React from 'react';
import '../../scss/ImagenPerfil.scss'; // Asegúrate de que los estilos estén importados

const ImagenPerfil = ({ src }) => {
  return (
    <div className="imagen-perfil">
      <img src={src} alt="Imagen de perfil" onError={(e) => e.target.style.display = 'none'} />
    </div>
  );
};

export default ImagenPerfil;
