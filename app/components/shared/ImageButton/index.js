import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
export default function ImageButton(props) {
  const { image, text } = props;
  return (
    <TouchableOpacity style={styles.touchable}>
      <View>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 64,
    height: 64,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#4F42D8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: 'stretch',
  },
});
