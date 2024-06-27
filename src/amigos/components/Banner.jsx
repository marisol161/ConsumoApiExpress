import React from 'react';
import ImagenPerfil from '../components/ImagenPerfil.jsx';
import SmallBanner from '../components/SmallBanner.jsx';
import ButtonVer from '../components/ButtonVer.jsx';
import '../../scss/Banner.scss';

const Banner = ({ header, amigos, onVerPerfil }) => {
  return (
    <div className="banner">
      <SmallBanner usuarioPrincipal={header.nombre_usuario + ' ' + header.ape1 + ' ' + header.ape2} />
      <div className="banner__content">
        {amigos.map((amigo, index) => (
          <div className="profile-entry" key={index}>
            <ImagenPerfil src={amigo.amigo2.foto_perfil} />
            <span>{amigo.amigo2.nombre_usuario} {amigo.amigo2.ape1} {amigo.amigo2.ape2}</span>
            <ButtonVer onClick={() => onVerPerfil(amigo.id_amigo2)}>
               Ver más {/*{amigo.amigo2.nombre_usuario} */}
            </ButtonVer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
