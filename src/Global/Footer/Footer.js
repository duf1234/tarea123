// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Assets
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {

    return (
      <div className="container">
        <div className="row1">
        <div className="proyecto">
        <p>Redes Sociales  </p>
      </div>  
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                    <SocialIcon url="https://www.youtube.com/garciaa94"/>
              </li>
              <li className="list-inline-item">
                    <SocialIcon url="https://github.com/dufar1234"/>
              </li>
              <li className="list-inline-item">
                    <SocialIcon url="https://twitter.com/brayanmina"/>
              </li>
              <li className="list-inline-item">
                    <SocialIcon url="https://www.facebook.com/brayanmina"/>
              </li>
              <div className="proyecto">
              <p>Proyecto GRAFICA Y ANIMACIONES 6TO DE SISTEMAS Y COMPUTACION </p>
              <p></p>
              </div>
            </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;