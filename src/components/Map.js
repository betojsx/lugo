import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {colors} from '../shared/styles';
import {gstyles} from '../shared/styles';
import {MAP_STYLE, INITIAL_REGION, markers} from '../mocks/map';

const Map = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}
        initialRegion={INITIAL_REGION}
        customMapStyle={MAP_STYLE}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        onMapReady={() => {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
        }}>
        {markers.map((marker, index) => (
          <Marker
            coordinate={marker.coordinates}
            key={`marker-${index}`}
            image={require('../assets/images/marker.png')}
            title={marker.name}
          />
        ))}
      </MapView>
      <TouchableOpacity
        style={[gstyles.btn, styles.fixedBtn]}
        onPress={() => navigation.navigate('Scanner')}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Icon
            name="ios-qr-scanner"
            size={18}
            color="white"
            style={{marginRight: 8}}
          />
          <Text style={[gstyles.btnText]}>Scan my Code</Text>
        </View>
        <Text style={[gstyles.btnText]} />
      </TouchableOpacity>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  markerLabel: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 50,
    position: 'absolute',
    top: -5,
    right: -40,
  },
  markerLabelText: {
    color: 'white',
    fontSize: 14,
  },
  fixedBtn: {
    position: 'absolute',
    bottom: 35,
    left: Dimensions.get('window').width / 2 - 145 / 2,
    display: 'flex',
    alignItems: 'center',
  },
});
