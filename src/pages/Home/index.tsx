import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const Home: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MapView style={{width: '100%', height: '80%'}} />
    </View>
  );
};

export default Home;