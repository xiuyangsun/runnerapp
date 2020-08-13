import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import './locales';

const HomeScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation('HomeScreen');
  return (
    <View style={styles.container}>
      <Text>{t('Click')}</Text>
      <Ionicons name="ios-body" size={32} onPress={() => { navigation.openDrawer() }} />
      <MapView
        style={styles.map}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: 300,
    width: 300
  },
});

export default HomeScreen;
