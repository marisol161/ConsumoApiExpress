import React from 'react';
import '../../scss/SmallBanner.scss';

const SmallBanner = ({ usuarioPrincipal }) => {
    return (
        <div className="small-banner">
            <h2>{usuarioPrincipal}</h2>
            <h3>Mis amigos</h3>
        </div>
    );
};

export default SmallBanner;
