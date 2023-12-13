// JSX code (HomePage.js)
import React from 'react';
import './HomePage.css';
import QRCode from '../components/QRCode';

const HomePage = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1 className="header-title">COSALUX</h1>
      </header>



      <div className="container-wrapper">
        <div className="ContainerOne">
          <text className='ContainerOneText'>
            DARING TO BE DIFFERENT
          </text>
        </div>

        <div className="ContainerTwo">
          <div className='ContainerTwoContent'>
            <div className='ContentLeft'>
              <text>SAG HALLO! WIR FREUEN UNS AUF DEINE ANFRAGE!</text>
              <br />
              <text>
                Unser Horizont ist keine Linie, sondern 360 Grad – damit aus Projekten Welten werden. Wir wagen uns auf Wege, bevor sie existieren. Durch VR/AR-App Programmierung, UX/UI-Design Projekten, innovative Konzepte und interaktive Ausstellungsdesigns haben wir unsere Expertise für hochkarätige Kunden eingebracht.
              </text>
            </div>
            <div className='ContentRight'>
              <QRCode />
              <button>
                button text
              </button>
            </div>
          </div>
        </div>

        <div className="ContainerThree">
          <div className='ContainerThreeContent'>
            <div className='ContentTop'>
              <text>AGENTUR FÜR DIGITALE KOMMUNIKATION UND DESIGN</text>
              <br />
              <text>Top Content</text>
            </div>

            <div className='ContentMiddle'>
              <text>Mid Content</text>
            </div>

            <div className='ContentBottom'>
              <text>Bottom Content</text>
            </div>


          </div>
        </div>
      </div>

      <footer className="footer">
        footer
        {/* Footer Content */}
      </footer>
    </div>
  );
}

export default HomePage;



// https://apps.apple.com/app/whatsapp/id310633997

// https://play.google.com/store/apps/details?id=com.whatsapp



// http://tiny.cc/li3ivz
