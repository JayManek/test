import React from 'react';
import {View, StyleSheet} from 'react-native';
import Tabs from './Tabs/Tabs';
import ListinWatchList from './ListinWatchList';
import InputContainer from './InputContainer';

function WatchList({style}) {
  return (
    <View style={[styles.watchlistContainer, style]}>
      <Tabs />
      <ListinWatchList />
      <InputContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  watchlistContainer: {
    padding: 6,
  },
});

export default WatchList;
