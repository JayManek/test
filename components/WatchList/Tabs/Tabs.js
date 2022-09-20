import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from './CustomButton';

const TAB_DATA = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

function Tabs() {
  const [selectedId, setSelectedId] = useState(1);

  function watchListRender(itemData) {
    let setId = selectedId;

    function selectionHandler() {
      setSelectedId(itemData.item.id);
      setId = selectedId;
    }
    return (
      <CustomButton
        id={itemData.item.id}
        onPress={selectionHandler}
        selected={setId === itemData.item.id}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={TAB_DATA}
        keyExtractor={item => item.id}
        renderItem={watchListRender}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Entypo
        name="dots-three-vertical"
        color="black"
        size={24}
        style={styles.entypo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  entypo: {
    marginHorizontal: 10,
  },
});

export default Tabs;
