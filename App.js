import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Stocks from './components/Stocks/Stocks';
import WatchList from './components/WatchList/WatchList';
import BigList from './components/BigList/BigList';
import Compartment from './components/Compartments/Compartment';

function App() {
  return (
    <ScrollView style={styles.rootContainer}>
      <Stocks />
      <WatchList />
      <BigList>
        <Compartment title="Curated watchlists for you" />
        <Compartment title="Trending Intraday Trades" />
      </BigList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
