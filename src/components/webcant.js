import React, { useState } from 'react';
import { AFrameRenderer, Marker } from 'react-web-ar';
import firebase from '../Firebase';

export default function webcant (){  

  return (
    <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
      
      <Marker parameters={{
          preset: "pattern",
          type: "pattern",
          url: "https://raw.githubusercontent.com/JoseToala/laboratorios/src/master/src/components/Patts/LAB1.patt"
        }}>
          <a-text
            rotation="-100 0 0"
            color="#000EFF"
            height="2.5"
            width="2.5"
            position="-0.5 0.1 0"
          />
      </Marker>
    </AFrameRenderer>
  )
}
