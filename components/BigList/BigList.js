import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

function BigList({style, compartmentTitle, children}) {
  return <ScrollView style={styles.list}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 15,
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
  },
});

export default BigList;
