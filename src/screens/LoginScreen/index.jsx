import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Button from '~/elements/Button';

import './locales';

const LoginScreen = ({ navigation }) => {

  const { t } = useTranslation('LoginScreen');
  return (
    <View>
      <Text>{t('Log In')}</Text>
      <Button title={t('Log In')} onPress={() => { navigation.navigate('MainDrawer') }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
