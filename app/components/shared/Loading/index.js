import React from 'react';
import { StyleSheet } from 'react-native';
import { ColorDotsLoader } from 'react-native-indicator';
export default function Loading(...props) {
  return <ColorDotsLoader {...props} />;
}

const styles = StyleSheet.create({});
