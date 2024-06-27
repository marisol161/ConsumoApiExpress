import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';

const Amigos = ({ idAmigo1 }) => {
  const [amigosData, setAmigosData] = useState([]);
  const [usuarioPrincipal, setUsuarioPrincipal] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/amigos/amistad/${idAmigo1}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAmigosData(data.amigos || []);

        if (data.amigos.length > 0) {
          const idAmigo2 = data.amigos[0].id_amigo2;
          fetch(`http://localhost:3000/api/v1/amigos/detalle_amistad/${idAmigo1}/${idAmigo2}`)
            .then(response => response.json())
            .then(detailData => {
              if (detailData.amigos && detailData.amigos.length > 0) {
                setUsuarioPrincipal(detailData.amigos[0].amigo1);
              }
            })
            .catch(error => console.error('Error fetching usuario principal data:', error));
        }
      })
      .catch(error => console.error('Error fetching amigos data:', error));
  }, [idAmigo1]);

  const handleVerPerfil = (idAmigo2) => {
    navigate(`/detalle-amigo/${idAmigo1}/${idAmigo2}`);
  };

  return (
    <div>
      <Banner 
        header={usuarioPrincipal}
        amigos={amigosData}
        onVerPerfil={handleVerPerfil}
      />
    </div>
  );
}

export default Amigos;
