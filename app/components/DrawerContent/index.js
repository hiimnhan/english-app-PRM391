/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Paragraph,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Colors from '../../assets/styles/colors';
import { AuthContext } from '../Context';

const index = (props) => {
  const { signOut } = useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: Colors.white,
      }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ size, color }) => (
                <EntypoIcon
                  name="bar-graph"
                  color={color}
                  size={size}
                />
              )}
              label="Level"
              onPress={() => {
                props.navigation.navigate('Screen1');
              }}
            />
            <DrawerItem
              icon={({ size, color }) => (
                <EntypoIcon
                  name="v-card"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Screen2');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size, color }) => (
            <EntypoIcon
              name="log-out"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => signOut()}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    flexDirection: 'row',
    marginTop: 15,
  },
  userInfo: {
    top: '-2%',
    marginLeft: 15,
    flexDirection: 'column',
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default index;
