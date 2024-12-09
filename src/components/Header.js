import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Order</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFC0CB',
    padding: 20,
    alignItems: 'center',
    marginTop: 50, 
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
