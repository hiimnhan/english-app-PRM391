/* eslint-disable arrow-parens */
/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { getFirstWordRequest } from '../../redux/actions/word.actions';
import ImageButton from '../../components/shared/ImageButton';
import colors from '../../assets/styles/colors';
import menuIcon from '../../assets/icons/menu.png';
import { connect } from 'react-redux';

function Topic({ navigation, getFirstWord }) {
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWQiOjIsInVzZXJuYW1lIjoic3RyaW5nIiwicm9sZSI6IlVTRVIiLCJleHAiOjE1OTU3NzkwOTd9.igfkQjyvh2StuG6fxJlEYGMlwdS0smo7V-fYtpqx4qU';
  const levelId = 1;
  const userId = 2;
  const result = [
    {
      id: 1,
      title: 'Food',
      value: 'food',
      image: require('../../assets/images/food.png'),
    },
    {
      id: 2,
      title: 'Sports',
      value: 'sport',
      image: require('../../assets/images/sport.png'),
    },
    {
      id: 3,
      title: 'Music',
      value: 'music',
      image: require('../../assets/images/music.jpg'),
    },
    {
      id: 4,
      title: 'Animals',
      value: 'animal',
      image: require('../../assets/images/animal.png'),
    },
    {
      id: 5,
      title: 'Jobs',
      value: 'job',
      image: require('../../assets/images/job.png'),
    },
    {
      id: 6,
      title: 'Flowers',
      value: 'flower',
      image: require('../../assets/images/flower.png'),
    },
    {
      id: 7,
      title: 'Criminals',
      value: 'criminal',
      image: require('../../assets/images/criminal.png'),
    },
    {
      id: 8,
      title: 'Business',
      value: 'business',
      image: require('../../assets/images/business.png'),
    },
    {
      id: 9,
      title: 'Space',
      value: 'space',
      image: require('../../assets/images/space.png'),
    },
  ];

  const handleClickTopicButton = async topicId => {
    await getFirstWord({
      accessToken,
      levelId,
      topicId,
      userId,
    });
    await navigation.navigate('Vocabulary');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => navigation.openDrawer()}>
        <Image style={styles.icon} source={menuIcon} />
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/idea.png')}
        style={styles.imageHeader}
      />
      <Text style={styles.text}>Which topic are you interested in?</Text>
      <View style={styles.topicWrapper}>
        <FlatList
          data={result}
          renderItem={({ item }) => (
            <View style={styles.topic}>
              <ImageButton
                image={item.image}
                onPress={() => handleClickTopicButton(item.id)}
              />
              <Text style={styles.topicTitle}>{item.title}</Text>
            </View>
          )}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    getFirstWord: params => dispatch(getFirstWordRequest(params)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Topic);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  menuIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    // adjust for Android.
    top: 12,
    left: 5,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  imageHeader: {
    marginTop: 400,
    width: 253,
    height: 190,
  },
  text: {
    marginTop: 40,
    fontSize: 24,
    color: colors.grayText,
    fontWeight: '600',
  },
  topicWrapper: {
    paddingTop: 20,
  },
  topic: {
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicTitle: {
    color: colors.grayText,
  },
});
