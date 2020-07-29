// import liraries
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';
import Colors from '../../../assets/styles/colors';
import Loading from '../../../assets/images/Loading.png';
import E from '../../../assets/images/E.png';

// create a component
const index = () => {
  return (
    <View style={styles.loading}>
      <View style={styles.loadingBigContainer}>
        <View style={styles.imageContainer}>
          <Animatable.Image
            animation="wobble"
            duration={2375}
            source={E}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>
        <View style={styles.loadingContainer}>
          <View style={styles.loadingSection}>
            <View style={styles.loadingText}>
              <Image
                source={Loading}
                style={styles.loadingTextImage}
              />
            </View>
            <Animatable.View
              style={styles.loadingImage}
              animation="bounceInUp"
              duration={1500}
            >
              <ActivityIndicator
                size="medium"
                color={Colors.pink}
              />
            </Animatable.View>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingVertical: '50%',
  },
  loadingBigContainer: {
    flex: 1,
    left: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  imageContainer: {
    flex: 3,
    left: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 8,
    right: '5%',
  },
  loadingSection: {
    flex: 1,
  },
  loadingImage: {
    flex: 1,
    bottom: '15%',
    right: '5%',
    margin: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.lightPink,
  },
  loadingText: {
    flex: 1,
    top: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15%',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  loadingTextImage: {
    width: '70%',
    height: '70%',
  },
});

// make this component available to the app
export default index;
