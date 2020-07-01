/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const buttonContainer = props => {
  return (
    <View>
      <TouchableOpacity
        {...props}
        style={{ ...props.style, ...styles.container }}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 43,
    width: '67%',
    borderRadius: 20,
    marginVertical: 7,
    elevation: 2,
  },
});

export default buttonContainer;
