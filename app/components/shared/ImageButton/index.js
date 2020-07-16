import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import colors from '../../../assets/styles/colors';

export default function ImageButton(props) {
  const { image, imageStyle, containerStyle } = props;
  return (
    <TouchableOpacity
      style={
        !props.disabled
          ? [styles.touchable, containerStyle]
          : [styles.touchable, containerStyle, styles.disableButton]
      }
      {...props}
      activeOpacity={1}>
      <View>
        <Image source={image} style={[styles.image, imageStyle]} />
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
    backgroundColor: colors.white,
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
    borderRadius: 30,
  },
  disableButton: {
    backgroundColor: colors.gray,
  },
});
