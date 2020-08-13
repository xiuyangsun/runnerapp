import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '~/elements/Button';
import { useTranslation } from 'react-i18next';

import './locales';

const SettingsScreen = ({ navigation }) => {

  const { t, i18n } = useTranslation('SettingsScreen');

  const onChinesePress = async () => {
    try {
      await i18n.changeLanguage('zh_HK');
      Alert.alert('success', 'success');
    } catch (error) {
      Alert.alert('error', 'error');
    }

  };

  const onEnglishPress = async () => {
    try {
      await i18n.changeLanguage('en')
      Alert.alert('success', 'success');
    } catch (error) {
      Alert.alert('error', 'error');
    }
  }

  return (
    <View style={styles.container}>
      <Button title={t('Chinese')} onPress={onChinesePress}></Button>
      <Button title={t('English')} onPress={onEnglishPress}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default SettingsScreen;
