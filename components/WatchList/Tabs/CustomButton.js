import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

function CustomButton({id, onPress, selected}) {
  return (
    <Pressable
      onPress={onPress}
      style={selected ? styles.selectedButton : styles.container}>
      <Text style={selected ? styles.selectedText : null}>WatchList {id} </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 24,
    padding: 12,
    marginHorizontal: 4,
  },
  selectedButton: {
    backgroundColor: 'black',
    borderRadius: 24,
    padding: 12,
    marginHorizontal: 4,
  },
  selectedText: {
    color: 'white',
  },
});

export default CustomButton;
