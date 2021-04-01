import React from "react";
import "./RU.scss";

const Rubar = () => {
  return (
    <div className="rUbar">
      <div className="coposant">
        <div className="flexWrapperO">
          <p className="texttitle">PLANNING</p>
          <img className="texttitle"
            alt=""
            src="https://static.overlay-tech.com/assets/81721c30-5a0d-49e7-ae11-05d5c130b3d8.png"
          />
        </div>
        <div className="flexWrapperTwo">
          <div className="timeqagenda">
            <p className="num9am">9:00</p>
            <p className="num10am">10:00</p>
            <p className="num11am">11:00</p>
            <p className="num12am">12:00</p>
            <p className="num10am">13:00</p>
          </div>
          <div className="flexWrapperThree">
            <div className="caseup">
              <div className="coposant">
                <p className="rdv1">
                  Rendez-vous avec Paul Serge
                </p>
                <p className="sallea">
                  Salle A5 de l’agora (Lille)
                </p>
              </div>
            </div>
            <div className="casedown">
              <div className="coposant">
                <p className="rdv2">
                  Rendez-vous avec Richard Fabre
                </p>
                <p className="sallea">
                  Salle B5 de l’agora (Lille)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  };

export default Rubar;