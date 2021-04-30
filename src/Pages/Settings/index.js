import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const settings = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
        Settings em Construção
      </Text>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
