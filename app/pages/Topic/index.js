import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Dropdown from '../../components/shared/Dropdown';
import ImageButton from '../../components/shared/ImageButton';
import colors from '../../assets/styles/colors';
// import result from './mockData';
import mockLevel from './level.json';
export default function Topic() {
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
      title: 'Computer',
      value: 'computer',
      image: require('../../assets/images/computer.png'),
    },
    {
      id: 5,
      title: 'Jobs',
      value: 'job',
      image: require('../../assets/images/job.png'),
    },
    {
      id: 6,
      title: 'Hobbies',
      value: 'hobby',
      image: require('../../assets/images/hobby.png'),
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

  console.log(result[0].title);

  return (
    <View style={styles.container}>
      <View style={styles.dropdown}>
        <Dropdown items={mockLevel.level} />
      </View>
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
              <ImageButton image={item.image} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    width: 130,
    height: 30,
    marginTop: 400,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  imageHeader: {
    marginTop: 100,
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
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
