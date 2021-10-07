import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  // test coordinates
  const coords = { lat: 59.95, lng: 30.33 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDqkv6tAtVi5Npq4yNSuit75OlBkKjFpd4' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      />
      <h1>Map</h1>
    </div>
  );
};

export default Map;
