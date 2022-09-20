import React from 'react';
import {Pressable, View, Text, StyleSheet, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

function WatchListCard() {
  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? [styles.outerContainer, styles.pressed]
          : styles.outerContainer
      }>
      <Text style={styles.titleText}>Rise of Internet</Text>
      <Text style={styles.descriptionText}>
        A watchlist of top internet companies that have been growing rapidly
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.incrementContainer}>
          <Text style={styles.incrementText1}>+21.20% </Text>
          <Text>(3Y)</Text>
        </View>
        <View style={styles.bookmarkContainer}>
          <Ionicons name="bookmarks-outline" size={18} color="black" />
          <Text style={styles.bookmartText}> 100+ watchlisted</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 5,
    maxWidth: 0.7 * windowWidth,
    marginRight: 15,
    padding: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionText: {
    marginVertical: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  incrementContainer: {
    flexDirection: 'row',
  },
  incrementText1: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookmarkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookmartText: {
    color: 'black',
  },
});

export default WatchListCard;
