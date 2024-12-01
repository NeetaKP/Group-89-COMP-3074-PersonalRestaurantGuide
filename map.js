import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const { point } = route.params;

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: point.latitude,
        longitude: point.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={{ latitude: point.latitude, longitude: point.longitude }} />
    </MapView>
  );
};

export default MapScreen;
