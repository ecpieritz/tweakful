import React from 'react'
import GoogleMapReact from 'google-map-react'

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -26.901308,
      lng: -48.649326
    },
    zoom: 16
  };

  return (
    <section className='tf-map section mb-5'>
    <div className='container-fluid' style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <p
          lat={-26.901308}
          lng={-48.649326}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </section>
  );
}
