import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

const buttonContainer = props => {
  return (
    <View style={{ ...props.style, ...styles.container }}>
      <TouchableHighlight>
        {props.children}
      </TouchableHighlight>
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
