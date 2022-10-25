import React from 'react';
import actia from '../../assets/images/actia.png'
import cetem from '../../assets/images/cetem.png'
import eniso from '../../assets/images/eniso.png'
import hopitalMilitaire from '../../assets/images/hopitalMilitaire.jpg'
import ministereDeSante from '../../assets/images/ministereDeSante.png'
import novationCity from '../../assets/images/novationCity.jpg'
import ordreNationaldesMedecins from '../../assets/images/ordreNationaldesMedecins.jpg'
import sofap from '../../assets/images/sofap.jpg'
import unimed from '../../assets/images/unimed.png'
import enim from '../../assets/images/enim.png'
import medecineSfax from '../../assets/images/medecineSfax.jpg'

const Investors = () => {
    return (
        <div>
            <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src={actia}
              className="investorImage"
              style={{ marginTop: '20%', marginBottom: '20%', height: '30%' }}
            />
          </div>
          <div className="col-2">
            <img
              src={cetem}
              className="investorImage"
              style={{ height: '150px' }}
            />
          </div>
          <div className="col-2">
            <img src={enim} className="investorImage" />
          </div>
          <div className="col-2">
            <img
              src={eniso}
              className="investorImage"
              style={{ height: '150px' }}
            />
          </div>
          <div className="col-2">
            <img
              src={hopitalMilitaire}
              className="investorImage"
              style={{ height: '150px' }}
            />
          </div>
          <div className="col-2">
            <img
              src={medecineSfax}
              className="investorImage"
              style={{ marginTop: '10%', marginBottom: '20%', height: '60%' }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <img
              src={ministereDeSante}
              className="investorImage"
              style={{ height: '150px' }}
            />
          </div>
          <div className="col-2">
            <img src={novationCity} className="investorImage" />
          </div>
          <div className="col-2">
            <img src={ordreNationaldesMedecins} className="investorImage" />
          </div>
          <div className="col-2">
            <img
              src={sofap}
              className="investorImage"
              style={{ marginTop: '10%', marginBottom: '20%', height: '60%' }}
            />
          </div>
          <div className="col-2">
            <img
              src={unimed}
              className="investorImage"
              style={{ marginTop: '10%', marginBottom: '20%', height: '60%' }}
            />
          </div>
        </div>
      </div>
        </div>
    );
}

export default Investors;
