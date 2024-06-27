import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonPerfil = ({ to, children }) => {
  const navigate = useNavigate();

  return (
    <button className='button' onClick={() => navigate(to)}>
      {children}
    </button>
  );
};

export default ButtonPerfil;
