import React from 'react';

import FoodMarkerIcon from '../../assets/marker.png';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Marker, Callout } from 'react-native-maps';

interface MarkerProps {
  address?: string;
  coords: {
    latitude: number;
    longitude: number;
  };
}

const FoodMarker: React.FC<MarkerProps> = ({coords, address, children}) => {
  return (
    <Marker coordinate={{latitude: coords.latitude, longitude: coords.longitude}}>
      <Image source={FoodMarkerIcon} style={{width: 50, height: 50}} />
      <Callout onPress={() => {}} style={{minWidth: 200}}>
        <View>
          {address ? <Text>{address}</Text> : null}
          <Text>Água e ração</Text>
          <TouchableOpacity>
            <Text style={{color: '#00F'}}>Marcar localização no GPS</Text>
          </TouchableOpacity>
          {children}
        </View>
      </Callout>
    </Marker>
  );
};

export default FoodMarker;