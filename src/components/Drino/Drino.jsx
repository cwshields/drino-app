import React from 'react'
import DrinoNavbar from '../Navbar/DrinoNavbar'
import '../../assets/scss/App.scss'
import '../../assets/scss/drino.scss'
import logo from '../../assets/images/Drino-Logo.png'
import mobile1 from '../../assets/images/mobile1.png';

export default function Drino() {
  return (
    <div className='drino'>
      <DrinoNavbar className=''></DrinoNavbar>
      <header className=''>

      </header>
      <main>
        <div className="drino-container">
          <div className="box">
            <div className="sect1-wrap">
              <div className="sect1-logo-wrap">
                <img className="sect1-logo" src={logo} alt="Drino Logo" />
                <div className="sect1-logo-name">Drino</div>
              </div>
              <div className="sect1-subtext">
                Everything you need. All in one.
              </div>
              <div className="sect1-text">
                “You have to see failure as the beginning and the middle, but never entertain it as the end.”
              </div>
              <div className="sect1-name">
                - Jessica Herrin
              </div>
            </div>
            <div className="sect2">
              <img className="sect2-img" src={mobile1} alt="mobile1"/>
              <div className="sect2-text">The greatest humanity has to offer, in the palm of your hand.</div>
            </div>
          </div>
          <footer>

          </footer>
        </div>
      </main>
    </div>
  );
}