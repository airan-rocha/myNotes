import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {getEntry} from '../../Banco/Entries/EntryNota';
import ListNotesItem from './ListNostesItem';

const ListNotes = ({onNavigation}) => {
  const [dataEntry, setdataEntry] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntry();
      setdataEntry(data);
      // console.log('\nEntryList :: useEffect', data);
    }
    loadEntries();
  }, []);

  //testando ordenação do array
  const eu = [
    {v: 12, n: 'b'},
    {v: 10, n: 'a'},
    {v: 13, n: 'c'},
  ];
  console.log(eu);
  eu.sort((x, y) => {
    return x.v - y.v;
  });

  console.log(eu);
  // fim do testando ordenação do array

  return (
    <View style={styles.container}>
      <FlatList
        data={dataEntry}
        renderItem={({item}) => (
          <ListNotesItem item={item} onNavigation={onNavigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListNotes;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
