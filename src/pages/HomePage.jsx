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
          <text className='containerOneText'>
            DARING TO BE DIFFERENT.
          </text>
        </div>

        <div className="ContainerTwo">
          <div className='ContainerTwoContent'>

            <div className='ContentLeft'>
              <div className='contentLeftTitleContainer'>
                <text className='contentLeftTitle'>
                  SAG HALLO!<br />
                  WIR FREUEN UNS AUF DEINE ANFRAGE!
                </text>
              </div>
              <div className='contentLeftTextContainer'>
                <text className='contentLeftText'>
                  Unser Horizont ist keine Linie, sondern 360 Grad – damit aus Projekten Welten werden. Wir wagen uns auf Wege, bevor sie existieren. Durch VR/AR-App Programmierung, UX/UI-Design Projekten, innovative Konzepte und interaktive Ausstellungsdesigns haben wir unsere Expertise für hochkarätige Kunden eingebracht.
                </text>
              </div>
            </div>

            <div className='contentRight'>
              <QRCode />
              <div className='buttonContainer'>
                <button>
                  Button Text
                </button>
              </div>

            </div>

          </div>
        </div>

        <div className="ContainerThree">
          <div className='ContainerThreeContent'>

            <div className='contentTop'>
              <div className='contentTopTitleContainer'>
                <text className='contentTopTitle'>
                  AGENTUR FÜR DIGITALE<br />
                  KOMMUNIKATION UND DESIGN
                </text>
              </div>
              <div className='contentTopTextContainer'>
                <text className='contentTopText'>
                  COSALUX ist eine inhabergeführte Agentur für digitale Kommunikation und Design. Seit 2009 konzipieren und entwickeln wir aus Leidenschaft kreative und innovative Lösungen für unterschiedliche Branchen und Industrien.<br /> <br /> Wir transformieren „Zukunft” in Design und wissen, dass Digital ein anderes Wort für Emotion ist und Technologie für Neugier steht. Wir geben Produkten die Form zu sprechen und regen die Intelligenz zu interagieren an. Wir verstehen, dass Anders besser ist.<br /> <br /> We are DARING TO BE DIFFERENT.
                </text>
              </div>



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
    </div >
  );
}

export default HomePage;



// https://apps.apple.com/app/whatsapp/id310633997

// https://play.google.com/store/apps/details?id=com.whatsapp



// http://tiny.cc/li3ivz
