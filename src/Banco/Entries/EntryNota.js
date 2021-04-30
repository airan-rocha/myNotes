import getRealm from '../Realm';
import {getUuid} from '../Uuid';
import {Alert} from 'react-native';

export const getEntry = async () => {
  const realm = await getRealm();
  const entry = realm.objects('Entry');
  // console.log('getEntry: ', entry);
  return entry;
};

export const saveEntry = async (entry = {}) => {
  const realm = await getRealm();
  let data;
  try {
    console.log(entry);
    realm.write(() => {
      data = {
        id: entry.id || getUuid(),
        title: entry.title,
        noteText: entry.noteText,
        date: Date(),
      };
      realm.create('Entry', data, true);
      console.log('EntryNotas :: saveEntry() :', data);
    });
  } catch (error) {
    console.error('Erro ao tentar salvar no bd: ', error);
    Alert.alert('Ops!', 'Erro ao salvar dados');
  }
};

export const deleteEntry = async (entry = {}) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    console.error('Erro ao tentar deletar bd: ', error);
    Alert.alert('Ops!', 'Erro a nota não foi deletada');
  }
};
