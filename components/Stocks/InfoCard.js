import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function InfoCard({name, value, increment, percentIncrement}) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.nameAndValue}>
        <Text>{name}</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <Text style={styles.increment}>
        +{increment.toFixed(2)} ({percentIncrement.toFixed(2)}%)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 12,
    margin: 4,
    minWidth: 165,
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 6,
  },
  nameAndValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  valueText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  increment: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default InfoCard;
