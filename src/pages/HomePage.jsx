// JSX code (HomePage.js)
import React from 'react'
import './HomePage.css'
import QRCode from '../components/QRCode'


// tasks

// 4 format the anleitung as in design
// 5 add lines to anleitung
// 6 add media query to anleitung - below certain width steps go under each other

// 6 remove comments from css 
// 7 clean CSS 
// 8 clean JSX from useless divs
// 9 remove semicolons


const HomePage = () => {
  return (
    <div className='page-container'>
      <header className='header'>
        <text className='header-title'>COSALUX</text>
      </header>

      <div className='container-wrapper'>

        <div className='containerOne'>
          <text className='containerOneText'>
            DARING TO BE DIFFERENT.
          </text>
        </div>

        <div className='containerTwo'>
          <div className='containerTwoContent'>
            <div className='contentLeft'>
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

        <div className='containerThree'>
          <div className='containerThreeContent'>

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

            <div className='contentMiddle'>
              <div className='contentMiddleTop'>
                <text className='contentMiddleTopText'>ANLEITUNG</text>
              </div>
              <div className='contentMiddleBottom'>
                <div className='stepContainer'>
                  <text className='stepNumber'>1</text>
                  <text className='stepText'>QR -Code scannen<br /> oder Link klicken.</text>
                </div>
                <div className='stepContainer'>
                  <text className='stepNumber'>2</text>
                  <text className='stepText'>WhatsApp öffnet sich</text>
                </div>
                <div className='stepContainer'>
                  <text className='stepNumber'>3</text>
                  <text className='stepText'>Nachricht abschicken.</text>
                </div>

              </div>

            </div>


            <div className='contentTop'>
              <div className='contentTopTitleContainer'>
                <text className='contentTopTitle'>
                  ÜBER UNS
                </text>
              </div>
              <div className='contentTopTextContainer'>
                <text className='contentTopText'>
                  DARING TO BE DIFFERENT. <br />  <br />Das ist, woran wir glauben. Das ist was uns antreibt. Wir stechen heraus. Wir sind immer in Bewegung. Mit der Zeit und gegen den Strom. Wir glauben daran, dass Grenzen zum Überschreiten existieren. Wir denken, dass Mut und Herz neue Welten schaffen. Wir wissen, dass die Zukunft durch Träume geformt wird. Wir hoffen, etwas Bedeutendes zu hinterlassen.
                </text>
              </div>
            </div>


          </div>
        </div>
      </div>

      <footer className='footer'>
        <div className='footerItemsLeft'>
          <text className='footerItemLeft'>© COSALUX GmbH 2023</text>
        </div>
        <div className='footerItemsRight'>
          <text className='footerItem'>E info@cosalux.com</text>
          <text className='footerItem'>T +49 (0)69 – 860 07 22 – 660</text>
          <text className='footerItem'>F +49 (0)69 – 860 07 22 – 610</text>
        </div>






      </footer>
    </div >
  )
}

export default HomePage



