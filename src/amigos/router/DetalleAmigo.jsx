import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.scss';
import '../../scss/BannerD.scss';
import ImagenPerfil from './../components/ImagenPerfil';
import ButtonPerfil from './../components/ButtonPerfil';

const DetalleAmigo = () => {
  const { id_amigo1, id_amigo2 } = useParams();
  const [detalleAmigo, setDetalleAmigo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/amigos/detalle_amistad/${id_amigo1}/${id_amigo2}`)
      .then(response => response.json())
      .then(data => {
        setDetalleAmigo(data.amigos[0] || null);
      })
      .catch(error => console.error('Error fetching amigo detail:', error));
  }, [id_amigo1, id_amigo2]);

  if (!detalleAmigo) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="detalle-amigo-container">
      <div className="banner">
        <div className="banner__content">
          <div className="profile-entries">
            <div className="profile-entry">
              <ImagenPerfil src={detalleAmigo.amigo1.foto_perfil} />
              <span>{detalleAmigo.amigo1.nombre_usuario} {detalleAmigo.amigo1.ape1} {detalleAmigo.amigo1.ape2}</span>
            </div>
            <div className="friendship-icon">
              <a href="https://i.ibb.co/BCh5Xqk/confianza3.png" target="_blank" rel="noopener noreferrer">
                <img src="https://i.ibb.co/BCh5Xqk/confianza3.png" alt="Ícono de amistad" />
              </a>
            </div>
            <div className="profile-entry">
              <ImagenPerfil src={detalleAmigo.amigo2.foto_perfil} />
              <span>{detalleAmigo.amigo2.nombre_usuario} {detalleAmigo.amigo2.ape1} {detalleAmigo.amigo2.ape2}</span>
            </div>
          </div>
          <div className="relationship-info">
            <span>Amigos</span><br/>
            <span>desde</span><br/>
            <span>{new Date(detalleAmigo.fecha_amistad).toLocaleDateString()}</span><br/>
          </div>
        </div>
      </div>
      <div className="profile-button-container">
        <ButtonPerfil to={`/detalle-amigo/${id_amigo1}/${detalleAmigo.amigo2.id_amigo2}`}>
          Ver perfil de {detalleAmigo.amigo2.nombre_usuario}
        </ButtonPerfil>
      </div>
    </div>
  );
};

export default DetalleAmigo;
