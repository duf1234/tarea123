'use strict';

const e = React.createElement;
//aq e colocado todo lo relacionado a la aplicacion para analizar los marcadores
class AF extends React.Component {

  render() {

    return (
      <div>
        <a-scene embedded arjs='sourceType: webcam;'>
       		<a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
       		<a-marker-camera preset='hiro'></a-marker-camera>
     	  </a-scene>
      </div>
    );
  }
}

const domContainer = document.querySelector('#marker');
ReactDOM.render(e(AF), domContainer);