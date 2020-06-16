import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from '../../../assets/styles/colors';

const levelList = ['low', 'medium', 'high'];
const levelColor = [colors.greenNormal, colors.yellow, colors.red];
export default function Dropdown(props) {
  const { items } = props;
  const [selectedValue, setSelectedValue] = useState('low');
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const renderBackgroundColorButton = value =>
    levelColor[levelList.indexOf(value)];
  return (
    <View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          width: 130,
          height: 30,
          backgroundColor: renderBackgroundColorButton(selectedValue),
        }}
        onPress={() => setIsShowDropdown(isShowDropdown => !isShowDropdown)}>
        <Text style={styles.levelText}>{selectedValue.toUpperCase()}</Text>
      </TouchableOpacity>
      {isShowDropdown && (
        <FlatList
          style={styles.dropdownList}
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedValue(item.value)}
              style={styles.dropdownOption}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  levelText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  dropdownList: {
    width: 130,
    height: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    marginBottom: 10,
  },
  dropdownOption: {
    alignSelf: 'center',
    padding: 2,
    fontWeight: '400',
    color: colors.grayText,
    fontSize: 16,
  },
});
