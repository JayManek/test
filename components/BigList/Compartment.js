import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import WatchListCard from './WatchListCard';

const HORIZONTAL_DATA = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

function Compartment({title}) {
  function Cards(itemData) {
    return <WatchListCard />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={HORIZONTAL_DATA}
        keyExtractor={item => item.id}
        renderItem={Cards}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});

export default Compartment;
