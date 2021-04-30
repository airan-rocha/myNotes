import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListNotes from '../../Components/ListNotes';
import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  const [viewMenu, setviewMenu] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{paddingHorizontal: 15}}
            onPress={() => {
              viewMenu ? setviewMenu(false) : setviewMenu(true);
            }}>
            <Icon name="ellipsis-v" size={30} color={Colors.carbonDark} />
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.settings}
            onPress={() => navigation.navigate('Settings')}>
            <Icon name="cog" size={30} color={Colors.carbonDark} />
          </TouchableOpacity> */}
        </View>
      ),
    });
  }, [navigation, viewMenu]);

  const menuPrincipal = () => {
    return (
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => setviewMenu(false)}>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.itensMenu}
            onPress={() => {
              setviewMenu(false);
              // navigation.navigate('Settings');
            }}>
            <Text>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itensMenu, styles.supLineMenu]}
            onPress={() => {
              setviewMenu(false);
              navigation.navigate('Settings');
            }}>
            <Text>Configurações</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewListNotes}>
        <ListNotes
          onNavigation={entrada =>
            navigation.navigate('NewEntry', {entry: entrada})
          }
        />
      </View>
      <TouchableOpacity
        style={styles.btAdcionar}
        onPress={() => navigation.navigate('NewEntry')}>
        <Icon name="plus" size={30} color={Colors.white} />
      </TouchableOpacity>
      {viewMenu && menuPrincipal()}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  settings: {
    marginRight: 10,
  },
  container: {
    flex: 1,
  },
  btAdcionar: {
    backgroundColor: Colors.turqueseDark,
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 50,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  viewListNotes: {
    flex: 1,
    // marginTop: 20,
  },

  menuContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0,0,0, 0.6)',
  },
  menu: {
    width: 'auto',
    height: 'auto',
    backgroundColor: Colors.champagne,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    right: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  itensMenu: {
    paddingVertical: 10,
  },
  supLineMenu: {
    borderTopWidth: 1,
    borderColor: Colors.metal,
  },
});
