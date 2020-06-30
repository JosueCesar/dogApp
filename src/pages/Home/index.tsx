import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import FoodMarker from '../../components/FoodMarker';

interface InitialPosition {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Home: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<InitialPosition>();

  useEffect(() => {
    const loadInitialPosition = async () => {
      const { granted } = await requestPermissionsAsync();

      if(granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setInitialPosition({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MapView style={{width: '100%', height: '100%'}} initialRegion={initialPosition}>

        <FoodMarker 
          address='Rua Caiapó, 546. Vila Nova.'
          coords={{latitude: -16.959499, longitude: -51.808625}}
        />
        
        <FoodMarker 
          address='Rua 5 de março, 174. Centro.'
          coords={{latitude: -16.954169, longitude: -51.811870}}
        />

      </MapView>
    </View>
  );
};

export default Home;