import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import './locales';

function AboutScreen() {
  const { t, i18n } = useTranslation('AboutScreen');
  return (
    <View style={styles.container}>
      <Text>{t('About')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default AboutScreen;
