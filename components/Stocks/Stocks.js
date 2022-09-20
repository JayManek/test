import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import InfoCard from './InfoCard';

const STOCKS_DATA = [
  {
    name: 'Bank Nifty',
    value: 33520.7,
    increment: 146.75,
    percentIncrement: 1.3,
  },
  {
    name: 'Nifty 50',
    value: 16370.4,
    increment: 146.75,
    percentIncrement: 1.3,
  },
  {
    name: 'Sensex',
    value: 16370.4,
    increment: 146.75,
    percentIncrement: 1.3,
  },
  {
    name: '#Bank Nifty',
    value: 33520.7,
    increment: 146.75,
    percentIncrement: 1.3,
  },
  {
    name: '#Nifty 50',
    value: 16370.4,
    increment: 146.75,
    percentIncrement: 1.3,
  },
  {
    name: '#Sensex',
    value: 16370.4,
    increment: 146.75,
    percentIncrement: 1.3,
  },
];

function Stocks({style}) {
  function renderStocks({item}) {
    return (
      <InfoCard
        name={item.name}
        value={item.value}
        increment={item.increment}
        percentIncrement={item.percentIncrement}
      />
    );
  }
  return (
    <View style={[styles.container, style]}>
      <FlatList
        horizontal
        data={STOCKS_DATA}
        renderItem={renderStocks}
        keyExtractor={item => item.name}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

export default Stocks;
