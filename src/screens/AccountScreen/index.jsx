import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '~/elements/Button';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>account screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default AccountScreen;
