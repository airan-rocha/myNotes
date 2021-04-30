import React, {useState, useLayoutEffect} from 'react';
import {
  LogBox,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../styles/Colors';

import {saveEntry, deleteEntry} from '../../Banco/Entries/EntryNota';

const Entry = ({route, navigation}) => {
  const {entry} = route.params;

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const [id, setId] = useState(entry.id);
  const [titulo, setTitulo] = useState(entry.title);
  const [nota, setNota] = useState(entry.noteText);

  //altera o nome da tela
  useLayoutEffect(() => {
    navigation.setOptions({
      title: id === '' ? 'Adicionar Nota' : 'Minha Nota',
    });
  }, [navigation, id]);

  //id title noteText
  const onSaveEntry = async () => {
    const data = {id: id, title: titulo, noteText: nota};
    console.log('onSaveEntry em Entry: ', data);
    await saveEntry(data);
    onClose();
  };
  const onDeleteEntry = async () => {
    await deleteEntry(entry);
    onClose();
  };
  const onClose = () => {
    navigation.navigate('Main', {});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Título:</Text>
      <TextInput
        style={styles.tituloInput}
        onChangeText={setTitulo}
        value={titulo}
      />
      <Text style={styles.notaText}>Nota:</Text>
      <TextInput
        style={styles.notaInput}
        multiline={true}
        onChangeText={setNota}
        value={nota}
      />
      <TouchableOpacity
        style={[styles.btSave, id === '' ? {right: 20} : {}]}
        onPress={() => {
          onSaveEntry();
        }}>
        <Icon name="save" size={30} color={Colors.white} />
      </TouchableOpacity>
      {entry.id !== '' && (
        <TouchableOpacity
          style={styles.btDelete}
          onPress={() => {
            onDeleteEntry();
          }}>
          <Icon name="trash" size={30} color={Colors.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flex: 1,
  },
  tituloText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  tituloInput: {
    marginBottom: 15,
    backgroundColor: Colors.yellowOpaco,
    borderRadius: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  notaText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  notaInput: {
    flex: 1,
    textAlignVertical: 'top',
    backgroundColor: Colors.yellowOpaco,
    borderRadius: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  btSave: {
    backgroundColor: Colors.turqueseDark,
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 90,
    top: 65,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  btDelete: {
    backgroundColor: Colors.turqueseDark,
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    top: 65,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
