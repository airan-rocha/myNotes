import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

const ListNotesItem = ({item, onNavigation}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => onNavigation(item)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ListNotesItem;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.yellowOpaco,
    padding: 10,
    marginVertical: 2,
    borderTopRightRadius: 10,
  },
});
