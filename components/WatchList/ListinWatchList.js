import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ListinWatchList() {
  return (
    <View style={styles.container}>
      <Ionicons name="bookmarks-outline" size={48} style={styles.icon} />
      <Text style={styles.watchlistText}>Your WatchList looks empty</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 75,
  },
  watchlistText: {
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    marginVertical: 5,
  },
});

export default ListinWatchList;
