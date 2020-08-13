import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '~/screens/HomeScreen';
import AccountScreen from '~/screens/AccountScreen';
import AboutScreen from '~/screens/AboutScreen';
import SettingsScreen from '~/screens/SettingsScreen';
import { useTranslation } from 'react-i18next';

import './locales';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  const { t } = useTranslation('SettingsScreen');

  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ drawerLabel: t('Home') }} />
      <Drawer.Screen name="AccountScreen" component={AccountScreen} options={{ drawerLabel: t('Account') }} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ drawerLabel: t('Settings') }} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} options={{ drawerLabel: t('About') }} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainDrawer;
