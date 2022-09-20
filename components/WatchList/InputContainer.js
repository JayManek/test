import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function InputContainer() {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name="search-outline" size={14} />
      <TextInput
        placeholder="Search and add stocks"
        style={styles.inputStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 50,
  },
  inputStyle: {
    marginHorizontal: 10,
    backgroundColor: 'gainsboro',
    width: '95%',
    borderRadius: 18,
  },
});

export default InputContainer;
